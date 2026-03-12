"use client";
import React, { useEffect, useRef, useState } from "react";
import "./StoreServicesBox.css";
import Image from "next/image";
import storedevPortfolio from "../../../../public/images/branding-portfolio.png";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const StoreServicesBox = () => {
  const [reveal, setReveal] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="storedev-servicesBox-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="storedev-servicesBox">
              <div className="storedev-servicesBox-bg">
                <div
                  className={`storedev-servicesBox-bg-img ${
                    reveal ? "reveal" : ""
                  }`}
                >
                  <Image
                    src={storedevPortfolio}
                    alt="storedev-portfolio"
                    priority
                  />
                </div>
              </div>
              <div className="storedev-servicesBox-content">
                <div className="storedev-servicesBox-contentTop">
                  <h2 className="same-heading">
                    Branding
                  </h2>
                  <div className="storedev-servicesBox-contentTop-btn">
                    <Link className="global-btn-outline-black" href={"/brand-service"}>
                      Explore Now
                    </Link>
                  </div>
                </div>
                <p className="para">
                  Our creative branding team builds strong brand identities and visual strategies that attract customers, build trust, and help your business stand out in global markets.
                </p>

                <div className="storedev-servicesBox-content-box">
                  <div className="row">
                    <div className="col-lg-6 pe-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/brand-service/brand-strategy-development"}>
                          Brand Strategy Development
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/brand-service/logo-visual-identity-design"}>
                          Logo & Visual Identity Design
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/brand-service/brand-guidelines-style-guide"}>
                          Brand Guidelines & Style Guide
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    {/* <div className="col-lg-6 ps-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/brand-service/wordpress-development"}>
                          Wordpress development
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div> */}
                    <div className="col-lg-6 pe-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/brand-service/corporate-identity-design"}>
                          Corporate Identity Design
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/brand-service/rebranding-services"}>
                          Rebranding Services
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/brand-service/packaging-product-branding"}>
                           Packaging & Product Branding
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreServicesBox;
