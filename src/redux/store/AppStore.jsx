import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../actions/quizSlice";
export const store = configureStore({
    reducer: {
        quiz: quizReducer
    },
})