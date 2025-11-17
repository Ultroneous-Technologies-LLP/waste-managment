import { Button } from "@/types";

interface HaveQuestions {
  button: Button;
  description: string;
  title: string;
}

interface FaqItem {
  ans: string;
  id: number;
  questions: string;
}

export interface FaqItemsProps {
  data: FaqSectionsProps["faqItem"];
}

export interface FaqSectionsProps {
  description: string;
  faqItem: FaqItem[];
  haveQuestions: HaveQuestions;
  title: string;
}
