import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Navigation.css";

function Navigation() {
  return (
    <>
      <Navbar />
      <div className="Navigation_tab">
      <div className='left_navi'></div>
        <h2>Navigation map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4417.167138271553!2d75.5494839575017!3d21.01017016238032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fb6a96e439f%3A0xb6886b587c786179!2sRajshri%20Speech%20%26%20Hearing%20Clinic!5e0!3m2!1sen!2sin!4v1701000669129!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ margin: "20px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="right_navi">
          <h4>
            Address:Rajshri Speech & Hearing Clinic Shop No 7,<br/> Balaji Sankul, in
            front of Dr. Babasaheb Ambedkar <br/>Udyan, near Khwajamia Dargah, Ganesh
            Colony,<br/> Jalgaon, Maharashtra 425001
          </h4>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Navigation
