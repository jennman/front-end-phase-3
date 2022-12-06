import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function BubbleTeaCard({bubbleTea, order}){
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                {bubbleTea.base}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {bubbleTea.topping_1}
                {bubbleTea.topping_2}
                </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={bubbleTea.image_url}
                alt="Live from space album cover"
            />
        </Card>
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