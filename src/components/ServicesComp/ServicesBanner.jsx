import React from "react";
import "./ServicesBanner.css";
import Link from "next/link";

const ServicesBanner = () => {
  return (
    <section className="services-banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="services-banner-content">
              <h1 className="same-heading">
                YOUR PARTNER IN {" "}
                <span>
                   BUILDING HIGH-IMPACT <br />  ECOMMERCE 
                </span>{" "}
                WEBSITE
              </h1>

              <h4>ECOMMERCE Solutions</h4>

              <p className="para">
                With smart, scalable ecommerce solutions, we build user-focused online stores and web applications that boost performance, increase conversions, and support the growth of your business.
              </p>

              <div className="services-banner-btn">
                <Link href={"#"} className="global-btn-outline-black open-chat">
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
