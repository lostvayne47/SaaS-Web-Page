import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="relative bg-[url('/about_backdrop.jpg')] bg-cover bg-center text-secondary p-10">
        {/* Overlay for better text visibility */}

        {/* Content */}
        <div className="relative z-10 p-8 max-w-5xl mx-auto text-white text-center">
          <h1 className="text-3xl font-bold mb-8">About LeadScalr</h1>
          <p className="text-lg leading-relaxed">
            LeadScalr is a revenue-growth partner for modern SaaS and B2B
            service businesses. We don’t sell “marketing”—we build systems that
            turn attention into pipeline. From full-funnel lead gen to
            conversion-first websites and CRM automation, we help you grow with
            less guesswork, less overhead, and more traction.
          </p>
        </div>
      </div>
    </section>
  );
}
