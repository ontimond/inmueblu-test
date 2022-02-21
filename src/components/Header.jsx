import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function Header() {
  return (
    <Box sx={{ zIndex: 1 }}>
      <AppBar color="transparent" sx={{ boxShadow: 1 }} position="static">
        <Container>
          <Toolbar>
            <Typography sx={{ mr: 2 }}>
              <Box component="img" src="logo.svg"></Box>
            </Typography>
            <Typography color={grey[500]} variant="body2" sx={{ flexGrow: 1 }}>
              Buscar propiedades
            </Typography>
            <Typography color={grey[500]} sx={{ mr: 2 }} variant="body2">
              Favoritos
            </Typography>
            <Typography color={grey[500]} sx={{ mr: 2 }} variant="body2">
              Iniciar sesión
            </Typography>
            <Button color="primary" variant="contained">
              Publicar propiedad
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
