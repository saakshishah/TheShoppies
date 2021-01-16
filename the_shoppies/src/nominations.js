export const initialState = {
    cart: []
};

export const cartSubTotal = (cart) =>
cart?.reduce((amount,item) => item.price + amount, 0);

export const cartTax = (cart) =>
cartSubTotal(cart) * 0.13

export const cartTotal = (cart) =>
cartSubTotal(cart) + cartTax(cart)

const reducer = (state, action) => {
    console.log(action.type)
    switch(action.type){
        case 'Add_item_to_cart':
            return {...state,cart:[...state.cart, action.item]};

        case 'Remove_item_from_cart':
            let newCart = [...state.cart];

            const i = state.cart.findIndex((cartItem) => cartItem.barcode === action.barcode)

            if (i >= 0){
                newCart.splice(i,1);
            }
            return{...state, cart:newCart};

        default:
            return state;
    }
};

export default reducer;