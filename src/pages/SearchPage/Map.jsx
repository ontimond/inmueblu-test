import { Box } from "@mui/system";

export function Map() {
  return (
    <Box
      component="iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7953.782570335304!2d-74.20454050889947!3d4.61347174216464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e189ce0a54b%3A0xc7cb25fec6e5efbf!2sCl.%2080%20Sur%20%2378-69%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1645388864244!5m2!1ses-419!2sco"
      width="100%"
      height="100%"
      allowfullscreen=""
      loading="lazy"
      sx={{ border: 0 }}
    ></Box>
  );
}
