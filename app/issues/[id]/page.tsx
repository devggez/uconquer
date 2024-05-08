import Prisma from "@/prisma/client";
import { Box, Flex, Grid} from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import CodeEditor from "./CodeEditor";


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
      <Box className="md:col-span-2">
        <IssueDetails issue={issue}></IssueDetails>
      </Box>
      {session && (
          <CodeEditor issue={issue}></CodeEditor>
        
      )}
    </Grid>
  );
  
};

export default IssueDetailPage;
