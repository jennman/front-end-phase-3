import React from "react";
import Navbar from "./Navbar";
import BubbleTeaContainer from "./BubbleTeaContainer";

function Menu ({bubbleTeas, orders}){
    return(
        <div>
            test Menu
        <Navbar/>
        <BubbleTeaContainer bubbleTeas={bubbleTeas} orders = {orders}/>   
        </div>
    )
}
export default Menu