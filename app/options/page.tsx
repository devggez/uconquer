"use client";
import {
  Avatar,
  Box,
  Card,
  Text,
  Flex,
  Grid,
  Button,
  TextField,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import React from "react";

const Settings = () => {
  const { data: session } = useSession();

  return (
      <Grid columns="5">
        <Box></Box>
        <Box className="col-span-3 mr-16 ml-16">
          <Card>
            <Flex gap="6" align="center">
              <Avatar
                src={session!.user!.image!}
                fallback="?"
                radius="full"
                className="cursor-pointer"
                size="9"
              ></Avatar>

              <Box className="space-y-3 py-4">
                <Text as="div" size="2" weight="bold">
                  Name: Salman Saad
                </Text>
                <Text as="div" size="2" color="gray">
                  UIUId: 011211115
                </Text>
                <Text as="div" size="2" color="gray">
                  Email: {session!.user!.email!}
                </Text>
                <Text as="div" size="2" color="gray">
                  Gender: Male
                </Text>
                <Button variant="surface" color="orange">
                  Update image
                </Button>
              </Box>
            </Flex>
          </Card>
        </Box>
      </Grid>
  );
};

export default Settings;
