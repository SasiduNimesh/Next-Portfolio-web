import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import {motion} from 'motion/react'

const Contact = ({isDarkMode , setIsDarkMode}) => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0eb1e323-2c03-49b2-b656-281df0b2797a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
      <div
        id="contact"
        className={`w-full px-[12%] py-16 scroll-mt-20 transition-colors duration-500
          ${isDarkMode ? "text-white" : "bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] text-black"}`}
      >
        {/* Heading */}
        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.3}}
        className="text-center mb-2 text-lg font-Ovo tracking-wide">
          Share Your Ideas
        </motion.h4>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.4}}
        className="text-center text-4xl md:text-5xl font-Ovo font-bold">
          Contact Me
        </motion.h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-500 dark:text-gray-300">
          I’d love to hear from you! If you have any questions, comments, or feedback,
          please use the form below.
        </p>

        {/* Contact Form */}
        <motion.form 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.5}}
        className="max-w-2xl mx-auto" onSubmit={onSubmit}>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter your name"
              required
              className={`flex-1 p-3 outline-none border border-gray-400 rounded-md
              ${isDarkMode ? 'bg-gray-800 text-white border-gray-400': 'bg-white text-black '}
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className={`flex-1 p-3 outline-none border border-gray-400 rounded-md
              ${isDarkMode ? 'bg-gray-800 text-white border-gray-400': 'bg-white text-black '}
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
              name="email"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Enter your message"
            required
            className={`w-full p-4 outline-none border border-gray-400 rounded-md 
          ${isDarkMode ? 'bg-gray-800 text-white border-gray-400': 'bg-white text-black '}
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-6`}
            name="message"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 
            bg-black/80 text-white dark:bg-white dark:text-black 
            rounded-full mx-auto hover:scale-105 hover:shadow-lg transition duration-300"
          >
            Submit Now <FaEnvelope className="w-4" />
          </button>

          {/* Web3Forms result */}
          <p className="mt-4 text-center">{result}</p>
        </motion.form>
      </div>

  )
}

export default Contact