import React from "react";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";

const TermConditions = () => {
  return (
    <PageLayout>
      <section className="terms-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-content text-center">
                <h1 className="same-heading">Privacy Policy</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="terms" id="terms">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                {/* At Hamkoders, we are committed to protecting your privacy and
                ensuring that your personal information is handled in a safe and
                responsible manner. This Privacy Policy outlines how we collect,
                use, disclose, and safeguard your information when you visit our
                website <Link href="/">http://Hamkoders.com</Link>{" "}
                and utilize our services */}
                At Hamkoders, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, protect, 
                and manage your information when you visit our website, contact us, request a quote, book a consultation, or use our digital services. 
              </p>
              <p>Hamkoders provides web development, app development, software development, branding, SEO, digital marketing, ERP, CRM, CMS,
                and technology solutions for businesses in Austria and international markets.</p>
              <p>
                By using our website or services, you agree to the practices described in this Privacy Policy.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Information We Collect
              </h3>
              <p>We may collect personal and non-personal information when you visit our website, fill out a form, contact us,
                request a proposal, communicate with our team, or use our services.</p>
              <ul>
              
                 <h3>Personal Information: 
                  {/* Information that can identify you
                  personally, such as your name, email address, phone number,
                  billing information, and other details you provide when
                  registering or interacting with our services. */}</h3>
                 <p> Personal information may include:</p>

                  <li>Full name</li>
                 <li> Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                 <li> Business website</li>
                  <li>Project requirements</li>
                  <li>Billing information</li>
                  <li>Communication details</li>
                  <li>Files or documents you share with us</li>
                  <li>Information submitted through contact forms or consultation forms</li>
                
               
                   <h3>Non-Personal Information:</h3>
                  {/* Information that does not
                  identify you personally, including demographic data, browser
                  type, IP address, and usage data collected through cookies and
                  analytics tools. */}
                  <p> Non-personal information may include:</p>

                <li>Browser type</li>
                 <li> Device type</li>
                  <li>IP address</li>
                  <li>Location data</li>
                 <li>Website usage data</li>
                  <li>Pages visited</li>
                  <li>Time spent on the website</li>
                  <li>Referral source</li>
                  <li>Cookies and analytics data</li>
                  <p>This information helps us improve website performance, user experience, marketing, and service quality.</p>
                
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                How We Use Your Information
              </h3>
              <p>
                We use the information we collect for various purposes,
                including:
              </p>
              <ul>
                <li>Providing and improving our services</li>
                <li>
                  Communicating with you about your account or transactions
                </li>
                <li>Personalizing your experience on our Site</li>
                <li>Analyzing Site usage to enhance functionality</li>
                <li>Complying with legal obligations</li>
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Sharing Your Information
              </h3>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information in the
                following circumstances:
              </p>
              <ul>
                <li>
                  <b>Service Providers</b>: With trusted third-party vendors who
                  perform services on our behalf, such as payment processing and
                  data hosting.
                </li>
                <li>
                  <b>Legal Compliance:</b> When required by law or to protect
                  our rights, property, or safety.
                </li>
                <li>
                  <b>Business Transfers:</b> In connection with a merger,
                  acquisition, or sale of assets.
                </li>
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Cookies and Tracking Technologies
              </h3>
              <p>
                Our Site uses cookies and similar technologies to enhance user
                experience and analyze Site usage. You can control cookie
                settings through your browser, but disabling cookies may affect
                certain functionalities of the Site.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Data Security
              </h3>
              <p>
                We implement reasonable security measures to protect your
                personal information from unauthorized access, alteration, or
                destruction. However, no method of transmission over the
                Internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Your Rights and Choices
              </h3>
              <p>
                Depending on your location, you may have rights regarding your
                personal information, including:
              </p>
              <ul>
                <li>Accessing and correcting your data</li>
                <li>Requesting deletion of your data</li>
                <li>Opting out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the
                information below.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Third-Party Links
              </h3>
              <p>
                Our Site may contain links to third-party websites. We are not
                responsible for the privacy practices or content of these
                external sites.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Changes to This Privacy Policy
              </h3>
              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal requirements. The "Effective
                Date" at the top of this page indicates the most recent
                revision. We encourage you to review this policy regularly.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Sign up forms
              </h3>
              <p>
                Yes, the form links to a privacy policy that clearly states we
                do not share or sell SMS opt-in, or phone numbers for the
                purpose of SMS
              </p>
              <ul>
                <li>Messaging frequency may vary.</li>
                <li>Message and data rates may apply.</li>
                <li>You can opt out any time by texting STOP.</li>
                <li>
                  For assistance, text HELP or visit our website at
                  https://Hamkoders.com/.
                </li>
                <li>
                  Visit{" "}
                  <Link href="/privacy-policy">
                    https://Hamkoders.com/privacy-policy
                  </Link>{" "}
                  for privacy policy and{" "}
                  <Link href="/terms-conditions">
                    https://Hamkoders.com/terms-conditions
                  </Link>{" "}
                  for Terms of Service.
                </li>
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Contact Us
              </h3>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <p>
                <b>Email:</b>{" "}
                <Link href="mailto:info@Hamkoders.com">info@Hamkoders.com</Link>
              </p>
              <p>
                <b>Website:</b>{" "}
                <Link href="/contact-us">
                  http://Hamkoders.com/contact-us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermConditions;
