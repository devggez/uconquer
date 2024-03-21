import React from 'react'
import { Skeleton } from '@/app/components'

const LoadingIssueCreate = () => {
  return (
    <div className='max-w-lg'>
      <Skeleton width="10rem"></Skeleton>
      <Skeleton width="20rem"></Skeleton>
      <Skeleton height="20rem"></Skeleton>
      <Skeleton width="5rem"></Skeleton>
    </div>
  )
}

export default LoadingIssueCreate