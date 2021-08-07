import React, { useState, useRef, useEffect } from 'react'
import { GetData } from './../../Utils/FetchData'
export default function detailProduct(props) {
    const [product] = useState(props.props.product);
    const [price, setPrice] = useState(product.price)
    const [number, setNumber] = useState(1)
    const [tab, setTab] = useState(0);

    const showImages = () => {
        return product.images.map((images, index) => {
            return <div className="pictures__container" key={index} onClick={() => setTab(index)}>
                <img className="picture" src={images.url} id="pic1" />
            </div>
        })
    }
    return (
        <div className="container">
            <div className="product-detail__container">
                <div className="product-detail__left">
                    <div className="details__container--left">
                        <div className="product__pictures">
                            {showImages()}
                        </div>
                        <div className="product__picture" id="product__picture">
                            {/* <div class="rect" id="rect"></div> */}
                            <div className="picture__container">
                                <img src={product.images[tab].url} id="pic" />
                            </div>
                        </div>
                        <div className="zoom" id="zoom" />
                    </div>
                    <div className="product-details__btn">
                        <a className="add" href="#">
                            ADD TO CART</a>
                        <a className="buy" href="#">
                            BUY NOW
                        </a>
                    </div>
                </div>
                <div className="product-detail__right">
                    <div className="product-detail__content">
                        <h3>{product.title}</h3>
                        <div className="price">
                            <span className="new__price">{price} VND</span>
                        </div>
                        <p>
                           {product.content}
                        </p>
                        <div className="product__info-container">
                            <ul className="product__info">
                                <li className="select">
                                    <div className="select__option">
                                        <label htmlFor="colors">Color</label>
                                        <select name="colors" id="colors" className="select-box">
                                            <option value="blue">blue</option>
                                            <option value="red">red</option>
                                        </select>
                                    </div>
                                    <div className="select__option">
                                        <label htmlFor="size">Inches</label>
                                        <select name="size" id="size" className="select-box">
                                            <option value="6.65">6.65</option>
                                            <option value="7.50">7.50</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="input-counter">
                                        <span>Quantity:</span>
                                        <div style={{marginTop:'10px'}}>
                                            <span className="minus-btn" onClick={()=>setNumber(number>0?number-1:1)}>
                                                <i class="fas fa-minus"></i>
                                            </span>
                                            <input className="counter-btn" value={number}/>
                                            <span className="plus-btn" onClick={()=>setNumber(number+1)}>
                                                <i class="fas fa-plus"></i>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span>Subtotal:</span>
                                    <a href="#" className="new__price"> {price * number} VND</a>
                                </li>
                                <li>
                                    <span>Availability:</span>
                                    <a href="#" className="in-stock"> In Stock ({product.inStock} Item)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export async function getServerSideProps({ params: { id } }) {
    const res = await GetData(`product/${id}`)
    console.log(res)
    return {
        props: {
            props: { product: res.product },
        },
    }
}
