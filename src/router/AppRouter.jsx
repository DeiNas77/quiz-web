import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import ErrorPage from "../pages/ErrorPage";
import Result from "../pages/Result";

function AppRouter() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-game/:id" element={<Quiz />} />
          <Route path="/result" element={<Result/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    </>
  );
}

export default AppRouter;
