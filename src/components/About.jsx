import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import "./About.css";


function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>ABOUT US</h1>
        <p>
          At our clinic, we are dedicated to providing exceptional speech
          therapy services to individuals of all ages. Our team of experienced
          and compassionate speech therapists is committed to helping you or
          your loved ones improve communication skills and overcome speech
          challenges.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to create a supportive and nurturing environment where
          every individual can achieve their full potential in communication. We
          believe in personalized care and evidence-based practices to address a
          variety of speech and language disorders.
        </p>

        <h3>Meet Our Team</h3>
        <p>
          Our dedicated team of professionals is here to support you on your
          journey to improved communication. Get to know the individuals who
          make our clinic a caring and effective place for speech therapy.
        </p>

        <div className="team-members">
          {/* Team member 1 */}
          <div className="team-member">
            <img src="/images/team_member1.jpeg" alt="Rajeshree" />
            <h4>Rajshri</h4>
            <p>Speech Therapist</p>
            <p>
              Rajeshree is a dedicated speech therapist with over 10 years of
              experience. She specializes in helping individuals of all ages
              overcome speech challenges and improve communication skills.
            </p>
            <p>Contact: rajeshree@example.com Phone:09096769868</p>
          </div>

          {/* Team member 2 */}
          <div className="team-member">
            <img src="/images/team_member2.jpeg" alt="Jane Smith" />
            <h4>Joe</h4>
            <p>Speech Language Pathologist</p>
            <p>
              Jane Smith is a skilled speech language pathologist who is
              passionate about assisting children and adults in achieving their
              full potential in communication.
            </p>
            <p>Contact: joe.smith@example.com Phone: 09096769868</p>
          </div>
        </div>

        {/* <h3>Services We Offer</h3>
      <ul>
        <li>Speech and Language Assessments</li>
        <li>Individualized Therapy Sessions</li>
        <li>Articulation and Phonological Therapy</li>
        <li>Fluency and Stuttering Therapy</li>
        <li>Language Development Programs</li>
      </ul> */}

        {/* Add more information about your clinic as needed */}

        <h3>Services We Offer</h3>
        <ul className="services-list">
          <li>
            <img
              src="/images/service1.jpeg"
              alt="Speech and Language Assessments"
            />
            Speech and Language Assessments
          </li>
          <li>
            <img
              src="/images/service22.jpeg"
              alt="Individualized Therapy Sessions"
            />
            Individualized Therapy Sessions
          </li>
          <li>
            <img
              src="/images/service3.jpeg"
              alt="Articulation and Phonological Therapy"
            />
            Articulation and Phonological Therapy
          </li>
          <li>
            <img
              src="/images/service2.jpeg"
              alt="Fluency and Stuttering Therapy"
            />
            Fluency and Stuttering Therapy
          </li>
          <li>
            <img
              src="/images/service5.jpeg"
              alt="Language Development Programs"
            />
            Language Development Programs
          </li>
        </ul>

        <p>
          Contact us today to schedule an appointment and take the first step
          towards enhancing your communication skills.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About
