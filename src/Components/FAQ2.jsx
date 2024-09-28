import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { motion, AnimatePresence } from "framer-motion";
import FAQCreateForm from './FAQCreateForm';

const FAQ2 = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndexes, setOpenIndexes] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const url = `${import.meta.env.VITE_APP_BACKEND_URL}/api/faq`;
        console.log("Fetching FAQs from:", url);
        const response = await fetch(url);
        console.log("Response status:", response.status);
        const data = await response.json();
        console.log("Fetched FAQs data:", data);
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
      const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/faq/${faqId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to delete FAQ:', errorText);
        return;
      }


      setFaqs(faqs.filter((faq) => faq.faqId !== faqId));
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (loading) {
    return <div>Loading...</div>;
    {
      /*can change the loading visuals later*/
    }
  }

  return (
    <div>
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
      <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
        <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 font-semibold text-gray-800 dark:text-white">
          FAQ's
        </h1>


        {sessionStorage.getItem('userGroup') === '1' && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn bg-green-500 text-white px-4 py-2 rounded-lg"
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
              {console.log(faq.FAQQuestion, faq.FAQAnswer)}{" "}
              {/*check if the faq is going through*/}
              <motion.hr
                className="w-full lg:mt-10 my-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              <motion.div
                className="w-full md:px-6"
                variants={questionVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex">
                  {sessionStorage.getItem('userGroup') === '1' && (
                    <button
                      onClick={() => handleDelete(faq.faqId)}
                      className="mt-4 bg-red-500 text-white mr-5 px-3 py-1  rounded-lg"
                    >
                      Delete
                    </button>
                  )}
                  <div className="flex justify-between items-center w-full">
                    <div className="flex">
                      <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                        <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">
                          Q{index + 1}.
                        </span>
                        {faq.faqQuestion} {/* Ensure this is rendering */}
                      </p>

                    </div>
                    <button
                      aria-label="toggler"
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white rounded-xl"
                      onClick={() => toggleOpen(index)}
                    >
                      <svg
                        className={`transform ${openIndexes[index] ? "rotate-180" : "rotate-0"
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
                        {faq.faqAnswer} {/* Ensure this is rendering */}
                      </p>


                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ2;
