import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

export function FilterForm() {
  return (
    <Box
      sx={{ p: 4, width: "400px", display: "flex", flexDirection: "column" }}
    >
      <FormControl sx={{ width: 1, mb: 2 }}>
        <InputLabel>Bathrooms</InputLabel>
        <Select label="Type" value="-">
          <MenuItem value="-" selected>
            Select
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 1, mb: 2 }}>
        <InputLabel>Contract</InputLabel>
        <Select label="Type" value="-">
          <MenuItem value="-" selected>
            Select
          </MenuItem>
        </Select>
      </FormControl>
      <Typography variant="body2">Price range</Typography>
      <Box
        sx={{
          width: 1,
          mb: 2,
          display: "inline-flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField label="Min" variant="outlined" />
        -
        <TextField label="Max" variant="outlined" />
      </Box>
      <FormControl sx={{ width: 1, mb: 2 }}>
        <InputLabel>Parking Spots</InputLabel>
        <Select label="Type" value="-">
          <MenuItem value="-" selected>
            Select
          </MenuItem>
        </Select>
      </FormControl>
      <Typography variant="body2">Square Footage</Typography>
      <Typography variant="body2" color={grey[500]} fontWeight={300}>
        En metros cuadrados (mts2)
      </Typography>
      <Box
        sx={{
          width: 1,
          mb: 2,
          display: "inline-flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField label="Min" variant="outlined" />
        -
        <TextField label="Max" variant="outlined" />
      </Box>
      <Typography variant="body2">Amenities</Typography>
      <Typography variant="body2" color={grey[500]} fontWeight={300}>
        Selecciona las amenidades extras que quisieras explorar en las
        propiedades.
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Área de cocina"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Seguridad privada"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Bodega"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Aire acondicionado"
        />
      </FormGroup>
      <Box
        sx={{
          borderTop: "1px solid #efefef",
          pt: 2,
          width: 1,
          display: "inline-flex",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mr: 2, height: "56px" }}
        >
          Reestablecer filtros
        </Button>
        <Button variant="contained" color="primary" fullWidth>
          Aplicar
        </Button>
      </Box>
    </Box>
  );
}
