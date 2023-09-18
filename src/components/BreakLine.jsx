import React from "react";
import { Divider } from "@material-ui/core";

function BreakLine({ text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "90%",
        margin: "auto",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Divider style={{ flex: 1, backgroundColor: "#0E2271B8" }} />
      <div
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          color: "#0E2271B8",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {text}
      </div>
      <Divider style={{ flex: 1, backgroundColor: "#0E2271B8" }} />
    </div>
  );
}

export default BreakLine;
