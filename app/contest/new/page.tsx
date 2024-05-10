import {
  Box,
  Button,
  Grid,
  TextArea,
} from "@radix-ui/themes";
import Link from "next/link";
import ImageSelect from "./ImageSelect";
import prisma from "@/prisma/client";
import ProblemSelect from "./ProblemSelect";
import ContestNewTop from "./ContestNewTop";

const CreateNewContest = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <>
      <form className=" space-y-2 mb-">
        <h1 className="text-2xl text-orange-400 mb-6 ">New Contests</h1>

        <ContestNewTop></ContestNewTop>

        <h1 className="text-2xl text-orange-400 mb-10">Questions</h1>

        <Grid columns="2">
          <Box className=" mr-3 mb-12">
            <ProblemSelect issues={issues}></ProblemSelect>
          </Box>
          <Box ml="3">
            <Box >
              <TextArea size="3" placeholder="Contest Requerments" />
            </Box>
            <ImageSelect></ImageSelect>
          </Box>
        </Grid>

        <Button variant="soft" color="orange">
          <Link href="#">Create Contest</Link>
        </Button>
      </form>
    </>
  );
};

export default CreateNewContest;
