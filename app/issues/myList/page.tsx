import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Box, Flex, Table } from "@radix-ui/themes";
import delay from "delay";
import Link from "next/link";
import IssuesAction from "./IssuesAction";
import { Status } from "@prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";

interface Props {
  searchParams: { status: Status };
}

const MyIssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const session = await getServerSession(authOptions);
  const issues = await prisma.issue.findMany({
    where: {
      status,
      owner: session.user?.email,
    },
  });

  await delay(500);
  return (
    <div className="">
      <h1 className="text-2xl text-orange-400 mb-6">My Problems</h1>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Problem Statement</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Actions
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="inline-block md:hidden ml-3">
                  <IssueStatusBadge status={issue.status}></IssueStatusBadge>
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status}></IssueStatusBadge>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Flex direction="row" gap="4">
                  <EditIssueButton issueId={issue.id}></EditIssueButton>
                  <DeleteIssueButton issueId={issue.id}></DeleteIssueButton>
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default MyIssuesPage;
