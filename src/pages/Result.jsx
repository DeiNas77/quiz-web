import { Link } from "react-router-dom";

function Result() {
  return (
    <>
      <div>
        <h1>Tu puntaje final es: </h1>
      </div>
      <div>
        <Link to="/">Volver a Jugar</Link>
      </div>
    </>
  );
}

export default Result;
