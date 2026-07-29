import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";

function MyCourses(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Moje kursy</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nazwa kursu</th>
                                        <th>Autor kursu</th>
                                        <th>Akcja</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Programowanie w </td>
                                        <td>Jan Kowalski</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm active">Delete</button>
                                        </td>
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

export default MyCourses;