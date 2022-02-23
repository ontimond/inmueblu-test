import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Property } from "./Property";
export function PropertyList(prop) {
  const { properties } = prop;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          pt: "32px",
          pb: "24px",
          mb: "24px",
          alignItems: "center",
          borderBottom: "1px solid #DDDDDD",
        }}
      >
        <Typography variant="subtitle1" color="#000" sx={{ flexGrow: 1 }}>
          {properties.length} resultados
        </Typography>
        <Typography sx={{ mr: "12px" }}>Mostrar en orden de</Typography>
        <FormControl sx={{ mr: "19px" }}>
          <Select value="default" sx={{ height: "48px" }}>
            <MenuItem value="default" selected>
              Mayor a menor precio
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      {properties.map((property) => {
        return (
          <Box sx={{ mb: 3 }}>
            <Property {...property} />
          </Box>
        );
      })}
    </Box>
  );
}
