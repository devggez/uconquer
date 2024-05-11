"use client";

import { Issue } from "@prisma/client";
import { Tabs, Text, Box } from "@radix-ui/themes";
import React from "react";
import TabContent from "./TabContent";

const ExamLayout = ({ issues }: { issues: any }) => {
  return (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        {issues.map((issue: Issue) => (
          <Tabs.Trigger value={issue.title}>{issue.title}</Tabs.Trigger>
        ))}
      </Tabs.List>

      <Box pt="3">
        {issues.map((issue: Issue) => (
          <Tabs.Content value={issue.title}>
            <TabContent issue={issue}></TabContent>
          </Tabs.Content>
        ))}
      </Box>
    </Tabs.Root>
  );
};

export default ExamLayout;
