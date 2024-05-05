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
import React from "react";

const Settings = () => {
  return (
    <>
      <Grid columns="3">
        <Box className="col-span-2 mr-16">
          <Box maxWidth="240px">
            <Card>
              <Flex gap="6" align="center">
                <Avatar
                  ml="8"
                  size="8"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  radius="full"
                  fallback="T"
                />
                <Box className="space-y-3 py-4">
                  <Text as="div" size="2" weight="bold">
                    Name: Salman Saad
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

        <Box>
          <Card>
            <h1 className="text-2xl text-center text-orange-400 ">
              Change password
            </h1>
            <Box maxWidth="250px">
              <TextField.Root size="2" placeholder="Old Password" />
            </Box>
            <Box maxWidth="250px">
              <TextField.Root size="2" placeholder="New Password" />
            </Box>
            <Box maxWidth="250px">
              <TextField.Root size="2" placeholder="Confirm Password" />
            </Box>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default Settings;
