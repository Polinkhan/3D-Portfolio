"use client";

import { useState, useRef, FormEvent } from "react";
import { Toaster, toast } from "react-hot-toast";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { ContactDataType } from "@/utils/types";
import { getData } from "@/helper/common";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const ContactView = () => {
  const [loading, setLoading] = useState(false);

  const data = getData("contact") as ContactDataType;

  if (!data) return null;

  return (
    <section id="contact" className="py-16 text-white flex flex-col items-center">
      <Toaster position="bottom-center" />
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">{data.header}</h2>
        <p className="text-gray-400 mt-1">{data.label}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl px-4">
        <Form setLoading={setLoading} />
        <ContactInfo data={data} />
      </div>

      {loading && <CustomBackdrop />}
    </section>
  );
};

const CustomBackdrop = () => (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="flex items-center gap-2 text-white">
      <p>Sending your message...</p>
      <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
    </div>
  </div>
);

const Form = ({ setLoading }: { setLoading: (v: boolean) => void }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await delay(2000);
    toast.success("Your message has been sent successfully!");
    setLoading(false);
    ref.current?.click();
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4 p-6 rounded-2xl shadow-md">
      <CustomTextField id="name" label="Name" required />
      <CustomTextField id="email" label="Email" type="email" required />
      <CustomTextField id="message" label="Message" textarea required />
      <CustomButton type="submit">Send Message</CustomButton>
      <button type="reset" ref={ref} className="hidden" />
    </form>
  );
};

const CustomTextField = ({ id, label, type = "text", textarea, ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="text-sm text-gray-300">
      {label}
    </label>
    {textarea ? (
      <textarea
        id={id}
        {...props}
        rows={6}
        className="p-3 rounded-lg border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
      />
    ) : (
      <input
        id={id}
        type={type}
        {...props}
        className="p-3 rounded-lg border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    )}
  </div>
);

const CustomButton = ({ children, type = "button", className = "", ...rest }: any) => (
  <button
    type={type}
    {...rest}
    className={`px-5 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 rounded-lg text-sm font-medium transition-all ${className} cursor-pointer`}
  >
    {children}
  </button>
);

const ContactInfo = ({ data }: { data: ContactDataType }) => (
  <div className="flex-1 py-6 flex flex-col items-center gap-4 text-gray-300">
    <div className="flex items-center gap-3">
      <FaPhone className="text-indigo-400" />
      <a href={`tel:+88${data.phone}`} className="hover:text-indigo-400">
        {data.phone}
      </a>
    </div>
    {data.emails.map((email, i) => {
      return (
        <div className="flex items-center gap-3">
          <IoMail className="text-indigo-400" />
          <a href={`mailto:${email}`} className="hover:text-indigo-400">
            {email}
          </a>
        </div>
      );
    })}
  </div>
);

export default ContactView;
