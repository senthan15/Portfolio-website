import React ,{useRef,useState} from 'react'
import "../index.css"
import emailjs from "@emailjs/browser";


function Contact() {
 const form =useRef();
 const [message,setMessage]=useState("");

 const sendEmail =(e)=>{
    e.preventDefault();
    emailjs.sendForm(
      "service_2kfll8j",
      "template_oonfaeh",
      form.current,
      "tgOF5tcRz73W4UTJ1"
    ).then(
        ()=>{
            setMessage("✅ Message sent successfully");
            form.current.reset();
        },
        (error)=>{
            setMessage("❌ Failed to send. please try again.")
            console.error(error.text);
        }
    )
 };

  return  (

    <section id="contact" className="contact ">
      <h2 className="head">
        Contact Me
      </h2>

      <form ref={form} onSubmit={sendEmail} className="card-style card-cont" >
        <div className="contact-grid">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="card-style input-style"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="card-style input-style"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="card-style input-style"></textarea>
        <button
          type="submit"
          className="submit-style "
        >
          Send Message
        </button>

        {message && (
          <p className="submit-text">
            {message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact