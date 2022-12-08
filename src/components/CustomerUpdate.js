import { useParams } from "react-router-dom"
import { Button, Form, Container, Message } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { getRandomPrice } from "../ramdom/price";

function CustomerUpdate({ handleUpdate, setCustomer, customer, setWasClicked, index }) {
    const [name, setName] = useState(customer.name)
    const [phone, setPhone] = useState(customer.phone)
    const [email, setEmail] = useState(customer.email)
    const [address, setAddress] = useState(customer.address)
    const [id, setId] = useState(customer.id)


    const updateCustomer = {
        name: name,
        phone: phone,
        email: email,
        address: address
        //id:id
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/customers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateCustomer),
        })
            .then((r) => r.json())
            .then(data => {
                console.log(data)
                handleUpdate(index,data)
                setWasClicked(false)
            })
    }

    return (
        <Container className="formBackground">
            <br></br>
            <Form onSubmit={handleSubmit}>
                <Form.Field required>
                    <label>Name</label>
                    <input value={updateCustomer.name} onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field required>
                    <label>Phone</label>
                    <input value={updateCustomer.phone} onChange={(e) => setPhone(e.target.value)} />
                </Form.Field>
                <Form.Field required>
                    <label>Email</label>
                    <input value={updateCustomer.email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input value={updateCustomer.address} onChange={(e) => setAddress(e.target.value)} />
                </Form.Field>
                <Button>Update information</Button>
            </Form>
        </Container>

    )
}
export default CustomerUpdate
