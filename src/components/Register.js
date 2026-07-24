import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

function Register(){
    console.log("Rejestracja login");
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card"><h5 className="card-header">Rejestracja użytkownika</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="FullNameInput" className="form-label">Pełna nazwa</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="EmailInput" className="form-label">Email użytkownika</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="PasswordInput" className="form-label">Hasło użytkownika</label>
                                    <input type="password" className="form-control"></input>
                                </div> 
                                <div className="mb-3">
                                    <label for="SkillInput" className="form-label">Kwalifikacje</label>
                                    <textarea className="form-control">
                                        
                                    </textarea>
                                    <div className="form-text">
                                            Programowanie, biznes, pisanie
                                        </div>
                                </div>
                                <button type="submit" className="btn btn-secondary">Zarejestruj</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;