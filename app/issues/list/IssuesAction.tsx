'use client';
import { Box, Button, Flex, IconButton, TextField } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";
import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

const IssuesAction = () => {
  return (
    <Flex mb="5" justify="between">
      <Box>
        <Button variant="surface" color="orange">
          <Link href="/issues/new">Create New Problem </Link>
        </Button>
        <Button ml="4" mr="4" variant="soft" color="orange">
          <Link href="/issues/new">Show My Problems </Link>
        </Button>

        <IssueStatusFilter />
      </Box>
      <Box width="9">
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
  );
};

export default IssuesAction;
