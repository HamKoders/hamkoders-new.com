"use client";
import React from "react";
import "./LeadingIndusties.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Autoplay, Pagination } from "swiper/modules";

const LeadingIndusties = () => {
  return (
    <section className="leading-industies-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="leading-industries-content">
              <h2 className="same-heading">
                TRUSTED BY  <span> GLOBAL INDUSTRIES </span>
              </h2>
              <p className="para">
                Explore our successful digital projects where our expert teams consistently deliver innovation, performance, and high-quality development solutions worldwide.
              </p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="leading-industries-slides">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Autoplay, Pagination]}
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
                  <div className="leading-industrial-box leading-industrial-box1">
                    <h2>Automotive</h2>
                    <p className="para">
                      Smart digital solutions designed to enhance performance, user experience, and innovation across modern automotive business platforms globally.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box2">
                    <h2>Ecommerce</h2>
                    <p className="para">
                      Advanced ecommerce development focused on seamless user journeys, secure payments, and scalable online store growth worldwide.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box3">
                    <h2>Healthcare</h2>
                    <p className="para">
                      Reliable healthcare technology solutions that improve efficiency, patient experience, and secure digital transformation across medical services.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box4">
                    <h2>Agriculture</h2>
                    <p className="para">
                      Innovative agriculture technology solutions helping businesses improve productivity, automation, and sustainable growth in modern farming systems.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box5">
                    <h2>Education</h2>
                    <p className="para">
                      Modern education technology solutions designed to enhance e-learning platforms, student engagement, and digital transformation for schools, institutes, and training businesses worldwide.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box6">
                    <h2>Legal</h2>
                    <p className="para">
                      Secure and reliable digital solutions for legal firms to manage clients, automate workflows, and improve online presence with professional branding globally.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box7">
                    <h2>b2b</h2>
                    <p className="para">
                      Powerful B2B digital solutions helping companies generate quality leads, automate operations, and build strong business relationships through scalable technology worldwide.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box8">
                    <h2>food</h2>
                    <p className="para">
                      Smart digital solutions for food businesses to improve online ordering, customer experience, and brand visibility while increasing sales and operational efficiency globally.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box9">
                    <h2>Travel</h2>
                    <p className="para">
                      Custom digital solutions for travel agencies to boost bookings, improve customer experience, and manage online reservations with scalable platforms globally.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box10">
                    <h2>Crm</h2>
                    <p className="para">
                      Advanced CRM solutions designed to manage customer relationships, track sales, and automate workflows for improved productivity and long-term business growth globally.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box10X">
                    <h2>Manufacturing</h2>
                    <p className="para">
                      Innovative manufacturing software solutions that streamline production, automate processes, and improve operational efficiency for modern industrial businesses worldwide.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box11">
                    <h2>Fashion</h2>
                    <p className="para">
                      Creative digital solutions for fashion brands to boost online visibility, manage ecommerce stores, and enhance customer engagement across global fashion markets.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box12">
                    <h2>Logistic</h2>
                    <p className="para">
                      Smart logistics technology solutions that optimize supply chains, manage fleet operations, and improve delivery efficiency for transport and logistics companies globally.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box13">
                    <h2>Finance</h2>
                    <p className="para">
                      Secure fintech and financial software solutions to manage transactions, customer data, and digital banking services with advanced security and performance globally.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box14">
                    <h2>Real State</h2>
                    <p className="para">
                      Modern real estate digital solutions to showcase properties, generate leads, and manage clients through high-performing websites and marketing systems globally.
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

export default LeadingIndusties;
