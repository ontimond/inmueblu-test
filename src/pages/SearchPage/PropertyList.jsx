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
        pl: { xs: 2, md: 10 },
        pr: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          py: 3,
          mb: 3,
          alignItems: "center",
          borderBottom: "1px solid #efefef",
        }}
      >
        <Typography sx={{ flexGrow: 1 }}>
          {properties.length} resultados
        </Typography>
        <Typography sx={{ mr: 2 }}>Mostrar en orden de:</Typography>
        <FormControl sx={{ mr: 2 }}>
          <InputLabel>Bedrooms</InputLabel>
          <Select label="Price" value="bedrooms">
            <MenuItem value="bedrooms" selected>
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
