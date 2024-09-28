import React, { useState } from 'react';


export default function FAQCreateForm({ onClose, setFaqs, faqs }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFaq = { faqQuestion: question, faqAnswer: answer };

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/faq`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: JSON.stringify(newFaq),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to create FAQ:', errorText);
        return;
      }

      const createdFaq = await response.json();
      setFaqs([...faqs, createdFaq]);
      onClose();
    } catch (error) {
      console.error('Error creating FAQ:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create New FAQ</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Question</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              placeholder="Enter the question"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Answer</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              rows="4"
              placeholder="Enter the answer"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Create
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
