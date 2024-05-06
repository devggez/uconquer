import { executeCode } from "@/app/api/executeCode/route";
import { Issue } from "@prisma/client";
import { Box, Button, Flex, Text, TextArea } from "@radix-ui/themes";
import React, { useState } from "react";

interface Props {
  editRef: any;
  language: string;
  issue: Issue;
}

const CodeEditorOutput = ({ editRef, language, issue }: Props) => {
  const [output, setOutput] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSolved, setIsSolved] = useState(false);

  const runCode = async () => {
    const sourceCode = await editRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
      (parseInt(result.output) === parseInt(issue.outputVal) ? setIsSolved(true) : setIsSolved(false));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box mt="2">
      <Flex>
        <Text as="p" mt="3" mb="2" className="text-orange-400 text-lg">
          Output
        </Text>
        <Button
          variant="surface"
          color="orange"
          mt="3"
          ml="4"
          onClick={runCode}
        >
            Run code
        </Button>
        
        { isSolved ? (<Text className="pt-4 pl-6 text-green-600" >Solved</Text>): ''}

      </Flex>
      <Box
        height="auto"
        width="100%"
        className="border border-orange-400/40 p-4"
        mt="4"
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : isError ? (
          <Text color="red">Error: Check your code</Text>
        ) : output ? (
          output.map((line, i) => <Text key={i}>{line}</Text>)
        ) : (
          <Text>No output yet</Text>
        )}
      </Box>
    </Box>
  );
};

export default CodeEditorOutput;
