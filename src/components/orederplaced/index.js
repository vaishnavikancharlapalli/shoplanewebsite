import react from "react"
import { connect } from "react-redux";

import "./orderplaced.css";
const Orderplaced = () => {
   
    return (  <div class="order-confirm">
    <img src="https://shoplane.netlify.app/img/img_confirm.png" alt=""/>
    <h3>Order Placed Successfully!!</h3>
    <p>We have sent you an email with the order details</p>
  </div>
  );
}
 

export default Orderplaced;