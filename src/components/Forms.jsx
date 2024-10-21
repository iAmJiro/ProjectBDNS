import React, { useCallback, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";

// Helper function for class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Forms() {
  const [agreed, setAgreed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to control the visibility of the confirmation message
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [compressedFile, setCompressedFile] = useState(null);

  // const handleDragOver = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragging(true);
  // };

  // const handleDragLeave = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragging(false);
  // };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragging(false);
  //   if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
  //     setSelectedFile(e.dataTransfer.files[0]);
  //     e.dataTransfer.clearData();
  //   }
  // };

  const handleFileCompression = async (file) => {
    try {
      const options = {
        maxSizeMB: 0.3,
        maxWidthOrHeight: 600,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      console.log("Compressed file:", compressedFile);
      setCompressedFile(compressedFile);
    } catch (error) {
      console.error("File compression failed:", error);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    handleFileCompression(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 10485760,
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    if (compressedFile) {
      formData.append("coverphoto", compressedFile, compressedFile.name);
    } else if (selectedFile) {
      formData.append("coverphoto", selectedFile, selectedFile.name);
    }

    try {
      const result = await emailjs.sendForm(
        "service_xkswua9",
        "template_cukpgi4",
        e.target,
        "go5Pq4Cfcv3H503_h"
      );
      console.log("Email sent:", result.text);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error:", error.text);
    }

    e.target.reset();
    setSelectedFile(null);
    setCompressedFile(null);
  };

  const handleDateChange = (e) => {
    const day = new Date(e.target.value).getDay();
    if (day === 1 || day === 6) {
      alert("Closed on Saturday and Monday");
      e.target.value = "";
    }
  };

  return (
    <div className="isolate bg-white dark:bg-gray-900 px-5">
      <Navbar />

      <div
        className="mt-96 absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-4xl mt-10">
          Event Cake Order Form
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-800 dark:text-white">
          Please fill out the form below to request a cake for your event.
        </p>
      </motion.div>

      <motion.form
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        encType="multipart/form-data"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <label
              htmlFor="fname"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="fname"
                id="fname"
                autoComplete="given-name"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="First Name"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <label
              htmlFor="lname"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lname"
                id="lname"
                autoComplete="family-name"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                placeholder="Last Name"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                placeholder="email@email.com"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <label
              htmlFor="contact"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Contact number
            </label>
            <div className="mt-2.5">
              <input
                placeholder="+64 0000 0000"
                type="tel"
                name="contact"
                id="contact"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Full address
            </label>
            <div className="mt-2.5">
              <input
                placeholder="123 Address Street"
                type="text"
                name="address"
                id="address"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <label
              htmlFor="eventt"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Event type
            </label>
            <div className="mt-2.5">
              <select
                name="eventt"
                id="eventt"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              >
                <option value="" disabled selected hidden>
                  Choose an event type
                </option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Wedding">Wedding</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="Gender Reveal">Gender Reveal</option>
                <option value="Christening">Christening</option>
                <option value="Stag / Hen Do">Stag / Hen Do</option>
                <option value="Corporate">Corporate</option>
                <option value="Special Occasion">Special Occasion</option>
                <option value="Just Because">Just Because</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <label
              htmlFor="eventd"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Event date
            </label>
            <div className="flex items-center mt-2.5">
              <input
                type="date"
                name="eventd"
                id="eventd"
                className="bg-white dark:bg-slate-800 dark:text-white block w-1/2 rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                onChange={handleDateChange}
              />
              <span className="ml-4 text-sm text-gray-500 dark:text-white">
                We are closed on Saturday and Monday
              </span>
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            <label
              htmlFor="eventth"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Event Theme
            </label>
            <div className="mt-2.5">
              <input
                placeholder="Type in a theme (e.g., Vintage, Tropical)"
                type="text"
                name="eventth"
                id="eventth"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <label
              htmlFor="flavour"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Cake Flavour
            </label>
            <div className="mt-2.5">
              <select
                name="flavour"
                id="flavour"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              >
                <option value="">Choose a cake flavour</option>
                <option value="Vanilla">Vanilla</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Banana">Banana</option>
                <option value="Carrot (DF)">Carrot (DF)</option>
                <option value="Lemon">Lemon</option>
                <option value="Raspberry white chocolate">
                  Raspberry white chocolate (+$15)
                </option>
                <option value="Rainbow">Rainbow (+$10)</option>
                <option value="Red Velvet">Red Velvet</option>
                <option value="DF Chocolate">DF Chocolate</option>
                <option value="DF Vanilla">DF Vanilla</option>
                <option value="GF Vanilla">GF Vanilla</option>
                <option value="GF chocolate almond">
                  GF chocolate almond (+$15)
                </option>
              </select>
            </div>
          </motion.div>
          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <label
              htmlFor="filling"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Cake Filling Options
            </label>
            <div className="mt-2.5">
              <select
                name="filling"
                id="filling"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              >
                <option value="">Choose a cake filling</option>
                <option value="Milk chocolate ganache">
                  Milk chocolate ganache
                </option>
                <option value="Salted caramel">Salted caramel</option>
                <option value="Lemon curd">Lemon curd</option>
                <option value="Cream cheese">Cream cheese</option>
                <option value="Biscoff">Biscoff</option>
                <option value="Nutella">Nutella</option>
                <option value="White choc ganache">White choc ganache</option>
                <option value="Raspberry jam">Raspberry jam</option>
                <option value="Crushed oreo">Crushed oreo</option>
              </select>
            </div>
          </motion.div>
          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <label
              htmlFor="tier"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Number of Tiers
            </label>
            <div className="mt-2.5">
              <input
                placeholder="1, 2, 3 or more"
                type="text"
                name="tier"
                id="tier"
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Additional information
            </label>
            <div className="mt-2.5">
              <textarea
                placeholder="Let us know if you have any special instructions"
                name="message"
                id="message"
                rows={4}
                className="bg-white dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </motion.div>

          <motion.div
            className="col-span-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <label htmlFor="coverphoto" className="block text-sm font-medium">
              Cake Photo
            </label>
            <div
              {...getRootProps({
                className: classNames(
                  "bg-white mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10 dark:bg-slate-800 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                  isDragActive ? "border-purple-500" : "border-gray-900/25"
                ),
              })}
            >
              <h1 className="text-center text-white">
                Did you have any inspiration photos you'd like to share with me?
                If yes - please email me through our socials
              </h1>
              {/* <input {...getInputProps()} name="coverphoto" />
            <div className="text-center">
              <p>Drag and drop a file, or click to select one</p>
              <p className="text-xs">PNG, JPG, GIF up to 10MB</p>

              {selectedFile && (
                <div className="mt-2 text-sm">
                  Selected file: {selectedFile.name}
                </div>
              )}

              {compressedFile && (
                <div className="mt-2 text-sm">
                  Compressed file size: {(compressedFile.size / 1024).toFixed(2)} KB
                </div>
              )}
            </div> */}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        >
          <button
            type="submit"
            className="block w-full  rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Request a quote
          </button>
        </motion.div>
      </motion.form>

      {formSubmitted && alert("Your form has been successfully submitted!")}
    </div>
  );
}

export default Forms;
