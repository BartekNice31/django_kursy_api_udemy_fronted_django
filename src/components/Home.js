import Main from "./Main";
import {Link} from 'react-router-dom';
function Home(){
    return (
        <div className="container mt-4" >
            {/* Ostatnie kursy poczatek */}
            <h3 className="pb-1 mb-4">Ostatnie kursy</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="logo512.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1" className="btn btn-primary">Tytul kursu</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/2"><img src="logo512.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/2" className="btn btn-primary">Tytul kursu</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/3"><img src="logo512.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/3" className="btn btn-primary">Tytul kursu</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/4"><img src="logo512.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/4" className="btn btn-primary">Tytul kursu</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Ostatnie kursy koniec */}

            {/* Popularne kursy początek */}
            <div className="row">
                <h3 className="pb-1 mb-4 mt-5">Popularne kursy początek</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="/famous_course_detail/1"><img src="logo512.png" className="card-img-top" alt="foto"/></Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/famouse_course_detail/1" className="btn btn-primary">Tytul kursu</Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="/famous_course_detail/2"><img src="logo512.png" className="card-img-top" alt="foto"/></Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/famous_course_detail/2" className="btn btn-primary">Tytul kursu</Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="/famous_course_detail/3"><img src="logo512.png" className="card-img-top" alt="foto"/></Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/famous_course_detail/3" className="btn btn-primary">Tytul kursu</Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="/famous_course_detail/4"><img src="logo512.png" className="card-img-top" alt="foto"/></Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/famous_course_detail/4" className="btn btn-primary">Tytul kursu</Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Popularne kursy koniec */}

            {/* Popularni instruktorzy początek */}
            <h3 className="pb-1 mb-4 mt-5">Popularni Instruktorzy</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/instructor_detail/1"><img src="logo192.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/instructor_detail/1" className="btn btn-info">Instruktor</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/instructor_detail/2"><img src="logo192.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/instructor_detail/3" className="btn btn-info">Instruktor</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/instructor_detail/3"><img src="logo192.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/instructor_detail/3" className="btn btn-info">Instruktor</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/instructor_detail/4"><img src="logo192.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/instructor_detail/4" className="btn btn-info">Instruktor</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Popularni intruktorzy koniec */}

            {/* Ostatni instruktorzy początek */}

            {/* Ostatni instruktorzy koniec */}
        
            {/* Opinie studentów początek */}
            <h3 className="pb-1 mb-4 mt-5">Opinie studentów</h3>
            <div id="carouselOpinion" className="carousel slide bg-dark text-white py-5" > 
                {/* data-bs-ride="carousel" */}
                {/* powyższy komentarz- włączenie karuzeli w automacie */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselOpinion" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselOpinion" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselOpinion" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>Swietna platforma z super kursami!</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Jan Kowalski i jego umiejętności <cite title="PHP">PHP</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>Fenomenalna strona z kursami</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Jakub Kowalczyk i jego umiejętności <cite title="C#">C#</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>Ultra super strona z kursami!</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Filip Jankowski już potrafi! <cite title="Python">Python</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselOpinion" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselOpinion" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
            {/* Opinie studentów koniec */}
        </div>
    )
}
export default Home;