import { ContestStatus } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const contestStatusMap: Record <ContestStatus, { label: string, color: 'red' | 'green' | 'violet' }> = {
    CLOSED: {label: 'Closed', color: 'red'},
    RUNNING: { label: 'Running', color: 'green' },
    COMING: { label: 'Comeing', color: 'violet' }
}

const IssueStatusBadge = ({status} : {status: ContestStatus }) => {
  return (
    <div>
        <Badge color={contestStatusMap[status].color}>
            {contestStatusMap[status].label}
        </Badge>
    </div>
  )
}

export default IssueStatusBadge