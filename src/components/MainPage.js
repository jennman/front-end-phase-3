import React from "react";
import HeaderPage from "./HeaderPage";
import Footer from "./Footer";
import BubbleTeaContainer from "./BubbleTeaContainer";
function MainPage({bubbleTeas, orders}) {
    return( 
        <>
            <HeaderPage/>
            <BubbleTeaContainer bubbleTeas={bubbleTeas} orders = {orders}/>
            <Footer/>
        
        </>
    )
}
export default MainPage;