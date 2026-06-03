"use client";

import React from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import LOGO_IMAGE from "../../../public/images/Logo-1.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" href="/">
                    <Image
                      src={LOGO_IMAGE}
                      width={93}
                      height={90}
                      alt="LOGO_IMAGE"
                    />
                  </Link>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" href="/about">
                          About
                        </Link>
                      </li>

                      <li className="nav-item mobile-service-item">
                        <Link className="nav-link" href="/services">
                          Services
                        </Link>
                      </li>

                      <li className="nav-item lap-service-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="/services"
                          id="navbarDropdown"
                          aria-expanded="false"
                        >
                          Services
                        </Link>

                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="services-drop">
                                    <h3>
                                      <Link href="/website-development">
                                        Web Development
                                      </Link>
                                    </h3>

                                    <ul>
                                      <li>
                                        <Link href="/website-development/custom-website-development">
                                          Custom website development
                                        </Link>
                                      </li>

                                      <li>
                                        <Link href="/website-development/enterprise-web-development">
                                          Enterprise web development
                                        </Link>
                                      </li>

                                      <li>
                                        <Link href="/website-development/web-app-development">
                                          Web app development
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="services-drop">
                                    <h3>
                                      <Link href="/app-development">
                                        App development
                                      </Link>
                                    </h3>

                                    <ul>
                                      <li>
                                        <Link href="/app-development/ios-app-development">
                                          iOS app development
                                        </Link>
                                      </li>

                                      <li>
                                        <Link href="/app-development/android-app-development">
                                          Android app development
                                        </Link>
                                      </li>

                                      <li>
                                        <Link href="/app-development/cross-platform-app-development">
                                          Cross-platform app development
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="services-drop">
                                    <h3>
                                      <Link href="/brand-service">
                                        Branding
                                      </Link>
                                    </h3>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="services-drop">
                                    <h3>
                                      <Link href="/digital-marketing">
                                        Digital Marketing
                                      </Link>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" href="/industries">
                          Industries
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" href="/portfolio">
                          Portfolio
                        </Link>
                      </li>
                    </ul>

                    {/* GTranslate */}
                    <div
                      className="gtranslate_wrapper"
                      style={{ marginRight: "20px" }}
                    ></div>

                    <div className="header-right-btn">
                      <Link href="/contact-us">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
