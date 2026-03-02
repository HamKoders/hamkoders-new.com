"use client";
import React, { useEffect, useRef, useState } from "react";
import "./GameServicesBox.css";
import Image from "next/image";
import gamedevPortfolio from "../../../../public/images/gamedev-portfolio.webp";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const GameServicesBox = () => {
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
    <section ref={sectionRef} className="gamedev-servicesBox-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="gamedev-servicesBox">
              <div className="gamedev-servicesBox-bg">
                <div
                  className={`gamedev-servicesBox-bg-img ${
                    reveal ? "reveal" : ""
                  }`}
                >
                  <Image
                    src={gamedevPortfolio}
                    alt="gamedev-portfolio"
                    priority
                  />
                </div>
              </div>
              <div className="gamedev-servicesBox-content">
                <div className="gamedev-servicesBox-contentTop">
                  <h2 className="same-heading">
                    DIGITAL  <span>MARKETING</span>
                  </h2>
                  <div className="gamedev-servicesBox-contentTop-btn">
                    <Link className="global-btn-outline-black" href={"/game-development"}>
                      Explore Now
                    </Link>
                  </div>
                </div>
                <p className="para">
                 Our expert team delivers result-focused digital marketing services, creating high-converting campaigns that attract customers, boost engagement, and grow your business across global markets..
                </p>

                <div className="gamedev-servicesBox-content-box">
                  <div className="row">
                    <div className="col-lg-6 pe-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/mobile-app-development"}>
                          SOCIAL MEDIA MANAGEMENT
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/cross-platform-game-development"}>
                          META ADS (FACEBOOK & INSTAGRAM)
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/blockchain-and-nft-game-app"}>
                          GOOGLE ADS MANAGEMENT
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/console-game-app"}>
                          TIKTOK ADS MARKETING
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/concept-design"}>
                          LEAD GENERATION CAMPAIGNS
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/testing-and-maintenance"}>
                          SALES FUNNEL CREATION
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/testing-and-maintenance"}>
                          EMAIL MARKETING SOLUTIONS
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/testing-and-maintenance"}>
                          MARKETING AUTOMATION
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/testing-and-maintenance"}>
                          CONVERSION RATE OPTIMIZATION
                          <HiMiniArrowUpRight size={30}  />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/testing-and-maintenance"}>
                          RETARGETING CAMPAIGNS
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

export default GameServicesBox;
