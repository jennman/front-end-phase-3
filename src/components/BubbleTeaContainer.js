import BubbleTeaCard from "./BubbleTeaCard";

function BubbleTeaContainer({bubbleTeas, orders}){
    const arrayOfBubbleTeas = bubbleTeas.map(bubbleTea =>  <BubbleTeaCard bubbleTea={bubbleTea} key={bubbleTea.id}/>)
    const arrayofOrders = orders.map(order => <BubbleTeaCard order = {order} key = {order.id}/>)
    return(
        <div className="bubble-tea-card">
            {arrayOfBubbleTeas}
            {arrayofOrders}
        </div>
    )
}

export default BubbleTeaContainer