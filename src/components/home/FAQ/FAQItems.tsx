"use client";
import clsx from "clsx";
import { FC, useState, KeyboardEvent } from "react";

import { ArrowWithBackGround } from "@/components/icons";

import { FaqItemsProps } from "./types";

const FAQItems: FC<FaqItemsProps> = ({ data }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number): void => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, id: number): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(id);
    }
  };

  return (
    <div aria-label="Frequently asked questions" className="space-y-3 pt-6" role="list">
      {data.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            className="rounded-3xl bg-white p-4 md:rounded-4xl xl:p-6"
            key={faq.id}
            role="listitem"
          >
            <div
              aria-controls={`faq-answer-${faq.id}`}
              aria-expanded={isOpen}
              className="flex cursor-pointer items-center justify-between gap-4"
              id={`faq-question-${faq.id}`}
              onClick={() => handleToggle(faq.id)}
              onKeyDown={(e) => handleKeyDown(e, faq.id)}
              role="button"
              tabIndex={0}
            >
              <h3 className="w-full max-w-63 text-base md:max-w-154 xl:max-w-304.5 xl:text-2xl/7.5">
                {faq.questions}
              </h3>
              <ArrowWithBackGround
                aria-hidden="true"
                className="bg-primary-yellow size-14.5 border-transparent transition-transform duration-500"
                height={16}
                svgClassName={clsx(
                  "text-black transition-transform duration-500",
                  isOpen ? "rotate-90" : "-rotate-90"
                )}
                width={22}
              />
            </div>
            <div
              aria-labelledby={`faq-question-${faq.id}`}
              className={clsx(
                "overflow-hidden transition-all duration-500 ease-in-out",
                isOpen ? "max-h-96 pt-3 opacity-100" : "max-h-0 opacity-0"
              )}
              id={`faq-answer-${faq.id}`}
              role="region"
            >
              <p className="text-base">{faq.ans}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQItems;
