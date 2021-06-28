import react from "react";
import { connect } from "react-redux";
import Cards from "../cards";
import {addproducts} from "../../actions";
const  Cloths= (props) => {
    return (
        <>
   <h1>Clothing for Men and Women</h1>
        <div className ="cards">{
        props.products.length && props.products.slice(0,5).map((item) =>
          <Cards {...item}/>
         )}
    </div> 
        </>
     );
}
 const mapStateToProps = (state) =>({
     products : state.products, 
 })
 

export default connect(mapStateToProps,null) (Cloths);