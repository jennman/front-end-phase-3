import { useState , useEffect } from "react";
import Navbar from "./Navbar";
import {Button,Form,TextArea,Message, Container} from 'semantic-ui-react'
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
    console.log(newCustomer)

    return(
        <div> 
            <Navbar/>
            <Message>
                <Message.Header>Are you a Regitered Customer?</Message.Header>
                <p> Submit your order</p>
                <Link to= '/orders'>
                <Button color="blue" >Order Now!</Button>
                </Link>
            </Message>
            <Container class="formBackground">
            <Form>
                <Form.Field>
                <label>Name</label>
                <input placeholder=' Insert your Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Phone</label>
                <input placeholder=' Insert your Phone' onChange={(e) => setPhone(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Email</label>
                <input placeholder=' Insert your Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Address</label>
                <input placeholder=' Insert your Address' onChange={(e) => setAddress(e.target.value)}/>
                </Form.Field>
                <Button onClick={handleSubmit}>Submit Order</Button>
            </Form>
            </Container>
        </div>
    )
}
export default Customers