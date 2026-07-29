import {Link} from "react-router-dom"
function Sidebar(){
    return (
        <div className="card">
            <h5 className="card-header">Panel użytkownika</h5>
            <div className="list-group list-group-flush">
                <Link to="/my-courses" className="list-group-item list-group-item-action">Moje kursy</Link>
                <Link to="/my-favourite-courses" className="list-group-item list-group-item-action">Moje ulubione kursy</Link>
                <Link to="/recommended-courses" className="list-group-item list-group-item-action">Polecane kursy</Link>
                <Link to="/profile-settings" className="list-group-item list-group-item-action">Ustawienia</Link>
                <Link to="/change-password" className="list-group-item list-group-item-action">Zmiana hasła</Link>
                <Link to="/logout" className="list-group-item list-group-item-action">Wylogowanie</Link>
            </div>
        </div>
    );
}
export default Sidebar;