export const initialState ={
    cart: [],
};

export const getBasketTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "Add_to_Cart":
            return{
                ...state,
                cart: [...state.cart, action.item]
            }
            break;
        
        case "REMOVE_FROM_BASKET" :
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );    

            let newCart = [...state.cart];

            if(index>=0){
                newCart.splice(index, 1);

            } else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in cart!`
                )
            }
            
            return{
                ...state,
                cart: newCart
            }

        default:
            return state;
            break;
    }
}

export default reducer;
