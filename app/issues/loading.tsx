import React from 'react'
import Spinner from '../components/Spinner'
import { Table } from '@radix-ui/themes'
import IssueStatusBadge from '../components/IssueStatusBadge'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import IssuesAction from './IssuesAction'

const LodeingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5]
  return (
    <div className='space-y-3'>
      <IssuesAction></IssuesAction>

      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue}>
              <Table.Cell>
                <Skeleton></Skeleton>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <Skeleton></Skeleton>

              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><Skeleton></Skeleton></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default LodeingIssuesPage