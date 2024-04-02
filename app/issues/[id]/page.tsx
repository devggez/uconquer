import Prisma from "@/prisma/client";
import { Box, Button, Flex, Grid, Table } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await Prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-3">
        <IssueDetails issue={issue}></IssueDetails>
      </Box>
      {session && (
        <Box className="md:col-span-2">
          <Box mb="4" >
            <Button variant="soft" color="orange">
              <Link className="text-xl" href={`/issues/exam`}> Go to Problem</Link>
            </Button>
          </Box>

          <Flex direction="row" gap="4">
            <AssigneeSelect issue={issue}></AssigneeSelect>
            <EditIssueButton issueId={issue.id}></EditIssueButton>
            <DeleteIssueButton issueId={issue.id}></DeleteIssueButton>
          </Flex>

          <Box>
            <h1 className="text-2xl text-center text-orange-400 mt-12 mb-6">
              Ranking
            </h1>
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Position</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>First</Table.RowHeaderCell>
                  <Table.Cell>Salman saad</Table.Cell>
                  <Table.Cell>07 Jan 2024 Wed 20:30</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Second</Table.RowHeaderCell>
                  <Table.Cell>Tarik Aziz</Table.Cell>
                  <Table.Cell>01 Jan 2023 Wed 20:30</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Third</Table.RowHeaderCell>
                  <Table.Cell>Ummay Tasfy</Table.Cell>
                  <Table.Cell>05 Jan 2023 Wed 20:30</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;
