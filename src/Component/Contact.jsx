import React, { useState } from "react";
import img from "../assets/map.jpg";
import Title from "./Common/Title";
import Button from "./Common/Button";

const Contact = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, seterror] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    subjectError: "",
    messageError: "",
  });

  const inputValue = (event) => {
    setuserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  // HandleContact
  const HandleContact = () => {
    const { name, email, phone, subject, message } = userData;
    if (!name) {
      seterror({
        ...error,
        nameError: "Please enter your name",
      });
    } else if (!email) {
      seterror({
        ...error,
        nameError: "",
        emailError: "Please enter your email",
      });
    } else if (!phone) {
      seterror({
        ...error,
        emailError: "",
        phoneError: "Please enter your phone",
      });
    } else if (!subject) {
      seterror({
        ...error,
        phoneError: "",
        subjectError: "Please enter your subject",
      });
    } else if (!message) {
      seterror({
        ...error,
        subjectError: "",
        messageError: "Please enter your message",
      });
    } else {
      seterror({
        ...error,
        nameError: "",
        emailError: "",
        phoneError: "",
        subjectError: "",
        messageError: "",
      });
    }
  };

  return (
    <>
      <div className="py-[100px]">
        <div className="container">
          <div className="flex items-center gap-x-8">
            <div className="size-[450px]">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
            {/* right */}
            <div className="w-full">
              {/* Title */}
              <Title
                subTitle={"Get In Touch"}
                mainTitle={"Feel Free to Contact"}
                className={"items-start justify-start"}
              />
              {/* input */}
              <div className="w-full flex items-center justify-between">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={inputValue}
                  value={userData.name}
                  placeholder={`${
                    error.nameError ? error.nameError : "Enter Name"
                  }`}
                  className={`py-3 border-b-2 border-b-[#00413d4b] placeholder:font-jost placeholder:font-normal pl-2 placeholder:text-lg focus:border-b-primaryColor focus:rounded-t-xl focus:bg-[#00413d54] font-jost w-[45%] ${
                    error.nameError
                      ? "placeholder:text-red-600"
                      : "placeholder:text-[#00413da2]"
                  }`}
                />
                <input
                  type="email"
                  id="email"
                  name="emial"
                  onChange={inputValue}
                  value={userData.email}
                  placeholder={` ${
                    error.emailError ? error.emailError : "Enter Email"
                  }`}
                  className={`py-3 border-b-2 font-jost pl-2 border-b-[#00413d4b] placeholder:font-jost placeholder:font-normal placeholder:text-lg  focus:rounded-t-xl focus:bg-[#00413d54] focus:border-b-primaryColor  w-[45%] ${
                    error.emailError
                      ? "placeholder:text-red-600"
                      : "placeholder:text-[#00413da2]"
                  }`}
                />
              </div>
              <div className="w-full flex items-center justify-between my-6">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={inputValue}
                  value={userData.phone}
                  placeholder={` ${
                    error.phoneError ? error.phoneError : "Phone"
                  }`}
                  className={`py-3 border-b-2 font-jost pl-2 border-b-[#00413d4b] placeholder:font-jost placeholder:font-normal placeholder:text-lg  focus:rounded-t-xl focus:bg-[#00413d54] focus:border-b-primaryColor  w-[45%] ${
                    error.phoneError
                      ? "placeholder:text-red-600"
                      : "placeholder:text-[#00413da2]"
                  }`}
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={inputValue}
                  value={userData.subject}
                  placeholder={`${
                    error.subjectError ? error.subjectError : "Subject"
                  }`}
                  className={`py-3 border-b-2 font-jost pl-2 border-b-[#00413d4b] placeholder:font-jost placeholder:font-normal placeholder:text-lg  focus:rounded-t-xl focus:bg-[#00413d54] focus:border-b-primaryColor  w-[45%] ${
                    error.subjectError
                      ? "placeholder:text-red-600"
                      : "placeholder:text-[#00413da2]"
                  }`}
                />
              </div>
              <input
                type="text"
                id="message"
                name="message"
                onChange={inputValue}
                value={userData.message}
                placeholder={`${
                  error.messageError ? error.messageError : "Message"
                }`}
                className={`py-3 border-b-2 font-jost pl-2 border-b-[#00413d4b] placeholder:font-jost placeholder:font-normal focus:border-b-primaryColor placeholder:text-lg focus:rounded-t-xl focus:bg-[#00413d54] placeholder:text-[#00413da2] w-full ${
                  error.messageError
                    ? "placeholder:text-red-600"
                    : "placeholder:text-[#00413da2]"
                }`}
              />
              {/* Contact us button */}
              <Button btnTitle={"Contact Us"} HandleContact={HandleContact} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
