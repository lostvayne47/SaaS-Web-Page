import React from "react";
import "./styles/Accordian.css";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "./ui/accordion";

// Q: Do you only work with SaaS companies?
//  Nope! While we love SaaS, we also help consultants, compliance firms, fintech, and other service-based B2B businesses.
// Q: What if I don’t have a marketing team?
//  That’s exactly why we exist — we plug into your business as your growth team, from strategy to execution.
// Q: How long does it take to see results?
//  Most of our clients start seeing qualified leads in 21 - 30 days after launch.
// Q: Is there a minimum budget?
//  We work best with teams ready to invest $2K–$10K/month in growth — either paid media, content, or funnel building.

const questionSet = [
  {
    question: "Do you only work with SaaS companies?",
    answer:
      "Nope! While we love SaaS, we also help consultants, compliance firms, fintech, and other service-based B2B businesses.",
  },
  {
    question: "What if I don't have a marketing team?",
    answer:
      "That's exactly why we exist — we plug into your business as your growth team, from strategy to execution.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most of our clients start seeing qualified leads in 21 - 30 days after launch.",
  },
  {
    question: "Is there a minimum budget?",
    answer:
      "We work best with teams ready to invest $2K-$10K/month in growth — either paid media, content, or funnel building.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-12 px-4">
      <div className="mx-auto max-w-6xl p-3 gap-4 flex flex-wrap justify-evenly">
        <div className="w-full md:w-[30%]  p-4">
          <h1 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-600">
            Here you'll find answers to common queries.
          </p>
        </div>

        <div className="w-full md:w-[60%]  p-4 space-y-4">
          <Accordion className="AccordionRoot" type="single" collapsible>
            {questionSet.map((entry, index) => (
              <AccordionItem
                className="AccordionItem"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="AccordionTrigger">
                  {entry.question}
                </AccordionTrigger>
                <AccordionContent className="AccordionContent">
                  {entry.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
