import React from 'react';
import Dropdown from './Components/Dropdown.jsx';
import './FAQ.css';

const FAQ = () => {
  const faqData = [
    { question: 'Do you deliver cakes?', answer: 'Currently, we offer pick-up only for all orders. Our cakes can be picked up from our Wairarapa location.' },
    { question: 'Can I customize the flavor of my cake?', answer: 'Yes, you can customize the flavor of your cake. However, we only offer flavors that are available on our menu.' },
    { question: 'How long does it take to complete an order?', answer: 'It usually takes 2-3 weeks to complete a custom cake order. We recommend placing your order well in advance to ensure availability.' },
    { question: 'Can I choose my own cake design?', answer: 'Yes, you can choose your own cake design. We work with you to create a cake that fits your vision.' },
    { question: 'How do I place an order?', answer: "You can place an order by contacting us through our website or by giving us a call. We'll guide you through the process and help you with all the details." },
    { question: 'What are your payment options?', answer: 'We accept various payment methods including credit cards and bank transfers. Payment details will be provided upon order confirmation.' },
    { question: 'Do you offer cake tastings?', answer: 'Yes, we offer cake tastings by appointment. Please contact us to schedule a tasting session to try out our available flavors.' },
    { question: 'Can I make changes to my order after it has been placed?', answer: 'Changes to orders can be made within 48 hours of placing the order. After that, we may not be able to accommodate changes due to the preparation process.' },
  ];

  return (
    <div className="faq-container" id="faq">
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