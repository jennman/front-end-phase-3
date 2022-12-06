import { Link } from "react-router-dom";
import videoBg from '../assets/test.mp4'
import { Button } from 'semantic-ui-react'


function LandingPage () {

    return (
    
    <div>
        {/* <h1>:)</h1> */}
        <div className='landing'>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
                <Link to="/mainpage">
                {/* <Button color='orange' id="start">Get Started!</Button> */}
                <Button className="ui orange button large" >Get Started!</Button>
                </Link>
        </div>
    </div>

    )}

export default LandingPage