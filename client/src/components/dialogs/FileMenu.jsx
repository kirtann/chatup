import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu open={false} anchorEl={anchorE1}>
      <div style={{ width: "10rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        recusandae suscipit similique soluta dicta ullam assumenda omnis
        inventore repudiandae obcaecati.
      </div>
    </Menu>
  );
};

export default FileMenu;
