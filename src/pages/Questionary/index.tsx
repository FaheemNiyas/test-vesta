import MainLayout from "@/layouts/MainLayout";
import React, { useState } from "react";

const Questionary = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      id: "1",
      title: "1. LOSS OF MONEY : ",
      subtitle:
        "Which of the following statements best describes the inherent risk of investing in startups or new business models?",
      answers: [
        {
          id: "1-1",
          value: "a) All investments guarantee a return on capital.",
        },
        {
          id: "1-2",
          value:
            "b) Business models may fail or risk running out of financing before creating returns.",
        },
        {
          id: "1-3",
          value:
            "c) Investing in startups is a guaranteed way to double your money.",
        },
        {
          id: "1-4",
          value: "d) Startups always provide dividends to their investors.",
        },
      ],
    },
    {
      id: "2",
      title: "2. LIQUIDITY :",
      subtitle: "What does liquidity in investments mean?",
      answers: [
        {
          id: "2-1",
          value: "a) You can easily sell your investment at any time.",
        },
        {
          id: "2-2",
          value: "b)  The investment will always increase in value",
        },
        {
          id: "2-3",
          value:
            "c) You might not be able to sell your investment quickly or at a desired price.",
        },
        {
          id: "2-4",
          value: "d) Startups always provide dividends to their investors.",
        },
      ],
    },
    {
      id: "3",
      title: "3. RARE RETURN : ",
      subtitle: "How often do startup investments provide substantial returns?",
      answers: [
        {
          id: "3-1",
          value: "a) Almost always, as startups are guaranteed to succeed.",
        },
        {
          id: "3-2",
          value: "b) Rarely, as many startups fail and only a few succeed.",
        },
        {
          id: "3-3",
          value: "c) Returns are guaranteed after a year of investment.",
        },
        {
          id: "3-4",
          value: "d) Startups provide monthly dividends.",
        },
      ],
    },
    {
      id: "4",
      title: "4. DILUTION :",
      subtitle:
        'What can happen if a company you\'ve invested in raises more capital at a valuation lower than the previous round  (a "down round")?',
      answers: [
        {
          id: "4-1",
          value: "a) Your shares will always increase in value.",
        },
        {
          id: "4-2",
          value: "b) The company will return your initial investment.",
        },
        {
          id: "4-3",
          value:
            "c) Your stake in the company can get diluted, decreasing its value.",
        },
        {
          id: "4-4",
          value: "d) Down rounds are illegal and cannot happen.",
        },
      ],
    },
    {
      id: "5",
      title: "5. LACK OF CONTROL : ",
      subtitle:
        "As a minority shareholder in a startup, what level of control can you expect over the company's daily operations?",
      answers: [
        {
          id: "5-1",
          value: "a) Significant control over all major decisions.",
        },
        {
          id: "5-2",
          value: "b) Limited to no control over daily operations.",
        },
        {
          id: "5-3",
          value: "c) Ability to block major decisions.",
        },
        {
          id: "5-4",
          value: "d) Down rounds are illegal and cannot happen.",
        },
      ],
    },
    {
      id: "6",
      title: "6. RISK OF FRAUD : ",
      subtitle:
        "What is a potential risk when investing in companies without thorough due diligence?",
      answers: [
        {
          id: "6-1",
          value: "a) Guaranteed profits within a month.",
        },
        {
          id: "6-2",
          value:
            "b) Risk of the company being fraudulent or misrepresenting information.",
        },
        {
          id: "6-3",
          value: "c) Receiving company merchandise as a thank-you gift.",
        },
        {
          id: "6-4",
          value: "d) Getting a position on the company's board.",
        },
      ],
    },
  ];

  const handleAnswerChange = (questionId: string, answerId: string) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: answerId,
    }));
  };

  const handleSubmit = () => {
    console.log("Selected Answers:", selectedAnswers);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 sm:p-16">
      <div className="w-full border border-[#FFFFFF33] rounded-lg bg-[#FFFFFF0A] md:p-10 p-2">
        <div className="text-[36px] text-center py-5">Getting Started</div>
        <div className="text-[20px] text-center text-[#FFFFFFB8] pb-10">
          Let us know your knowledge of investment to help provide best services
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {questions.map((question, qIndex) => {
            return (
              <div
                key={qIndex}
                className="flex flex-col bg-[#FFFFFF0A] border border-[#FFFFFF33] rounded-lg md:p-5 p-2"
              >
                <div className="text-[#05F691] md:text-[20px] text-[14px]">
                  {question.title}{" "}
                </div>

                <div className="flex flex-col gap-3 md:px-4">
                  <div className="text-[#fff]  md:text-[14px] text-[11px] md:px-0 px-2">
                    {question.subtitle}
                  </div>
                  {question.answers.map((answer, aIndex) => {
                    return (
                      <div
                        key={aIndex}
                        className="flex items-center ps-4 border border-[#FFFFFF33] rounded-full bg-[#FFFFFF0A]"
                      >
                        <input
                          id={answer.id}
                          type="radio"
                          value={answer.value}
                          name={`question-${question.id}`}
                          className="w-4 h-4 text-[#05F691] bg-gray-100 border-gray-300 focus:ring-[#05F691]"
                          onChange={() =>
                            handleAnswerChange(question.id, answer.value)
                          }
                        />
                        <label
                          htmlFor={answer.id}
                          className="w-full py-4 ms-2 md:text-[14px] text-[11px] text-gray-900 dark:text-gray-300"
                        >
                          {answer.value}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-end w-full">
          <button
            onClick={handleSubmit}
            className="bg-[#05F691] py-2 md:w-1/4 w-full rounded-full text-black md:text-[28px] text-[14px] md:mt-10 mt-2"
          >
            Submit & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questionary;
