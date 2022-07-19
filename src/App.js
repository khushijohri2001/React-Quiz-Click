import { Route, Routes } from "react-router-dom";
import "./styles.css";
import "./css/Home.css";
import "./css/Rules.css";
import "./css/Quiz.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import QuizCategory from "./pages/QuizCategory";
import Rules from "./pages/Rules";
import Quiz from "./pages/Quiz";
import { useState } from "react";
import Result from "./pages/Result";

export default function App() {
  return (
    <div className="page-container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-category" element={<QuizCategory />} />
        <Route path="/rules-page" element={<Rules />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>

      <Footer />
    </div>
  );
}
