import react from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import "./topbar.css";
const Topbar = (props) => {
console.log(props.cart)
console.log(props.total)
  return (  
      
        <div className="topbar">
         <Link to="/shoplanewebsite" className="text"> 
        <h1 className="head1">SHOP<span className="head2">LANE</span></h1>
        </Link>
      
        <div className="aitems">
            <Link to="/shoplanewebsite"className="text">
              <a href="" className="item">HOME</a>
            </Link>
          
        <Link to="/shoplanewebsite/cloths" className="text">
        <a href="" className="item">CLOTHINGS</a>
        </Link>
        <Link to="/shoplanewebsite/accessories"className="text">
        <a href="" className="item">ACCESSORIES</a>
        </Link>

       </div>


<div className="icons">
  <span className="icon"><i class="fas fa-search"></i></span>
  <Link to="/shoplanewebsite/bookcart"style ={{"textDecoration" : "none"}}>
  <span className="icon"><i class="fas fa-shopping-cart"></i><span className="cardcount">{props.cart.length}</span></span>
  </Link>
  <span className="icon"><i class="fas fa-user-circle"></i></span>
</div>


        </div>
        
    );
}
 
const mapStateToProps = (state)=>({
  cart:state.cart,
 total : state.Total,
})
// export default Topbar;
export default connect(mapStateToProps,null)(Topbar);