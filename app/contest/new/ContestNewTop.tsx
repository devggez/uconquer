'use client'
import { Grid, Box, TextField, TextArea } from '@radix-ui/themes'
import React from 'react'

const ContestNewTop = () => {
  return (
    <Grid columns="2">
          <Box className=" mr-3 mb-12 ">
            <TextField.Root>
              <TextField.Input placeholder="Full name" />
            </TextField.Root>
            <TextField.Root mt="4">
              <TextField.Input placeholder="Password" />
            </TextField.Root>

            <Box mt="4">
              <TextArea size="3" placeholder="Description" />
            </Box>
          </Box>

          <Box className=" ml-3 ">
            <TextField.Root>
              <TextField.Input placeholder="Start Time" />
            </TextField.Root>
            <TextField.Root mt="4">
              <TextField.Input placeholder="End Time" />
            </TextField.Root>
          </Box>
        </Grid>
  )
}

export default ContestNewTop