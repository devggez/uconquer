import {
  Box,
  Card,
  Flex,
  Grid,
  Inset,
  Text,
  Strong,
  Table,
} from "@radix-ui/themes";
import NavBar from "./NavBar";
import LatestIssues from "./LatestIssues";
import IssueSummery from "./IssueSummery";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "./auth/authOptions";
import IssueChart from "./IssueChart";
import { IssueStatusBadge } from "./components";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const totalIssues = await prisma.issue.count({
    where: { owner: session?.user?.email },
  });

  const issues = await prisma.issue.findMany({
    where: {
      owner: session.user?.email,
    },
  });

  return (
    <main>
      <Grid columns={{ initial: "1", sm: "5" }} gap="5">
        <Box className="md:col-span-3">
          <h1 className="mb-5 text-2xl text-orange-400">Status</h1>
          <Flex direction="column">
            <IssueSummery
              totalIssue={totalIssues}
              totalContest={3}
              problemSolved={2}
            ></IssueSummery>

            <div className="mt-5">
              <h1 className="mb-5 text-2xl text-orange-400">
                My Solveing Progress
              </h1>
              <IssueChart week1={1} week2={3} week3={3} week4={2}></IssueChart>
            </div>
          </Flex>
        </Box>

        <Box pl="6" className="border-l border-orange-400 w-max">
          <h1 className="mb-5 text-2xl text-orange-400">Recent Problems</h1>
          <LatestIssues></LatestIssues>
        </Box>
      </Grid>

      <Box>
        <h1 className="mt-12 mb-5 text-2xl text-orange-400 ">
          Recent Modified Problems
        </h1>

        <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Problem Statement</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
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
                <Text>{issue.createdAt.toLocaleDateString()}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      
      </Box>
    </main>
  );
}
