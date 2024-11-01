import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Digital Marketing Manager",
    company: "TechCorp",
    content: "This CPM calculator has become an essential tool in our campaign planning process. It's intuitive and saves us valuable time.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Michael Chen",
    role: "Media Buyer",
    company: "AdVantage",
    content: "The accuracy and ease of use make this calculator stand out. It's helped us optimize our ad spend across multiple platforms.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Emma Williams",
    role: "Marketing Director",
    company: "GrowthLabs",
    content: "A fantastic tool that has streamlined our campaign analysis. The additional resources and FAQs are incredibly helpful.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-6xl">
      <div className="flex items-center gap-2 mb-8">
        <Quote className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">What Our Users Say</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}