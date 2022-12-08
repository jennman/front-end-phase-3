import OrderCard from './OrderCard'
import { Container,Grid } from 'semantic-ui-react'
function OrderContainer({orders, bubbleTeas, customers,setOrders}){
    console.log(orders)
    const ordersArray = orders.map(order => <OrderCard setOrders={setOrders} key = {setOrders.id} order = {order} key = {order.id}  customers = {customers} key = {customers.id} key = {order.id} orders={orders}/>)
    // const bubbleTeasArray = bubbleTeas.map(bubbleTea => <OrderCard bubbletea = {bubbleTea} key = {bubbleTea.id}/>)
    
    
    return (
        <Container style={{marginTop:"50px"}}>
        <h1 className="title" center >Last Orders:</h1>
        <Grid columns={3}>
            <Grid.Row>
            {/* bubbleTeasArray = bubbleTeas.map(bubbleTea => <OrderCard bubbletea = {bubbleTea} key = {bubbleTea.id}/> */}
                {/* {bubbleTeasArray} */}
                {ordersArray}
            </Grid.Row>
        </Grid>
    </Container>
    )
}
export default OrderContainer