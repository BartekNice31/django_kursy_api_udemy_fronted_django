import Default from "./Default";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer"
import About from "./About"
import {Routes,Route} from 'react-router-dom' ;
import Info from './Info';
import AboutCourse2 from "./AboutCourse2" 
import AboutCourse1 from "./AboutCourse1"
function Main(){
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/about_course_1" element={<AboutCourse1/>}/>
                <Route path="/about_course_2" element={<AboutCourse2/>}/> 
            </Routes>
            
            <Footer/>
            {/* <Default/> */}
        </div>
    );
}
export default Main;