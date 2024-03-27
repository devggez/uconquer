import Prisma from '@/prisma/client'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
import DeleteIssueButton from './DeleteIssueButton'
import { getServerSession } from 'next-auth'
import authOptions from '@/app/auth/authOptions'
import AssigneeSelect from './AssigneeSelect'

interface Props {
    params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
    const session = await getServerSession(authOptions);

    const issue = await Prisma.issue.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!issue) return notFound();

    return (
        <Grid columns={{ initial: "1", sm: "4" }} gap="5">
            <Box className='md:col-span-3'>
                <IssueDetails issue={issue}></IssueDetails>
            </Box>
            {session && <Box>
                <Flex direction="column" gap='4'>
                    <AssigneeSelect></AssigneeSelect>
                <EditIssueButton issueId={issue.id}></EditIssueButton>
                <DeleteIssueButton issueId={issue.id}></DeleteIssueButton>
                </Flex>
            </Box>}
        </Grid>
    )
}

export default IssueDetailPage