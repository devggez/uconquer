"use client";

import { MagnifyingGlassIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Box, IconButton, TextField } from "@radix-ui/themes";
import React from "react";

const ContestSearch = () => {
  return (
    <Box className="w-64">
      <TextField.Root>
        <TextField.Input placeholder="Search problems" />
        <TextField.Slot>
          <IconButton size="1" variant="ghost">
            <MagnifyingGlassIcon height="16" width="16" />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
    </Box>
  );
};

export default ContestSearch;
