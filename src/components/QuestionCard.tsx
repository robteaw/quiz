import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
  questionNR: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNR,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNR} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
  </div>
);

export default QuestionCard;
