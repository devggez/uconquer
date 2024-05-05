"use client";
import { Box, Button, Flex, IconButton, TextField } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";
import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import IssueSearch from "./IssueSearch";

const IssuesAction = () => {
  return (
    <Flex mb="5" justify="between">
      <Box>
        <Button variant="surface" color="orange">
          <Link href="/issues/new">Create New Problem </Link>
        </Button>
        <Button ml="4" mr="4" variant="soft" color="orange">
          <Link href="/issues/myList">Show My Problems </Link>
        </Button>

        <IssueStatusFilter />
      </Box>

      <Box className="w-64">
        <IssueSearch></IssueSearch>
      </Box>
    </Flex>
  );
};

export default IssuesAction;
