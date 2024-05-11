import prisma from "@/prisma/client";
import { Tabs, Box, Text } from "@radix-ui/themes";
import React from "react";
import TabContent from "./TabContent";
import ExamLayout from "./ExamLayout";

const Exam = async () => {
  const issues = await prisma.issue.findMany({
    take: 3
  });

  return (
    <Box>
      <ExamLayout issues={issues}></ExamLayout>
    </Box>
  );
};

export default Exam;
