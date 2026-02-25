"use client";
import React from "react";
import "./Testimonials.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import client1 from "../../../public/images/client1.png";
import client2 from "../../../public/images/client2.png";
import client3 from "../../../public/images/client3.png";
import client4 from "../../../public/images/client4.png";

import review1 from "../../../public/images/review1.webp";
import review2 from "../../../public/images/review2.webp";
import review3 from "../../../public/images/review3.webp";
import review4 from "../../../public/images/review4.webp";
import review5 from "../../../public/images/review5.webp";
import review6 from "../../../public/images/review6.webp";
import review7 from "../../../public/images/review7.webp";
import review8 from "../../../public/images/review8.webp";
import review9 from "../../../public/images/review9.webp";
import review10 from "../../../public/images/review10.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testi-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testi-content">
              <h2 className="same-heading">Testimonials</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="testi-numbers-main">
              <div className="testi-numbers-main-top">
                <div className="testi-numbers-main-top-circles">
                  <Image src={client1} alt="client1" />
                  <Image src={client2} alt="client2" />
                  <Image src={client3} alt="client3" />
                  <Image src={client4} alt="client4" />
                </div>
                <div className="testi-numbers-main-top-content">
                  <p>
                    2.7k Positive <br /> Reviews
                  </p>
                </div>
              </div>
              <div className="testi-numbers-main-center">
                <div className="testi-numbers-main-center-content testi-numbers-main-center-contentBefore">
                  <h3>90%</h3>
                  <p className="para">Successful Project</p>
                </div>
                <div className="testi-numbers-main-center-content">
                  <h3>49%</h3>
                  <p className="para">New Clients</p>
                </div>
              </div>

              <div className="testi-numbers-main-bottom">
                <div className="testi-numbers-main-bottom-content">
                  <p className="para">Social Media Growth</p>
                </div>
                <div className="testi-numbers-main-bottom-content">
                  <p className="para">Performance Marketing</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="what-our-clients-says">
              <h3>What Our Client Says</h3>
              <h2>
                Hear from Our <span>HAPPY Clients</span>, Real Success
                Stories
              </h2>
              <p className="para">
                See how businesses like yours achieved strong growth through Hamkoders expert digital marketing and development solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="testi-slides">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
                breakpoints={{
                  360: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                375: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                390: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                414: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                575: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review2}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3> Michael Carter</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      “Hamkoders has completely improved my business profile. I connected with great clients and discovered new opportunities. Highly recommended for digital growth.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review1}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Sophie Bennett</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                       “The creative design and smart features from Hamkoders helped my brand grow faster online. It has become my trusted digital partner.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review3}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Emma Collins</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      “Amazing personal development resources that helped me build confidence and clarity in my daily life.”
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review4}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Daniel Roberts</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                       “I really like how Hamkoders helped me connect with more customers. Their solutions are simple, user-friendly, and highly effective for business.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review5}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Jonathan Reed</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                       “The book recommendations were exactly what I needed. Every title added real value to my personal growth journey.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review6}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Isabella Turner</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      “I stay motivated every day because of their inspiring insights and consistent positive content.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review7}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>David Harrison</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                       “The business-focused content completely changed how I think and plan. Truly powerful and practical.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review8}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Sophia Williams</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      “Their recommended books on communication and social skills helped me improve both personally and professionally.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review9}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Ryan Mitchell</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      “Professional support and guidance made it easy to choose the right books and growth resources.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review10}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Sienna Brooks</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                       “Business Dialogs is more than a platform it’s a complete growth experience for anyone who wants success.”
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
