import { Status } from "@prisma/client";
import { Box, Card, Flex, Grid, Inset, Strong, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  totalIssue: number;
  totalContest: number;
  problemSolved: number;
}

const IssueSummery = ({ totalIssue, totalContest, problemSolved }: Props) => {
  const containers: {
    label: string;
    value: number;
  }[] = [
    { label: "Issues Created", value: totalIssue },
    { label: "Contest Created", value: totalContest },
    { label: "Problem Solved ", value: problemSolved },
  ];

  return (
    <div>
      <Grid columns="3" gap="5">
        {containers.map((container) => (
          <Card size="2" key={container.label}>
            <Flex direction="column">
              <Text as="p" size="2">
                {container.label}
              </Text>
              <Text as="p" size="5" className="text-orange-400">
                {container.value}
              </Text>
            </Flex>
          </Card>
        ))}

        
      </Grid>
    </div>
  );
};

export default IssueSummery;
