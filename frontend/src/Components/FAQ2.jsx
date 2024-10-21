import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { motion, AnimatePresence } from "framer-motion";
import FAQCreateForm from "./FAQCreateForm";
import emailjs from "emailjs-com";

const FAQ2 = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndexes, setOpenIndexes] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null);
  const [editIndex, setEditIndex] = useState(null); // New state to track editing FAQ
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");

  const SERVICE_ID = "service_muyj6lo";
  const TEMPLATE_ID = "template_pzz0vn5";
  const USER_ID = "QzAiZpU9qCLPuyfur";

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const url = `${import.meta.env.VITE_APP_BACKEND_URL}/api/faq`;
        const response = await fetch(url);
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleOpen = (index) => {
    setOpenIndexes((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleDelete = async (faqId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/faq/${faqId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to delete FAQ:", errorText);
        return;
      }

      setFaqs(faqs.filter((faq) => faq.faqId !== faqId));
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditQuestion(faqs[index].faqQuestion);
    setEditAnswer(faqs[index].faqAnswer);
  };

  const handleSaveEdit = async (faqId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/faq/edit/${faqId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            faqQuestion: editQuestion,
            faqAnswer: editAnswer,
          }), // Correct request body format
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to update FAQ:", errorText);
        return;
      }

      // Update the FAQ list locally
      const updatedFaqs = [...faqs];
      updatedFaqs[editIndex] = {
        ...updatedFaqs[editIndex],
        faqQuestion: editQuestion,
        faqAnswer: editAnswer,
      };
      setFaqs(updatedFaqs);
      setEditIndex(null); // Exit editing mode
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { email: email, question: question },
        USER_ID
      );

      setSendSuccess(true);
      setEmail("");
      setQuestion("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSendSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
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
      <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 font-semibold text-gray-800 dark:text-white">
            FAQ's
          </h1>
        </motion.div>
        {sessionStorage.getItem("userGroup") === "1" && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn bg-green-500 text-white text-xl px-4 py-2 rounded-lg"
            >
              Create New FAQ
            </button>
          </div>
        )}

        {isFormOpen && (
          <FAQCreateForm
            onClose={() => setIsFormOpen(false)}
            setFaqs={setFaqs}
            faqs={faqs}
          />
        )}

        <div className="lg:w-8/12 w-full mx-auto">
          {faqs.map((faq, index) => (
            <div key={faq.faqId}>
              <motion.hr
                className="w-full lg:mt-10 my-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editQuestion}
                    onChange={(e) => setEditQuestion(e.target.value)}
                    className="w-full border p-2 mb-4"
                  />
                  <textarea
                    value={editAnswer}
                    onChange={(e) => setEditAnswer(e.target.value)}
                    className="w-full border p-2 mb-4"
                  />

                  <button
                    onClick={() => setEditIndex(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg "
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSaveEdit(faq.faqId)}
                    className="bg-yellow-500 text-white px-4 py-2 ml-4 rounded-lg"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <motion.div
                  className="w-full md:px-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex">
                    {sessionStorage.getItem("userGroup") === "1" && (
                      <>
                        <button
                          onClick={() => handleDelete(faq.faqId)}
                          className="mt-4 bg-red-500 text-lg text-white mr-5 px-3 py-1 rounded-lg"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleEdit(index)}
                          className="mt-4 bg-yellow-500 text-lg text-white mr-5 px-3 py-1 rounded-lg"
                        >
                          Edit
                        </button>
                      </>
                    )}
                    <div className="flex justify-between items-center w-full">
                      <div className="flex">
                        <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                          <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">
                            Q{index + 1}.
                          </span>
                          {faq.faqQuestion}
                        </p>
                      </div>
                      <button
                        aria-label="toggler"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white rounded-xl"
                        onClick={() => toggleOpen(index)}
                      >
                        <svg
                          className={`transform ${
                            openIndexes[index] ? "rotate-180" : "rotate-0"
                          }`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="black"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {openIndexes[index] && (
                      <motion.div
                        id="menu"
                        className="mt-6 w-full"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-base leading-6 text-gray-800 dark:text-white font-normal">
                          {faq.faqAnswer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* EmailJS Form */}
        <div className="mt-12 lg:w-8/12 w-full mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-6">
            Have More Questions? Ask Us!
          </h2>
          <form
            onSubmit={sendEmail}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <div className="mb-4">
              <label
                className="block text-gray-800 dark:text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 dark:text-white text-sm font-bold mb-2"
                htmlFor="question"
              >
                Your Question
              </label>
              <textarea
                id="question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                className="w-full px-3 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-4 py-2 rounded-lg bg-purple-500 text-white ${
                  isSending ? "opacity-50" : ""
                }`}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Submit"}
              </button>
            </div>

            {sendSuccess === true && (
              <p className="text-green-500 text-center mt-4">
                Your question has been sent successfully!
              </p>
            )}
            {sendSuccess === false && (
              <p className="text-red-500 text-center mt-4">
                Failed to send your question. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ2;
