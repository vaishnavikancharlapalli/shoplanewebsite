import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from "axios";
import "./productdetails.css";
import { connect } from 'react-redux';
import {addproductstocart} from "../../actions";
const ProductDetals = (props) => {
   const [apidata,setapidata] = useState([])
  
   const[index,setindex] = useState("0")
    const {id} = useParams()
    useEffect(()=>
    {
     axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`)
     .then((res)=>
     {
     setapidata(res.data)
     setpreviewimg(res.data.preview)
     }
     )
     
    },[])
    const[previewimg,setpreviewimg] = useState(null)
    console.log(apidata.photos)
    return (
        <>


      <div className="mainpage">
           <div className="leftpart">
             
                  <img className="thumbnail"src={previewimg}/>
    
           </div>
           <div className="rightpreview">
                <div className="product-description">
                 <h1>{apidata.name}</h1>
                 <h4 className="cardbrand">{apidata.brand}</h4> 
                 <h3>Price: Rs <span id="price">{apidata.price}</span></h3>
                 <div class="description">
                       <h3>Description</h3>
                       <p id="description">{apidata.description}</p>
                 </div>

              <div className="product-preview">
                   <h3>Product Review</h3>
                   <div class="previewImg">
                      {apidata.photos ?.map((item,indexs) => 
                            <img id ={indexs} src={item} className = {index == indexs ? "active" : ""} onClick = {() => 
                              {
                                    setpreviewimg(item)
                                    setindex(indexs)
                        }
                  }/>
                      )}
                  </div>
              </div>
            </div>
            <div class="btn">
            <button id="add-to-cart" onClick ={() =>props.addcart(apidata)}>Add to Cart</button>
          </div>


           </div>
      </div>







        </>    
  
  );
}

const mapDispatchToProps = (dispatch) =>({
  addcart : (payload) => dispatch(addproductstocart(payload))
})

export default connect(null,mapDispatchToProps)(ProductDetals);