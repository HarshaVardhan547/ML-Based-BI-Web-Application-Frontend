import React from "react";
import "./Upload.css";
import { ListOfFiles } from "../components/storage/ListAllFiles";

function Upload() {
  return (
    <div className="upload">
      <ListOfFiles />
    </div>
  );
}
export default Upload;
