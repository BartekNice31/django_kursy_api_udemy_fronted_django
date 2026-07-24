import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

function Panel(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">Panel użytkownika</h5>
                        <div className="list-group list-group-flush">
                            <Link to="/" className="list-group-item list-group-item-action">Moje kursy</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Ulubione kursy</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Polecane kursy</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Ulubieni instruktorzy</Link> 
                            <Link to="/" className="list-group-item list-group-item-action">Ustawienia</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Zmiana hasła</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Wylogowanie</Link>
                        </div>
                    </div>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Moje kursy</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nazwa kursu</th>
                                        <th>Autor</th>
                                        <th>Akcja</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Php programowanie</td>
                                        <td><Link to="/">Jan Kowalski</Link></td>
                                        <td>
                                            <button className="btn btn-primary">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Programowanie w Pythonie</td>
                                        <td><Link to="/">Rafał Mobilo</Link></td>
                                        <td><button className="btn btn-primary">Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Panel;