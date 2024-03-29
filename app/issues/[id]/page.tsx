import Prisma from '@/prisma/client'
import { Box, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'

interface Props {
    params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {

    const issue = await Prisma.issue.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!issue) return notFound();

    return (
        <Grid columns={{ initial: "1", md: "2" }} gap="5">
            <Box>
                <IssueDetails issue={issue}></IssueDetails>
            </Box>
            <Box>
                <EditIssueButton issueId={issue.id}></EditIssueButton>
            </Box>
        </Grid>
    )
}

export default IssueDetailPage