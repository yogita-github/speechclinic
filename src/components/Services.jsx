import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import speech_img from "../images/speech_therapy.jpg";
import hearing_img from "../images/hearing_aid.jpg";
import story1 from "../images/20231126_200852.jpg";
import story2 from "../images/20231126_201058.jpg";
import "./Services.css";
function Services() {
  return (
    <>
      <Navbar />
      <div className="services">
        <div className="container-main">
          <div div className="container-sub1">
            <h2>Speech Therapy</h2>
            <p>
              Speech therapy, a vital component of healthcare, addresses a
              spectrum of communication and swallowing challenges. Skilled
              speech-language pathologists assess, diagnose, and treat
              individuals across all age groups, customizing interventions to
              specific needs. For speech disorders like articulation issues or
              fluency disruptions, therapists employ evidence-based techniques
              to enhance clarity and natural flow. Language disorders, affecting
              expressive or receptive skills, are meticulously addressed,
              alongside pragmatic language challenges in social contexts. In
              pediatric cases, therapy aids in language development and supports
              those with autism spectrum disorders. Adults benefit from
              interventions targeting speech and language issues resulting from
              neurological conditions or injuries. Moreover, speech therapy
              plays a crucial role in mitigating swallowing disorders, ensuring
              safe and comfortable eating. The process involves comprehensive
              assessment, collaborative goal-setting, and personalized
              intervention plans.
            </p>
          </div>
          <div className="container-sub2">
            <img src={speech_img} alt="" />
          </div>
        </div>

        <div className="middle-scr">
          <h2>Storytelling</h2>
          <div className="img1">
            <img
              src={story1}
              alt=""
              style={{
                padding: "1rem",
                marginLeft: "-200px",
                width: "20%",
                height: "350px",
                paddingRight: "200px",
              }}
            />
            <div className="txt">
              <p
                style={{
                  width: "30%",
                  marginRight: "-200px",
                  width: "30vw",
                  bottom: "0",
                  fontSize: "16px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "white",
                  textAlign: "justify",
                }}
              >
                In January, winter's chill sets the stage, a fresh start on a
                frosty page. February brings love's embrace, hearts dance in a
                tender space. March arrives with breezes bold, as springtime
                whispers tales untold. April showers nurture the earth, a
                rebirth of colors and mirth. May blooms with blossoms fair,
                nature's tapestry woven with care. June's warmth ignites the
                summer song, days grow long, nights grow strong. July's
                fireworks paint the sky, a celebration as time drifts by. August
                sunbeams kiss the land, a golden touch, life's grains of sand.
                September hints at autumn's grace, a farewell to warmth, a quiet
                embrace. And so, the months weave a tale, a year's journey, each
                chapter set to sail.
              </p>
            </div>
          </div>
          <div
            className="img2"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="txt" style={{ float: "left" }}>
              <p
                style={{
                  width: "50%",
                  marginLeft: "250px",
                  width: "30vw",
                  bottom: "0",
                  fontSize: "16px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "white",
                  textAlign: "justify",
                }}
              >
                In a cozy neighborhood, Whiskers, the cat, and Max, the dog,
                formed an unlikely friendship. Through playful afternoons and
                shared adventures, they showcased the beauty of camaraderie.
                From chasing butterflies to napping under the oak tree, their
                contrasting personalities blended seamlessly. True to their
                bond, Whiskers and Max proved that friendship knows no bounds,
                brightening each day with joy.
              </p>
            </div>
            <img
              style={{
                padding: "1rem",
                // marginLeft: "auto",
                marginRight: " auto",
                width: "30%",
                height: "20%",
                marginTop: "-20px",
                marginLeft: "100px",
                float: "right",
              }}
              src={story2}
              alt=""
            />
          </div>
        </div>

        <div className="container-last">
          <div className="container-last-sub">
            <img src={hearing_img} alt="" />
          </div>
          <div
            style={{
              width: "50vw",
              top: "50%",
              transform: "translate(0, 20%)",
              marginTop:"-200px",
            }}
          >
            <h2>Hearing Aids</h2>
            <p>
              Hearing aids are revolutionary devices designed to enhance
              auditory experiences for individuals with hearing loss. These
              compact electronic devices are worn in or behind the ear and work
              by amplifying sounds, making them more audible for the wearer.
              Advanced models use cutting-edge technology, including digital
              signal processing, to provide clearer and more natural sound
              quality. Hearing aids are customized to address various types and
              degrees of hearing loss, ensuring a tailored solution for each
              user. They come in different styles, from discreet in-the-ear
              models to behind-the-ear options. Many modern hearing aids also
              offer additional features such as Bluetooth connectivity, allowing
              users to connect to smartphones and other devices for a seamless
              audio experience. Regular advancements continue to improve the
              functionality and comfort of hearing aids, empowering individuals
              to actively engage in conversations, enjoy music, and participate
              fully in daily activities.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services
