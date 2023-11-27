import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";





const Navbar = () => {
  return (
    <>
      <div className="parent_upper_nav">
        <div className="upper_nav">
          <p className="timing">Mon-Sat:10 am–2 pm, 4–8 pm</p>

          <Link
            to="#"
            className="rounded_button"
          >
            <FaPhoneAlt
              className="phone"
            />
          </Link>
          <Link to="#" className="rounded_button">
            <FaFacebookF className="icon1" />
          </Link>
          <Link to="#" className="rounded_button">
            <FaInstagram className="icon2" />
          </Link>
          <Link to="#" className="rounded_button">
            <FaLinkedinIn className="icon3" />
          </Link>
          <Link to="#" className="rounded_button">
            <IoLogoYoutube className="icon4" />
          </Link>
        </div>
      </div>
      <nav>
        <div className="left_nav">
          <img
            src="https://media.licdn.com/dms/image/D4D0BAQGbDMGgXMBIjg/company-logo_200_200/0/1696229450359?e=1709164800&v=beta&t=DGuKw4tymDyICmcffnH457o8tloC3cr6ajGLeXJykW0"
            alt="logo"
            className="logo"
          />

          <div className="right_nav">
            <div className="link_before">
              <Link to="/appointment">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDPMB7jV605Hwq-i67KyaxjKllOrvo5yXyg&usqp=CAU"
                  alt=""
                />
              </Link>
            </div>
            {/* <h1 className="clinic_name">Rajshri Clinic</h1> */}
          </div>
        </div>
      </nav>
      <div className="bottom_nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/appointment">Appointment</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            {/* <select name="more1" id="more1">
              <option value="details">Details</option>
              <option value="navigation">Navigation</option>
              <option value="patient_form">Patient Form</option>
              <option value="More" selected className="dropdown">
                More
              </option>
            </select> */}
            <Link to="/navigation">Navigation</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
