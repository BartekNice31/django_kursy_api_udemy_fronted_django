import {Link} from "react-roter-dom"
function Sidebar(){
    return (
        <div className="card">
            <h5 className="card-header">Panel użytkownika</h5>
            <div className="list-group list-group-flush">
                <Link to="/courses" className="list-group-item list-group-item-action">Moje kursy</Link>
                <Link to="/my_favourite_courses" className="list-group-item list-group-item-action">Moje ulubione kursy</Link>
            </div>
        </div>
    );
}
export default Sidebar;