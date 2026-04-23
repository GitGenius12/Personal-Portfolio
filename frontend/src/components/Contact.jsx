import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';

const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleDownloadResume = () => {
    // Mock download
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: personalInfo.github,
      label: 'GitHub',
      username: 'Margesh06'
    },
    {
      icon: <Linkedin size={24} />,
      url: personalInfo.linkedin,
      label: 'LinkedIn',
      username: 'margesh-modi'
    },
    {
      icon: <Mail size={24} />,
      url: `mailto:${personalInfo.email}`,
      label: 'Email',
      username: personalInfo.email
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-slate-400 text-lg">Feel free to reach out for collaborations or just a friendly chat</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Contact Info & Social */}
            <div className="space-y-6">
              {/* Download Resume Card */}
              <Card className="bg-zinc-950 border-zinc-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Download Resume</h3>
                <Button
                  onClick={handleDownloadResume}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </Card>

              {/* Social Links */}
              <Card className="bg-zinc-950 border-zinc-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors group"
                    >
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-white font-medium">{social.label}</p>
                        <p className="text-slate-400 text-sm">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right - Contact Form */}
            <Card className="bg-zinc-950 border-zinc-800 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-slate-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;