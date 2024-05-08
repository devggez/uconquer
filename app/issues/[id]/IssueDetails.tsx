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
        <Box pt="3">
          <Heading>{issue.title}</Heading>
          <Flex className="space-x-3 " my="2">
            <IssueStatusBadge status={issue.status}></IssueStatusBadge>
            <Text>{issue.createdAt.toDateString()}</Text>
          </Flex>
          <Card className="prose text-white" mt="6">
            <ReactMarkdown>{issue.description}</ReactMarkdown>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default IssueDetails;
