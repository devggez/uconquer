'use client';
import { Button, Callout, CalloutIcon, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchmemas';
import { z } from "zod";
import { Text } from '@radix-ui/themes';

type IssueForm = z.infer< typeof createIssueSchema>;

const newIssuePage = () => {
    const router = useRouter();
    const { register, control, handleSubmit,formState: {errors} } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const [error, setError] = useState('');


    return (
        <div className='max-w-xl'>
            {error && (
            <Callout.Root color='red'>
                <Callout.Text> {error} </Callout.Text>
            </Callout.Root>
            )}
            <form
                className=' space-y-4'
                onSubmit={handleSubmit (async (data) => {
                    try {
                        await axios.post('/api/issues', data);
                        router.push('/issues');
                    } catch (error) {
                        setError("there is some problem in code")
                    }

                })}>

                <h1>New Issue page</h1>

                <TextField.Root>
                    <TextField.Input placeholder='title' {...register('title')} />
                </TextField.Root>
                {errors.title && <Text color="red" as='p' > {errors.title.message} </Text>}
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder='Description' {...field} />}
                />
                {errors.description && <Text color='red' as='p' >{errors.description.message}</Text>}


                <Button>Submit new issue</Button>
            </form>
        </div>
    )
}

export default newIssuePage