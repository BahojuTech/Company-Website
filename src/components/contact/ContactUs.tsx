'use client'

import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    message: '',
    inquiryType: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // You can send data to a backend here
  }

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-lg -mt-48 bg-white rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="block font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 h-28"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Type of Inquiry <span className="text-red-500">*</span>
          </label>
          <div className="space-y-1 flex gap-5">
            {['Tech Service', 'Training', 'Internship'].map(type => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="inquiryType"
                  value={type.toLowerCase()}
                  checked={formData.inquiryType === type.toLowerCase()}
                  onChange={handleChange}
                  required
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactUs
