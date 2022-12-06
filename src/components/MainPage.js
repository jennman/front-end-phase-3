import React from "react";
import HeaderPage from "./HeaderPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BubbleTeaContainer from "./BubbleTeaContainer";
function MainPage({bubbleTeas, orders}) {
    return( 
        <>
        
            <Navbar/>
            <HeaderPage/>
            <BubbleTeaContainer bubbleTeas={bubbleTeas} orders = {orders}/>
            <Footer/>
        
        </>
    )
}
export default MainPage;