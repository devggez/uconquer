import { LANGUAGE_VERSIONS } from "@/app/constants";
import { Select, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  language: string;
  onSelect: any;
}

const languages = Object.entries(LANGUAGE_VERSIONS);

const CodeEditorSelect = ({ language, onSelect }: Props) => {
  return (
    <Select.Root
      defaultValue="python"
      onValueChange={(language) => {
        onSelect(language);
      }}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          {languages.map(([lang, langVer]) => (
            <Select.Item
              key={lang}
              value={lang}
              className={lang === language ? "text-orange-400" : ""}
            >
              
              {lang}
              <Text as="span"> {langVer}</Text>
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default CodeEditorSelect;
