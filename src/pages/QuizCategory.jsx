import { Link } from "react-router-dom";
import { useQuiz } from "../components/quiz-context";
import "../css/QuizCategory.css";
import data from "../data/data";

const QuizCategory = () => {
  const { dispatch } = useQuiz();

  return (
    <>
      <div className="quiz-category-container">
        <div className="main-content-heading">
          <h1>Choose Quiz by Category</h1>
        </div>

        <div className="quiz-card-container">
          {data.map((items) => {
            return (
              <div className="quiz-card" key={items.name}>
                <img src={items.image} alt={items.name} />

                <div className="quiz-card-content">
                  <p className="quiz-card-subline">{items.name}</p>

                  <div className="play-now-container">
                    <p>Take this quiz to test yourself</p>
                    <a href="../Quiz_Rules/doraemon_quiz_rules.html">
                      <Link to="/rules-page">
                        {" "}
                        <button
                          className="play-now-btn"
                          onClick={() =>
                            dispatch({
                              type: "PLAY_NOW",
                              payload: items
                            })
                          }
                        >
                          Play Now
                        </button>
                      </Link>
                    </a>
                  </div>
                  <p>5 Questions</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr color="#590c0c" size="1" />
    </>
  );
};

export default QuizCategory;
