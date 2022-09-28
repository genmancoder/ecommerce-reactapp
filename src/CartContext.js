import { createContext, useState } from "react";

const CartContext = createContext()

const cartitems = [{
    id: 3,
    title: 'test',
    price: 40,
    category: 'School Supplies',
    description: 'sample desc',
    discount: 40
},
{
    id: 2,
    title: 'test',
    price: 40,
    description: 'sample desc',
    discount: 40
}
]

export function CartProvider({children}){

    const [cart, setCart] = useState(cartitems)

    const addToCart = (id,title,price,description,discount) => {
        setCart((prev) => [...prev, {id,title,price,description,discount}])
    }


    return (<CartContext.Provider value={{cart, addToCart}}>{children}</CartContext.Provider>)
}

export default CartContext