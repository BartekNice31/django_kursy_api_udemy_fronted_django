import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
function Login(){
    console.log("Logowanie login");
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                <div className="card"><h5 className="card-header">Logowanie użytkownika</h5></div> 
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label for="FullNameInput" className="form-label">Nazwa użytkownika</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label for="PasswordInput" className="form-label">Hasło</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input"/>
                            <label className="form-check-label" for="CheckBoxInput">Zapamiętaj mnie</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Zaloguj</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Login;