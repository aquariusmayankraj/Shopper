import React, {useState,createContext} from "react";
import all_product from "../Components/Assets/all_product";

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < all_product.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;}
        
export const ShopContext = createContext(null);
const ShopContextProvider = (props)=>{
    const[cartItems,setCartItems] = useState(getDefaultCart());

    console.log(cartItems);
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

     const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
        }

         const getTotalCartItems = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
        }

     const removefromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {getTotalCartAmount,all_product,cartItems,addToCart,removefromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
