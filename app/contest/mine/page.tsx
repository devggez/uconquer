'use client';
import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, IconButton, Table, TextField } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const ShowMineContest = () => {
  return (
    <>
       <Box>
        <h1 className="text-2xl text-orange-400 mt-12 mb-6">Contests</h1>
        <Flex justify="between" mt="2" mb="4">
          <Box>
            <Button variant="surface" color="orange">
              <Link href="/contest/new">Create New Contest </Link>
            </Button>
            <Button variant="soft" ml="4" color="orange">
              <Link href="/contest/mine">Show My Contests </Link>
            </Button>
          </Box>
          <Box width="250px">
            <TextField.Root size="2">
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Slot>
                <IconButton size="1" variant="ghost">
                  <DotsHorizontalIcon height="14" width="14" />
                </IconButton>
              </TextField.Slot>
            </TextField.Root>
          </Box>
        </Flex>
        <Box>
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Code</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>


            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>START120D</Table.RowHeaderCell>
                <Table.Cell>Starters 120</Table.Cell>
                <Table.Cell>07 Jan 2024 Wed 20:30</Table.Cell>
                <Table.Cell>Running</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>BC2</Table.RowHeaderCell>
                <Table.Cell>Best coder</Table.Cell>
                <Table.Cell>01 Jan 2023 Wed 20:30</Table.Cell>
                <Table.Cell>Pending</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasp478</Table.RowHeaderCell>
                <Table.Cell>Jasper learn ai </Table.Cell>
                <Table.Cell>05 Jan 2023 Wed 20:30</Table.Cell>
                <Table.Cell>Running</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasp478</Table.RowHeaderCell>
                <Table.Cell>Jasper learn ai </Table.Cell>
                <Table.Cell>05 Jan 2023 Wed 20:30</Table.Cell>
                <Table.Cell>Running</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasp478</Table.RowHeaderCell>
                <Table.Cell>Jasper learn ai </Table.Cell>
                <Table.Cell>05 Jan 2023 Wed 20:30</Table.Cell>
                <Table.Cell>Running</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasp478</Table.RowHeaderCell>
                <Table.Cell>Jasper learn ai </Table.Cell>
                <Table.Cell>05 Jan 2023 Wed 20:30</Table.Cell>
                <Table.Cell>Running</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasp478</Table.RowHeaderCell>
                <Table.Cell>Jasper learn ai </Table.Cell>
                <Table.Cell>05 Jan 2023 Wed 20:30</Table.Cell>
                <Table.Cell>Running</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasp478</Table.RowHeaderCell>
                <Table.Cell>Jasper learn ai </Table.Cell>
                <Table.Cell>05 Jan 2023 Wed 20:30</Table.Cell>
                <Table.Cell>Running</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
    </>
  );
};

export default ShowMineContest;
