
import { useState, type FormEvent } from "react";
import {
  submitContactForm,
  type ContactFormData,
} from "../../services/contactService";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  enquiryType: "",
  message: "",
};

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-secondary focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await submitContactForm(form);

      if (response.success) {
        setStatus({ type: "success", message: response.message });
        setForm(initialForm);
      } else {
        setStatus({
          type: "error",
          message: response.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Unable to submit your request. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background text-text">
      {/* Hero */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact Us
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Start a <span className="text-primary">Conversation</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            Have a project in mind, need assistance, or have a question?
            Send us a message and our team will be happy to help.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
        {/* Information */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            How can we help you?
          </h2>

          <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base">
            Whether you're looking for construction management services,
            project information, or help with an existing issue, we're
            here to listen.
          </p>

          <div className="mt-9 rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-semibold">Why contact our team?</h3>

            <ul className="mt-5 space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                Project enquiries and consultations
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                Construction service information
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                Customer support and issue reporting
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                General questions and feedback
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">Send Us a Message</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Fill out the form below and we'll receive your enquiry.
          </p>

          {status && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-6 rounded-lg p-4 text-sm ${
                status.type === "success"
                  ? "bg-green-500/10 text-green-600"
                  : "bg-red-500/10 text-red-600"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                  maxLength={254}
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  maxLength={20}
                />
              </div>

              <div>
                <label
                  htmlFor="enquiryType"
                  className="mb-2 block text-sm font-medium"
                >
                  Enquiry Type *
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={form.enquiryType}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select enquiry type</option>
                  <option value="Project Enquiry">Project Enquiry</option>
                  <option value="Service Information">Service Information</option>
                  <option value="Customer Support">Customer Support / Issue</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is your enquiry about?"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
                required
                maxLength={150}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Describe your project, question, or issue..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
                required
                minLength={10}
                maxLength={2000}
              />
              <p className="mt-2 text-right text-xs text-text-secondary">
                {form.message.length}/2000 characters
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Enquiry →"}
            </button>

            <p className="text-center text-xs text-text-secondary">
              Fields marked with * are required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
