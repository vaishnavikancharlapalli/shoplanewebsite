import {GETPRODUCTS,ADDPRODUCTSTOCART,CLEARCART} from "../actiontypes";

export const getproducts = (payload) => ({
    type: GETPRODUCTS,
    payload,
})

export const addproductstocart = (payload) => ({
    type: ADDPRODUCTSTOCART,
    payload,
})
export const clearcart = (payload) => ({
    type: CLEARCART,
    payload,
})

