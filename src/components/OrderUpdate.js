import {useParams} from "react-router-dom"
import {Button,Form,Container,Message} from 'semantic-ui-react'
import { useState , useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { getRandomPrice } from "../ramdom/price";

function OrderUpdate({customers, bubbleTeas,setOrders, orders}){
    let {id} = useParams();
    console.log(id)

    const [formData, setFormData] = useState({
        price: "",
        customer_id: "",
        bubbletea_id: "",
        size: "",
        comment: ""
    })

    
    function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/orders/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((r) => r.json())
        .then(data => {
            setOrders(current => [...current])
            setFormData({
               price: "",
               customer_id: "",
               bubbletea_id: "",
               size: "",
               comment: ""
            })
        })
    }


    return(
        <div >
            <Navbar/>
            <br></br>
            <br></br>
            <Container>
            <Message>
                <Message.Header>Are you a New Customer?</Message.Header>
                <p> Please register your information before continuing ...</p>
                <Link to= '/orders'>
                <Button color="blue" >Return to Orders</Button>
                </Link>
            </Message>
            </Container>
            <br></br><br></br><br></br>
            <Container className="formBackground">
            <Form >
            <Form.Field>
            <h3 className="label">Customer:</h3>
            <Form.Input fluid label='First name' placeholder='Read only' readOnly />
            </Form.Field>
            <Form.Field>
            <h3 className="label">Menu:</h3>
            <select
                placeholder="Select a Name"
                // onChange={(e) => setBubbleteaID(e.target.value)}
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
                // onChange={(e) => setSize(e.target.value)}
                >
                <option value="none">Select the size of your drink</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
            </select>
            </Form.Field>
            <Form.TextArea label='Comments' placeholder='Tell us any recomendation' 
            // onChange={(e) => setComment(e.target.value)}
            />  
            {/* <Button onClick = {handleDelete}>Delete Order</Button> */}
            
            <Button onClick={handleSubmit}>Submit Order</Button>
            </Form>
            <br></br>
            <br></br>
           
            
            </Container>
        </div>
    )
}
export default OrderUpdate;