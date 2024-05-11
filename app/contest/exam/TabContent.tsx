import CodeEditor from "@/app/issues/[id]/CodeEditor";
import IssueDetails from "@/app/issues/[id]/IssueDetails";
import { Issue } from "@prisma/client";
import { Grid, Box } from "@radix-ui/themes";
import React from "react";

const TabContent = ({issue} : {issue: Issue}) => {
  return (
    <>
      <Grid columns={{ initial: "1", sm: "5" }} gap="5">
        <Box className="md:col-span-2">
          <IssueDetails issue={issue}></IssueDetails>
        </Box>
        <CodeEditor issue={issue}></CodeEditor>
      </Grid>
    </>
  );
};

export default TabContent;
