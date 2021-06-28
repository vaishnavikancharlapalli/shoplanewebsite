import React, { useEffect } from 'react'

import Carousel from "../carousel";
import Services from "../services";
import {getproducts} from "../../actions";
import { connect } from "react-redux";
import axios from "axios";
import Cards from "../cards";
import Cloths from "../cloths";
import { Link,BrowserRouter,Switch,Route } from 'react-router-dom';
import Accessories  from "../accessories";
const Home = (props) => {
 useEffect(()=>
 {
  axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
  .then((res)=>props.sendproductstostore (res.data))
 },[])

    return (  
        <>
        <Carousel/>
         <Services/>
         <Cloths/>
         <Accessories />
        {/* <h1>Clothing for Men and Women</h1>
        <div className ="cards">{
        props.products.length && props.products.slice(0,5).map((item) =>
          <Cards {...item} addproducts = { () => props.addproductstocart(item)}/>
         )}
    </div>  */}
      
    {/* <h1>Accessories for Men and Women</h1>
        <div className ="cards">{
        props.products.length && props.products.slice(5,10).map((item) =>
          <Cards {...item} addproducts = { () => props.addproductstocart(item)}/>
         )}
    </div>
     */}
    

        </>
    );
}
const mapStateToProps = (state) =>({
    products : state.products,
})
const mapDispatchToProps = (dispatch) =>({
    sendproductstostore : (payload) => dispatch(getproducts(payload)),
})
 
export default connect(mapStateToProps,mapDispatchToProps)(Home);
