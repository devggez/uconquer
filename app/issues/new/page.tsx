'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const newIssuePage = () => {
    return (
        <div className='max-w-xl space-y-4'>
            <h1>New Issue page</h1>
            <TextField.Root>
                <TextField.Input placeholder="title" />
            </TextField.Root>
            <TextArea placeholder="Description" />
            <Button>Submit new issue</Button>
        </div>
    )
}

export default newIssuePage