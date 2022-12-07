import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid} from 'semantic-ui-react'
function BubbleTeaCard({bubbleTea, order}){
    return (
        <Grid.Column>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto',width: 300 }}>
                    <Typography component="div" variant="h5">
                    {bubbleTea.base.toUpperCase()}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                    <b>Topping1 :</b>{bubbleTea.topping_1} 
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                    <b>Topping_2 :</b>{bubbleTea.topping_2}
                    </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 , height: 188}}
                    image={bubbleTea.image_url}
                    alt={bubbleTea.base}
                    id="bubbletea_image"
                />
            </Card>
            <br></br>
         </Grid.Column>
    // <div className="ui eight four column image cardImage">
    //     {/* <h1>{bubbleTea.image_url}</h1> */}
    //     <img src={bubbleTea.image_url} alt = 'pic here'/>
    //     <h1></h1>
    //     <h2>{bubbleTea.topping_1}</h2>
    //     <h3>{bubbleTea.topping_2}</h3>
    //     {/* <h4>{order.price}</h4> */}
    // </div>
    )
}
export default BubbleTeaCard