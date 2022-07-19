import { useLocation, useNavigate } from "react-router-dom";
import { useQuiz } from "../components/quiz-context";

const Result = () => {
  const { category } = useQuiz();
  const location = useLocation();
  const navigate = useNavigate();

  const displayQuestion2 = location.state.displayQuestion[0];

  return (
    <>
      {category.map((quiz) => {
        return (
          <>
            <div className="quiz-container">
              <div className="quiz-sub-container">
                <h1>Result {quiz.name} Quiz</h1>

                <div className="question-count-container result-count-container">
                  <p>
                    <span>Score:</span> {location.state.score}/50
                  </p>
                </div>

                {displayQuestion2.map((quiz, index) => {
                  let options = [...quiz.wrongAnswer, quiz.correctAnswer];
                  return (
                    <>
                      <p className="question-count">
                        <span>Question</span>
                        {index + 1}
                      </p>
                      <p className="question">{quiz.question}</p>
                      <div className="quiz-options-container">
                        {options &&
                          options.map((opt) => (
                            <button
                              className={`options 
                            ${
                              opt === quiz.correctAnswer
                                ? "correct-answer"
                                : "wrong-answer"
                            }
                            `}
                              disabled={true}
                            >
                              {opt}{" "}
                            </button>
                          ))}
                        <hr color="#590c0c" size="1" />
                      </div>
                    </>
                  );
                })}

                <div className="next-btn-container">
                  <button
                    className="next-btn"
                    onClick={() => navigate("/quiz-category")}
                  >
                    Try Other Quizes
                  </button>
                </div>
              </div>
            </div>

            <hr color="#590c0c" size="1" />
          </>
        );
      })}
    </>
  );
};

export default Result;
