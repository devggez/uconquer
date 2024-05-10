"use client";
import { Button, Select, Table } from "@radix-ui/themes";
import Link from "next/link";
import React, { useState } from "react";

const ProblemSelect = ({ issues }: { issues: any }) => {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

 
  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Problems List</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>
              <Select.Root value={selectedValue} onValueChange={handleChange}>
                <Select.Trigger placeholder="Add Problems" />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Problems</Select.Label>
                    {issues.map((issue: any) => (
                      <Select.Item key={issue.id} value={issue.title}>
                        {issue.title}
                      </Select.Item>
                    ))}
                  </Select.Group>
                  <Select.Group></Select.Group>
                </Select.Content>
              </Select.Root>
            </Table.RowHeaderCell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Button variant="soft" ml="2" mt='3' color="orange">
        Add a field
      </Button>
    </>
  );
};

export default ProblemSelect;
