import { Skeleton } from '@/app/components'
import { Card, Flex, Heading } from '@radix-ui/themes'

const LoadingIssueDetailPage = () => {
  return (
    <div>
      <div className='space-y-4'>
            <Heading>
              <Skeleton width="10rem"></Skeleton>
            </Heading>
            <Flex className='space-x-3 ' my='2'>
                <Skeleton width="3rem"></Skeleton>
                <Skeleton width="5rem"></Skeleton>
            </Flex>
            <Card className='prose' mt="4">
              <Skeleton count={3}></Skeleton>
            </Card>
        </div>
    </div>
  )
}

export default LoadingIssueDetailPage