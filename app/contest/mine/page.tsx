import {
  CrossCircledIcon,
  DotsHorizontalIcon,
  MagnifyingGlassIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Table,
  TextField,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import ContestSearch from "../ContestSearch";
import ContestListItem from "./ContestListItem";
import prisma from "@/prisma/client";

const ShowMineContest = async () => {

  const contests = await prisma.contest.findMany();

  return (
    <>
      <Box>
        <h1 className="text-2xl text-orange-400 mt-12 mb-6">Contests</h1>
        <Flex justify="between" mt="2" mb="4">
          <Flex>
            <Button variant="surface" color="orange">
              <Link href="/contest/new">Create New Contest </Link>
            </Button>
          </Flex>
          <ContestSearch></ContestSearch>
        </Flex>

        <Box>
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Start</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>End</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Statu</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
                
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {contests.map((contest) => (
                <ContestListItem contest={contest}></ContestListItem>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
    </>
  );
};

export default ShowMineContest;
