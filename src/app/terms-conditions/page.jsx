import React from "react";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";

const TermConditions = () => {
  return (
    <PageLayout>
      <section className="terms-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-content text-center">
                <h1 className="same-heading">Terms Condtions</h1>
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
               Welcome to Hamkoders. These Terms & Conditions govern your access to and use of our website, digital services, 
                project work, consultations, proposals, 
                communications, and any services offered by Hamkoders.
              </p>
               <p>
               By visiting our website or using our services, you agree to follow these Terms & Conditions. 
                 If you do not agree with any part of these terms, please do not use our website or services.
              </p>
               <p>
               Hamkoders is a digital agency offering professional web development, app development, software development, branding, SEO, 
               digital marketing, ERP, CRM, CMS, and business 
               technology solutions for businesses in Austria and international markets.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                About Hamkoders
              </h3>
              <p>
                Hamkoders provides digital solutions designed to help businesses build, improve, and scale their online presence.
                Our services may include, but are not limited to:
              </p>
              <ul>
                <li>Web Development</li>
                 <li> App Development</li>
                  <li>Software Development</li>
                  <li>Branding & Corporate Identity</li>
                 <li>Digital Marketing</li>
                  <li>Search Engine Optimization</li>
                  <li>Social Media Marketing</li>
                  <li>Google & Meta Ads Management</li>
                  <li>Content Marketing</li>
                  <li>ERP Development</li>
                  <li>CRM Development</li>
                  <li>CMS Development</li>
                <li>Website Maintenance</li>
                <li>Business Technology Consulting</li>
                </ul>
               <p>
                Our goal is to deliver reliable, scalable, and performance-focused digital solutions that support business growth.
              </p>
              
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
               Use of Our Website
              </h3>
              <p>
               You agree to use the Hamkoders website only for lawful purposes. You must not use this website in any way that may damage the website, 
                affect its performance, misuse its content, or interfere with other users.
              </p>
              <p>
              You agree not to:
              </p>
              <p>
               Copy, reproduce, or misuse our website content without permission
               Attempt to hack, damage, or disrupt our website
                Use our website for spam, fraud, or misleading activity
               Submit false, harmful, or unlawful information through our forms
               Use our services for illegal, unethical, or prohibited business activities
              </p>
              <p>
               Hamkoders reserves the right to restrict access to the website or services if we believe a user is violating these terms.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                 Service Information
              </h3>
              <p>
                We make every effort to present our services clearly and accurately. However, the information 
                on this website is provided for general business and informational purposes only.
              </p>
              <p>
               Service details, pricing, timelines, scope, deliverables, and availability may vary depending on 
                project requirements, business goals, technical complexity, and client approval.
              </p>
              <p>
               Any final project scope, pricing, timeline, and deliverables will be confirmed through a written proposal, 
                quotation, invoice, agreement, or official communication from Hamkoders.
              </p>
              
              <h4>Application Programming</h4>
              <ul>
                <li>
                  <b>Full Refund: </b>If the project has not yet been initiated.
                </li>
                <li>
                  <b>Partial Refund:</b> If the project has begun but is not
                  completed as agreed upon in the scope of work and contract,
                  Hamkoders may offer a partial refund at its discretion. The
                  refund will be calculated based on the proportion of the
                  project completed.
                </li>
              </ul>
              {/* <h4>Dedicated Hiring</h4>
              <ul>
                <li>
                  <b>Full Refund: </b>If there is a delay in starting the
                  project by the assigned staff (e.g., programmer, designer,
                  content writer, SEO expert, etc.)
                </li>
                <li>
                  <b>Proportionate Refund:</b> If the client cancels the project
                  at any time during its course.
                </li>
                <li>
                  <b>No Refund for Work Done:</b> Refunds will not be issued for
                  work already completed. If the client is unsatisfied with the
                  work at any point, they must notify our Project Manager
                  immediately to request discounts or adjustments.
                </li>
              </ul> */}
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Project Scope and Client Responsibilities
              </h3>
              <p>
                Every project requires clear communication and cooperation between Hamkoders and the client. The client is responsible for 
                providing accurate information, required content, 
                brand assets, approvals, login access, images, business details, and feedback within the agreed timeline.
              </p>
              <p>
               Hamkoders will not be responsible for delays caused by:
              </p>
              <ul>
                <li>
                  Late client feedback
                </li>
                <li>
                  Incomplete project information
                </li>
                <li>
                 Delay in payments
                </li>
                <li>
                 Missing content, images, or access details
                </li>
                <li>
                 Changes in project scope
                </li>
                <li>
                 Third-party platform issues
                </li>
                <li>
                 Hosting, domain, plugin, API, or server-related delays
                </li>
                <li>
                 Delayed approvals from the client side
                </li>
              </ul>
              <p>
               If the client requests additional work outside the agreed project scope, it may be treated as a separate task and may require additional charges.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Payments and Billing
              </h3>
              <p>
               All payments must be made according to the agreed proposal, invoice, contract, or payment plan. 
                Work may begin after the agreed initial payment or advance payment has been received.
              </p>
              <p>
               Hamkoders reserves the right to pause, delay, or stop project work if payments are not made on time.
              </p>
              <p>
               Unless otherwise agreed in writing:
              </p>
              <ul>
                <li>Advance payments are required to start a project</li>
                <li>Milestone payments must be paid before the next stage begins</li>
                <li>Final files, website launch, source code, credentials, or project delivery may be held until full payment is received</li>
                <li>Late payments may cause timeline changes</li>
              </ul>
               <p>
               Payment terms will be clearly communicated before starting the project.
              </p>
              
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Refund Policy
              </h3>
              <p>
                Hamkoders takes every project seriously and works to deliver the agreed services professionally. Refund requests will 
                be reviewed based on the project stage, completed work, approved scope,
                and agreement between both parties.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Full Refund
              </h3>
              <p>
                A full refund may be considered only if the project has not started and no planning, research, design, development, 
                strategy, consultation, or resource allocation has been completed.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Partial Refund
              </h3>
              <p>
               A partial refund may be considered if the project has started but the agreed deliverables have not been completed according to the confirmed scope. 
                The refund amount will be calculated based on the work already completed, time spent, resources used, and project stage.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                No Refund
              </h3>
              <p>
                Refunds will not be issued for:
              </p>
              <ul>
                <li>Completed work</li>
                <li>Approved designs, content, strategies, or development tasks</li>
                <li>Delivered files or launched websites</li>
                <li>Digital marketing campaigns already started</li>
                <li>Third-party costs such as hosting, domains, plugins, tools, themes, ads budget, software, or paid integrations</li>
                <li>Client delays, change of mind, or cancellation after work has started</li>
                <li>Work completed according to the agreed scope</li>
              </ul>
               <p>
                All refund decisions are made after reviewing the complete project record and communication history.
              </p>
               <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Delivery Timeline
              </h3>
              <p>
                Project timelines are estimated based on the agreed scope and client cooperation. Hamkoders makes every effort to meet deadlines, 
                but delivery dates may change due to project complexity, delayed feedback, 
                technical issues, third-party dependencies, or change requests.
              </p>
               <p>
                A project timeline is only valid when:
              </p>
              <ul>
                <li>Required information is provided on time</li>
                <li>Payments are made according to the agreed schedule</li>
                <li>Client feedback is received within the required time</li>
                <li>No major changes are added outside the original scope</li>
              </ul>
               <p>
                Hamkoders is not liable for delays caused by the client, third-party platforms,
                 hosting providers, payment gateways, APIs, domain providers, or external service providers.
              </p>
               <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Delivery Timeline
              </h3>
              <p>
                Project timelines are estimated based on the agreed scope and client cooperation. Hamkoders makes every effort to meet deadlines, 
                but delivery dates may change due to project complexity, delayed feedback, 
                technical issues, third-party dependencies, or change requests.
              </p>
               <p>
                A project timeline is only valid when:
              </p>
              <ul>
                <li>Required information is provided on time</li>
                <li>Payments are made according to the agreed schedule</li>
                <li>Client feedback is received within the required time</li>
                <li>No major changes are added outside the original scope</li>
              </ul>
               <p>
                Hamkoders is not liable for delays caused by the client, third-party platforms,
                 hosting providers, payment gateways, APIs, domain providers, or external service providers.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Contact Us
              </h3>
              <p>
                If you have any questions, concerns, or complaints regarding
                these Terms of Use, please contact us using the details below:
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
              <p>
                By using our services, you agree to abide by these Terms and
                Conditions. If you do not agree to these Terms, please refrain
                from using our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermConditions;
