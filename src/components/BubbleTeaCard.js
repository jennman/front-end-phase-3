import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid,Button} from 'semantic-ui-react'
import { Link } from "react-router-dom";
function BubbleTeaCard({bubbleTea}){
    return (
        <Grid.Column>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto',width: 300 }}>
                    <Typography component="div" variant="h5">
                    {bubbleTea.menu_name}
                    </Typography>
                    <br></br><br></br><br></br>
                    <Link to="/orders">
                    <Button color='orange'>Order Now!</Button>
                    </Link>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 , height: 188}}
                    image={bubbleTea.image_url}
                    id="bubbletea_image"
                />
            </Card>
            <br></br>
        </Grid.Column>
    )
}
export default BubbleTeaCard