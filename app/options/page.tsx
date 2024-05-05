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
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React from "react";
import authOptions from "../auth/authOptions";

const Settings = async () => {

  const session = await getServerSession(authOptions);

  return (
    <>
      <Grid columns="5">
        <Box className="col-span-1"></Box>
        <Box className="col-span-3">
          <Box maxWidth="240px">
            <Card>
              <Flex gap="6" align="center">
                <Avatar
                  ml="8"
                  size="8"
                  src={session?.user.image!}
                  fallback="T"
                />
                <Box className="space-y-3 py-4">
                  <Text as="div" size="2" weight="bold">
                    Name: {session.user.name}
                  </Text>
                  <Text as="div" size="2" color="gray">
                    UIUId: 011211115
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Email: ssaad211115@bscse.uiu.ac.bd
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
        </Box>
      </Grid>
    </>
  );
};

export default Settings;
