import React, { useState } from 'react'
import Label from '../../Common/Label/Label'
import TextInput from '../../Common/Input/TextInput'
import EmailInput from '../../Common/Input/EmailInput'
import { Link } from 'react-router-dom'
import TextareaInput from '../../Common/Input/TextareaInput'
import { FaFacebook } from 'react-icons/fa'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    userName: "",
    subject: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
    
  };

  const handleSubmit = () =>{}
  return (
    <>
      <div className="bg-slate-800">
        <div className="py-10 md:px-10 px-4 container mx-auto">
          <div className="contant text-center">
            <h2 className="font-bold md:text-4xl text-2xl text-gray-200 gradient-text md:mb-4 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-200">
              Use the form below to get in touch with our support team.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-screen-xl mx-auto px-4 pt-6">
            {/* Form Section */}
            <div className="md:w-3/4 w-full mx-auto">
              <div className="registration-form md:py-8 md:px-8 p-6 mx-auto bg-slate-700 rounded-2xl shadow text-left">
                <form onSubmit={handleSubmit}>
                  <div className="flex md:flex-row flex-col justify-between items-center gap-4 mb-4">
                    <div className="md:mb-4 md:w-1/2 w-full">
                      <Label labelName={"User Name"} htmlFor={"username"} />
                      <TextInput
                        idName={"username"}
                        inputName={"username"}
                        placeholderName={"User name"}
                        handleChangeInput={handleChange}
                        valueName={formData?.firstName}
                      />
                    </div>
                    <div className="md:mb-4 md:w-1/2 w-full">
                      <Label labelName={"Subject"} htmlFor={"subject"} />
                      <TextInput
                        idName={"subject"}
                        inputName={"subject"}
                        placeholderName={"Subject"}
                        handleChangeInput={handleChange}
                        valueName={formData?.subject}
                      />
                    </div>
                  </div>

                  <div className="flex md:flex-row flex-col justify-between items-center gap-4 mb-4">
                    <div className="md:mb-4 w-full">
                      <Label labelName={"Email Address"} htmlFor={"email"} />
                      <EmailInput
                        idName={"email"}
                        inputName={"email"}
                        placeholderName={"Your email address"}
                        handleChangeInput={handleChange}
                        valueName={formData?.email}
                      />
                    </div>
                  </div>

                  <div className="flex md:flex-row flex-col justify-between items-center gap-4 mb-4">
                    <div className="md:mb-4 w-full">
                      <Label labelName={"Message"} htmlFor={"message"} />
                      <TextareaInput
                        idName={"message"}
                        inputName={"message"}
                        placeholderName={"Message"}
                        handleChangeInput={handleChange}
                        valueName={formData?.message}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 justify-center mt-4">
                    <div className="w-full md:w-2/4">
                      <button
                        type="submit"
                        className="btn-bg text-white w-full py-2 text-center rounded submit-btn"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Stay in Touch Section */}
            <div className="md:w-5/12 w-full">
              <div className="flex flex-col mt-6 md:mt-16 text-3xl font-bold text-white">
                <h2 className="self-start">Stay in touch</h2>
                <p className="mt-2 text-base font-semibold self-start">
                  Join our social community for updates
                </p>
                <div
                  className="flex gap-4"
                  role="navigation"
                  aria-label="Social media links"
                >
                  <button
                    className="w-10 h-10 rounded-full"
                    aria-label="Social media link 1"
                  ><FaFacebook/></button>
                  <button
                    className="w-10 h-10 rounded-full"
                    aria-label="Social media link 2"
                  ><FaFacebook/></button>
                  <button
                    className="w-10 h-10 rounded-full"
                    aria-label="Social media link 3"
                  ><FaFacebook/></button>
                  <button
                    className="w-10 h-10 rounded-full"
                    aria-label="Social media link 4"
                  ><FaFacebook/></button>
                </div>
                <h2 className="self-start mt-8">Business inquiries</h2>
                <p className="text-left mt-2 text-base font-semibold">
                  For business inquiries, you can reach us anytime via{" "}
                  <span className="cursor-pointer text-[#ffd900]">
                    Contact@coinlooty.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs