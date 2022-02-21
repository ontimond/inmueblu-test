import {
  Container,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Button,
  Popover,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { FilterForm } from "./FilterForm";

export function SearchBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ backgroundColor: "#F7F8FA" }}>
      <Container sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs>
            <TextField
              label="Buscar propiedades"
              variant="outlined"
              fullWidth
              sx={{ background: "white" }}
            />
          </Grid>
          <Grid item xs="auto" sx={{ display: { xs: "none", md: "block" } }}>
            <FormControl sx={{ mr: 2 }}>
              <InputLabel>Type</InputLabel>
              <Select label="Type" value="apartment">
                <MenuItem value="apartment" selected>
                  Apartment
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mr: 2 }}>
              <InputLabel>Price</InputLabel>
              <Select label="Price" value="range">
                <MenuItem value="range" selected>
                  Price - Range
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mr: 2 }}>
              <InputLabel>Bedrooms</InputLabel>
              <Select label="Price" value="bedrooms">
                <MenuItem value="bedrooms" selected>
                  Beedrooms
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs="auto">
            <FormControl aria-describedby={id} onClick={handleClick} disabled>
              <InputLabel>More</InputLabel>
              <Select label="Price" value="bedrooms">
                <MenuItem value="bedrooms" selected>
                  More
                </MenuItem>
              </Select>
            </FormControl>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <FilterForm></FilterForm>
            </Popover>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
