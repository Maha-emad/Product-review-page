import React from 'react';
import './Policies.css';

const Policies: React.FC = () => {
  return (
    <div className="policies-section">
      <h2>Policies</h2>
      <div className="policy">
        <h3>Shipping Policy</h3>
        <p>
          We offer fast and reliable shipping options for all our customers. Orders are typically processed within 1-2 business days. Shipping times vary based on your location and selected shipping method.
        </p>
        <ul>
          <li><strong>Standard Shipping:</strong> 5-7 business days.</li>
          <li><strong>Expedited Shipping:</strong> 2-3 business days.</li>
          <li><strong>Next-Day Shipping:</strong> 1 business day.</li>
        </ul>
        <p>
          International shipping is available to select countries. Please note that customs fees, duties, and taxes are the responsibility of the customer and may vary by country.
        </p>
      </div>

      <div className="policy">
        <h3>Return Policy</h3>
        <p>
          We want you to be completely satisfied with your purchase. If you are not satisfied, you may return the item within 30 days of receipt for a full refund or exchange, subject to the following conditions:
        </p>
        <ul>
          <li>The item must be in new, unused condition.</li>
          <li>Original packaging and all accessories must be included.</li>
          <li>A copy of the receipt or proof of purchase must be provided.</li>
        </ul>
        <p>
          To initiate a return, please contact our customer service team for a Return Merchandise Authorization (RMA) number. Returns without an RMA number will not be accepted. Refunds will be processed within 7-10 business days of receiving the returned item.
        </p>
        <p>
          Please note that the original shipping costs are non-refundable, and the customer is responsible for return shipping costs.
        </p>
      </div>

      <div className="policy">
        <h3>Terms and Conditions</h3>
        <p>
          By using our website and purchasing products from us, you agree to our terms and conditions. These terms govern your use of our site, your rights and responsibilities, and our policies regarding transactions, returns, and other matters.
        </p>
      </div>
    </div>
  );
};

export default Policies;
