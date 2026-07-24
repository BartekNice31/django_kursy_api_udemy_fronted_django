import {Link} from 'react-router-dom'
import Home from './Home'
import Info from './Info'
import About from './About'
function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Platforma kursów</Link>
                <button className="navbar-toggler" 
                type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav" 
                aria-expanded="false"
                aria-label="Toggle-navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Kursy</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Instruktorzy</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">O nas</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a id="navbarDropdown" href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </a> 
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/user-login">Logowanie</Link></li>
                                <li><Link className="dropdown-item" to="/register-user">Rejestracja</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/user-panel">Panel</Link></li>
                                <li><a href="#" className="dropdown-item">Wyloguj</a></li>
                            </ul> 
                        </li>  */}
                        <li className="nav-item dropdown">

                        <button
                            id="navbarDropdown" 
                            className="nav-link dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            User
                        </button>

                        <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown">

                            <li>
                                <Link className="dropdown-item" to="/login-user">
                                    Logowanie
                                </Link>
                            </li>

                            <li>
                                <Link className="dropdown-item" to="/register-user">
                                    Rejestracja
                                </Link>
                            </li>

                            <li>
                                <Link className="dropdown-item" to="/panel-user">
                                    Panel
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="dropdown-item">Wyloguj</a>
                            </li>
                        </ul>

                    </li> 
                    </ul>
                </div>
            </div>            
        </nav>
    );
}
export default Header;