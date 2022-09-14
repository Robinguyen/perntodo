import React,{useState, createContext} from "react";
export const ProductContext  = createContext();// initilize context

export const ProductContextProvider = props =>{
    const [product, setPoduct] = useState([])

    return (
        <ProductContext.Provider value ={[product, setPoduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}

