import React from 'react'
import HomeHeader from './HomeHeader'

export default function HomePage() {
  return (
    <div>
      <HomeHeader></HomeHeader>
      {/* Main */}
      <main id="main">
        <div className="container">
          {/* Collection */}
          <section id="collection" className="section collection">
            <div className="collection__container" data-aos="fade-up" data-aos-duration={1200}>
              <div className="collection__box">
                <div className="img__container">
                  <img className="collection_02" src="./images/collection_02.png" alt />
                </div>
                <div className="collection__content">
                  <div className="collection__data">
                    <span>New Colors Introduced</span>
                    <h1>HEADPHONES</h1>
                    <a href="#shop">SHOP NOW</a>
                  </div>
                </div>
              </div>
              <div className="collection__box">
                <div className="img__container">
                  <img className="collection_01" src="./images/collection_01.png" alt />
                </div>
                <div className="collection__content">
                  <div className="collection__data">
                    <span>Phone Device Presets</span>
                    <h1>SMARTPHONES</h1>
                    <a href="#">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div></section>
          {/* Latest Products */}
          <section className="section latest__products" id="latest">
            <div className="title__container">
              <div className="section__title active" data-id="Latest Products">
                <h1 className="primary__title">New Products</h1>
              </div>
            </div>
            <div className="container" data-aos="fade-up" data-aos-duration={1200}>
              <div className="glide" id="glide_2">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides latest-center">
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="/images/products/iPhone/iphone6.jpeg" alt="product" />
                        </div>
                        <div className="product__footer">
                          <h3>Apple iPhone 11</h3>
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
                            <h4>$750</h4>
                          </div>
                          <a href="#"><button type="submit" className="product__btn">Add To Cart</button></a>
                        </div>
                        <ul>
                          <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                              </svg>
                            </a>
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
                    </li>
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="/images/products/sumsung/samsung5.jpeg" alt="product" />
                        </div>
                        <div className="product__footer">
                          <h3>Samsung Galaxy</h3>
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
                            <h4>$900</h4>
                          </div>
                          <a href="#"><button type="submit" className="product__btn">Add To Cart</button></a>
                        </div>
                        <ul>
                          <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                              </svg>
                            </a>
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
                    </li>
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="/images/products/headphone/headphone4.jpeg" alt="product" />
                        </div>
                        <div className="product__footer">
                          <h3>Sony WH-CH510</h3>
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
                            <h4>$600</h4>
                          </div>
                          <a href="#"><button type="submit" className="product__btn">Add To Cart</button></a>
                        </div>
                        <ul>
                          <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                              </svg>
                            </a>
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
                    </li>
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="/images/products/sumsung/samsung3.jpeg" alt="product" />
                        </div>
                        <div className="product__footer">
                          <h3>Samsung Galaxy</h3>
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
                            <h4>$850</h4>
                          </div>
                          <a href="#"><button type="submit" className="product__btn">Add To Cart</button></a>
                        </div>
                        <ul>
                          <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                              </svg>
                            </a>
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
                    </li>
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="./images/products/iPhone/iphone2.jpeg" alt="product" />
                        </div>
                        <div className="product__footer">
                          <h3>Apple iPhone 11</h3>
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
                            <h4>$450</h4>
                          </div>
                          <a href="#"><button type="submit" className="product__btn">Add To Cart</button></a>
                        </div>
                        <ul>
                          <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                              </svg>
                            </a>
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
                    </li>
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="images/products/headphone/headphone2.jpeg" alt="product" />
                        </div>
                        <div className="product__footer">
                          <h3>Sony WH-CH510</h3>
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
                            <h4>$300</h4>
                          </div>
                          <a href="#"><button type="submit" className="product__btn">Add To Cart</button></a>
                        </div>
                        <ul>
                          <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                              </svg>
                            </a>
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
                    </li>
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="images/products/sumsung/samsung1.jpeg" alt="product" />
                        </div>
                        <div className="product__footer">
                          <h3>Samsung Galaxy</h3>
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
                            <h4>$300</h4>
                          </div>
                          <a href="#"><button type="submit" className="product__btn">Add To Cart</button></a>
                        </div>
                        <ul>
                          <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                              </svg>
                            </a>
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
                    </li>
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="images/products/headphone/headphone1.jpeg" alt="product" />
                        </div>
                        <div className="product__footer">
                          <h3>Sony WH-CH510</h3>
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
                            <h4>$250</h4>
                          </div>
                          <a href="#"><button type="submit" className="product__btn">Add To Cart</button></a>
                        </div>
                        <ul>
                          <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                              </svg>
                            </a>
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
                    </li>
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="images/products/iPhone/iphone1.jpeg" alt="product" />
                        </div>
                        <div className="product__footer">
                          <h3>Apple iPhone XR</h3>
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
                            <h4>$550</h4>
                          </div>
                          <a href="#"><button type="submit" className="product__btn">Add To Cart</button></a>
                        </div>
                        <ul>
                          <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-eye" />
                              </svg>
                            </a>
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
                    </li></ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                  <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-arrow-left2" />
                    </svg>
                  </button>
                  <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-arrow-right2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
      </div>
        {/* Testimonial Section */}
        {/* NewsLetter */}
        <section className="section newsletter" id="contact">
          <div className="container">
            <div className="newsletter__content">
              <div className="newsletter__data">
                <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <p>A short sentence describing what someone will receive by subscribing</p>
              </div>
              <form action="#">
                <input type="email" placeholder="Enter your email address" className="newsletter__email" />
                <a className="newsletter__link" href="#">subscribe</a>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
