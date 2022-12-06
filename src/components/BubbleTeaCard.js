
function BubbleTeaCard({bubbleTea, order}){
    return (
    <div className="ui eight four column image cardImage">
        {/* <h1>{bubbleTea.image_url}</h1> */}
        <img src={bubbleTea.image_url} alt = 'pic here'/>
        <h1>{bubbleTea.base}</h1>
        <h2>{bubbleTea.topping_1}</h2>
        <h3>{bubbleTea.topping_2}</h3>
        {/* <h4>{order.price}</h4> */}
    </div>
    )
}
export default BubbleTeaCard