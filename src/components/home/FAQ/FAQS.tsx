"use client";
import { FC, useState } from "react";
import { faqSections } from "@/types/home-type";
import { ArrowWithBackGround } from "../../icons";

interface FAQSProps {
  data: faqSections["faq"];
}

const FAQS: FC<FAQSProps> = ({ data }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="pt-6 space-y-3">
      {data.map((faq) => (
        <div
          key={faq.id}
          className="bg-white rounded-3xl md:rounded-4xl p-4 xl:p-6 cursor-pointer"
          onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
        >
          <div className="flex justify-between gap-4">
            <h3 className="text-base xl:text-2xl/7.5 max-w-63 md:max-w-154 xl:max-w-304.5 w-full">
              {faq.questions}
            </h3>
            <ArrowWithBackGround
              className="bg-primary-yellow size-14.5 border-transparent cursor-pointer"
              width={22}
              height={16}
              svgClassName={`${
                openId === faq.id ? "rotate-90" : "-rotate-90"
              } text-black`}
            />
          </div>
          {openId === faq.id && <p className="text-base pt-3">{faq.ans}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQS;
