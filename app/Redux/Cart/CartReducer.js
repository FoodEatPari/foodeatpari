import { ADD_ITEM, ADD_QTY, REMOVE_ITEM, REMOVE_QTY } from "./CartTypes"


const initialState = {
    cart:[]
}

console.log(initialState.cart)
const  cartReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_ITEM:
            return{
              
              cart:[...state.cart,action.payload]             

                
            };
            case ADD_ITEM:
                return{
                  
                  cart:[...state.cart,action.payload]             
    
                    
                };


            default: return state
    
           
    }
}

export default cartReducer;