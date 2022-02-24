import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Popover,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { FilterForm } from "./FilterForm";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

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
    <Box
      sx={{
        backgroundColor: "#F7F8FA",
        pl: { xs: "17px", md: "100px" },
        pr: { xs: "17px", md: "100px" },
        py: "16px",
      }}
    >
      <Grid container spacing="16px" alignItems="center">
        <Grid item xs>
          <TextField
            label="Buscar propiedades"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: { height: "48px" },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CloseOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs="auto" sx={{ display: { xs: "none", md: "block" } }}>
          <FormControl>
            <Select sx={{ height: "48px" }} value="default">
              <MenuItem value="default" disabled>
                Type – Apartment
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs="auto" sx={{ display: { xs: "none", md: "block" } }}>
          <FormControl>
            <Select sx={{ height: "48px" }} value="default">
              <MenuItem value="default" disabled>
                Price Range
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs="auto" sx={{ display: { xs: "none", md: "block" } }}>
          <FormControl>
            <Select sx={{ height: "48px" }} value="default">
              <MenuItem value="default" disabled>
                Bedrooms
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs="auto" sx={{ display: { xs: "none", md: "block" } }}>
          <FormControl>
            <Select
              sx={{ height: "48px" }}
              value="default"
              aria-describedby={id}
              onClick={handleClick}
              disabled
            >
              <MenuItem value="default" disabled>
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
        <Grid item xs="auto" sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton onClick={handleClick}>
            <FilterAltOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
