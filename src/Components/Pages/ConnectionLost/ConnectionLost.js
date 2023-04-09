import React from "react";
import { AlertTitle } from "@mui/material";

function ConnectionLost() {
  return (
    <div style={{
        backgroundColor:"#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
        <AlertTitle>Please check your internet connection and try again.</AlertTitle>
    </div>
  );
}

export default ConnectionLost;
