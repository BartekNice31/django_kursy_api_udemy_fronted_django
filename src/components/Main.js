import Default from "./Default";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer"
import About from "./About"
import {Routes,Route} from 'react-router-dom' ;
import Info from './Info';
import AboutCourse2 from "./AboutCourse2" 
import AboutCourse1 from "./AboutCourse1"
import CourseDetail from "./CourseDetail";
import InstructorDetail from "./InstructorDetail"
import SpecialCourse from "./SpecialCourse"
import Login from "./Login";
import Register from "./Register";
import Logowanie from "./Logowanie";
import Rejestracja from "./Rejestracja";
function Main(){
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/about_course_1" element={<AboutCourse1/>}/>
                <Route path="/about_course_2" element={<AboutCourse2/>}/> 
                <Route path="/detail/:course_id" element={<CourseDetail/>}/>
                <Route path="/instructor_detail/:instructor_id" element={<InstructorDetail/>}/>
                <Route path="/famous_course_detail/:special_course_id" element={<SpecialCourse/>}/>
                <Route path="/login-user" element={<Login/>}/>
                {/* <Route path="/login_user" element={<h1>Logowanie</h1>}/> */}
                <Route path="/register-user" element={<Register/>}/>
                <Route path="/logowanie_uzytkownika" element={<Logowanie/>}/>
                <Route path="/rejestracja_uzytkownika" element={<Rejestracja/>}/>
            </Routes>
            
            <Footer/>
            {/* <Default/> */}
        </div>
    );
}
export default Main;