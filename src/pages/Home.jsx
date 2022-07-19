import { ArrowForward } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Quiz Click</h1>
        <p className="subheading">
          Get access to fun quizes of your Favourite Shows and Movies
        </p>

        <Link to="/quiz-category">
          <button className="get-started-btn">
            Get Started
            <ArrowForward />
          </button>
        </Link>
      </div>

      <hr color="#590c0c" size="1" />
    </>
  );
};

export default Home;
