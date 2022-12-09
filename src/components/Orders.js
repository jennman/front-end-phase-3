import { useState } from "react";
import Navbar from "./Navbar";
import {Button,Form,Container,Message} from 'semantic-ui-react'
import { getRandomPrice } from "../ramdom/price";
import { Link } from "react-router-dom";

function Orders ({customers, bubbleTeas,setOrders, orders}){
    // handleChange = (e, { value }) => this.setState({ value })
    const randomPrice = getRandomPrice();
   // const [price, setPrice] = useState(0)
    const [size, setSize] = useState('')
    const [bubbleteaID, setBubbleteaID] = useState('')
    const [customerID, setCustomerID] = useState('')
    const [comment, setComment] = useState('')
 

    const newOrders = {
        price: randomPrice,
        size: size,
        bubbletea_id: bubbleteaID,
        customer_id: customerID,
        comment: comment
      }
//  console.log(newOrders)

    function handleSubmit (e){
        e.preventDefault()
        fetch("http://localhost:9292/orders", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newOrders)
          })
          .then((r) => r.json())
          .then((data) => {
          setOrders((currentOrder)=>[data, ...currentOrder])
          })
          //alert(`${orders.id}`)
    } 
//   console.log(customers)

    return(
        <div >
            <div>
            <Navbar/>
            </div>
            <br></br>
            <br></br>
            <div className="forms">
            <Container>
            <Message>
                <Message.Header>Are you a New Customer?</Message.Header>
                <p> Please register your information before continuing ...</p>
                <Link to= '/customers'>
                <Button color="blue" >Register Here</Button>
                </Link>
            </Message>
            </Container>
            <br></br><br></br><br></br>
            <Container >
            <Form >
            <Form.Field>
            <h3 className="label">Customer:</h3>
            <select
                placeholder="Select a Name"
                onChange={(e) => setCustomerID(e.target.value)}
                >
                <option value="none">Select you register Name:</option>
                {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                    {customer.name}
                </option>
                ))}
            </select>
            </Form.Field>
            <Form.Field>
            <h3 className="label">Menu:</h3>
            <select
                placeholder="Select a Name"
                onChange={(e) => setBubbleteaID(e.target.value)}
                >
                <option value="none">Choose a BubbleTea from the list</option>
                {bubbleTeas.map((bubbleTea) => (
                <option key={bubbleTea.id} value={bubbleTea.id}>
                    {bubbleTea.menu_name}
                </option>
                ))}
            </select>
            </Form.Field>
            
            <Form.Field>
            <h3 className="label">Drink Size:</h3>
            <select
                placeholder="Select the size of your drink"
                onChange={(e) => setSize(e.target.value)}
                >
                <option value="none">Select the size of your drink</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
            </select>
            </Form.Field>
            <Form.TextArea label='Add Notes:' placeholder='Any changes? Allergies?' onChange={(e) => setComment(e.target.value)}/>  
            {/* <Button onClick = {handleDelete}>Delete Order</Button> */}
            
            <Button onClick={handleSubmit}>Submit Order</Button>
            </Form>
            <br></br>
            <br></br>
            {/* <OrderContainer orders={orders} setOrders={setOrders}/> */}
            <br></br>
            <br></br>
            
            </Container>
            </div>
        </div>
    )
}
export default Orders