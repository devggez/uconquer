import { Status, Issue } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap: Record <Status, { label: string, color: 'red' | 'green' | 'violet' }> = {
    OPEN: {label: 'open', color: 'red'},
    IN_PROGRESS: { label: 'In Progress', color: 'violet' },
    CLOSED: { label: 'Close', color: 'green' }
}

const IssueStatusBadge = ({status} : {status: Status }) => {
  return (
    <div>
        <Badge color={statusMap[status].color}>
            {statusMap[status].label}
        </Badge>
    </div>
  )
}

export default IssueStatusBadge