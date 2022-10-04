import { createContext, useState } from "react";

const CartContext = createContext()


const db = localStorage.getItem('gcart')
const storedCart = db ? JSON.parse(db) : [];


export function CartProvider({children}){

    const [cart, setCart] = useState(storedCart)

    const addToCart = (id,title,price,description,image,discount) => {
        setCart((prev) => [...prev, {id,title,price,description,image,discount}])

        const nstate = [...cart, {id,title,price,description,image,discount}]
        localStorage.setItem('gcart', JSON.stringify(nstate))
    }


    return (<CartContext.Provider value={{cart, addToCart}}>{children}</CartContext.Provider>)
}

export default CartContext