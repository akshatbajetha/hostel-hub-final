import hostelLogo from '../Hostel-Hub-Logo.png'
import {Link} from  "react-router-dom";

const Navbar = () => {
    return (
        <div className="container" id='nav'>
            <Link to="/">
            <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={hostelLogo} alt="" width="100px"></img>
                    </a>
                </div>
            </nav>
            </Link>
        </div>
    )
}

export default Navbar;