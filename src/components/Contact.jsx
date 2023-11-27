import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import emailIcon from "../images/mail-icon (1).svg";
import mapIcon from "../images/maps-pin-black-icon.svg";
import phoneIcon from "../images/phone-icon.svg";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

function Contact() {
  return (
    <>
      <Navbar />
      <div style={{ fontFamily: "poppins" }}>
        <h2
          className="heading"
          style={{
            fontSize: "34px",
            textAlign: "center",
            textTransform: "uppercase",
            fontFamily: "poppins",
          }}
        >
          Contact us
        </h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7449.11539644235!2d75.54851291114907!3d21.010359800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fb6a96e439f%3A0xb6886b587c786179!2sRajshri%20Speech%20%26%20Hearing%20Clinic!5e0!3m2!1sen!2sin!4v1700916313271!5m2!1sen!2sin"
            width="900"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          className="card-contact"
          style={{
            padding: "0 4rem",
            display: "flex",
            justifyContent: "center",
            fontFamily: "mulish",
            background: "#fff",
          }}
        >
          <div
            className="desc"
            style={{
              width: "30vw",
              alignItems: "center",
              alignContent: "center",
              padding: "1rem",
            }}
          >
            <label htmlFor="" className="contact_div">
              Contact Information
            </label>
            <ul style={{ listStyle: "none", padding: "20px" }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  paddingBottom: "50px",
                }}
              >
                <MdOutlineMailOutline />
                <span>Email:</span> your.email@example.com
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  paddingBottom: "50px",
                }}
              >
                <FaPhone />
                <span>Phone:</span> +1234567890
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  paddingBottom: "50px",
                }}
              >
                <IoLocationSharp />
                <span>Address:</span> Ganesh Colony, Jalgaon, Maharashtra -
                425001
              </li>
            </ul>
            {/* <p>
              <img
                src={emailIcon}
                width={"16px"}
                alt=""
                style={{ marginRight: "6px", width: "16px" }}
              />{" "}
              clinic@gmail.com
            </p> */}
            {/* <p>
              <img
                src={phoneIcon}
                width={"16px"}
                alt=""
                style={{ marginRight: "6px" }}
              />{" "}
              90967 69868
            </p> */}
            {/* <address>
              {" "}
              <img
                src={mapIcon}
                width={"14px"}
                alt=""
                style={{ marginRight: "6px" }}
              />
              Ganesh Colony, Jalgaon, Maharashtra - 425001
            </address> */}
          </div>

          <div className="form">
            <form action="">
              <label htmlFor="form_heading">Send a message</label>
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
              <input type="text" placeholder="leave the message here..." />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact
