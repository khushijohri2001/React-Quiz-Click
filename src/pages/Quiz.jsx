import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { useQuiz } from "../components/quiz-context";

const Quiz = () => {
  const { category } = useQuiz();
  const navigate = useNavigate();

  const [options, setOptions] = useState();
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState(false);
  const [btnName, setBtnName] = useState("Next");
  const displayQuestion = category.map((items) => items.questions);
  const displayQuestion2 = displayQuestion[0];

  useEffect(() => {
    setOptions(
      displayQuestion2 &&
        handleShuffle([
          displayQuestion2[currentQuestionIndex]?.correctAnswer,
          ...displayQuestion2[currentQuestionIndex]?.wrongAnswer
        ])
    );
  }, [displayQuestion2, currentQuestionIndex]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  const handleSelect = (opt) => {
    if (
      selected === opt &&
      selected === displayQuestion2[currentQuestionIndex].correctAnswer
    ) {
      return "correct-answer";
    } else if (
      selected === opt &&
      selected !== displayQuestion2[currentQuestionIndex].correctAnswer
    ) {
      return "wrong-answer";
    } else if (opt === displayQuestion2[currentQuestionIndex].correctAnswer) {
      return "correct-answer";
    }
  };

  const handleCheck = (opt) => {
    setSelected(opt);
    if (opt === displayQuestion2[currentQuestionIndex].correctAnswer)
      setScore(score + 10);
    setError(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex === 3) {
      setBtnName("Submit");
    }

    if (currentQuestionIndex > 3) {
      navigate("/result", {
        state: {
          currentQuestionIndex: currentQuestionIndex,
          options: options,
          displayQuestion: displayQuestion,
          score: score
        }
      });
    } else if (selected) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  const handleQuit = () => {};

  return (
    <>
      <div className="quiz-container">
        <div className=".quiz-sub-container">
          <h1>{category.map((item) => item.name)} Quiz</h1>
          <div className="question-count-container">
            <p className="question-count">
              <span>Question</span>
              {currentQuestionIndex + 1}/5
            </p>
            <p>
              <span>Score:</span> {score}
            </p>
          </div>

          <hr color="#590c0c" size="1" />

          <p className="question">
            {displayQuestion2[currentQuestionIndex].question}
          </p>
          <div className="quiz-options-container">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((opt) => (
                <button
                  className={`options ${selected && handleSelect(opt)}`}
                  onClick={() => handleCheck(opt)}
                  key={opt}
                  disabled={selected}
                >
                  {opt}{" "}
                </button>
              ))}
          </div>

          <div className="button-container">
            <div className="quit-btn-container">
              <button onClick={handleQuit}>Quit</button>
            </div>

            <div className="next-btn-container">
              <button className="next-btn" onClick={handleNext}>
                {btnName}
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr color="#590c0c" size="1" />
    </>
  );
};

export default Quiz;
