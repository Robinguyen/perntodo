import React, {useContext, useEffect} from "react";
import ProductFinder from "../apis/ProductFinder";
import { ProductContext } from "../context/ProductContext";

const ProductList =(props)=>{
   const {product, setproduct} =  useContext(ProductContext)
    //load data
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const Response = await ProductFinder.get("/")
                setproduct(Response.data.product)
                console.log(Response)
            }
            catch(err){
    
            }
        }
        fetchData();
       

    }, []);
    return(
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">LocationRange</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(product=>{
                        <tr>
                             <td>{product.name}</td>
                             <td>{product.price}</td>
                             <td>{product.location}</td>
                             <td>
                             <button className="btn btn-warning">Update</button>
                             </td>
                             <td> 
                                 <button className="btn btn-danger"> Delete</button>
                             </td>
                       </tr>
                    })}
                 
                </tbody>
            </table>
        </div>
              
    )
};
export default ProductList