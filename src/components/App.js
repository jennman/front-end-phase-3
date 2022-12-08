import './App.css';
import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";
import Orders from "./Orders";
import Menu from "./Menu";
import Customers from "./Customers";
import OrderContainer from "./OrderContainer";
import OrderUpdate from "./OrderUpdate";
import OrderCard from "./OrderCard";
import CustomerContainer from "./CustomerContainer";

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


  const fetchOrder = ()=> {
    fetch("http://localhost:9292/orders")
      .then(r => r.json())
      .then(orders => {
         //console.log(orders)
        setOrders(orders)
      })
    }

  useEffect(() => {
    fetchBubbleTea()
    fetchOrder()
  }, [])
 
  // function addNewCustomerReview(newReview){
  //   fetch("http://localhost:9292/customers", {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(newReview)
  //     })
  //     .then((r) => r.json())
  //     .then((newReviewObj) => setCustomers([...customers, newReviewObj]));
  //     }
    
    return (
      <Switch>
          <Route exact path = '/'>
            <LandingPage />
          </Route>
          <Route exact path = '/mainpage'>
          <MainPage bubbleTeas = {bubbleTeas} />
          </Route>
          <Route exact path = '/menu'>
            <Menu bubbleTeas = {bubbleTeas} />
          </Route>
          <Route exact path = '/orders'>
            <Orders bubbleTeas = {bubbleTeas} customers ={customers} setOrders={setOrders} orders = {orders}/>
            <OrderContainer orders = {orders} bubbleTeas = {bubbleTeas} customers = {customers}/>
          </Route>
          <Route exact path = '/customers'>
            <Customers customers ={customers} setCustomers={setCustomers}/>
            <CustomerContainer setCustomers={setCustomers} customers = {customers}/>
          </Route>
          <Route exact path = '/updateorder/:id'>
          <OrderUpdate bubbleTeas = {bubbleTeas} customers ={customers} setOrders={setOrders} orders = {orders}/>
          </Route>
          {/* <Route exact path = '/orders'>
          <OrderContainer orders = {orders} bubbleTeas = {bubbleTeas} customers = {customers}/>
          </Route> */}
          {/* <OrderCard bubbleTeas = {bubbleTeas} />
          <CustomerContainer customers = {customers} /> */}
       
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
  // const removeOrder = removeOrderObj => {
  //   const newOrder = orders.filter(orderObj => {
  //     return orderObj._id!== removeOrderObj._id;
  //   })
  //   setOrders(newOrder);
  //   fetch(`${"http://localhost:9292/bubbleteas"}/${removeOrderObj.id}`, {method: 'DELETE'})
  // }
</section> */}