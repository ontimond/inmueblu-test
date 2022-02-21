import { Box, Button, Card, Chip, Grid, Typography } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import BedSharpIcon from "@mui/icons-material/BedSharp";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { blue, grey } from "@mui/material/colors";

export function Property(prop) {
  // {
  //   "title": "Beautiful apartment in the center of the city",
  //   "status": "For sale",
  //   "price": "1,000,000",
  //   "location": "New York",
  //   "rooms": "3",
  //   "bathrooms": "2",
  //   "size": "350",
  //   "image": "https://picsum.photos/id/237/200/300"
  // },

  const { title, status, price, location, rooms, bathrooms, size, image } =
    prop;

  return (
    <Grid container spacing={3} sx={{ height: "334px" }}>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            height: "100%",
            minHeight: "334px",
            width: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: { xs: "25px", md: "5px" },
          }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            width: 1,
            display: "inline-flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" color={blue[700]} sx={{ mb: 2 }}>
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          <FavoriteBorderIcon color="primary" />
        </Box>
        <Chip
          icon={<LocalOfferOutlinedIcon />}
          label={status}
          color="success"
          sx={{ mb: 3 }}
        />
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color={grey[500]} sx={{ mb: 3 }}>
          {location}
        </Typography>
        <Box
          sx={{
            display: "inline-flex",
            width: 1,
            mb: 3,
          }}
          color={grey[500]}
        >
          <Box display="inline-flex" sx={{ mr: 5 }}>
            <BedSharpIcon fontSize="small" sx={{ mr: 1 }}></BedSharpIcon>
            <Typography variant="body2" fontWeight={300}>
              {rooms} Cuartos
            </Typography>
          </Box>
          <Box display="inline-flex" sx={{ mr: 5 }}>
            <BathtubOutlinedIcon
              fontSize="small"
              sx={{ mr: 1 }}
            ></BathtubOutlinedIcon>
            <Typography variant="body2" fontWeight={300}>
              {bathrooms} Banos
            </Typography>
          </Box>
          <Box display="inline-flex" sx={{ mr: 5 }}>
            <StraightenOutlinedIcon
              fontSize="small"
              sx={{ mr: 1 }}
            ></StraightenOutlinedIcon>
            <Typography variant="body2" fontWeight={300}>
              {size} mts2
            </Typography>
          </Box>
        </Box>
        <Button variant="outlined" color="primary">
          Ver propiedad
        </Button>
      </Grid>
    </Grid>
  );
}
