"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  Table,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import Link from "next/link";
import { Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

const CreateNewContest = () => {
  return (
    <>
      <form className=" space-y-4 mb-">
        <h1 className="text-2xl text-orange-400 mb-6 ">New Contests</h1>

        <Grid columns="2">
          <Box className=" mx-10 mb-12 ">
            <TextField.Root>
              <TextField.Input defaultValue={null} placeholder="Full name" />
            </TextField.Root>
            <TextField.Root mt="4">
              <TextField.Input defaultValue={null} placeholder="Password" />
            </TextField.Root>

            <Box maxWidth="300px" mt="4">
              <TextArea size="3" placeholder="Description" />
            </Box>
          </Box>

          <Box className=" mx-10 ">
            <TextField.Root>
              <TextField.Input defaultValue={null} placeholder="Start Time" />
            </TextField.Root>
            <TextField.Root mt="4">
              <TextField.Input defaultValue={null} placeholder="End Time" />
            </TextField.Root>
            <TextField.Root mt="4">
              <TextField.Input defaultValue={null} placeholder="Password" />
            </TextField.Root>
          </Box>
        </Grid>

        <h1 className="text-2xl text-orange-400 mb-10">Questions</h1>

        <Grid columns="2">
          <Box className=" mx-10 mb-12">
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>problem</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>
                    Google ML problem_324
                  </Table.RowHeaderCell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>
                    microsoft best programer
                  </Table.RowHeaderCell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>
                    mit code summit r_234
                  </Table.RowHeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>+</Table.RowHeaderCell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
          <Box>
            <Box maxWidth="300px" mt="8">
              <TextArea size="3"  placeholder="Contest Requerments" />
            </Box>
          </Box>
        </Grid>

        <Button variant="soft" color="orange">
          <Link href="#">Create Contest </Link>
        </Button>
      </form>
    </>
  );
};

export default CreateNewContest;
