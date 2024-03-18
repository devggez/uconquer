import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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