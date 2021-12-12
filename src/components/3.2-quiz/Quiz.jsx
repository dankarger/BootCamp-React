import React from "react";
import QuizTitle from "./QuizTitle";
import Q1Title from "./Q1Title";
import Q1Input from "./Q1Input";
import Q2Title from "./Q2Title";
import Q2Input from "./Q2Input";
import './css/Quiz.css'

function Quiz() {

    return (
        <div className={'quiz'}>
            <QuizTitle />
            <Q1Title />
            <Q1Input />
            <Q2Title />
            <Q2Input />
        </div>

    )


}

export default Quiz;