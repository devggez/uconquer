"use client";
import { MagnifyingGlassIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  Flex,
  Box,
  Text,
  TextField,
  IconButton,
  Grid,
  Card,
  Inset,
  Strong,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const ShowDocumentationList = () => {
  return (
    <>
      <Box>
        <Flex justify="between" mb="4">
          <Box>
            <h1 className="text-2xl text-orange-400 mb-6">Documentation</h1>
          </Box>
          <Box width="250px" mt="2">
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
      </Box>
      <Grid columns={{ initial: "1", sm: "4" }} gap="5">
        <Box>
          <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"
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
              <Strong>Laravel</Strong> is the art and technique of arranging
              type legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>

        <Box>
          <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                alt="java Documentation"
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
              <Strong>java</Strong> is the art and technique of arranging type
              to make written language legible, readable and appealing when
              displayed.
            </Text>
          </Card>
        </Box>

        <Box>
          <Link href="https://kotlinlang.org/docs/home.html">
            <Card size="2">
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png"
                  alt="Bold typography"
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
                <Strong>Kotlin</Strong> is the art and technique of arranging
                type to language legible, readable and appealing when displayed.
              </Text>
            </Card>
          </Link>
        </Box>

        <Box>
          <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://i.pinimg.com/736x/cc/40/6a/cc406a8382d8df7eb5f395ec884d3c95.jpg"
                alt="java Documentation"
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
              <Strong>Rust</Strong> is the art and technique of arranging type
              to make written language legible, readable and appealing when
              displayed.
            </Text>
          </Card>
        </Box>
        <Box>
          <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
                alt="java Documentation"
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
              <Strong>Dart</Strong> is the art and technique of arranging type
              to make written language legible, readable and appealing when
              displayed.
            </Text>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default ShowDocumentationList;
