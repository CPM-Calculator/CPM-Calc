import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is CPM?",
    answer: "CPM (Cost Per Mille) represents the cost per thousand impressions. It's calculated by dividing total cost by total impressions and multiplying by 1,000."
  },
  {
    question: "What is CPC?",
    answer: "CPC (Cost Per Click) measures how much you pay for each click on your ad. It's calculated by dividing total cost by total clicks."
  },
  {
    question: "What is CTR?",
    answer: "CTR (Click-Through Rate) shows the percentage of people who clicked your ad after seeing it. It's calculated by dividing total clicks by total impressions and multiplying by 100."
  },
  {
    question: "What is CPA?",
    answer: "CPA (Cost Per Acquisition) measures how much you pay for each conversion. It's calculated by dividing total cost by total conversions."
  },
  {
    question: "Which metric should I focus on?",
    answer: "It depends on your campaign goals. Use CPM for brand awareness, CPC for traffic, CTR for ad effectiveness, and CPA for conversion-focused campaigns."
  },
  {
    question: "What's a good CTR?",
    answer: "A good CTR varies by industry and ad type. Generally, 1-2% is considered average for display ads, while search ads might see 3-5% or higher."
  }
];

export default function FAQ() {
  return (
    <div className="w-full max-w-3xl">
      <div className="flex items-center gap-2 mb-8">
        <HelpCircle className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}