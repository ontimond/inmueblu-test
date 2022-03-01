import {Card, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material";

export function CategoryCard(props) {
    const {name, image, url} = props;

    return (
        <Card sx={{minWidth: "400px", width: '100%', borderRadius: '10px'}}>
            <CardMedia
                component="img"
                alt={name}
                height="259px"
                image={image}
            />
            <CardContent sx={{pt: '32px', px: '32px', backgroundColor: 'primary.main', color: 'white'}}>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions sx={{pb: '32px', px: '32px', backgroundColor: 'primary.main'}}>
                <Button size="small" variant="contained" color="secondary" sx={{backgroundColor: 'white', color: 'text.primary'}} >Ver más</Button>
            </CardActions>
        </Card>);
}
