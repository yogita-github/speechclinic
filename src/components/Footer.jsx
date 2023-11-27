import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";



function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="footer-container">
              <div className="col-xs-6 col-md-3">
                {/* <h6>Categories</h6> */}

                <ul className="footer-links">
                  <li>
                    <Link to="/">Email</Link>
                  </li>
                  <li>
                    <Link to="/">Templates</Link>
                  </li>
                  <li>
                    <Link to="/">Navigation</Link>
                  </li>
                  <li>
                    <Link to="/">Patient form</Link>
                  </li>

                  <li>
                    <Link to="/">Equipments</Link>
                  </li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                {/* <h6>Quick Links</h6> */}
                <ul className="footer-links">
                  <li>
                    <Link to="./Home.jsx">Home</Link>
                  </li>
                  <li>
                    <Link to="./Services.jsx">Services</Link>
                  </li>
                  <li>
                    <Link to="./About.jsx">About Us</Link>
                  </li>
                  <li>
                    <Link to="./Contact.jsx">Contact Us</Link>
                  </li>

                  <li>
                    <Link to="./Appointment.jsx">Appointment</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by
                <Link to="#">Rajshri Clinic</Link>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <Link to="#" className="rounded_button">
                    <FaPhoneAlt className="phone" />
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
                </li>
              </ul>
            </div>
          </div>
          <p className="address_footer">
            <b>
              Address:Shop No 7, Balaji Sankul, in front of Dr. Babasaheb
              Ambedkar Udyan, <br />
              near Khwajamia Dargah, Ganesh Colony, Jalgaon, Maharashtra 425001
              <Link to="/navigation">
                <IoLocation />
              </Link>
            </b>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;


    
