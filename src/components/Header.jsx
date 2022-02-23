import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import * as React from "react";

export function Header() {
  return (
    <AppBar
      color="transparent"
      position="static"
      sx={{ borderBottom: "1px solid #D5D5D5" }}
    >
      <Box
        height="32px"
        backgroundColor="#00254F"
        color="white"
        padding="6px 32px"
        boxSizing="border-box"
        display="inline-flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <HomeOutlinedIcon fontSize="14px" sx={{ mr: "9px" }} />
        <Typography variant="subtitle2" color="inherit" lineHeight={0}>
          Portal Vendedores
        </Typography>
      </Box>
      <Toolbar
        sx={{
          pl: { xs: "17px", md: "100px" },
          pr: { xs: "17px", md: "100px" },
          py: "16px ",
        }}
        disableGutters
      >
        <Box display="inline-flex" alignItems="baseline" sx={{ mr: "64px" }}>
          <Box sx={{ mr: "10px" }} component="img" src="logo.svg"></Box>
          <Typography color="primary" fontSize={22} fontWeight={700}>
            Inmueblu
          </Typography>
        </Box>
        <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
          Buscar propiedades
        </Typography>
        <FavoriteBorderIcon
          fontSize="14px"
          color="disabled"
          sx={{ mr: "10px" }}
        />
        <Typography variant="subtitle2" sx={{ mr: "24px" }}>
          Favoritos
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: "24px" }}>
          Iniciar sesión
        </Typography>
        <Button color="primary" variant="contained">
          Publicar propiedad
        </Button>
      </Toolbar>
    </AppBar>
  );
}
