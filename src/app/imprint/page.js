import React from "react";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";

const Imprint = () => {
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
                Revisions and Change Requests
              </h3>
              <p>
                Revisions are provided according to the agreed project package or proposal. A revision means adjustment or improvement 
                within the approved project scope.
              </p>
               <p>
                Major changes, new features, new pages, new design directions, additional integrations, or extra services may require a separate quotation.
              </p>
               <p>
                Hamkoders reserves the right to determine whether a request is a revision or a new task.
              </p>

              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Intellectual Property Rights
              </h3>
              <p>
                All website content, designs, layouts, graphics, code, strategies, concepts, brand materials, and digital assets created by Hamkoders remain 
                the property of Hamkoders until full payment has been received.
              </p>
               <p>
                After full payment, the client receives ownership rights to the final approved deliverables, unless otherwise agreed in writing.
              </p>
               <p>
                Hamkoders may retain the right to display completed work in its portfolio, website, social media, marketing materials, case studies, or proposals unless the client 
                 requests confidentiality in writing before the project begins.
              </p>
              <p>
                The client must ensure that any content, logo, image, text, video, font, license, or material provided to Hamkoders does not violate third-party rights.
              </p>
               <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Third-Party Tools and Services
              </h3>
              <p>
                Some projects may require third-party tools, platforms, plugins, APIs, hosting, domains, payment gateways, analytics tools, email services,
                or software licenses.
              </p>
               <p>
                Hamkoders is not responsible for:
              </p>
              <ul>
                <li>Third-party service downtime</li>
                <li>Plugin or software updates</li>
                <li>API changes</li>
                <li>Payment gateway restrictions</li>
                <li>Hosting or server failures</li>
                <li>Domain expiration</li>
                <li>Third-party pricing changes</li>
                <li>Account suspension by external platforms</li>
              </ul>
               <p>
                Any third-party fees are the responsibility of the client unless otherwise agreed in writing.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Digital Marketing and SEO Disclaimer
              </h3>
              <p>
                Hamkoders provides SEO, digital marketing, social media marketing, paid ads, and performance
                marketing services using professional strategies and best practices.
              </p>
               <p>
                However, we do not guarantee fixed search engine rankings, exact traffic numbers, sales results, leads, conversions, or 
                 advertising outcomes because these depend on market competition, audience behavior, ad platforms, search engine algorithms, 
                 budget, content quality, and external factors.
              </p>
               <p>
                We aim to improve online visibility, performance, engagement, and brand growth through consistent and strategic work.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Confidentiality
              </h3>
              <p>
               Both Hamkoders and the client agree to keep confidential business information private. This may include login details, business strategies, project information,
                pricing, technical data, customer data, and internal communication.
              </p>
               <p>
                Confidential information will not be shared with third parties unless required for project completion, 
                 legal compliance, or with client permission.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Limitation of Liability
              </h3>
              <p>
               Hamkoders will not be liable for any indirect, incidental, special, or consequential damages, including loss of profit, 
                loss of business, loss of data, loss of reputation, or business interruption 
                resulting from the use of our website or services.
              </p>
               <p>
                Our total liability for any project is limited to the amount paid by the client for the specific service related to the claim.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
               Website Content Accuracy
              </h3>
              <p>
               We try to keep the information on our website accurate and updated. However, we do not guarantee that all content, service descriptions, 
                prices, offers, or information 
                will always be complete, current, or error-free.
              </p>
               <p>
                Hamkoders may update, remove, or change website content at any time without prior notice.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Termination of Services
              </h3>
              <p>
                Hamkoders may suspend or terminate services if:
              </p>
              <ul>
                <li>The client fails to make payments</li>
                <li>The client provides false or misleading information</li>
                <li>The client violates these Terms & Conditions</li>
                <li>The client uses our services for unlawful purposes</li>
                <li>The project remains inactive due to client delay</li>
                <li>Communication becomes abusive, unethical, or unprofessional</li>
              </ul>
               <p>
                If services are terminated, any completed work and pending payments will be reviewed according to the agreed project scope.  
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Governing Law
              </h3>
              <p>
               These Terms & Conditions shall be governed by and interpreted in accordance with the laws of Austria.
              </p>
               <p>
               Any dispute arising from the use of our website, services, proposals, invoices, or agreements shall be subject to the 
                 competent courts of Austria, unless otherwise agreed in writing.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Updates to These Terms
              </h3>
              <p>
               Hamkoders may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
               <p>
                Your continued use of our website or services after changes are published means you accept the updated Terms & Conditions.
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
                For questions, complaints, legal concerns, or service-related inquiries, please contact us:
              </p>
              <p><b>Hamkoders</b></p>
               <p>
                <b>Website:</b>{" "}
               <Link href="https://www.hamkoders.com/">http://Hamkoders.com</Link>{" "}
              </p>             
               <p>
                <b>Email:</b>{" "}
                <Link href="mailto:info@Hamkoders.com">info@Hamkoders.com</Link>
              </p>
               <p>
                <b>Phone:</b>{" "}
                (+92) 302 280 0188
              </p>
                 <p>
                <b>Location:</b>{" "}
                 Austria
              </p>
              <p>
                By using our website and services, you confirm that you have read, understood, and agreed to these Terms & Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Imprint;
