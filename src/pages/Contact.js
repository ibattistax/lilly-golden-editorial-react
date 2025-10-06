import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";

const SERVICE_ID = "service_bc5m81c";
const TEMPLATE_ID = "template_6ecsdws";
const PUBLIC_KEY = "QXkjsi-A29jNLryLc";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_subject: data.subject,
      message: data.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        console.log("email sent successfully");
        reset();
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div>
      <header>
        <h1 className="page-subtitle text-center">Contact Me</h1>
      </header>
      <main>
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 bg-light rounded shadow-sm"
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              {...register("name", { required: "First and Last Name" })}
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              {...register("email", {
                required: true,
                minLength: { value: 5, message: "Your email is required" },
              })}
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input
              {...register("subject", {
                required: true,
                minLength: { value: 1, message: "A subject is required" },
              })}
              type="text"
              className="form-control"
              placeholder="Enter a subject"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              {...register("message", { required: true, minLength: 1 })}
              className="form-control"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>

          <button type="submit" className="btn w-100">
            Send Email
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
