"use client";

import { Contest } from "@prisma/client";
import { AlertDialog, Button, Flex, Inset, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const ContestListItem = ({ contest }: { contest: Contest }) => {
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
