"use client"
import prisma from "@/prisma/client";
import { ContestStatus } from "@prisma/client";
import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  IconButton,
  Inset,
  Strong,
  Table,
  Text,
  TextField,
} from "@radix-ui/themes";
import Link from "next/link";
import React, { Component } from "react";
import Pagination from "../components/Pagination";
import ContestStatusBadge from "../components/ContestStatusBadge";

interface Props {
  searchParams: {
    status: ContestStatus;
    page: string;
  };
}

const ContestList = async ({ searchParams }: Props) => {
  const statuses = Object.values(ContestStatus);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const contests = await prisma.contest.findMany({
    where: {
      status,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const ContestCount = await prisma.contest.count({ where: { status } });

  return (
    <>
      <Box>
        <h1 className="mt-2 mb-5 text-2xl text-orange-400 ">
          Upcoming Contest
        </h1>
        <Grid columns="3" gap="5">
          <Box>
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Card size="2">
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20230124181625/Weekly-Coding-Contest-Platforms.png"
                      alt="Laravel"
                      style={{
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: 140,
                        backgroundColor: "var(--gray-5)",
                      }}
                    />
                  </Inset>
                  <Text as="p" size="3">
                    <Strong className="text-orange-400">
                      Weekly codeing Contest
                    </Strong>{" "}
                    is the art and technique of arranging type legible, readable
                    and appealing when displayed.
                  </Text>
                </Card>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20230124181625/Weekly-Coding-Contest-Platforms.png"
                    alt="Laravel"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <AlertDialog.Title>Weekly codeing Contest</AlertDialog.Title>
                <AlertDialog.Description>
                  {" "}
                  is the art and technique of arranging type legible, readable
                  and appealing when displayed.
                </AlertDialog.Description>
                <Flex mt="4" gap="3">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                      {" "}
                      Cancel{" "}
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action></AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </Box>

          <Box>
            <Card size="2">
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210125191729/Google%E2%80%99s-Coding-Competitions-You-Can-Consider-in-2021.png"
                  alt="java Documentation"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
              <Text as="p" size="3">
                <Strong className="text-orange-400">google contest 2023</Strong>{" "}
                is the art and technique of arranging type to make written
                language legible, readable and appealing when displayed.
              </Text>
            </Card>
          </Box>

          <Box>
            <Card size="2">
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src="https://img.freepik.com/free-vector/enter-win-banner-design_23-2150313957.jpg"
                  alt="Bold typography"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
              <Text as="p" size="3">
                <Strong className="text-orange-400">FJ37 codeing battle</Strong>{" "}
                is the art and technique of arranging type to language legible,
                readable and appealing when displayed.
              </Text>
            </Card>
          </Box>

          <Box>
            <Card size="2">
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src="https://img.freepik.com/free-vector/enter-win-banner-design_23-2150313957.jpg"
                  alt="Bold typography"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
              <Text as="p" size="3">
                <Strong className="text-orange-400">FJ37 codeing battle</Strong>{" "}
                is the art and technique of arranging type to language legible,
                readable and appealing when displayed.
              </Text>
            </Card>
          </Box>
        </Grid>
      </Box>

      <div className="">
        <h1 className="text-2xl text-orange-400 mb-6">Problems</h1>
        {/* <IssuesAction></IssuesAction> */}

        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Contest Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                status
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                created
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {contests.map((contest) => (
              <Table.Row key={contest.id}>
                <Table.Cell>
                  <Link href={`/contest/${contest.id}`}>{contest.title}</Link>
                  <div className="inline-block md:hidden ml-3">
                    <ContestStatusBadge status={contest.status}></ContestStatusBadge>
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {/* <IssueStatusBadge status={issue.status}></IssueStatusBadge> */}
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {contest.createdAt.toDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <Pagination
          itemCount={ContestCount}
          pageSize={pageSize}
          currentPage={page}
        ></Pagination>
        
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";
export default ContestList;
