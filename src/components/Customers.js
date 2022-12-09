import { useState } from "react";
import Navbar from "./Navbar";
import {Button,Form,Message, Container} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"

function Customers(customers, setCustomers){
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const newCustomer = {
        name: name,
        phone: phone,
        email: email,
        address: address
    }
 //console.log(newOrders)
    let history = useHistory()
    const handleCustomer = (e) => {
        history.push(`/orders`)
        };

    function handleSubmit (e){
        e.preventDefault()
        fetch("http://localhost:9292/customers", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newCustomer)
        })
          .then((r) => r.json())
          .then((data) => {
          setCustomers((currentCustomer)=>[data, ...currentCustomer])
            })
            handleCustomer()
} 

    return(
        <div>
        <div>
        <Navbar/>
        </div>
         
        <div className="forms"> 
           
            <br></br><br></br>
            <Container>
                 <br></br><br></br>
            <Message>
                <Message.Header>Are you a Registered Customer?</Message.Header>
                <p> Submit your order</p>
                <Link to= '/orders'>
                <Button color="blue" >Order Now!</Button>
                </Link>
            </Message>
            </Container>
            <br></br><br></br>
            <Container className="formBackground">
            <Form>
                <br></br>
                <Form.Field  required >
                <label>Name</label>
                <input placeholder=' Insert your Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field required>
                <label>Phone</label>
                <input placeholder=' Insert your Phone' onChange={(e) => setPhone(e.target.value)}/>
                </Form.Field>
                <Form.Field required>
                <label>Email</label>
                <input placeholder=' Insert your Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Address</label>
                <input placeholder=' Insert your Address' onChange={(e) => setAddress(e.target.value)}/>
                </Form.Field>
                <Button onClick={handleSubmit}>Submit Order</Button>
                <br></br><br></br>
            </Form>
            </Container>
        </div>
        </div>
    )
}
export default Customers