"use client";
import { ContestStatus } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const contestStatuses: { label: string; value?: ContestStatus }[] = [
  { label: "All" },
  { label: "Closed", value: "CLOSED" },
  { label: "Runnuing", value: "RUNNING" },
  { label: "Coming", value: "COMING" },
];
  
const ContestStatusFilter = () => {
  const router = useRouter();

  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status ? `?status=${status}` : "";
        router.push(`/contest${query}`);
      }}
    >
      <Select.Trigger placeholder="Filter status"></Select.Trigger>
      <Select.Content>
        <Select.Group>
          {contestStatuses.map((status) => (
            <Select.Item key={status.value} value={status.value}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
export default ContestStatusFilter;
