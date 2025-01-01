import React, { useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import contactPhoto from "../assets/contact.png";
// import axios from "axios";
import emailjs from "@emailjs/browser";
import spinner from "../assets/spinner.svg";
import { FaRegCircleCheck } from "react-icons/fa6";
import css from "../CSS modules/Contact.module.css";

function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [messageBox, setMessageBox] = useState(false);
  const form = useRef();

  // Function to handle focus
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  // Function to handle blur
  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingStatus(true);
    // const formData = new FormData(form.current);

    //with node mailer
    // const data = {
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   message: formData.get("msg"),
    // };
    // if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
    //   console.log("Please enter a valid email address");
    //   return;
    // }
    // try {
    //   const res = await axios.post("http://localhost:8080/send", data);
    //   if (res.status === 200) {
    //     alert("Message Received");
    //     form.current.reset();
    //   }
    // } catch (error) {
    //   alert("Error Sending Message");
    // }

    //with email js
    emailjs
      .sendForm("service_1t12n5j", "template_aw1brmv", form.current, {
        publicKey: "8Cr_kGWYx9JXUhNVZ",
      })
      .then(
        () => {
          setMessageBox(true);
          setLoadingStatus(false);
          form.current.reset();
          const timer = setTimeout(() => {
            setMessageBox(false);
          }, 2000);

          return () => clearTimeout(timer);
        },
        (error) => {
          alert("Error Sending Message");
        }
      );
  };
  return (
    <div className="w-screen my-20">
      {messageBox && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 rounded-xl bg-[#213476] px-5 xl:px-10 pt-5 flex flex-col z-50 gap-y-5">
          <p className="text-[#fff] font-medium text-sm md:text-lg xl:text-xl text-center">
            Message Sent
          </p>
          <FaRegCircleCheck className="text-green-500 text-xl md:text-2xl xl:text-3xl mx-auto" />
          <div
            className={`w-full h-2 bg-green-500 rounded-lg ${css["load"]}`}
          ></div>
        </div>
      )}
      <div className="w-10/12 mx-auto">
        <h1 className="mx-auto pb-1 xl:pb-3 text-3xl md:text-4xl xl:text-5xl w-fit border-b-2 xl:border-b-4 border-[#1788ae] text-[#1788AE] font-medium">
          Let's Connect
        </h1>
        <div className="flex justify-between mt-5 md:mt-10">
          <div className="w-full md:w-2/3 xl:w-1/2 xl:px-10 py-5 text-white md:pr-5 xl:pr-0">
            <form
              className="flex flex-col gap-y-5"
              ref={form}
              onSubmit={handleSubmit}
            >
              {/* Name Input */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="name"
                  className="font-light text-base xl:text-lg tracking-wider"
                >
                  Name
                </label>
                <div
                  className={`flex items-center gap-2 border-2 p-2 rounded-xl ${
                    focusedInput === "name"
                      ? "border-[#1788ae]"
                      : "border-[#6a7991]"
                  } bg-[#374151]`}
                >
                  <FaUserCircle className="text-xl" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter Your Name"
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    className="bg-transparent border-none outline-none pl-2 w-full text-base xl:text-lg"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="email"
                  className="font-light text-base xl:text-lg tracking-wider"
                >
                  Your Email
                </label>
                <div
                  className={`flex items-center gap-2 border-2 p-2 rounded-xl ${
                    focusedInput === "email"
                      ? "border-[#1788ae]"
                      : "border-[#6a7991]"
                  } bg-[#374151]`}
                >
                  <IoMdMail className="text-xl" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@mail.com"
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className="bg-transparent border-none outline-none pl-2 w-full text-base xl:text-lg"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="msg"
                  className="font-light text-base xl:text-lg tracking-wider"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={8}
                  required
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  className={`border-2 p-2 rounded-xl text-base xl:text-lg outline-none ${
                    focusedInput === "message"
                      ? "border-[#1788ae]"
                      : "border-[#6a7991]"
                  } bg-[#374151]`}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center items-center w-full">
                {!loadingStatus ? (
                  <input
                    type="submit"
                    value="Send"
                    className="text-white text-base xl:text-xl font-medium px-6 py-3 rounded-lg bg-gradient-to-r from-[#213476] to-[#1591b3] w-fit cursor-pointer"
                  />
                ) : (
                  <div className="w-fit bg-gradient-to-r from-[#213476] to-[#1591b3] px-10 rounded-lg cursor-none">
                    <img src={spinner} alt="" />
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/3 xld:w-1/2 justify-center items-center hidden md:flex">
            <div className="w-3/4 md:w-full xl:w-3/4">
              <img src={contactPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
