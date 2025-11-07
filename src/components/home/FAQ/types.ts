interface Faq {
  ans: string;
  id: number;
  questions: string;
}

interface HaveQuestions {
  buttonLabel: string;
  description: string;
  title: string;
}

export interface FAQSProps {
  data: Faq[];
}

export interface FaqSectionsProps {
  description: string;
  faq: Faq[];
  haveQuestions: HaveQuestions;
  title: string;
}
