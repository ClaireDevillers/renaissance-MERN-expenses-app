import './Nav.css'
import { Link } from 'react-router-dom'


function Nav(props) {
    return (
        <div >
            <header className="mobile-header">
                <span>
                    <Link to="/home">
                        <img src="logoRenaissance.webp" alt="logo" />
                    </Link>
                </span>
                <nav>
                    <div data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars burger"></i>
                    </div>
                </nav>
            </header>
            <aside className="mobile-header collapse" id="navbarToggleExternalContent">
                <div className="drop-down">
                    <h4>Profile</h4>
                    <h4>Logout</h4>
                </div>
            </aside>
        </div>
    );
}



export default Nav