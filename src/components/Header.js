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
                        <li className="nav-item">
                            <Link className="nav-link" to="/login-user">Logowanie</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register-user">Rejestracja</Link>
                        </li>
                    </ul>
                </div>
            </div>            
        </nav>
    );
}
export default Header;