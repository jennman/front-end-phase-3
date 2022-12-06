import './App.css';
import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";


function App() {

  const [bubbleTeas, setBubbleTeas] = useState([])
  const [customers, setCustomers] = useState([])
  const [orders, setOrders] = useState([])  

const fetchBubbleTea =()=> {
    fetch("http://localhost:9292/bubbleteas")
    .then(r => r.json())
    .then(bubbleTeas => {
      // console.log(bubbleTeas)
      setBubbleTeas(bubbleTeas)
    
  })
}
const fetchCustomer = ()=> {
  fetch("http://localhost:9292/customers")
    .then(r => r.json())
    .then(customers => {
      // console.log(customers)
       setCustomers(customers)
    })
  }

  const fetchOrder = ()=> {
    fetch("http://localhost:9292/orders")
      .then(r => r.json())
      .then(orders => {
        console.log(orders)
        // setOrders(orders)
      })
    }

  useEffect(() => {

    fetchBubbleTea()

    fetchCustomer()

    fetchOrder()
  
  
  }, [])
  
 
  return (
    <Switch>
          <Route exact path = '/'>
            <LandingPage />
          </Route>
          <Route exact path = '/mainpage'>
            <MainPage bubbleTeas = {bubbleTeas} orders = {orders} />
          </Route>
    </Switch>
  );
}

export default App;

{/* <section>
  {
    customers.map((customer) => {
      return (<div>
        <h1>{customer.name}</h1>
      </div>
      )
    })
  }
</section> */}