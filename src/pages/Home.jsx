import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-red-800 flex justify-center flex-col items-center min-h-[100vh] ">
      <h1>QuizWeb</h1>
      <p>Bienvenido a un app de QuizWeb para divertirte, empieza ya !!! </p>
      <Link
        to={`/quiz-game/:id`}
        className="w-[17rem] h-[3.5rem] rounded-[.8rem] bg-blue-600 text-[1.25rem] text-white content-center text-center"
      >
        Empezar Juego
      </Link>
    </div>
  );
}

export default Home;
