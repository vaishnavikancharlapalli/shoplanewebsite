import react from "react";
import { connect } from "react-redux";
import Cards from "../cards";

const  Accessories = (props) => {
    return (
        <>
   <h1>Accessories  for Men and Women</h1>
        <div className ="cards">{
        props.products.length && props.products.slice(5,10).map((item) =>
          <Cards {...item}/>
         )}
    </div> 
        </>
     );
}
 const mapStateToProps = (state) =>({
     products : state.products, 
 })
export default connect(mapStateToProps,null) (Accessories );