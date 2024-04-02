import {
  Box,
  Card,
  Flex,
  Grid,
  Inset,
  Text,
  Strong,
  Table,
} from "@radix-ui/themes";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <main>
      <Grid columns={{ initial: "1", sm: "4" }} gap="5">
        <Box className="md:col-span-3">
          <h1 className="mb-5 text-2xl text-orange-400">
            Continue Reading Documentation
          </h1>
          <Grid columns="3" gap="5">
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
                  <Strong>java</Strong> is the art and technique of arranging
                  type to make written language legible, readable and appealing
                  when displayed.
                </Text>
              </Card>
            </Box>

            <Box>
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
                  type to language legible, readable and appealing when
                  displayed.
                </Text>
              </Card>
            </Box>
          </Grid>
        </Box>
        <Box pl="6" className="border-l border-orange-400 ">
          <h1 className="mb-5 text-2xl text-orange-400">My History</h1>
          <h4 className="my-2 text-lg">
            Submissions: <strong className="">23</strong>{" "}
          </h4>
          <h4 className="my-2 text-lg">
            Solved: <strong className="">33</strong>{" "}
          </h4>
          <h4 className="my-2 text-lg">
            Pending: <strong className="">3</strong>{" "}
          </h4>
        </Box>
      </Grid>

      <Flex justify="between">
        <h1 className="mt-12 mb-5 text-2xl text-orange-400 ">
          Recent History
        </h1>
      </Flex>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Code</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>START120D</Table.RowHeaderCell>
            <Table.Cell>Starters 120</Table.Cell>
            <Table.Cell>07 Jan 2024 Wed 20:30</Table.Cell>
            <Table.Cell>Running</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>BC2</Table.RowHeaderCell>
            <Table.Cell>Best coder</Table.Cell>
            <Table.Cell>01 Jan 2023 Wed 20:30</Table.Cell>
            <Table.Cell>Pending</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Jasp478</Table.RowHeaderCell>
            <Table.Cell>Jasper learn ai </Table.Cell>
            <Table.Cell>05 Jan 2023 Wed 20:30</Table.Cell>
            <Table.Cell>Running</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </main>
  );
}
