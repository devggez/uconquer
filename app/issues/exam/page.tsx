"use client";

import { IssueStatusBadge } from "@/app/components";

import {
  Box,
  Card,
  Flex,
  Grid,
  Text,
  Heading,
  Button,
  TextArea,
  Tabs,
} from "@radix-ui/themes";
import React from "react";
import { Controller, Form } from "react-hook-form";
import ReactMarkdown from "react-markdown";

const ExamPageShow = () => {
  return (
    <>
      <Grid columns="2">
        <Tabs.Root defaultValue="Statement">
          <Tabs.List>
            <Tabs.Trigger value="Statement">Statement</Tabs.Trigger>
            <Tabs.Trigger value="Solution">Solution</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="Statement">
              <Box>
                <div className="space-y-4">
                  <Heading>"Nearly Shortest Repeating Substring"</Heading>
                  <Flex className="space-x-3 " my="2">
                    <IssueStatusBadge status="OPEN"></IssueStatusBadge>
                  </Flex>
                  <Card className="prose text-white" mt="6">
                    <ReactMarkdown>
                      Nearly Shortest Repeating Substring time limit per test2
                      seconds memory limit per test256 megabytes inputstandard
                      input outputstandard output You are given a string 𝑠 of
                      length 𝑛 consisting of lowercase Latin characters. Find
                      the length of the shortest string 𝑘 such that several
                      (possibly one) copies of 𝑘 can be concatenated together to
                      form a string with the same length as 𝑠 and, at most, one
                      different character. More formally, find the length of the
                      shortest string 𝑘 such that 𝑐=𝑘+⋯+𝑘𝑥 times for some
                      positive integer 𝑥 , strings 𝑠 and 𝑐 has the same length
                      and 𝑐𝑖≠𝑠𝑖 for at most one 𝑖 (i.e. there exist 0 or 1 such
                      positions). Input The first line contains a single integer
                      𝑡 (1≤𝑡≤103 ) — the number of test cases. The first line of
                      each test case contains a single integer 𝑛 (1≤𝑛≤2⋅105 ) —
                      the length of string 𝑠 . The second line of each test case
                      contains the string 𝑠 , consisting of lowercase Latin
                      characters. The sum of 𝑛 over all test cases does not
                      exceed 2⋅105 . Output For each test case, print the length
                      of the shortest string 𝑘 satisfying the constraints in the
                      statement. Example inputCopy 5 4 abaa 4 abba 13
                      slavicgslavic 8 hshahaha 20 stormflamestornflame
                      outputCopy 1 4 13 2 10 Note In the first test case, you
                      can select 𝑘=𝚊 and 𝑘+𝑘+𝑘+𝑘=𝚊𝚊𝚊𝚊 , which only differs from
                      𝑠 in the second position. In the second test case, you
                      cannot select 𝑘 of length one or two. We can have 𝑘=𝚊𝚋𝚋𝚊 ,
                      which is equal to 𝑠 .
                    </ReactMarkdown>
                  </Card>
                </div>
              </Box>
            </Tabs.Content>

            <Tabs.Content value="Solution">
              <Box>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/bS9em7Bg0iU?si=psfx0DqQsYjrNq8P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Box>
              watch the video to solve this problem
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        <Box>
          <Card className="ml-6 prose text-white 2" mt="6">
            <Box maxWidth="600px">
              <TextArea size="3" placeholder="Write your code here..." />
            </Box>
          </Card>
          <Button ml="8" mt="8" variant="soft" color="orange">
            Submit
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default ExamPageShow;
