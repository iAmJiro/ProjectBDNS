import React from 'react';
import Dropdown from './Components/Dropdown.jsx';
import './FAQ.css';

const FAQ = () => {
  const faqData = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
    { question: 'Question 4', answer: 'Answer 4' },
    { question: 'Question 5', answer: 'Answer 5' },
    { question: 'Question 6', answer: 'Answer 6' },
    { question: 'Question 7', answer: 'Answer 7' },
    { question: 'Question 8', answer: 'Answer 8' },
  ];

  return (
    <div className="faq-container">
      <h1>How can we help you?</h1>
      <div className="faq-grid">
        {faqData.map((item, index) => (
          <Dropdown key={index} question={item.question} answer={item.answer} />
        ))}
      </div>

      <form className="contact-form">
        <h2>Ask a question</h2>
        <input type="text" name="fullname" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="comment" placeholder="Comment" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FAQ;