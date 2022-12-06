import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [bubbleTeas, setBubbleTeas] = useState([])
  const [customers, setCustomers] = useState([])
  // console.log("print", bubbleTeas)
  

const fetchBubbleTea =()=> {
    fetch("http://localhost:9292/bubbleteas")
    .then(r => r.json())
    .then(bubbleTeas => {setBubbleTeas(bubbleTeas)
    
  })
}
const fetchCustomer = ()=> {
  fetch("http://localhost:9292/customers")
    .then(r => r.json())
    .then(customers => {setCustomers(customers)
    })
  }

  const fetchOrder = ()=> {
    fetch("http://localhost:9292/orders")
      .then(r => r.json())
      .then(orders => {console.log(orders)
      setCustomers(orders)
      })
    }
  useEffect(() => {

    fetchBubbleTea()

    fetchCustomer()

    fetchOrder()
  
  
  }, [])
  
  return (
    <div className="App">
      <section>
        {
          bubbleTeas.map((bubbleTea) => {
            return (
            <div className="ui eight four column image cardImage">
              <img src={'https://www.seekpng.com/png/small/115-1155753_boba-milk-tea-png-clipart-freeuse-gong-cha.png' } alt = 'pic here'/>
              <h1>{bubbleTea.base}</h1>
              <h2>{bubbleTea.topping_1}</h2>
              <h3>{bubbleTea.topping_2}</h3>
            </div>
            )
          })
        }
      </section>
      <section>
        {
          customers.map((customer) => {
            return (<div>
              <h1>{customer.name}</h1>
            </div>
            )
          })
        }
      </section>
    </div>  
  );
}

export default App;
