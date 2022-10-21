// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container } from "react-bootstrap";
import aos from "aos";
import "aos/dist/aos.css";


function Contact() {
  const [state, handleSubmit] = useForm("meqdlqak");
  const [message, updateMessage] = useState("Message");
  const [email, updateEmail] = useState("Your email");

  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);

  if (state.succeeded) {
    return (
      <p
        style={{
          color: "#20C20E",
          fontFamily: 'Monoton',
          fontSize: "5.5vw"
        }}
      >
        Thanks for joining!
      </p>
    );
  }
  return (
    <Container
      data-aos="fade-up"
      id="contact"
      style={{
        color: "#20C20E",
        fontFamily: "Share Tech Mono",
        justifyContent: "flex-start",
      }}
    >
      <h1>Get in Touch</h1>
      <p style={{ textAlign: "center", fontSize: "max(1vw, 20px)" }}>
        I’m currently looking for any new opportunities to get more professional
        experience in the software development industry.
      </p>
      <p style={{ textAlign: "center", fontSize: "max(1vw, 20px)" }}>
        My inbox is always open, so just hit me up and say Hello! Even if it is
        not software-related, it is nice to have a chat
      </p>
      <p style={{ textAlign: "center", fontSize: "max(1vw, 20px)" }}>
        Just leave a message and your email and you are good to go!
      </p>
      <form onSubmit={handleSubmit} id="contact-form">
        <label htmlFor="email" style={{textAlign: "left"}}></label>
        <input
          id="form-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => updateEmail(e.target.value)}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="form-message"
          name="message"
          value={message}
          onChange={(e) => updateMessage(e.target.value)}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br></br>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Container>
  );
}

export default Contact
