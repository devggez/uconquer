"use client";
import { ErrorMessage, Spinner } from "@/app/components";
import { issueSchema } from "@/app/validationSchmemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Box, Button, Grid, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = async ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);

      router.push("/issues/list");
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError("there is some problem in code");
    }
  });

  return (
    <div className="">
      <form className=" space-y-4" onSubmit={onSubmit}>
        <h1>New problem page</h1>
        <Grid columns="2">
          <Box className=" mr-9">
            <TextField.Root className="mb-4">
              <TextField.Input
                defaultValue={issue?.title}
                placeholder="title"
                {...register("title")}
              />
            </TextField.Root>
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
            <Controller
              name="description"
              control={control}
              defaultValue={issue?.description}
              render={({ field }) => (
                <SimpleMDE placeholder="Description" {...field} />
              )}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </Box>
          <Box>
            <TextField.Root className="mb-4">
              <TextField.Input
                defaultValue={issue?.inputVal}
                placeholder="Input Value"
                {...register("inputVal")}
              />
            </TextField.Root>
            <TextField.Root className="mb-4">
              <TextField.Input
                defaultValue={issue?.outputVal}
                placeholder="Output Value"
                {...register("outputVal")}
              />
            </TextField.Root>
          </Box>
        </Grid>

        <Button disabled={isSubmitting}>
          {issue ? "Update Problem" : "Submit new problem"}{" "}
          {isSubmitting && <Spinner></Spinner>}{" "}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
