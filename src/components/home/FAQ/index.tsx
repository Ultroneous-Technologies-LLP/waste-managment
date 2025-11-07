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
          className="mx-auto w-full max-w-221.5 py-6 text-center text-sm leading-normal font-light xl:text-xl"
          aria-label="FAQ section description"
        >
          {data.description}
        </p>
      </div>

      {/* Pass accessibility-friendly FAQ list */}
      <FAQS data={data.faq} />

      <div
        className="bg-primary-yellow mx-auto mt-14 w-full max-w-164.5 rounded-3xl p-6 xl:p-12.5"
        role="region"
        aria-labelledby="faq-contact-title"
      >
        <h3 id="faq-contact-title" className="text-center text-2xl leading-snug xl:text-5xl">
          {data.haveQuestions.title}
        </h3>
        <p className="py-4 text-center text-sm leading-snug font-light xl:text-xl">
          {data.haveQuestions.description}
        </p>
        <div className="mx-auto w-fit">
          <Button aria-label={data.haveQuestions.buttonLabel}>
            {data.haveQuestions.buttonLabel}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
