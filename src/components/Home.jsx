import React from 'react'
import Navbar from "./Navbar";
import "./Home.css";
import Footer from "./Footer"


function Home() {
  return (
    <div>
      <Navbar />
      <div className="class1">
        <div className="home_slider">
          <div className="container_slider">
            <div className="wrapper">
              <img src="https://img.freepik.com/free-photo/boy-having-occupational-therapy-session-with-psychologist_23-2149091524.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais" />
              <img src="https://img.freepik.com/free-photo/side-view-portrait-speech-pathologist-demonstrating-little-kid-how-pronounce-sounds-right-professional-physiotherapist-working-speech-defects-with-small-child-girl-indoors_176532-15206.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais" />
              <img src="https://img.freepik.com/free-photo/smiling-portrait-girl-female-psychologist-having-conversation-office_23-2148026293.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais" />
              <img src="https://img.freepik.com/free-photo/medium-shot-woman-girl-playing-memory-game_23-2150294685.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais" />
              <img src="https://img.freepik.com/free-photo/young-mixed-race-mother-babysitting-her-adorable-three-year-old-son-using-wireless-headset_343059-3830.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais" />
              <img src="https://img.freepik.com/free-photo/pediatrician-doctor-examining-child-comfortable-medical-office-healthcare-childhood-medicine-protection-prevention-concept_155003-24170.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais" />
              <img src="https://img.freepik.com/free-photo/woman-doing-speech-therapy-with-little-blonde-boy_23-2149110228.jpg?size=626&ext=jpg" />
            </div>
          </div>
        </div>
        <div className="basic_info">
          <div className="user-info-container">
            <div className="image-container">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipN-mXxBWnrUvk06Dcn-6byFyvsdWIKYJ09S6vvQ=s1360-w1360-h1020"
                alt="User"
                className="user-image"
              />
            </div>
            <div className="info-container">
              <h2>Audiology</h2>
              <h1>What exactly is Audiology?</h1>
              <p className="audiology">
                Audiology is a specialized field of healthcare that focuses on
                the study, diagnosis, and treatment of hearing and balance
                disorders. Audiologists, the professionals in this field, assess
                and diagnose various types of hearing impairments, ranging from
                sensorineural to conductive hearing loss, and provide
                personalized treatment plans. Their responsibilities extend to
                evaluating the vestibular system for balance issues, especially
                concerning disorders leading to dizziness. Audiologists play a
                crucial role in early intervention for pediatric hearing
                concerns, offer solutions such as hearing aids or cochlear
                implants, and contribute to research advancing the understanding
                and treatment of auditory and vestibular conditions.
              </p>
            </div>
          </div>
          <div className="user-info-container1">
            <div className="info-container1">
              <h2>Speech Therapy</h2>
              <h1>What exactly is Speech Therapy?</h1>
              <p className="audiology1">
                Speech services encompass a range of therapeutic interventions
                designed to address speech and language disorders. These
                services are provided by speech-language pathologists (SLPs) who
                work with individuals of all ages, from children to adults.
                Speech services are tailored to the specific needs of each
                individual and may include assessments, diagnosis, and the
                development of personalized treatment plans. Common areas
                addressed by speech services include speech sound production,
                language comprehension and expression, fluency, voice, and
                social communication skills.
              </p>
            </div>
            <div className="image-container1">
              <img
                src="https://img.freepik.com/free-photo/woman-doing-speech-therapy-with-little-boy-her-clinic_23-2149110241.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais"
                alt="User"
                className="user-image1"
              />
            </div>
          </div>
        </div>
        <div className="team">
          <h1 className="header">Our Hearing and Speech Therapists</h1>
          <hr className="team_underline" />
          <div class="therapists-container">
            <div class="therapist">
              <img
                src="https://img.freepik.com/free-photo/mid-shot-woman-therapist-with-clipboard_23-2148759113.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=sph"
                alt="Therapist 1"
              />
              <h3>Therapist 1</h3>
              <p>Speech Therapist</p>
            </div>

            <div class="therapist">
              <img
                src="https://img.freepik.com/free-photo/portrait-corporate-woman-holding-clipboard-work-standing-formal-outfit-white-background_1258-88411.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=sph"
                alt="Therapist 2"
              />
              <h3>Therapist 2</h3>
              <p>Hearing Therapist</p>
            </div>

            <div class="therapist">
              <img
                src="https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175225.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais"
                alt="Therapist 3"
              />
              <h3>Therapist 3</h3>
              <p>Speech Therapist</p>
            </div>

            <div class="therapist">
              <img
                src="https://img.freepik.com/free-photo/psychologist-cute-young-professional-brunette-lady-providing-online-sessions-glasses_140725-167583.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=sph"
                alt="Therapist 4"
              />
              <h3>Therapist 4</h3>
              <p>Hearing Therapist</p>
            </div>

            <div class="therapist">
              <img
                src="https://img.freepik.com/free-photo/ceo-company_1098-21107.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais"
                alt="Therapist 5"
              />
              <h3>Therapist 5</h3>
              <p>Speech Therapist</p>
            </div>
          </div>
        </div>

        {/* faq */}
        <div class="faq_page">
          <h1>Frequently Asked Questions</h1>
          <div className="parent_faq">
            <div class="container">
              <details>
                <summary>
                  Q: What services do you offer for speech disorders?
                </summary>
                <div>
                  A: We offer a range of services, including speech evaluations,
                  therapy sessions, and personalized treatment plans for various
                  speech disorders.
                </div>
              </details>
            </div>
            <div class="container">
              <details>
                <summary>Q: How can I schedule an appointment?</summary>
                <div>
                  A: To schedule an appointment, you can call our clinic, visit
                  our online appointment portal, or come in person to our
                  reception desk.
                </div>
              </details>
            </div>
            <div class="container">
              <details>
                <summary>Q: Do you provide hearing tests for children?</summary>
                <div>
                  A: Yes, we offer comprehensive hearing tests for individuals
                  of all ages, including children. Early detection and
                  intervention are crucial for children with hearing concerns.
                </div>
              </details>
            </div>
            <div class="container">
              <details>
                <summary>
                  Q: Are there specific signs that indicate a hearing problem in
                  adults?
                </summary>
                <div>
                  A: Yes, common signs of a hearing problem in adults include
                  difficulty understanding speech, asking people to repeat
                  themselves, and turning up the volume on the TV or radio.
                </div>
              </details>
            </div>
            <div class="container">
              <details>
                <summary>
                  Q: How long does a typical speech therapy session last?
                </summary>
                <div>
                  A: The duration of a speech therapy session varies depending
                  on the individual's needs. Sessions typically last between 30
                  minutes to one hour, and the frequency is determined by the
                  therapist based on the treatment plan.
                </div>
              </details>
            </div>
            <div class="container">
              <details>
                <summary>
                  Q: Do you provide services for individuals with communication
                  disorders ?
                </summary>
                <div>
                  A: Yes, our clinic offers specialized services for individuals
                  with communication disorders related to neurological
                  conditions such as stroke, traumatic brain injury, and other
                  neurological disorders.
                </div>
              </details>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="parent_cards">
          <div class="background"></div>
          <div class="background-texture"></div>

          <section class="carousel">
            <h2 class="categories__title">Testimonials</h2>
            <div class="carousel__container">
              <div class="carousel-item">
                <img
                  class="carousel-item__img"
                  src="https://img.freepik.com/free-photo/nice-job-well-done-great-proud-good-looking-satisfied-female-entrepreneur-showing-thumbs-up-smiling-delighted-pleased-seeing-good-result-encouraging-assitant-keep-up-liking-plan-approving_176420-35529.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais"
                  alt="people"
                />
                <div class="carousel-item__details">
                  <div class="controls">
                    <span class="fas fa-play-circle"></span>
                    <span class="fas fa-plus-circle"></span>
                  </div>
                  <h5 class="carousel-item__details--title">
                    Aishwarya Kudchikar
                  </h5>
                  <h6 class="carousel-item__details--subtitle">
                    My friend referred me this clinic and my overall
                    <br /> experience was very good.
                  </h6>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="carousel-item__img"
                  src="https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="people"
                />
                <div class="carousel-item__details">
                  <div class="controls">
                    <span class="fas fa-play-circle"></span>
                    <span class="fas fa-plus-circle"></span>
                  </div>
                  <h5 class="carousel-item__details--title">Amit Jadhav</h5>
                  <h6 class="carousel-item__details--subtitle">
                    Best treatment 👌
                  </h6>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="carousel-item__img"
                  src="https://img.freepik.com/free-photo/woman-holding-blushing-emoticon-using-laptop_53876-71024.jpg?size=626&ext=jpg&ga=GA1.1.1315413171.1679411364&semt=ais"
                  alt="people"
                />
                <div class="carousel-item__details">
                  <div class="controls">
                    <span class="fas fa-play-circle"></span>
                    <span class="fas fa-plus-circle"></span>
                  </div>
                  <h5 class="carousel-item__details--title">Rajat Nikam</h5>
                  <h6 class="carousel-item__details--subtitle">
                    Great service!!
                  </h6>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="carousel-item__img"
                  src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="people"
                />
                <div class="carousel-item__details">
                  <div class="controls">
                    <span class="fas fa-play-circle"></span>
                    <span class="fas fa-plus-circle"></span>
                  </div>
                  <h5 class="carousel-item__details--title">Siddhesh Kamble</h5>
                  <h6 class="carousel-item__details--subtitle">
                    My experience with the Rajshri Speech & Hearing Clinic
                    <br />
                    has been excellent. Rajshri ma'am patiently guided us
                    <br />
                    on the choice of hearing aid and cleared all of our doubts.
                  </h6>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="carousel-item__img"
                  src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="people"
                />
                <div class="carousel-item__details">
                  <div class="controls">
                    <span class="fas fa-play-circle"></span>
                    <span class="fas fa-plus-circle"></span>
                  </div>
                  <h5 class="carousel-item__details--title">Kumar Gautam -</h5>
                  <h6 class="carousel-item__details--subtitle">
                    Experienced excellent Service at the Centre. And wish
                    <br />
                    the clinic would keep serving the best treatment to
                    <br />
                    Patients.
                  </h6>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="carousel-item__img"
                  src="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="people"
                />
                <div class="carousel-item__details">
                  <div class="controls">
                    <span class="fas fa-play-circle"></span>
                    <span class="fas fa-plus-circle"></span>
                  </div>
                  <h5 class="carousel-item__details--title">Pramod Sakhare</h5>
                  <h6 class="carousel-item__details--subtitle">
                    The consultation provided by Rajshree maam was <br />
                    invaluable. I got all my doubts cleared.
                  </h6>
                </div>
              </div>

              <div class="carousel-item">
                <img
                  class="carousel-item__img"
                  src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="people"
                />
                <div class="carousel-item__details">
                  <div class="controls">
                    <span class="fas fa-play-circle"></span>
                    <span class="fas fa-plus-circle"></span>
                  </div>
                  <h5 class="carousel-item__details--title">suraj kode</h5>
                  <h6 class="carousel-item__details--subtitle">
                    I visited rajshree mams clinic regarding <br />
                    hearing problem,,very good experience n good <br />
                    clinic... thank you mam,very good experience
                    <br />n cooperative nature 👍
                  </h6>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home
