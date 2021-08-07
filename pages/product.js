import React,{useState} from 'react'
import ProductItem from '../components/ProductItem'
import {GetData} from '../Utils/FetchData'

export default function product(props) {
    const [productList, setProductList] = useState(props.productProps)
    const showProduct = ()=>{
        return productList.map((product)=>{
            return <ProductItem product={product} key={product._id}></ProductItem>
        })
    }
    return (
        <div className="container" style={{marginTop:'20px'}}>
            <div className="row">
            {showProduct()}
            </div>
        </div>
    )
}
export async function getServerSideProps(){
    const res  = await GetData('product')
    console.log(res);       
    return {
        props:{
            productProps: res.products,
            result: res.result  
        },
    }
}
/* export de */
