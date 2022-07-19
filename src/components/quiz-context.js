import { createContext, useContext } from "react";
import { useReducer } from "react";
import CategoryReducer from "./CategoryReducer";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, {
    category: []
  });

  return (
    <QuizContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
