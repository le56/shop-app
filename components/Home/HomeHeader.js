import React from 'react'
import { useEffect } from "react";

export default function HomeHeader() {

useEffect(() => {
  const slider1 = document.getElementById("glide_1");
  const slider2 = document.getElementById("glide_2");
  const slider3 = document.getElementById("glide_3");
  const slider4 = document.getElementById("glide_4");
  const slider5 = document.getElementById("glide_5");

  if (slider1) {
    new Glide(slider1, {
      type: "carousel",
      startAt: 0,
      autoplay: 3000,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: "linear",
    }).mount();
  }

  /*
  =============
  Latest Products
  =============
   */

  if (slider2) {
    new Glide("#glide_2", {
      type: "carousel",
      startAt: 0,
      perView: 4,
      rewin: false,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: {
        1200: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
    }).mount();
  }

  if (slider3) {
    new Glide("#glide_3", {
      type: "carousel",
      startAt: 0,
      perView: 4,
      rewin: false,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: {
        1200: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
    }).mount();
  }

  if (slider4) {
    new Glide("#glide_4", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      rewin: false,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    }).mount();
  }

  if (slider5) {
    new Glide("#glide_5", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      rewin: false,
      autoplay: 3000,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: {
        998: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }

  AOS.init();

}, [])
    return (
        <div className="hero">
            <div className="glide" id="glide_1">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <div className="hero__center">
                                <div className="hero__left">
                                    <span className>New Inspiration 2020</span>
                                    <h1 className>PHONES MADE FOR YOU!</h1>
                                    <p>Trending from mobile and headphone style collection</p>
                                    <a href="#"><button className="hero__btn">SHOP NOW</button></a>
                                </div>
                                <div className="hero__right">
                                    <div className="hero__img-container">
                                        <img className="banner_01" src="images/banner_01.png" alt="banner2" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="hero__center">
                                <div className="hero__left">
                                    <span>New Inspiration 2021</span>
                                    <h1>PHONES MADE FOR YOU!</h1>
                                    <p>Trending from mobile and headphone style collection</p>
                                    <a href="#"><button className="hero__btn">SHOP NOW</button></a>
                                </div>
                                <div className="hero__right">
                                    <img className="banner_02" src="images/banner_02.png" alt="banner2" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    <button className="glide__bullet" data-glide-dir="=0" />
                    <button className="glide__bullet" data-glide-dir="=1" />
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
