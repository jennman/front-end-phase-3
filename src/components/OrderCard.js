import { Button, Card,Container,Grid } from 'semantic-ui-react'
import BubbleTeaContainer from './BubbleTeaContainer'
import {useHistory} from "react-router-dom"


function OrderCard({order,setOrders, orders}){
    
    function handleclickDelete(e){
        // console.log(e.target.value)
        // console.log("delete")
        e.preventDefault()
        let id = e.target.value
        fetch(`http://localhost:9292/orders/${id}`, {
            method: "DELETE",
        })
        .then(() => {
           const tempOrders = orders.filter(order.id !== id)
           setOrders(tempOrders)
        })
    }
    // let history = useHistory()
    // function handleclickUpdate(e){
    //     // console.log(e.target.value)
    //     // console.log("update")
    //     e.preventDefault()
    //     let id = e.target.value
    //     history.push(`/updateorder/${id}`)
    // }
    // const bubbleTeasArray = bubbleTeas.map(bubbleTea => console.log(bubbleTea))
    // console.log(bubbleTeasArray)
    
    return(
        <Grid.Column>
            <br></br>
        <Card>
                    <Card.Content>
                    <Card.Header>Order #: {order.id}</Card.Header>
                    <Card.Description>
                    Add Notes:
                    {/* {customers.name} */}
                    {/* {bubbleTea.menu_name} */}
                    {order.comment}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button value={order.id} basic color='red' onClick={handleclickDelete} >
                        Delete
                        </Button>
                    </div>
                    </Card.Content>
        </Card>
         </Grid.Column>
    )
}
export default OrderCard