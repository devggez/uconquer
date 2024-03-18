'use client';
import { Button, Callout, CalloutIcon, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchmemas';
import { z } from "zod";
import { Text } from '@radix-ui/themes';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import delay from 'delay';

const SimpleMDE = dynamic(() =>  
    import('react-simplemde-editor'),
    {ssr: false}
);
type IssueForm = z.infer< typeof createIssueSchema>;

const newIssuePage = async () => {
    const router = useRouter();
    const { register, control, handleSubmit,formState: {errors} } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const [error, setError] = useState('');
    const [isSubmitting, setSubmitting]= useState(false);
    const onSubmit = handleSubmit (async (data) => {
        try {
            setSubmitting(true);
            await axios.post('/api/issues', data);
            router.push('/issues');
        } catch (error) {
            setSubmitting(false);
            setError("there is some problem in code")
        }
    
    })
    // await delay(500);
    return (
        <div className='max-w-xl'>
            <form
                className=' space-y-4'
                onSubmit={onSubmit}>

                <h1>New Issue page</h1>

                <TextField.Root>
                    <TextField.Input placeholder='title' {...register('title')} />
                </TextField.Root>
                <ErrorMessage>
                    { errors.title?.message }
                </ErrorMessage>
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder='Description' {...field} />}
                />
                <ErrorMessage>
                    {errors.description?.message}
                </ErrorMessage>


                <Button disabled={isSubmitting}>Submit new issue {isSubmitting && <Spinner></Spinner> } </Button>
            </form>
        </div>
    )
}

export default newIssuePage