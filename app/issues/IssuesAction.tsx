import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const IssuesAction = () => {
    return (
        <div className='space-y-3'>
            <h1>All Issues</h1>
            <Button><Link href='/issues/new'>Add an issue</Link></Button>
        </div>
    )
}

export default IssuesAction