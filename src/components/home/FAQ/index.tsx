import { FC } from "react";
import { Button, Container, Title } from "@/components/common";
import { faqSections } from "@/types/home-type";
import FAQS from "./FAQS";

interface FAQsProps {
  data: faqSections;
}

const FAQ: FC<FAQsProps> = ({ data }) => {
  return (
    <Container
      className="py-12.5 md:py-20 xl:py-25"
      backgroundClassName="bg-anti-flash-white"
      role="region"
      aria-labelledby="faq-title"
    >
      <div>
        <Title id="faq-title" title={data.title} className="text-center" />
        <p
          className="max-w-221.5 w-full mx-auto text-sm xl:text-xl leading-normal text-center font-light py-6"
          aria-label="FAQ section description"
        >
          {data.description}
        </p>
      </div>

      {/* Pass accessibility-friendly FAQ list */}
      <FAQS data={data.faq} />

      <div
        className="mt-14 bg-primary-yellow max-w-164.5 w-full p-6 xl:p-12.5 rounded-3xl mx-auto"
        role="region"
        aria-labelledby="faq-contact-title"
      >
        <h3
          id="faq-contact-title"
          className="text-2xl xl:text-5xl leading-snug text-center"
        >
          {data.haveQuestions.title}
        </h3>
        <p className="text-sm xl:text-xl leading-snug py-4 font-light text-center">
          {data.haveQuestions.description}
        </p>
        <div className="w-fit mx-auto">
          <Button aria-label={data.haveQuestions.buttonLabel}>
            {data.haveQuestions.buttonLabel}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
