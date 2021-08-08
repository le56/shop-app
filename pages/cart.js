import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import { Datacontect } from '../Store/GlobalStore'
export default function cart() {
    const { state } = useContext(Datacontect);

    const showItemInCard = ()=>{
        if(Object.keys(state.auth).length>0){
            return state.auth.user.cart.map((product,index)=>{
                return   <CartItem product={product} key={index}></CartItem>
            })
        }
    }
    return (
        <main id="main" className="container">
            <section className="section cart__area">
                <div className="container">
                    <div className="responsive__cart-area">
                        <form className="cart__form">
                            <div className="cart__table table-responsive">
                                <table width="100%" className="table">
                                    <thead>
                                        <tr>
                                            <th>PRODUCT</th>
                                            <th>NAME</th>
                                            <th>UNIT PRICE</th>
                                            <th>QUANTITY</th>
                                            <th>TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {showItemInCard()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-btns">
                                <div className="continue__shopping">
                                    <a href="/">Continue Shopping</a>
                                </div>
                                <div className="check__shipping">
                                    <input type="checkbox" />
                                    <span>Shipping(+7$)</span>
                                </div>
                            </div>
                            <div className="cart__totals">
                                <h3>Cart Totals</h3>
                                <ul>
                                    <li>
                                        Subtotal
                                        <span className="new__price">$250.99</span>
                                    </li>
                                    <li>
                                        Shipping
                                        <span>$0</span>
                                    </li>
                                    <li>
                                        Total
                                        <span className="new__price">$250.99</span>
                                    </li>
                                </ul>
                                <a href>PROCEED TO CHECKOUT</a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Facility Section */}
            <section className="facility__section section" id="facility">
                <div className="container">
                    <div className="facility__contianer">
                        <div className="facility__box">
                            <div className="facility-img__container">
                                <svg>
                                    <use xlinkHref="./images/sprite.svg#icon-airplane" />
                                </svg>
                            </div>
                            <p>FREE SHIPPING WORLD WIDE</p>
                        </div>
                        <div className="facility__box">
                            <div className="facility-img__container">
                                <svg>
                                    <use xlinkHref="./images/sprite.svg#icon-credit-card-alt" />
                                </svg>
                            </div>
                            <p>100% MONEY BACK GUARANTEE</p>
                        </div>
                        <div className="facility__box">
                            <div className="facility-img__container">
                                <svg>
                                    <use xlinkHref="./images/sprite.svg#icon-credit-card" />
                                </svg>
                            </div>
                            <p>MANY PAYMENT GATWAYS</p>
                        </div>
                        <div className="facility__box">
                            <div className="facility-img__container">
                                <svg>
                                    <use xlinkHref="./images/sprite.svg#icon-headphones" />
                                </svg>
                            </div>
                            <p>24/7 ONLINE SUPPORT</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
