
import './App.css';
import Topbar from "./components/topbar";
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
import Home from "./components/home";
import Cloths from "./components/cloths";
import Accessories from "./components/accessories"; 
import ProductDetails from "./components/productdetails";
import ShowCart from "./components/displaycarts";
import Orderplaced from './components/orederplaced';
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      
  
    
   <BrowserRouter>
     <Topbar/>
     {/* "homepage": "http://vaishnavikancharlapalli.github.io/shoplanewebsite",
     "predeploy": "npm run build",
    "deploy": "gh-pages -d build" */}
     <Switch>
       <Route path="/shoplanewebsite" exact component = {Home}/>
       <Route path="/shoplanewebsite/cloths" component={Cloths}/>
       <Route path="/shoplanewebsite/accessories"component ={Accessories}/>
       <Route path="/shoplanewebsite/product/:id" component={ProductDetails}/>
       <Route path="/shoplanewebsite/bookcart" component = {ShowCart}/>
       <Route path="/shoplanewebsite/orderplaced" component = {Orderplaced}/>
     </Switch>
     <Footer/>
 </BrowserRouter>


         
    </div>
  );
}

export default App;
