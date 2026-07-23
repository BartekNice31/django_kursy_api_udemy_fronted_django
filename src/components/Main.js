import Default from "./Default";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer"
function Main(){
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Footer/>
            {/* <Default/> */}
        </div>
    );
}
export default Main;