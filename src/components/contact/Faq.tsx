'use client'

import React, { useState } from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index))
  }

  const faqs = [
    {
      question: 'What is Bahojutech?',
      answer:
        'Bahojutech is a technology solutions company focused on delivering innovative IT services, including software development, training, and cloud solutions.',
    },
    {
      question: 'Who are your clients?',
      answer:
        'Our clients range from startups and small businesses to large enterprises across various industries looking for reliable tech solutions.',
    },
    {
      question: 'What are the cloud solutions and how can they benefit my business?',
      answer:
        'Our cloud solutions include hosting, storage, and computing services that improve scalability, reduce costs, and enhance your business continuity.',
    },
    {
      question: 'How much do your services cost?',
      answer:
        'Pricing depends on the scope and complexity of the service. We offer flexible and competitive pricing tailored to your business needs.',
    },
    {
      question: 'Can you handle international projects?',
      answer:
        'Absolutely. We work with clients globally and have experience handling remote and cross-border projects effectively.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-lg -mt-48 bg-white rounded-lg">  
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" overflow-hidden transition"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center font-medium hover:bg-gray-100 transition text-[#005F87]"
            >
              {faq.question}
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 ">
        <h2 className="text-xl font-semibold mb-4">Socials</h2>
        <div className="flex gap-6 text-2xl text-blue-600">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Faq
