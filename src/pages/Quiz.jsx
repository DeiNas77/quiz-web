import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Quiz() {
  const stateQuiz = useSelector((state) => state.quiz);
  const [index, setIndex] = useState(0);
  const quizIndex = stateQuiz[index];
  const navigate = useNavigate();

  const handleIndex = () => {
    index < stateQuiz.length ? setIndex(index + 1) : "";
  };
  
  return (
    <div>
      {quizIndex ? (
        <div key={quizIndex.id}>
          <h1>{quizIndex.question}</h1>
          <h3>{quizIndex.option1}</h3>
          <h3>{quizIndex.option2}</h3>
          <h3>{quizIndex.option3}</h3>
          <h3>{quizIndex.option4}</h3>
          <Link onClick={handleIndex} to={`/quiz-game/${quizIndex.id}`}>Continuar</Link>
        </div>
      ) : (
        navigate("/result")
      )}
    </div>
  );
}

export default Quiz;
