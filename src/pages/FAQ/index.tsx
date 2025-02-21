import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generalFAQs } from "./generalFAQs";
import { pricingFAQs } from "./pricingFAQs";
import { servicesFAQs } from "./servicesFAQs";

const FAQ = () => {
  const [tab, setTab] = useState("general");

  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20">
      <div className="text-center mb-8">
        <h6 className="text-lg font-semibold mb-2">
          FAQ<span>s</span>
        </h6>
        <h1 className="text-4xl md:text-5xl font-semibold font-playwrite">
          Frequently Asked Questions
        </h1>
        <p className="md:text-lg text-muted-foreground mt-4">
          These are the most frequently asked questions by our customers.
        </p>
      </div>
      <div className="pb-8 flex gap-6">
        <button
          onClick={() => {
            setTab("general");
          }}
          className={`px-6 py-2 ${
            tab === "general" ? "bg-gray-900 text-gray-100" : "bg-gray-100"
          } font-medium rounded-xl`}
        >
          General
        </button>
        <button
          onClick={() => {
            setTab("pricing");
          }}
          className={`px-6 py-2 ${
            tab === "pricing" ? "bg-gray-900 text-gray-100" : "bg-gray-100"
          } font-medium rounded-xl`}
        >
          Pricing
        </button>
        <button
          onClick={() => {
            setTab("services");
          }}
          className={`px-6 py-2 ${
            tab === "services" ? "bg-gray-900 text-gray-100" : "bg-gray-100"
          } font-medium rounded-xl`}
        >
          Services
        </button>
      </div>
      <div className="max-w-3xl mx-auto w-full">
        {tab === "general" &&
          generalFAQs.map(({ question, answer }, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}

        {tab === "pricing" &&
          pricingFAQs.map(({ question, answer }, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}

        {tab === "services" &&
          servicesFAQs.map(({ question, answer }, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
      </div>
    </div>
  );
};

export default FAQ;
