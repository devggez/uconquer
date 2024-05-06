"use client";
import { Box, Flex, Text } from "@radix-ui/themes";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import CompilerSelect from "./CodeEditorSelect";
import { CODE_SNIPPETS } from "@/app/constants";
import CodeEditorOutput from "./CodeEditorOutput";

const CodeEditor = ({issue}: {issue: string}) => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS['python']);
  const [language, setLanguage] = useState("python");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  }

  return (
    <>
      <Box className="md:col-span-3" >
        <Flex>
          <Text as="p" mt="2" mb="2" className="text-orange-400 text-lg">
            Language :
          </Text>
          <Box className="pt-2 pl-3 pb-3">
            <CompilerSelect language={language} onSelect={onSelect}></CompilerSelect>
          </Box>
        </Flex>
        <Editor 
          height="520px"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
          />
          <CodeEditorOutput editRef={editorRef} language={language} issue={issue}></CodeEditorOutput>
      </Box>
    </>
  );
};

export default CodeEditor;
