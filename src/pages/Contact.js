import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [radioOne, setRadioOne] = useState(false);
  const [radioTwo, setRadioTwo] = useState(false);
  const [radioThree, setRadioThree] = useState(false);
  const [radioFour, setRadioFour] = useState(false);
  const [radioFive, setRadioFive] = useState(false);
  const handleReset = () => {
    setEmail("");
    setMessage("");
    setConsent(false);
    setRadioOne(false);
    setRadioTwo(false);
    setRadioThree(false);
    setRadioFour(false);
    setRadioFive(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qywhs9q",
        "template_8eadq46",
        form.current,
        "00lB1I4MPjvD8ea2d"
      )
      .then(
        (result) => {
          alert("Sent successfully");
          setEmail("");
          setMessage("");
          setConsent(false);
          setRadioOne(false);
          setRadioTwo(false);
          setRadioThree(false);
          setRadioFour(false);
          setRadioFive(false);
        },
        (error) => {
          alert("Sent error");
        }
      );
  };

  return (
    <>
      <div className="bg-area">
        <img src={process.env.PUBLIC_URL + "./images/contact_bg.jpg"} alt="" />
      </div>
      <section className="contact page">
        <form ref={form} onSubmit={sendEmail} className="email-form">
          <input
            className="input-email"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter your email!"
          />
          <div className="rating">
            <p className="rating_title">Please rate our site!</p>
            <label>
              <input
                type="radio"
                name="rating"
                value="1, ★"
                checked={radioOne}
                onClick={() => {
                  setRadioOne(!radioOne);
                }}
              />
              ★
            </label>

            <label>
              <input
                type="radio"
                name="rating"
                value="2, ★★"
                checked={radioTwo}
                onClick={() => {
                  setRadioTwo(!radioTwo);
                }}
              />
              ★★
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="3, ★★★"
                checked={radioThree}
                onClick={() => {
                  setRadioThree(!radioThree);
                }}
              />
              ★★★
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="4, ★★★★"
                checked={radioFour}
                onClick={() => {
                  setRadioFour(!radioFour);
                }}
              />
              ★★★★
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="5, ★★★★★"
                checked={radioFive}
                onClick={() => {
                  setRadioFive(!radioFive);
                }}
              />
              ★★★★★
            </label>
          </div>
          <textarea
            className="textarea"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Text area (Comment)"
          />
          <div className="info">
            <p>Do you agree to provide information?</p>
            <div className="checkbox">
              <input
                id="consent"
                type="checkbox"
                text="Consent"
                checked={consent}
                onClick={() => {
                  setConsent(!consent);
                }}
              />
              <label htmlFor="consent">Consent</label>
            </div>
          </div>
          <div className="btn-area">
            <div className="reset-btn" onClick={handleReset}>
              Reset
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </>
  );
}
