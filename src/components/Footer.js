import {Link} from "react-router-dom";
import {useParams} from "react-router-dom"; 
function Footer(){
    return (
        <footer className="text-muted py-5 border-top mt-5">
            <div className="container">
                <p className="float-end mb-1">
                    {/* <a href="#">Powrót</a> */}
                    <Link to="/">Powrót</Link>
                </p>
                <p className="mb-1">To jest strona serwis z kursami video!</p>
                <p className="mb-0">
                    <a href="#">Zapraszamy do nauki!</a>
                    {/* <Link to="/"></Link> */}
                </p>
            </div>
        </footer>
    );
}
export default Footer;