import React, { useState } from 'react';
import { UserIcon, MailIcon, MessageSquareIcon, SendIcon, MapPinIcon, PhoneIcon } from 'lucide-react'; // Import icons

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // --- IMPORTANT ---
    // This is where you would typically send the form data.
    // For a real application, you'd need a backend endpoint or a service like EmailJS
    // to handle sending the email or storing the message.
    console.log("Form data submitted:", formData);
    alert("Thank you for your message! (Submission simulated)");
    // Optionally reset the form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // --- End of Important Note ---
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <div className="relative">
                  <UserIcon className="size-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered w-full pl-10"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <div className="relative">
                   <MailIcon className="size-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="input input-bordered w-full pl-10"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

               {/* Subject Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Message subject"
                    className="input input-bordered w-full" // No icon needed here maybe
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
              </div>

              {/* Message Textarea */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                 <div className="relative">
                    {/* Optional: Icon for textarea */}
                    {/* <MessageSquareIcon className="size-5 absolute left-3 top-4 text-base-content/50" /> */}
                    <textarea
                        name="message"
                        className="textarea textarea-bordered h-32 w-full" // pl-10 if using icon
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                 </div>
              </div>

              {/* Submit Button */}
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">
                  <SendIcon className="size-4 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
           <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
           <p className="text-base-content/80">
              Have questions or want to visit us? Reach out through the form or use the details below. We'd love to hear from you!
           </p>
           <div className="flex items-start gap-3">
              <MapPinIcon className="size-6 text-primary mt-1 flex-shrink-0"/>
              <div>
                 <h3 className="font-semibold">Our Address</h3>
                 {/* Replace with actual address */}
                 <p>13 S Indiana St<br/>Greencastle, IN 46135<br/>United States</p>
              </div>
           </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="size-6 text-primary mt-1 flex-shrink-0"/>
              <div>
                 <h3 className="font-semibold">Phone</h3>
                 {/* Replace with actual phone */}
                 <p>(765) 323-8903</p>
              </div>
           </div>
            <div className="flex items-start gap-3">
              <MailIcon className="size-6 text-primary mt-1 flex-shrink-0"/>
              <div>
                 <h3 className="font-semibold">Email</h3>
                 {/* Replace with actual email */}
                 <p>@scoopsgreencastle</p>
              </div>
           </div>
           {/* Optional: Add Hours */}
           {/* <div className="flex items-start gap-3"> ... </div> */}

           {/* Optional: Add a simple map embed here if desired */}
        </div>

      </div>
    </main>
  );
}

export default ContactPage;