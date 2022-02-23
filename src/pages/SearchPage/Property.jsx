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
    <Grid container spacing="32px" sx={{ height: "334px" }}>
      <Grid minWidth="217px" minHeight="334px" item xs={12} md={3}>
        <Box
          sx={{
            height: "100%",
            minHeight: "334px",
            minWidth: "217px",
            width: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: { xs: "20px", md: "5px" },
          }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            width: 1,
            display: "inline-flex",
            justifyContent: "space-between",
            mb: "16px",
          }}
        >
          <Typography variant="h4" color="primary">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          <FavoriteBorderIcon color="disabled" sx={{ fontSize: "25px" }} />
        </Box>
        <Chip
          icon={
            <LocalOfferOutlinedIcon
              fontSize="small"
              sx={{ color: "#34A853" }}
            />
          }
          label={
            <Typography variant="body1" color="#34A853">
              {status}
            </Typography>
          }
          sx={{
            mb: "24px",
            px: "16px",
            py: "4px",
            backgroundColor: "rgba(52, 168, 83, 0.1)",
          }}
        />
        <Typography variant="h6" sx={{ mb: "4px" }}>
          {title}
        </Typography>
        <Typography variant="body1" color="#8F909D" sx={{ mb: "36px" }}>
          {location}
        </Typography>
        <Box
          sx={{
            display: "inline-flex",
            width: 1,
            mb: "48px",
          }}
        >
          <Box display="inline-flex" alignItems="center" sx={{ mr: "50px" }}>
            <BedSharpIcon
              color="disabled"
              sx={{ fontSize: "19px", mr: "10px" }}
            ></BedSharpIcon>
            <Typography variant="subtitle1">{rooms} Cuartos</Typography>
          </Box>

          <Box display="inline-flex" alignItems="center" sx={{ mr: "50px" }}>
            <BathtubOutlinedIcon
              color="disabled"
              sx={{ fontSize: "19px", mr: "10px" }}
            ></BathtubOutlinedIcon>
            <Typography variant="subtitle1"> {bathrooms} Banos</Typography>
          </Box>

          <Box display="inline-flex" alignItems="center" sx={{ mr: "50px" }}>
            <StraightenOutlinedIcon
              color="disabled"
              sx={{ fontSize: "19px", mr: "10px" }}
            ></StraightenOutlinedIcon>
            <Typography variant="subtitle1">{size} mts2</Typography>
          </Box>
        </Box>
        <Button variant="outlined" color="primary">
          Ver propiedad
        </Button>
      </Grid>
    </Grid>
  );
}
