import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
function InstructorDetail(){
    let {instructor_id}=useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="foto"></img>
                </div>
            </div>
        </div>
        // <h1>Instructor detail {instructor_id}</h1>
    );
}   
export default InstructorDetail;