import { useSelector } from "react-redux";

function Quiz() {
  const stateQuiz = useSelector((state) => state.quiz);
  return (
    <div>
      {stateQuiz.map(({id, question, option1, option2, option3, option4 }) => {
        return (
          <div key={id}>
            <h1>{question}</h1>
            <h3>{option1}</h3>
            <h3>{option2}</h3>
            <h3>{option3}</h3>
            <h3>{option4}</h3>
            <button>Continuar</button>
          </div>
        );
      })}
    </div>
  );
}

export default Quiz;
