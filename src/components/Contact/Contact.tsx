import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/chethuhaar@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg 
                focus:outline-none focus:border-green-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your E-mail"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg 
                focus:outline-none focus:border-green-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg 
              focus:outline-none focus:border-green-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
              transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg 
              focus:outline-none focus:border-green-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
              transition-colors resize-none"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 
              hover:from-green-700 hover:to-blue-700 dark:hover:from-green-600 dark:hover:to-blue-600 text-white font-semibold rounded-lg 
              transition-all duration-300 transform hover:scale-[1.02]
              ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'SEND MESSAGE'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}; 