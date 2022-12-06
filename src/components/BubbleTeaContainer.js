import BubbleTeaCard from "./BubbleTeaCard";
import { Card, Container} from 'semantic-ui-react'
function BubbleTeaContainer({bubbleTeas, orders}){
    const arrayOfBubbleTeas = bubbleTeas.map(bubbleTea => <BubbleTeaCard bubbleTea={bubbleTea} key={bubbleTea.id}/>)
    const arrayofOrders = orders.map(order => <BubbleTeaCard order = {order} key = {order.id}/>)
    return(
        <Container style={{marginTop:"50px"}}>
            <h1 class="title" center >Try our new Menu:</h1>
            <Card.Group stackable itemsPerRow={2}
            style={{
                marginBottom:'100px',
                marginTop:'50px',
                marginRight:'50px',
                marginLeft:'50px'
            }}
            >
                {arrayOfBubbleTeas}
                {arrayofOrders}
            </Card.Group>
        </Container>
    )
}

export default BubbleTeaContainer