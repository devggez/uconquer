"use client";

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
import React from "react";

const ContestList = () => {
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
                  src="data:image/jpeg;base64,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"
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
                <Strong className="text-orange-400">JCRC 2022 codejam</Strong>{" "}
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
        </Grid>
      </Box>

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

export default ContestList;
