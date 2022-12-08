import { Link } from "react-router-dom"

function Navbar (){
    return (
        <nav className="navbar">
            <ul className="menuItems">
            <Link to="/" className ="nav-item" >Home</Link>
            <Link to="/menu" className ="nav-item">Menu</Link>
            <Link to="/orders" className ="nav-item" >Orders</Link>
            <Link to="/customers" className ="nav-item" >Customers</Link>
            {/* <Link to="/reviews" class ="nav-item">Reviews</Link> */}
            </ul>
        </nav>
    )

}
export default Navbar;