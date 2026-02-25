import React from "react";
import "./WhyChooseHadz.css";
import Image from "next/image";

import WhyChoose1 from "../../../../public/images/why-1.webp";
import WhyChoose2 from "../../../../public/images/why-2.webp";
import WhyChoose3 from "../../../../public/images/why-3.webp";
import WhyChoose4 from "../../../../public/images/why-4.webp";
import WhyChoose5 from "../../../../public/images/why-5.webp";
import WhyChoose6 from "../../../../public/images/why-6.webp";

const WhyChooseHadz = () => {
  return (
    <section className="whyChoose-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="whyChoose-content">
              <h2 className="same-heading">
                WHY PARTNER  <span>WITH OUR TEAM?</span>
              </h2>
              <p className="para">
                Hamkoders gives you a team focused on innovation, strategy, and measurable results. We build strong partnerships that help businesses grow, scale, and lead globally.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose1} alt="why-1" />

              <div className="whyChoose-box-content">
                <h4>Industries Expertise</h4>

                <p className="para">
                  With experience across many industries, we understand market challenges and deliver custom digital solutions that perform best for your business sector.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose2} alt="why-2" />

              <div className="whyChoose-box-content">
                <h4>User-Centric Design</h4>

                <p className="para">
                  Every project begins with your audience in focus. We design clean, modern interfaces that improve user experience, engagement, and conversion across platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose3} alt="why-3" />

              <div className="whyChoose-box-content">
                <h4>Innovative Solutions</h4>

                <p className="para">
                  We influence cutting-edge tools and frameworks to build fast, scalable, and future-ready digital platforms that drive performance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose4} alt="why-4" />

              <div className="whyChoose-box-content">
                <h4>Strategic Focus</h4>

                <p className="para">
                  Our team aligns every design and development decision with your business goals to deliver measurable performance and consistent long-term growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose5} alt="why-5" />

              <div className="whyChoose-box-content">
                <h4>Reliable Partnership</h4>

                <p className="para">
                 We work as long-term partners, providing ongoing support, updates, and improvements to ensure stability, performance, and continued digital success.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose6} alt="why-6" />

              <div className="whyChoose-box-content">
                <h4>Client Satisfaction</h4>

                <p className="para">
                  Our proven track record reflects successful projects, strong client relationships, and high-quality digital solutions that build trust and lasting results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHadz;
