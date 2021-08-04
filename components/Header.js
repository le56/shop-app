import React from 'react'
export default function Header() {
    return (
        <header id="header" className="header">
            <div className="navigation">
                <div className="container">
                    <nav className="nav">
                        <div className="nav__hamburger">
                            <svg>
                                <use xlinkHref="./images/sprite.svg#icon-menu" />
                            </svg>
                        </div>
                        <div className="nav__logo">
                            <a href="/" className="scroll-link">
                                THUỲ LINH
                            </a>
                        </div>
                        <div className="nav__menu">
                            <div className="menu__top">
                                <span className="nav__category">PHONE</span>
                                <a href="#" className="close__toggle">
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-cross" />
                                    </svg>
                                </a>
                            </div>
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a href="#header" className="nav__link scroll-link">Home</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#category" className="nav__link scroll-link">Category</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#news" className="nav__link scroll-link">Blog</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#contact" className="nav__link scroll-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <a href="#" className="icon__item">
                                <i className="fas fa-user"></i>
                            </a>
                            <a href="#" className="icon__item">
                                <i className="fas fa-search"></i>
                            </a>
                            <a href="#" className="icon__item">
                                <i className="fas fa-shopping-cart"></i>
                                <span id="cart__total">0</span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
