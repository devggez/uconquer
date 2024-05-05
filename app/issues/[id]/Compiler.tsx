'use client'
import { Box } from "@radix-ui/themes";
import React, { useEffect } from "react";

const Compiler = () => {
  return (
    <>
      <Box className="md:col-span-2">
        <Box mb="4">
          <div
            id="jdoodle-container"
            data-pym-src="https://www.jdoodle.com/embed/v1/722625a88fc8fae1"
          ></div>
        </Box>
      </Box>
    </>
  );

  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.async = true;
    document.getElementById("jdoodle-container")?.appendChild(script);
  }, []);


};



export default Compiler;
