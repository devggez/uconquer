"use client";
import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Text, Heading, Flex, Card, Tabs, Box, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <div>
      <div className="space-y-4">
        <Tabs.Root defaultValue="statement">
          <Tabs.List>
            <Tabs.Trigger value="statement">Statement</Tabs.Trigger>
            <Tabs.Trigger value="ranking">Ranking</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="statement">
              <Heading>{issue.title}</Heading>
              <Flex className="space-x-3 " my="2">
                <IssueStatusBadge status={issue.status}></IssueStatusBadge>
                <Text>{issue.createdAt.toDateString()}</Text>
              </Flex>
              <Card className="prose text-white" mt="6">
                <ReactMarkdown>{issue.description}</ReactMarkdown>
              </Card>
            </Tabs.Content>

            <Tabs.Content value="ranking">
              <Box>
                
                <Table.Root variant="surface">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>Position</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.RowHeaderCell>First</Table.RowHeaderCell>
                      <Table.Cell>Salman saad</Table.Cell>
                      <Table.Cell>07 Jan 2024 Wed 20:30</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.RowHeaderCell>Second</Table.RowHeaderCell>
                      <Table.Cell>Tarik Aziz</Table.Cell>
                      <Table.Cell>01 Jan 2023 Wed 20:30</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.RowHeaderCell>Third</Table.RowHeaderCell>
                      <Table.Cell>Ummay Tasfy</Table.Cell>
                      <Table.Cell>05 Jan 2023 Wed 20:30</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default IssueDetails;
