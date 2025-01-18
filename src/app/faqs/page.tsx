

        "use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of chairs do you offer?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    question: "Do your chairs come with a warranty?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    question: "Can I try a chair before purchasing?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    question: "What will be delivered? And when?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    question: "How do I clean and maintain my Comforty chair?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-[#FFFFFF] min-h-screen'>
        {/*Heading and paragraph div */}
        <div className='bg-[#FFFFFF] pt-12'>
            <h1 className='text-[#000000] font-semibold text-center'>Quesions Looks Here</h1>
            <p className='text-[#9F9F9F] font-light text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
        </div>
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">FAQs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md bg-[#F7F7F7]"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left font-semibold"
            >
              {faq.question}
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-[#4F4F4F]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
</div>     
  )
}
