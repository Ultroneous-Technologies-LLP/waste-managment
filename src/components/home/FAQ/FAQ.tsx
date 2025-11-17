import { FC } from "react";

import { Button, Container, Title } from "@/components/common";

import FAQItems from "./FAQItems";
import { FaqSectionsProps } from "./types";

export const FAQ: FC<FaqSectionsProps> = ({ description, faqItem, haveQuestions, title }) => (
  <Container
    aria-labelledby="faq-title"
    backgroundClassName="bg-anti-flash-white"
    className="py-12.5 md:py-20 xl:py-25"
    role="region"
  >
    <div>
      <Title className="text-center" id="faq-title" title={title} />
      <p
        aria-label="FAQ section description"
        className="mx-auto w-full max-w-221.5 py-6 text-center text-sm leading-normal font-light xl:text-xl"
      >
        {description}
      </p>
    </div>
    <FAQItems data={faqItem} />
    <div
      aria-labelledby="faq-contact-title"
      className="bg-primary-yellow mx-auto mt-14 w-full max-w-164.5 rounded-3xl p-6 xl:p-12.5"
      role="region"
    >
      <h3 className="text-center text-2xl leading-snug xl:text-5xl" id="faq-contact-title">
        {haveQuestions.title}
      </h3>
      <p className="py-4 text-center text-sm leading-snug font-light xl:text-xl">
        {haveQuestions.description}
      </p>
      <div className="mx-auto w-fit">
        <Button
          aria-label={haveQuestions.button.ariaLabel}
          as="link"
          href={haveQuestions.button.href}
        >
          {haveQuestions.button.label}
        </Button>
      </div>
    </div>
  </Container>
);
