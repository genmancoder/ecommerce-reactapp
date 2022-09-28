import { createContext, useState } from "react";

const CartContext = createContext()

const cartitems = [{
    id: 's3',
    title: 'Pencil Large X',
    price: 40,
    category: 'School Supplies',
    description: 'sample desc',
    discount: 40
},
{
    id: 's2',
    title: 'Sando For Kids',
    price: 40,
    category: 'Men\'s Apparel ',
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