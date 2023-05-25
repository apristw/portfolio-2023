import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jmpo0gq",
        "template_l9qnwlj",
        form.current,
        "R4xpPe8u6zQYAzz-B"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Email Terkirim");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div id="id-contact" className="max-w-7xl h-screen flex items-center mx-auto py-24 p-5 rounded-2xl">
        <div className="flex max-w-2xl mx-auto">
          <form action="" ref={form} onSubmit={sendEmail} className="w-full">
            <div className="w-full">
              <h3 className="py-5 text-3xl font-bold text-slate-700">
                Contact Me
              </h3>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full h-11 p-5 mb-5 rounded-lg border border-gray-400 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full h-11 p-5 mb-5 rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Type Your Message"
                cols="30"
                rows="10"
                className="w-full p-5 border rounded-lg h-56 border-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  value="Send"
                  className="px-6 py-2 mt-4 rounded-lg text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
