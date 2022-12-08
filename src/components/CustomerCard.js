import { Button, Card,Container,Grid } from 'semantic-ui-react'
import {useState} from 'react'
import CustomerUpdate from './CustomerUpdate'


function CustomerCard({customer,customers,setCustomer,setCustomerFilter,handleDelete, index,handleUpdate}){

        const [wasClicked, setWasClicked]= useState(false)

    function handleclickDelete(e){
        // console.log(e.target.value)
        // console.log("delete")
        e.preventDefault()
        let id = parseInt(e.target.value)

        fetch(`http://localhost:9292/customers/${id}`, {
            method: "DELETE",
        })
        .then(() => {
           handleDelete(id)
        })
    }
    function handleclickUpdate(){
        setWasClicked(current => !current)
    }
    return(
        <Grid.Column>
        <br></br>
            <Card>
                <Card.Content>
                <Card.Header>Client: {customer.name}</Card.Header>
                <Card.Meta>
                Email:{customer.email}
                </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                    <Button value={customer.id} basic color='green'
                    onClick={handleclickUpdate}>
                    {wasClicked? "Hide Form" :"Edit"}
                    </Button>
                    <Button value={customer.id} basic color='red' 
                    onClick={handleclickDelete}>
                    Delete
                    </Button>
                </div>
                </Card.Content>
            </Card>
            {wasClicked? <CustomerUpdate handleUpdate={handleUpdate} index={index} setWasClicked={setWasClicked} setCustomer={setCustomer} customer={customer}/> : null}
        </Grid.Column>
            
    
    )
}

export default CustomerCard