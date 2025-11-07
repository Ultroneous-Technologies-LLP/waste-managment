"use client";

import { FC, useState, KeyboardEvent } from "react";
import { ArrowWithBackGround, FAQSProps } from "@/components";

export const FAQS: FC<FAQSProps> = ({ data }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(id);
    }
  };

  return (
    <div className="space-y-3 pt-6" role="list" aria-label="Frequently asked questions">
      {data.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="rounded-3xl bg-white p-4 md:rounded-4xl xl:p-6"
            role="listitem"
          >
            {/* Button-like header */}
            <div
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
              id={`faq-question-${faq.id}`}
              onClick={() => handleToggle(faq.id)}
              onKeyDown={(e) => handleKeyDown(e, faq.id)}
              className="flex cursor-pointer items-center justify-between gap-4"
            >
              <h3 className="w-full max-w-63 text-base md:max-w-154 xl:max-w-304.5 xl:text-2xl/7.5">
                {faq.questions}
              </h3>
              <ArrowWithBackGround
                className="bg-primary-yellow size-14.5 border-transparent transition-transform duration-500"
                width={22}
                height={16}
                svgClassName={`${
                  isOpen ? "rotate-90" : "-rotate-90"
                } text-black transition-transform duration-500`}
                aria-hidden="true"
              />
            </div>

            {/* Expandable answer */}
            <div
              id={`faq-answer-${faq.id}`}
              role="region"
              aria-labelledby={`faq-question-${faq.id}`}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-96 pt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-base">{faq.ans}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
