import { Header } from "../components/Header";
import * as React from "react";
import { Box } from "@mui/system";
import Footer from "../components/Footer";

export function MainLayout(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <Header></Header>
      <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
      <Footer></Footer>
    </Box>
  );
}
