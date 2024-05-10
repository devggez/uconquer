"use client";

import { Contest } from "@prisma/client";
import {
  AlertDialog,
  Text,
  Box,
  Button,
  Card,
  Flex,
  Inset,
  Strong,
} from "@radix-ui/themes";
import React from "react";

const ShowContest = ({ contest }: { contest: Contest }) => {
  return (
    <Box>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src={contest.image!}
                alt="Laravel"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: 140,
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong className="text-orange-400">{contest.title}</Strong>{" "}
              {contest.description}
            </Text>
          </Card>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src={contest.image!}
              alt="Laravel"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <AlertDialog.Title>{contest.title}</AlertDialog.Title>
          <AlertDialog.Description>
            {" "}
            {contest.description}
          </AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                {" "}
                Cancel{" "}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action></AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Box>
  );
};

export default ShowContest;
