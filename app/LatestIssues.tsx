import prisma from "@/prisma/client";
import { Flex, Table, TableBody, TableCell } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { IssueStatusBadge } from "./components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <Table.Root >
      <TableBody>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <TableCell>
                <Flex direction="column">
                  <Link href={`/issues/${issue.id}`} className="mb-2">{issue.title}</Link>
                  <IssueStatusBadge status={issue.status}></IssueStatusBadge>
                </Flex>
            </TableCell>
          </Table.Row>
        ))}
      </TableBody>
    </Table.Root>
  );
};

export default LatestIssues;
