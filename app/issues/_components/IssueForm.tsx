'use client';
import { Button, Callout, CalloutIcon, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { issueSchema } from '@/app/validationSchmemas';
import { z } from "zod";
import { ErrorMessage, Spinner } from "@/app/components";
import { Issue } from '@prisma/client';

const SimpleMDE = dynamic(() =>
    import('react-simplemde-editor'),
    { ssr: false }
);


type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = async ({ issue }: {issue?: Issue}) => {
    const router = useRouter();
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueFormData>({
        resolver: zodResolver(issueSchema)
    });
    const [error, setError] = useState('');
    const [isSubmitting, setSubmitting] = useState(false);
    const onSubmit = handleSubmit(async (data) => {
        try {
            setSubmitting(true);
            await axios.post('/api/issues', data);
            router.push('/issues');
        } catch (error) {
            setSubmitting(false);
            setError("there is some problem in code")
        }

    })

    return (
        <div className='max-w-xl'>
            <form
                className=' space-y-4'
                onSubmit={onSubmit}>

                <h1>New Issue page</h1>

                <TextField.Root>
                    <TextField.Input defaultValue={issue?.title} placeholder='title' {...register('title')} />
                </TextField.Root>
                <ErrorMessage>
                    {errors.title?.message}
                </ErrorMessage>
                <Controller
                    name="description"
                    control={control}
                    defaultValue={issue?.description}
                    render={({ field }) => <SimpleMDE placeholder='Description' {...field} />}
                />
                <ErrorMessage>
                    {errors.description?.message}
                </ErrorMessage>


                <Button disabled={isSubmitting}>Submit new issue {isSubmitting && <Spinner></Spinner>} </Button>
            </form>
        </div>
    )
}

export default IssueForm