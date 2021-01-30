import React, { useState } from "react";
import "./style.css";
export default function Exam() {
  const questions = [
    {
      questionText:
        "বীর মুক্তিযোদ্ধা তারমান বিবি তোমার বাড়িতে বেড়াতে আসলে তুমি কি করবে?  ?",
      answerOptions: [
        { answerText: "তার সম্পর্কে বন্ধুদের বলব", isCorrect: false },
        { answerText: "তার সম্পর্কে বন্ধুদের বলব", isCorrect: false },
        { answerText: "তাকে সম্মান দেখাব", isCorrect: false },
        { answerText: "মুক্তিযুদ্ধ সম্পর্কে জানতে চাইব", isCorrect: true },
      ],
    },
    {
      questionText:
        "ল্যান্স নায়েক নূর মোহাম্মদ শেখ বীরত্বের সাথে যুদ্ধ করে শহীদ হয়েছেন। তার ক্ষেত্রে যে উপাধি প্রযোজ্য তা হলো- ?",
      answerOptions: [
        { answerText: "বীরশ্রেষ্ঠ", isCorrect: true },
        { answerText: "বীর উত্তম", isCorrect: false },
        { answerText: "বীর বিক্রম", isCorrect: false },
        { answerText: "বীর প্রতীক", isCorrect: false },
      ],
    },
    {
      questionText:
        "মুক্তিযুদ্ধে সাহসিকতা ও ত্যাগের জন্য হেমায়েত বাহিনীর প্রধান বীর বিক্রম উপাধিতে ভূষিত হয়েছেন। এটি মুক্তিযোদ্ধাদের কততম রাষ্ট্রীয় উপাধি?",
      answerOptions: [
        { answerText: "প্রথম", isCorrect: false },
        { answerText: "দ্বিতীয়", isCorrect: false },
        { answerText: "তৃতীয়", isCorrect: true },
        { answerText: "চতুর্থ", isCorrect: false },
      ],
    },
    {
      questionText:
        "মুক্তিযুদ্ধে কোন ভূমিকার জন্য ভারতীয় বাহিনীকে মিত্র বাহিনী বলা হয়?",
      answerOptions: [
        { answerText: "বন্ধুত্ব স্থাপনের জন্য", isCorrect: false },
        { answerText: "যুদ্ধে সহায়তার জন্য", isCorrect: true },
        { answerText: "আর্থিক সাহায্যের জন্য", isCorrect: false },
        { answerText: "সহমর্মিতা প্রদানের জন্য", isCorrect: false },
      ],
    },
    {
      questionText:
        "১৯৫২ সালের ভাষা আন্দোলনের সময় তুমি ঢাকা বিশ্ববিদ্যালয়ের একজন শিক্ষার্থী থাকলে নিচের কোনটি করতে?",
      answerOptions: [
        { answerText: "গ্রামের বাড়িওত গমন", isCorrect: false },
        { answerText: "ভাষা আন্দোলনে অংশগ্রহন", isCorrect: false },
        { answerText: "ভাষা আন্দোলন পর্যবেক্ষন", isCorrect: false },
        { answerText: "আন্দোলন থেকে নিজেকে দূরে রাখা", isCorrect: true },
      ],
    },
    {
      questionText:
        "মুক্তিযুদ্ধে কোন ভূমিকার জন্য ভারতীয় বাহিনীকে মিত্র বাহিনী বলা হয়?",
      answerOptions: [
        { answerText: "বন্ধুত্ব স্থাপনের জন্য", isCorrect: false },
        { answerText: "যুদ্ধে সহায়তার জন্য", isCorrect: true },
        { answerText: "আর্থিক সাহায্যের জন্য", isCorrect: false },
        { answerText: "সহমর্মিতা প্রদানের জন্য", isCorrect: false },
      ],
    },
    {
      questionText:
        "বিজয় দিবসের অনুষ্ঠানে তোমার বিদ্যালয়ে একটি নাটক ম স্থ হবে। এ নাটকে তুমি কোন চরিত্রে অভিনয় করবে? ",
      answerOptions: [
        { answerText: "ধনাঢ্য ব্যাক্তি", isCorrect: false },
        { answerText: "বীর মুক্তিযোদ্ধা", isCorrect: true },
        { answerText: "ইউপি চেয়ারম্যান", isCorrect: false },
        { answerText: "সরকারি কর্মকর্তা", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="quiz-box">
      {showScore ? (
        <div className="score-section">
          তুমি {questions.length} এর মধ্যে {score} পেয়েছো
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>প্রশ্ন নং: {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="quiz-btn"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
