"use client";

import { Contest } from "@prisma/client";
import {
  AlertDialog,
  Button,
  Flex,
  Heading,
  Inset,
  Table,
  TableBody,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const ContestListItem = ({ contest }: { contest: Contest }) => {
  const leaderBoardData: {
    name: string;
    position: number;
    score: number;
    solved: number;
  }[] = [
    { name: "Wasi", position: 1, score: 243, solved: 3 },
    { name: "Salman Saad", position: 2, score: 213, solved: 2 },
    { name: "Sayeem Been Zaman", position: 3, score: 198, solved: 1 },
  ];

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Table.Row>
          <Table.RowHeaderCell>{contest.title}</Table.RowHeaderCell>
          <Table.Cell>{contest.start.toDateString()}</Table.Cell>
          <Table.Cell>{contest.end.toDateString()}</Table.Cell>
          <Table.Cell>{contest.status}</Table.Cell>
        </Table.Row>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={contest.image!}
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
        <AlertDialog.Title>{contest.title}</AlertDialog.Title>
        <AlertDialog.Description>
          {" "}
          {contest.description}
          <br />
          <br />
          Contest Starts: {contest.start.toDateString()}
          <br />
          <br />
          Contest Ends: {contest.end.toDateString()}
          <br />
          <br />
          contest Requirement: {contest.requerments}
          <br />
          <br />
          <Heading>Leader Board</Heading>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Position</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Solved Problem</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Score</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <TableBody>
              {leaderBoardData.map((leader) => (
                <Table.Row>
                  <Table.Cell>{leader.position}</Table.Cell>
                  <Table.RowHeaderCell>{leader.name}</Table.RowHeaderCell>
                  <Table.Cell>{leader.solved}</Table.Cell>
                  <Table.Cell>{leader.score}</Table.Cell>
                </Table.Row>
              ))}
            </TableBody>
          </Table.Root>
        </AlertDialog.Description>
        <Flex mt="4" gap="3">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              {" "}
              Cancel{" "}
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button ml="4" mr="4" variant="soft" color="orange">
              <Link href="/contest/exam">Perticipate</Link>
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default ContestListItem;
