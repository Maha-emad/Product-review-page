import React, { useState } from 'react';
import './FAQs.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What is the return policy for electronic items?",
        answer: "We offer a 30-day return policy on all electronic items. Products must be returned in their original packaging and condition. Please visit our return policy page for more details."
      },
      {
        question: "Do you offer warranties on your products?",
        answer: "Yes, all our electronics come with a manufacturer's warranty. The duration and terms vary by product, so please check the product description for specific warranty information."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive an email with a tracking number and a link to track your package. You can also track your order through your account on our website."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept a variety of payment methods including credit cards, debit cards, PayPal, and bank transfers. We also offer financing options for eligible customers."
      },
      {
        question: "Can I change or cancel my order after it has been placed?",
        answer: "Orders can be modified or canceled within 24 hours of placing them. Please contact our customer service team as soon as possible to make any changes."
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to select countries. Shipping fees and delivery times vary depending on the destination. Please see our shipping policy for more information."
      },
      {
        question: "Are your products authentic?",
        answer: "Yes, we guarantee that all products sold on our website are 100% authentic and sourced directly from authorized distributors and manufacturers."
      },
      {
        question: "How do I contact customer support?",
        answer: "You can reach our customer support team via email, phone, or live chat. Visit our Contact Us page for detailed contact information and hours of operation."
      },
      {
        question: "What should I do if I receive a damaged or defective product?",
        answer: "If you receive a damaged or defective product, please contact our customer service team within 48 hours of receiving your order. We will assist you in returning the product and arranging for a replacement or refund."
      },
      {
        question: "Can I purchase a gift card?",
        answer: "Yes, we offer digital gift cards in various denominations. You can purchase them online and they will be delivered via email to the recipient."
      }
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
