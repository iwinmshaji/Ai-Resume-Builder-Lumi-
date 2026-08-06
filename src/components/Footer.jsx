import React from 'react'
import {
  MdAttachEmail
} from "react-icons/md";

import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookSquare,
  FaWhatsapp
} from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{ height: '350px', backgroundColor: 'black' }}
      className="container-fluid text-light p-5"
    >
      <div className="row">

        {/* About */}
        <div className="col-lg-4">
          <h4 className="mb-3">AI Resume Builder</h4>

          <p style={{ textAlign: "justify" }}>
            An AI Resume Builder suggests job-specific keywords, professional
            summaries, and skill recommendations to make the resume more
            effective and ATS (Applicant Tracking System) friendly. The main
            goal of the AI Powered Resume Builder is to simplify the resume
            creation process and help job seekers build professional,
            well-structured resumes in a few minutes.
          </p>
        </div>

        {/* Empty Column */}
        <div className="col-lg-4"></div>

        {/* Contact */}
        <div className="col-lg-4">
          <h4 className="mb-3">Contact Us</h4>

          <p>
            <MdAttachEmail /> resumebuilder@gmail.com
          </p>

          <p>
            <FaPhoneAlt /> 9087654321
          </p>

          <h5 className="my-3">Connect With Us</h5>

          <div className="fs-4">
            <FaInstagram />
            <FaFacebookSquare className="mx-2" />
            <FaWhatsapp />
          </div>
        </div>

      </div>

      <hr />

      <h6 className="text-center">
        Designed & built with ❤️ using React
      </h6>
    </div>
  );
}

export default Footer;