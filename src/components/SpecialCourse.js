import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
function SpecialCourse(){
    let {special_course_id}=useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                <img src="/logo192.png" className="img-thumbnail"></img>
                </div>
                <div className="col-8">
                    <h3>Tytuł specjalnego kursu:</h3>
                    <p className="fw-bold">Autor specjalnego kursu: <a href="#">Instruktor</a></p>
                    <p className="fw-bold">Ilość trwania kursu: <a href="#">20 godzin 10 minut</a></p>
                    <p className="fw-bold">Liczba uczestników: <a href="#">2000 uczestników</a></p>
                    <p className="fw-bold">Oceny kursu 5/5</p>
                </div>
            </div> 
            <div className="card">
                <h3 className="card-header">Lista lekcji</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        
                    </li>
                </ul>
            </div>           
        </div>
        // <h1>This is a special course {special_course_id}</h1>
    );
}
export default SpecialCourse;