import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const EditIssueButton = ({issueId} : {issueId: number}) => {
    return (
        <div>
            <Button variant="soft" color="orange">
                <Pencil2Icon></Pencil2Icon>
                <Link href={`/issues/edit/${issueId}`}> Edit</Link>
            </Button>
        </div>
    )
}

export default EditIssueButton