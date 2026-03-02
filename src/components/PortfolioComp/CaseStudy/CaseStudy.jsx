"use client";
import React from "react";
import "./CaseStudy.css";
import Image from "next/image";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// import thumbnail1 from "../../../../public/images/new-portfolio/thumbnail-1.webp";
// import thumbnail2 from "../../../../public/images/new-portfolio/thumbnail-2.webp";
// import thumbnail3 from "../../../../public/images/new-portfolio/thumbnail-3.webp";
// import thumbnail4 from "../../../../public/images/new-portfolio/thumbnail-4.webp";
// import thumbnail5 from "../../../../public/images/new-portfolio/thumbnail-5.webp";
// import thumbnail6 from "../../../../public/images/new-portfolio/thumbnail-6.webp";
// import thumbnail7 from "../../../../public/images/new-portfolio/thumbnail-7.webp";
// import thumbnail8 from "../../../../public/images/new-portfolio/thumbnail-8.webp";
// import thumbnail9 from "../../../../public/images/new-portfolio/thumbnail-9.webp";
// import thumbnail10 from "../../../../public/images/new-portfolio/thumbnail-10.webp";
// import thumbnail11 from "../../../../public/images/new-portfolio/thumbnail-11.webp";
// import thumbnail12 from "../../../../public/images/new-portfolio/thumbnail-12.webp";
// import thumbnail13 from "../../../../public/images/new-portfolio/thumbnail-13.webp";
// import thumbnail14 from "../../../../public/images/new-portfolio/thumbnail-14.webp";
// import thumbnail15 from "../../../../public/images/new-portfolio/thumbnail-15.webp";
// import thumbnail16 from "../../../../public/images/new-portfolio/thumbnail-16.webp";

import Link from "next/link";
import useFancybox from "@/components/FancyBoxComp";

const CaseStudy = () => {
  const [fancyboxRef] = useFancybox({
    // Your custom options
  });
  return (
    <section className="case-study-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="case-study-content">
              <h2 className="same-heading">Case Study </h2>

              <p className="para">
                Explore how Hamkoders delivers impactful digital solutions
                through real-world projects. Each project highlights our
                expertise in strategy, design, and technology showing measurable
                results, innovation, and success across diverse industries and
                business goals.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" ref={fancyboxRef}>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/1.png"
              >
                <Image src="/images/new-portfolio/1.png" width={1170} height={4875} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>Edukidz</span> - school web
                </h4>
                <p className="para">
                  A modern school website with interactive learning, admissions info, and easy communication for students and parents.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/2.png"
              >
                <Image src={"/images/new-portfolio/2.png"} width={1170} height={4936} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>Dreamix</span> - Property app
                </h4>
                <p className="para">
                 A smart real-estate app for property search, virtual tours, and smooth home-buying experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/3.png"
              >
                <Image src={"/images/new-portfolio/3.png"} width={1170} height={8166} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>caelora</span> - jewelry web
                </h4>
                <p className="para">
                  An elegant jewelry website showcasing premium collections with a smooth and luxury online shopping experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/4.png"
              >
                <Image src={"/images/new-portfolio/4.png"} width={1170} height={2657} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>wavix</span> - bank app
                </h4>
                <p className="para">
                  A secure banking app for seamless transactions, account management, and real-time financial tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/5.png"
              >
                <Image src={"/images/new-portfolio/5.png"} width={1170} height={4168} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>faura</span> - portal
                </h4>
                <p className="para">
                 A dynamic portal built for productivity, content management, and smooth digital collaboration.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/6.png"
              >
                <Image src={"/images/new-portfolio/6.png"} width={1170} height={5601} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>basic medic</span> - assistant
                </h4>
                <p className="para">
                 A healthcare assistant app for appointment tracking, patient support, and easy medical access.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/7.webp"
              >
                <Image src={"/images/new-portfolio/7.webp"} width={1170} height={3433} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>every fit</span> - fitness app
                </h4>
                <p className="para">
                  A feature-rich fitness app built to track workouts, set goals, and motivate users toward healthier, active lifestyles.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/8.webp"
              >
                <Image src={"/images/new-portfolio/8.webp"} width={1170} height={3153} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/9.webp"
              >
                <Image src={"/images/new-portfolio/9.webp"} width={1170} height={5188} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/10.webp"
              >
                <Image src={"/images/new-portfolio/10.webp"} width={1170} height={5921} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/11.webp"
              >
                <Image src={"/images/new-portfolio/11.webp"} width={1170} height={5808} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/12.webp"
              >
                <Image src={"/images/new-portfolio/12.webp"} width={1170} height={3420} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/13.webp"
              >
                <Image src={"/images/new-portfolio/13.webp"} width={1170} height={3960} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/14.webp"
              >
                <Image src={"/images/new-portfolio/14.webp"} width={1170} height={3960} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/15.webp"
              >
                <Image src={"/images/new-portfolio/15.webp"} width={1170} height={6817} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/16.webp"
              >
                <Image src={"/images/new-portfolio/16.webp"} width={1170} height={3522} alt="our-work-image" />
              </Link>
              {/* <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
