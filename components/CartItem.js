import React from 'react'

export default function CartItem() {
    return (
        <tr>
            <td className="product__thumbnail">
                <a href="#">
                    <img src="./images/products/iPhone/iphone6.jpeg" alt />
                </a>
            </td>
            <td className="product__name">
                <a href="#">Apple iPhone 11</a>
                <br /><br />
                <small>White/6.25</small>
            </td>
            <td className="product__price">
                <div className="price">
                    <span className="new__price">$250.99</span>
                </div>
            </td>
            <td className="product__quantity">
                <div className="input-counter">
                    <div>
                        <span className="minus-btn">
                            <i class="fas fa-plus"></i>
                        </span>
                        <input type="text" min={1} defaultValue={1} max={10} className="counter-btn" />
                        <span className="plus-btn">
                            <i class="fas fa-plus"></i>
                        </span>
                    </div>
                </div>
            </td>
            <td className="product__subtotal">
                <div className="price">
                    <span className="new__price">$250.99</span>
                </div>
                <a href="#" className="remove__cart-item">
                    <svg>
                        <use xlinkHref="./images/sprite.svg#icon-trash" />
                    </svg>
                </a>
            </td>
        </tr>
    )
}
