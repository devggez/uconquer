import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import delay from "delay";
import Link from "next/link";
import IssuesAction from "./IssuesAction";
import { Status } from "@prisma/client";
import Pagination from "@/app/components/Pagination";

interface Props {
  searchParams: {
    status: Status;
    page: string;
  };
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where: { status } });

  await delay(500);
  return (
    <div className="">
      <h1 className="text-2xl text-orange-400 mb-6">Problems</h1>
      <IssuesAction></IssuesAction>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Problem Statement</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              created
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
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Pagination
        itemCount={issueCount}
        pageSize={pageSize}
        currentPage={page}
      ></Pagination>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
