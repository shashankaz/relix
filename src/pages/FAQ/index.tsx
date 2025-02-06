import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-center mb-8">
        <h6 className="text-lg font-semibold mb-2">
          FAQ<span>s</span>
        </h6>
        <h1 className="text-4xl md:text-5xl font-semibold font-montserrat">
          Frequently Asked Questions
        </h1>
        <p className="md:text-lg text-muted-foreground mt-4">
          These are the most frequently asked questions by our customers.
        </p>
      </div>
      <div className="py-8 flex gap-6">
        <span className="px-6 py-2 bg-gray-900 text-gray-100 font-medium rounded-xl">
          General
        </span>
        <span className="px-6 py-2 bg-gray-100 font-medium rounded-xl">
          Pricing
        </span>
        <span className="px-6 py-2 bg-gray-100 font-medium rounded-xl">
          Services
        </span>
      </div>
      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is your design process like?
            </AccordionTrigger>
            <AccordionContent>
              Our design process involves understanding your needs and
              preferences, creating concept designs, refining them based on
              feedback, and finally implementing the design with attention to
              detail and quality.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do you offer virtual design consultations?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We offer virtual design consultations to clients who are not
              local or prefer working remotely. We use video calls and 3D
              renderings to present ideas.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How long will it take to complete my project?
            </AccordionTrigger>
            <AccordionContent>
              The duration of each project varies depending on its scope. We
              provide an estimated timeline during the initial consultation,
              which we will stick to as closely as possible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you work with a specific style?
            </AccordionTrigger>
            <AccordionContent>
              We do not limit ourselves to one style. Our team is versatile, and
              we can create designs in various styles such as modern,
              contemporary, traditional, and eclectic, based on your personal
              preferences.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can you help with both residential and commercial projects?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We have experience working on both residential and
              commercial projects, from private homes to office spaces and
              retail stores.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-6">
            <AccordionTrigger>What is your pricing structure?</AccordionTrigger>
            <AccordionContent>
              Our pricing depends on the size and complexity of the project. We
              offer both hourly rates and fixed-price packages, which we will
              discuss during the initial consultation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Can I provide my own furniture or decor items?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We are happy to incorporate any items you already own into
              your design. We'll work with you to make sure they fit seamlessly
              into the overall concept.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
