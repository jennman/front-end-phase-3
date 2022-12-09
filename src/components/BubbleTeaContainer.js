import BubbleTeaCard from "./BubbleTeaCard";
import { Grid, Container} from 'semantic-ui-react'
function BubbleTeaContainer({bubbleTeas}){
     //const arrayOfBubbleTeas = bubbleTeas.map(bubbleTea => <BubbleTeaCard bubbleTea={bubbleTea} key={bubbleTea.id}/>)
    
    return(
    <Container  style={{marginTop:"50px"}}>
        <h1 className="title" >TRY OUR NEW MENU:</h1>
            <Grid columns={2} divided>
                <Grid.Row>{
                bubbleTeas.map(bubbleTea => <BubbleTeaCard bubbleTea={bubbleTea} key={bubbleTea.id}/>)
                }
                
                {/* {arrayOfBubbleTeas} */}
                </Grid.Row>
            </Grid>
    </Container>
    )
}

export default BubbleTeaContainer