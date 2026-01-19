import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:hm260369@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="bg-slate-900/40 backdrop-blur-md p-10 rounded-3xl border border-slate-800/50">
            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Let's Connect!</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm always excited to connect with fellow developers, tech enthusiasts, and anyone passionate about building cool stuff with code!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-sm">Lahore, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                 <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:hm260369@gmail.com" className="text-sm hover:text-indigo-400 transition-colors">hm260369@gmail.com</a>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm text-slate-500 mb-3">Response time: Within 24 hours!</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/hamza-arshad12" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-white hover:bg-indigo-600 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>Message prepared! Opening email client...</span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-slate-950/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-colors ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-indigo-500'
                  }`}
                  placeholder="Your Name" 
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-slate-950/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-colors ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-indigo-500'
                  }`}
                  placeholder="hm260369@gmail.com" 
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-slate-950/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-colors ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-indigo-500'
                  }`}
                  placeholder="What's on your mind?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full font-bold py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all flex items-center justify-center gap-2 disabled:bg-slate-700"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;