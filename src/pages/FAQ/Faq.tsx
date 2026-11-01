
import { useState } from "react";
import { faqData } from "./FaqData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl bg-[#f1f2ec] p-4 sm:p-6 lg:grid-cols-[0.85fr_1.5fr] lg:gap-8 lg:p-8">

        {/* Left Information Panel */}
        <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#263d79] to-[#151d32] p-7 text-white sm:p-10">

          <div>
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-xl text-yellow-400">
              ✦
            </div>

            <h2 className="max-w-xs text-3xl font-bold leading-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-300">
              Everything you need to know about our construction
              management platform, projects and services.
            </p>

            <div className="mt-6 h-1 w-16 rounded-full bg-yellow-400" />
          </div>

          <div className="mt-12 border-t border-white/15 pt-7">
            <h3 className="mb-5 text-sm font-semibold text-yellow-400">
              Why Choose Our Platform?
            </h3>

            <ul className="space-y-5 text-sm text-gray-200">
              {[
                "Connect Clients & Contractors",
                "Manage Multiple Construction Sites",
                "Monitor Project Progress",
                "Organize Workforce & Employees",
                "Transparent Project Information",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-yellow-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right FAQ Accordion */}
        <div className="flex flex-col gap-3">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-yellow-300 bg-white"
                    : "border-transparent bg-white hover:border-gray-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      isOpen
                        ? "bg-yellow-400 text-gray-900"
                        : "bg-gray-50 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <span className="flex-1 text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                    {faq.question}
                  </span>

                  <svg
                    className={`h-4 w-4 shrink-0 text-yellow-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-6 pl-[4.5rem] text-sm leading-7 text-gray-600 sm:pl-[5rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
