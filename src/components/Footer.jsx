import {Typography} from "@mui/material";
import {Box} from "@mui/system";
import {Grid} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {

    return (
        <Box display="flex" flexDirection="column" justifyContent="stretch" alignItems="stretch" >
            <Box backgroundColor="#F7F8FA" p={{xs: "40px 17px", md: "40px 100px"}}>
                <Grid container gap="56px">
                    <Grid item xs sx={{display: "flex", flexDirection: "column"}}>

                        <Box display="inline-flex" mb="64px">
                            <Box sx={{mr: "10px"}} component="img" src="logo.svg"></Box>
                            <Typography color="primary" fontSize={22} fontWeight={700}>
                                Inmueblu
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="#4D4D4D" mb="16px">
                            (+503) 0000 0000
                        </Typography>
                        <Typography variant="body2" color="#4D4D4D" mb="16px">
                            contacto@propi.com
                        </Typography>
                        <Typography variant="body2" color="#4D4D4D" mb="72px">
                            Santa Elena | El Salvador
                        </Typography>
        <Box>

                        <FacebookIcon sx={{color:"#4D4D4D", mr: "20px"}} />
                        <FacebookIcon sx={{color:"#4D4D4D", mr: "20px"}} />
                        <FacebookIcon sx={{color:"#4D4D4D", mr: "20px"}} />
        </Box>
                    </Grid>
                    <Grid item xs="auto" sx={{display: "flex", flexDirection: "column"}}>

                        <Typography variant="h4" mb="24px">
                            Servicios
                        </Typography>
                        <Typography variant="body2" color="#4D4D4D" mb="16px">
                            Buscar propiedades
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" sx={{display: "flex", flexDirection: "column"}}>

                        <Typography variant="h4" mb="24px" >
                            Portal vendedores
                        </Typography>
                        <Typography variant="body2" color="#4D4D4D" mb="16px">
                            Publicar una propiedad
                        </Typography>
                        <Typography variant="body2" color="#4D4D4D" mb="16px">
                            Mis propiedades
                        </Typography>
                        <Typography variant="body2" color="#4D4D4D" mb="16px">
                            Mi cuenta
                        </Typography>
                    </Grid>
                    <Grid item xs="auto" sx={{display: "flex", flexDirection: "column"}}>

                        <Typography variant="h4" mb="24px">
                            Info
                        </Typography>
                        <Typography variant="caption" mb="16px">
                            FAQ
                        </Typography>
                        <Typography variant="caption" mb="16px">
                            Ayuda
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box padding="16px 80px" bgcolor="primary.main">
                <Typography variant="body1" color="white">
                    Inmueblu @ 2022  | Terminos y condiciones | Politica de privacidad
                </Typography>
            </Box>
        </Box >
    );
}
