import React from 'react'
import { Button, Table, TableRow } from "@radix-ui/themes";
import Link from 'next/link';
import prisma from '@/prisma/client';
import IssueStatusBadge from '../components/IssueStatusBadge';



const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div className='space-y-2'>
      <h1>IssuesPage</h1>
      <Button><Link href='/issues/new'>Add an issue</Link></Button>
      <div>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='hidden md:table-cell'>status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='hidden md:table-cell'>created</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map(issue => (
              <Table.Row key={issue.id}>
                <Table.Cell>{issue.title}
                  <div className='inline-block md:hidden ml-3'>
                    <IssueStatusBadge status={issue.status}></IssueStatusBadge>
                  </div>
                </Table.Cell>
                <Table.Cell className='hidden md:table-cell'>
                  <IssueStatusBadge status={issue.status}></IssueStatusBadge>
                </Table.Cell>
                <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  )
}

export default IssuesPage