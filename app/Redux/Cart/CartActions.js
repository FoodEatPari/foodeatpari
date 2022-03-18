import { ADD_ITEM, ADD_QTY } from "./CartTypes"



export const Additem = (data)=>async(dispatch)=>{
    dispatch({type:ADD_ITEM,payload:data})
}


export const AddQlty =(data)=>async(dispatch)=>{
    dispatch({type:ADD_QTY,payload:data})
}