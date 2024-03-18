import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import Prisma from '@/prisma/client'
import { Text, Flex, Heading, Card } from '@radix-ui/themes'
import delay from 'delay'
import { notFound } from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
    params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
    await delay(500);

    const issue = await Prisma.issue.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!issue) return notFound();

    return (
        <div className='space-y-4'>
            <Heading>{issue.title}</Heading>
            <Flex className='space-x-3 ' my='2'>
                <IssueStatusBadge status={issue.status}></IssueStatusBadge>
                <Text>{issue.createdAt.toDateString()}</Text>
            </Flex>
            <Card className='prose' mt="4"><ReactMarkdown>{issue.description}</ReactMarkdown></Card>
        </div>
    )
}

export default IssueDetailPage