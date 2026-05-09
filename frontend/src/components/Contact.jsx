import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const FORMSPREE_ID = 'xbdwplpl'; // replace with your Formspree form ID

const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const socialLinks = [
    { icon: <Github size={18} />,   url: personalInfo.github,              label: 'GitHub',   username: 'Margesh06' },
    { icon: <Linkedin size={18} />, url: personalInfo.linkedin,            label: 'LinkedIn', username: 'margesh-modi' },
    { icon: <Mail size={18} />,     url: `mailto:${personalInfo.email}`,   label: 'Email',    username: personalInfo.email },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-gray-500 text-xs sm:text-sm font-mono tracking-widest mb-3 sm:mb-4">
              <span className="text-gray-600">// </span>CONTACT
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Get In Touch
            </h2>
            <div className="w-16 h-0.5 bg-gray-700 mb-3 sm:mb-4"></div>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          {/* Two-column layout — stacks on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">

            {/* Left — Info & Social */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Resume */}
              <Card className="bg-zinc-950 border-zinc-800 p-4 sm:p-5 md:p-6">
                <h3 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-3 sm:mb-4">Download Resume</h3>
                <Button
                  onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                  className="w-full bg-white hover:bg-gray-200 text-black text-sm"
                >
                  <Download className="mr-2" size={16} />
                  Download CV
                </Button>
              </Card>

              {/* Social Links */}
              <Card className="bg-zinc-950 border-zinc-800 p-4 sm:p-5 md:p-6">
                <h3 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-3 sm:mb-4">Connect With Me</h3>
                <div className="space-y-2 sm:space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
                    >
                      <div className="text-gray-400 shrink-0">{social.icon}</div>
                      <div className="min-w-0">
                        <p className="text-white font-medium text-sm">{social.label}</p>
                        <p className="text-slate-400 text-xs truncate">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right — Contact Form */}
            <Card className="bg-zinc-950 border-zinc-800 p-4 sm:p-5 md:p-6">
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-3 sm:mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-slate-500 text-sm h-10 sm:h-11"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-slate-500 text-sm h-10 sm:h-11"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-slate-500 text-sm resize-none"
                />
                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-white hover:bg-gray-200 text-black text-sm disabled:opacity-60"
                >
                  <Send className="mr-2" size={16} />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <p className="text-green-400 text-sm text-center">Message sent! I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Try emailing directly.</p>
                )}
              </form>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
