function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a href="#" className="navbar-brand">Platforma kursów</a>
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
                            <a href="#" className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Kursy</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Instruktorzy</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Pomoc</a>
                        </li>
                    </ul>
                </div>
            </div>            
        </nav>
    );
}
export default Header;