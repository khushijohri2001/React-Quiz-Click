import { Link } from "react-router-dom";
import { useQuiz } from "../components/quiz-context";

const Rules = () => {
  const { dispatch } = useQuiz();

  return (
    <>
      <div className="rules-container">
        <h1>Rules you need to follow for this Quiz </h1>
        <div className="rules">
          <h4>5 Questions</h4>
          <p>10 Marks for each question</p>
        </div>

        <h3>Read the following Instructions carefully</h3>
        <ul>
          <li>There will be a total of 5 questions.</li>
          <li>10 points will be awarded for every correct answer.</li>
          <li>No points will be awarded for any wrong answer.</li>
          <li>Tap on any option to select the answer.</li>
          <li>Click on Next Button to go to the next question.</li>
          <li>Click Submit once you have attempted all the question.</li>
        </ul>

        <div className="take-quiz-container">
          <Link to="/quiz">
            <button
              className="take-quiz-btn"
              onClick={() =>
                dispatch({
                  type: "TAKE_QUIZ"
                })
              }
            >
              Take Quiz
            </button>
          </Link>
        </div>
      </div>

      <hr color="#590c0c" size="1" />
    </>
  );
};

export default Rules;
