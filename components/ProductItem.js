import React from 'react'
import Link from 'next/link'

export default function ProductItem({ product }) {
    const userLink = () => {
        return <>
            <Link href={`products/${product._id}`}>
                <a href={`products/${product._id}`}><button className="product__btn">Add To Cart</button></a>
            </Link>
        </>
    }
    return (
        <div className="product col-12 col-sm-6 col-md-4" /* style={{margin:'5px 5px'}} */>
            <div className="product__header">
                <img src={product.images[0].url} alt="product" />
            </div>
            <div className="product__footer">
                <h3>{product.title}</h3>
                <div className="rating">
                    <svg>
                        <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                    <svg>
                        <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                    <svg>
                        <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                    <svg>
                        <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                    <svg>
                        <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                </div>
                <div className="product__price">
                    <h4>$ {product.price}</h4>
                </div>
                {userLink()}
            </div>
            <ul>
                <li>
                    <Link href={`product/${product._id}`}>
                        <a data-tip="Quick View" data-place="left">
                            <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                            </svg>
                        </a>
                    </Link>
                </li>
                <li>
                    <a data-tip="Add To Wishlist" data-place="left" href="#">
                        <svg>
                            <use xlinkHref="./images/sprite.svg#icon-heart-o" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a data-tip="Add To Compare" data-place="left" href="#">
                        <svg>
                            <use xlinkHref="./images/sprite.svg#icon-loop2" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    )
}
