import CustomerCard from './CustomerCard'
import { Container, Grid } from 'semantic-ui-react'
import { useState, useEffect } from 'react'

function CustomerContainer({ customers, setCustomers }) {
    const [filtered, setFiltered] = useState([])

   // console.log(customers)
    let handleDelete = (id) => {
        setFiltered(filtered.filter(customer => customer.id !== id))
    }
    let handleUpdate = (index, newData) => {
      let tempArray = filtered
      tempArray[index]= newData
      customerArray = tempArray
      setFiltered([...tempArray])
      setCustomers(tempArray)
      

    }
    let customerArray = filtered.map((customer,i) => <CustomerCard key={customer.id} index={i} handleUpdate={handleUpdate} handleDelete={handleDelete} customer={customer} customers={customers} />)

    useEffect(() => {
        fetch("http://localhost:9292/customers")
            .then(r => r.json())
            .then(customers => {
                setFiltered(customers)
                setCustomers(customers)
            })
    }, [])
    return (
        <div >
        <Container style={{ marginTop: "50px" }}>
            <h1 >Last Customers :</h1>
            <Grid columns={3} divided>
                <Grid.Row>
                    {/* bubbleTeasArray = bubbleTeas.map(bubbleTea => <OrderCard bubbletea = {bubbleTea} key = {bubbleTea.id}/> */}
                    {/* {bubbleTeasArray} */}
                    {customerArray}

                </Grid.Row>
            </Grid>
        </Container>
        </div>
    )
}

export default CustomerContainer
