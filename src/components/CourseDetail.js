import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
function CourseDetail(){
    let {course_id}=useParams();
    return (
        // <h1>Course Detail {course_id}</h1>
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    {/* Obraz kursu */}
                    <img src="/logo512.png" className="img-thumbnail" alt="foto"></img>
                </div>
                <div className="col-8">
                    <h3>Tytuł kursu</h3>
                    <p>Informacje o kursie</p>
                    <p className="fw-bold">Autor kursu: <a href="#">Instruktor 1</a></p>
                    <p className="fw-bold">Czas trwania: <a href="#">Czas trwania 5 godzin 20 minut</a></p>
                    <p className="fw-bold">Ilość uczestników: <a href="#">50 uczestników</a></p>
                    <p className="fw-bold">Oceny 5/5</p>
                </div>
            </div>
            {/**Kursy wideo */ }
            <div className="card mt-4">
                <h3 className="group-header">Lista lekcji</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Wiadomości wstępne
                        <button className="btn btn-sm btn-secondary float-end">
                            <i className="bi bi-play-circle-fill"></i>
                        </button>
                    </li>
                    <li className="list-group-item">
                        Przygotowanie projektu
                        <button className="btn btn-sm btn-secondary float-end">
                            <i className="bi bi-play-circle-fill"></i>
                        </button>
                    </li>
                    <li className="list-group-item">
                        Zaczynamy
                        <button className="btn btn-sm btn-secondary float-end">
                            <i className="bi bi-play-circle-fill"></i>
                        </button>
                    </li>
                    <li className="list-group-item">
                        Wstep do praktyki
                        <button className="btn btn-sm btn-secondary float-end">
                            <i className="bi bi-play-circle-fill"></i>
                        </button>
                    </li>
                </ul>
                </div>
                {/* Podobne kursy */}
                <div class="row mt-4">
                    <div class="col-md-3">
                        <div className="card"> 
                            <Link to="/detail/4">
                                <img src="/logo512.png" className="card-img-top" alt="foto"></img>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/detail/1" className="btn btn-primary">Tytuł kursu</Link>
                                </h5>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="/logo512.png" className="card-img-top" alt="foto"/></a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/detail/1" className="btn btn-primary">Tytuł kursu</Link>
                                </h5>
                            </div>
                            
                        </div>
                    </div>
            </div>

        </div>
    );
}
export default CourseDetail;