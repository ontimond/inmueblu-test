import {Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, InputAdornment, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {MainLayout} from "../../layout/MainLayout";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {CategoryCard} from "./CategoryCard";

export default function LandingPage() {
    // Use main layout
    return (
        <MainLayout>
            <Box width="100%" height="100%" display="flex" flexDirection="column" mb="151px" >

                <Box sx={{
                    backgroundImage: `url(/assets/images/landing-page-background.jpg)`,
                    backgroundSize: "cover",
                    width: "100%",
                    height: "505px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }} >
                    <Typography textAlign="center" variant="h1" sx={{
                        color: "white"
                    }}>
                        Explora propiedades <br /> en El Salvador
                    </Typography>
                </Box>
                <Card sx={{
                    display: 'inline-flex',
                    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.15)',
                    p: '32px',
                    mt: '-56px',
                    mb: '56px',
                    mx: {xs: '17px', md: '198px'}
                }}>


                    <TextField
                        label="Buscar propiedades"
                        variant="outlined"
                        sx={{flexGrow: 1, mr: '8px'}}
                        InputProps={{
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

                    <FormControl sx={{mr: '8px'}}>
                        <Select sx={{width: "200px"}} value="default">
                            <MenuItem value="default" disabled>
                                En venta
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained"
                        endIcon={<SearchOutlinedIcon />}
                    >Buscar</Button>
                </Card>
                <Typography variant="h4" alignSelf="center" sx={{mt: '40px', mb: '53px'}}>Busca por categoría</Typography>
                <Grid spacing="20px" container px={{xs: '17px', md: '100px'}} alignSelf="center" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md="auto">
                        <CategoryCard name="Casas" image="/assets/images/casas.jpg" />
                    </Grid>
                    <Grid item xs={12} md="auto">
                        <CategoryCard name="Casas" image="/assets/images/casas.jpg" />
                    </Grid>
                    <Grid item xs={12} md="auto">
                        <CategoryCard name="Casas" image="/assets/images/casas.jpg" />
                    </Grid>
                </Grid>
                <Typography variant="h4" alignSelf="center" sx={{mt: '40px', mb: '53px'}}>Busca por categoría</Typography>
                <Grid spacing="20px" container px={{xs: '17px', md: '100px'}} alignSelf="center" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md="auto">
                        <CategoryCard name="Casas" image="/assets/images/casas.jpg" />
                    </Grid>
                    <Grid item xs={12} md="auto">
                        <CategoryCard name="Casas" image="/assets/images/casas.jpg" />
                    </Grid>
                    <Grid item xs={12} md="auto">
                        <CategoryCard name="Casas" image="/assets/images/casas.jpg" />
                    </Grid>
                </Grid>
            </Box>
        </MainLayout>);
}
