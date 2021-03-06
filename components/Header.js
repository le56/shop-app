import React from 'react'
import { useRouter } from 'next/router'
import { Datacontect } from '../Store/GlobalStore'
import { useContext } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
export default function Header() {
    const { state, dispatch } = useContext(Datacontect);
    const router = useRouter();
    const handleLogout = () => {
        Cookies.remove('refreshtoken', { path: 'api/auth/accessToken' })
        localStorage.removeItem('firstLogin')

        dispatch({ type: 'AUTH', payload: {} });
        router.push("/signin")

    }
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
                                    <Link href="/">
                                        <a className="nav__link scroll-link">Home</a>
                                    </Link>
                                </li>
                                <li className="nav__item">
                                    <Link href="/product">
                                        <a className="nav__link scroll-link">Product</a>
                                    </Link>
                                </li>
                                <li className="nav__item">
                                    <a href="#news" className="nav__link scroll-link">Profile</a>
                                </li>
                                <li className="nav__item">
                                    <a href="https://www.facebook.com/profile.php?id=100036063764670" className="nav__link scroll-link">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <Link href='/signin'>
                                <a className="icon__item">
                                    <i className="fas fa-user"></i>
                                </a>
                            </Link>
                            <a href="#" className="icon__item">
                                <i className="fas fa-search"></i>
                            </a>
                            {
                                Object.keys(state.auth).length > 0 && <>
                                    <Link href='/cart'>
                                    <a className="icon__item">
                                        <span style={{ position: 'absolute', top: '-5px', right: '38px', backgroundColor: 'crimson', color: 'white', padding: '3px', borderRadius: '50%', width: '15px', height: '15px', textAlign: 'center' }}>{state.auth.user.cart.length} 0</span>
                                        <i className="fas fa-shopping-cart"></i>
                                    </a>
                                    </Link>
                                    <div className="icon__item" style={{ cursor: 'pointer' }} onClick={handleLogout}>
                                        <i className="fas fa-sign-out-alt"></i>
                                    </div>
                                </>
                            }
                            {/*   {loogedRouter()} */}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
