import { Link } from "react-router-dom"

function Navbar (){
    return (
        <nav className="navbar">
            <ul class="menuItems">
            <Link to="/" class ="nav-item" >Home</Link>
            <Link to="/menu" class ="nav-item">Menu</Link>
            <Link to="/orders" class ="nav-item" >Orders</Link>
            <Link to="/customers" class ="nav-item" >Customers</Link>
            <Link to="/reviews" class ="nav-item">Reviews</Link>
            </ul>
        </nav>
    )

}
export default Navbar;