"use client";
import React, { useEffect } from "react";
import "./Header.css";
import Image from "next/image";
import LOGO_IMAGE from "../../../public/images/Logo-1.png";

const Header = () => {

  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "de"],
      wrapper_selector: ".gtranslate_wrapper",
      flag_size: 16,
      switcher_horizontal_position: "inline",
      flag_style: "3d"
    };

    document.querySelectorAll('script[src*="gtranslate"]').forEach(s => s.remove());

    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/dwf.js';
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    <Image
                      src={LOGO_IMAGE}
                      width={93}
                      height={90}
                      alt="LOGO_IMAGE"
                    />
                  </a>
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
                        <a className="nav-link active" aria-current="page" href="/">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/about">
                          About
                        </a>
                      </li>
                      <li className="nav-item mobile-service-item">
                        <a className="nav-link" href="/services">
                          Services
                        </a>
                      </li>
                      <li className="nav-item lap-service-item dropdown">
  
    className="nav-link dropdown-toggle"
    href="/services"
    id="navbarDropdown"
    aria-expanded="false"
  >
    Services
  </a>
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
                                      <a href="/website-development">
                                        Web Development
                                      </a>
                                    </h3>
                                    <ul>
                                      <li>
                                        <a href="/website-development/custom-website-development">
                                          Custom website development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/website-development/enterprise-web-development">
                                          Enterprise web development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/website-development/web-app-development">
                                          Web app development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/website-development/frontend-development">
                                          Front-end development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/website-development/backend-development">
                                          Backend development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/website-development/fullstack-development">
                                          Full-Stack development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/website-development/landing-page-development">
                                          Landing Page development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/website-development/web3.0-development">
                                          Web 3.0 Development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/website-development/website-maintenance">
                                          Website maintenance
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="services-drop">
                                    <h3>
                                      <a href="/app-development">
                                        App development
                                      </a>
                                    </h3>
                                    <ul>
                                      <li>
                                        <a href="/app-development/ios-app-development">
                                          iOS app development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/app-development/android-app-development">
                                          Android app development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/app-development/cross-platform-app-development">
                                          Cross-platform app development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/app-development/hybrid-app-development">
                                          Hybrid app development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/app-development/saas-app-development">
                                          Saas app development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/app-development/mvp-app-development">
                                          MVP app development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/app-development/concept-design">
                                          Concept design
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/app-development/wearable-app-development">
                                          Wearable app development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/app-development/app-maintenance">
                                          App maintenance
                                        </a>
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
                                      <a href="/brand-service">
                                        Branding
                                      </a>
                                    </h3>
                                    <ul>
                                      <li>
                                        <a href="/brand-service/brand-strategy-development">
                                          Brand Strategy Development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/brand-service/logo-visual-identity-design">
                                          Logo & Visual Identity Design
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/brand-service/brand-guidelines-style-guide">
                                          Brand Guidelines & Style Guide
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/brand-service/corporate-identity-design">
                                          Corporate Identity Design
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/brand-service/rebranding-services">
                                          Rebranding Services
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/brand-service/packaging-product-branding">
                                          Packaging & Product Branding
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="services-drop">
                                    <h3>
                                      <a href="/digital-marketing">
                                        Digital Marketing
                                      </a>
                                    </h3>
                                    <ul>
                                      <li>
                                        <a href="/digital-marketing/search-engine-optimization">
                                          Search Engine Optimization (SEO)
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/digital-marketing/social-media-marketing">
                                          Social Media Marketing (SMM)
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/digital-marketing/pay-per-click-advertising">
                                          Pay-Per-Click Advertising (PPC)
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/digital-marketing/google-meta-ads-management">
                                          Google & Meta Ads Management
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/digital-marketing/content-marketing">
                                          Content Marketing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/digital-marketing/email-marketing-campaigns">
                                          Email Marketing Campaigns
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="services-drop-cta1">
                                    <h3>
                                      <a href="/software-development">
                                        Software <span>Development</span>
                                      </a>
                                    </h3>
                                    <div className="services-drop-flex">
                                      <ul>
                                        <li>
                                          <a href="/software-development/erp-development" className="global-btn-outline">
                                            ERP Development
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/software-development/erm-development" className="global-btn-outline">
                                            ERM Development
                                          </a>
                                        </li>
                                      </ul>
                                      <ul>
                                        <li>
                                          <a href="/software-development/crm-development" className="global-btn-outline">
                                            CRM Development
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/software-development/cms-development" className="global-btn-outline">
                                            CMS Development
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                            </div>
                          </div>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/industries">
                          Industries
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/portfolio">
                          Portfolio
                        </a>
                      </li>
                    </ul>

                    <div className="gtranslate_wrapper" style={{marginRight: "20px"}}></div>

                    <div className="header-right-btn">
                      <a href="/contact-us">Contact Us</a>
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
