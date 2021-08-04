import React from 'react'
import Footer from '../Footer'
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
                <span className="dot" />
                <h1 className="primary__title">Latest Products</h1>
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
          <section className="category__section section" id="category">
            <div className="tab__list">
              <div className="title__container tabs">
                <div className="section__titles category__titles ">
                  <div className="section__title filter-btn active" data-id="All Products">
                    <span className="dot" />
                    <h1 className="primary__title">All Products</h1>
                  </div>
                </div>
                <div className="section__titles">
                  <div className="section__title filter-btn" data-id="Trending Products">
                    <span className="dot" />
                    <h1 className="primary__title">Trending Products</h1>
                  </div>
                </div>
                <div className="section__titles">
                  <div className="section__title filter-btn" data-id="Special Products">
                    <span className="dot" />
                    <h1 className="primary__title">Special Products</h1>
                  </div>
                </div>
                <div className="section__titles">
                  <div className="section__title filter-btn" data-id="Featured Products">
                    <span className="dot" />
                    <h1 className="primary__title">Featured Products</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="category__container" data-aos="fade-up" data-aos-duration={1200}>
              <div className="category__center" />
            </div>
          </section></div>
        {/* Facility Section */}
        <section className="facility__section section" id="facility">
          <div className="container">
            <div className="facility__contianer" data-aos="fade-up" data-aos-duration={1200}>
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
        {/* Testimonial Section */}
        <section className="section testimonial" id="testimonial">
          <div className="testimonial__container">
            <div className="glide" id="glide_4">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  <li className="glide__slide">
                    <div className="testimonial__box">
                      <div className="client__image">
                        <img src="./images/profile1.jpg" alt="profile" />
                      </div>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing
                        elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.</p>
                      <div className="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="testimonial__box">
                      <div className="client__image">
                        <img src="./images/profile2.jpg" alt="profile" />
                      </div>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur
                        eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.</p>
                      <div className="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="testimonial__box">
                      <div className="client__image">
                        <img src="./images/profile3.jpg" alt="profile" />
                      </div>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur
                        eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.</p>
                      <div className="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="testimonial__box">
                      <div className="client__image">
                        <img src="./images/profile4.jpg" alt />
                      </div>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur
                        eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.
                        hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.</p>
                      <div className="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0" />
                <button className="glide__bullet" data-glide-dir="=1" />
                <button className="glide__bullet" data-glide-dir="=2" />
                <button className="glide__bullet" data-glide-dir="=3" />
              </div>
            </div>
          </div>
        </section>
        {/*New Section  */}
        <section className="section news" id="news">
          <div className="container">
            <div className="title__container">
              <div className="section__titles">
                <div className="section__title active">
                  <span className="dot" />
                  <h1 className="primary__title">Phone News</h1>
                </div>
              </div>
            </div>
            <div className="news__container">
              <div className="glide" id="glide_5">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news1.jpg" alt />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news2.jpg" alt />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news3.jpg" alt />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news4.jpg" alt />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news5.jpg" alt />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      <Footer></Footer>
    </div>
  )
}
