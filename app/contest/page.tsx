import prisma from "@/prisma/client";
import { Box, Button, Flex, Grid, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import ShowContest from "./ShowContest";
import ContestSearch from "./ContestSearch";
import ContestListItem from "./ContestListItem";

const ContestList = async () => {
  const contests = await prisma.contest.findMany();

  return (
    <>
      <Box>
        <h1 className="mt-2 mb-5 text-2xl text-orange-400 ">
          Upcoming Contest
        </h1>
        <Grid columns="3" gap="5">
          {contests.map((contes) => (
            <ShowContest contest={contes}></ShowContest>
          ))}
        </Grid>
      </Box>

      <Box>
        <h1 className="text-2xl text-orange-400 mt-12 mb-6">Contests</h1>
        <Flex justify="between" mt="2" mb="4">
          <Flex>
            <Button variant="surface" color="orange">
              <Link href="/contest/new">Create New Contest </Link>
            </Button>
            
            <Button ml="4" mr="4" variant="soft" color="orange">
              <Link href="/contest/mine">My Contest </Link>
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

export default ContestList;
