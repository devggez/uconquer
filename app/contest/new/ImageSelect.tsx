'use client'
import { Box } from "@radix-ui/themes";
import React, { useState } from "react";

const ImageSelect = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file!);
  };
  return (
    <Box mt="4">
      <div>
        <label htmlFor="fileInput">Select Banner Image:</label>
        <br />
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>
    </Box>
  );
};

export default ImageSelect;
