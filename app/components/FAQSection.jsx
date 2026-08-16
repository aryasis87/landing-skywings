// app/components/FAQSection.jsx
"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqData } from "../data/faq";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (id) => setActiveFAQ((prev) => (prev === id ? null : id));

  return (
    <section 
      id="faq" 
      className="px-6 lg:px-16 py-12 bg-gradient-to-b from-sky-2 to-sky-2"
      aria-labelledby="faq-heading"
    >
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <motion.h2 
          variants={fadeInUp}
          id="faq-heading"
          className="text-3xl lg:text-4xl font-bold text-aviation mb-4"
        >
          Pertanyaan yang Sering Diajukan (FAQ)
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-slate-ink"
        >
          Jawaban atas pertanyaan yang sering diajukan
        </motion.p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq) => (
          <motion.div 
            key={faq.id} 
            variants={fadeInUp}
            className="bg-sky rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
          >
            <button 
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-boarding focus-visible:ring-offset-2"
              aria-expanded={activeFAQ === faq.id}
              aria-controls={`faq-content-${faq.id}`}
            >
              <span className="text-lg font-medium text-aviation">
                {faq.question}
              </span>
              <span 
                className="text-primary text-xl"
                aria-hidden="true"
              >
                {activeFAQ === faq.id ? "−" : "+"}
              </span>
            </button>
            
            <AnimatePresence>
              {activeFAQ === faq.id && (
                <motion.div 
                  id={`faq-content-${faq.id}`}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 border-t border-aviation/12"
                  role="region"
                >
                  <p className="text-slate-ink mt-3">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}