import react from "react"
import "./displaycarts.css";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {clearcart} from  "../../actions";
const ShowCart = (props) => {
  const setnull = []
    return (
    <section id="cart">
        <h1>CheckOut</h1>
        <div class="cart-container">
        <div class="left-side">
          <p>Total Items: <span id="number-of-item">{props.cart.length}</span></p>
         
       
      <div class="cart-items" id="cart-item-container">
      {props.showcarts ?.map((item)=>(
      <div class="itemscard">
        <img src={item.preview}/>
        <div class="detail">
            <h3>{item.name}</h3>
            <p>x{item.quantity}</p>
            <p>{item.price}</p>
        </div> 

     </div>
      ))}
      </div>
       </div>

       <div class="right-side">
          <div class="total-amount">
            <h2>Total Amount</h2>
            <p>Total Amount: Rs <span id="total-amount">{props.showcarts?.reduce((acc,item) => acc + item.price * item.quantity,0)}</span></p>
            <Link to="/shoplanewebsite/orderplaced" style ={{"textDecoration" : "none"}}>
              <button id="place-order" onClick ={() => props.setempty()}>Place Order</button>
              </Link>
            
          </div>
        </div>

      </div>
    </section>
     );
}
const mapStateToProps = (state) =>({
    showcarts : state.Total,
    cart : state.cart,
})
const mapDispatchToProps = (dispatch) =>({
  setempty : () =>dispatch(clearcart()),
})
export default connect(mapStateToProps,mapDispatchToProps)(ShowCart);