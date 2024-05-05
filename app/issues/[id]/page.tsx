import Prisma from "@/prisma/client";
import { Box, Button, Flex, Grid, Table, Tabs } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";
import Link from "next/link";
import { useEffect } from "react";
import Compiler from "./Compiler";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await Prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-3">
        <IssueDetails issue={issue}></IssueDetails>
      </Box>
      {session && (
        <Compiler></Compiler>
      )}
    </Grid>
  );
  
};

export default IssueDetailPage;
