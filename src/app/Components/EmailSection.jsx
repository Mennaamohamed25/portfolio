"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/Images/github-icon.svg";
import LinkedinIcon from "../../../public/Images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  // HANDEL SUB FUNCTION

  const handelSubmitted = async (e) => {
    // To PREVENT DEFAULT OF SUB BUTTON
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      message: e.target.message.value,
      email: e.target.email.value,
    };
    const JSONdata = JSON.stringify(data);
    const endPoint = "/api/send";

    const option = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    const response = await fetch(endPoint, option);
    const resData = await response.json();
    // console.log(resData)
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12  py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-4 transform -translate-x-1/2 -translate-1/2"></div>
      {/* INFO AND ICONS PART */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2"> Let's Connect </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for a new opportunity, my inbox is always open.
          Whether you have a question or want to hire me, I will try my best to
          get back to you!
        </p>
        <div className="flex flex-row gap-2">
          <Link href="https://www.linkedin.com/in/menna-muhamed-643250173/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://github.com/Mennaamohamed25">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
      {/* EMAIL FORM */}
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handelSubmitted}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your Email{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject{" "}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Enter your subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-not-allowed"
            disabled
          >
            Send Message
          </button>
          {/* IF EMAIL IS SUB  */}
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2 text-center">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
