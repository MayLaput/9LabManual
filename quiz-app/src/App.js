import React, { useState } from 'react';
import './App.css';

const quizData = [
  { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], correctAnswer: 'Paris' },
  { question: 'What is the fastest land animal in the world?', options: ['Lion', 'Cheetah', 'Gazelle', 'Ostrich'], correctAnswer: 'Cheetah' },
  { question: 'Which  sea creature has three hearts?', options: ['Octopus', 'Starfish', 'Seahorse', 'Jellyfish'], correctAnswer: 'Octopus' },
  { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
  { question: 'Who wrote "Romeo and Juliet"?', options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'], correctAnswer: 'William Shakespeare' }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null); // NEW: to highlight selected option

  const handleAnswerClick = (selectedAnswer) => {
    setSelected(selectedAnswer);
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelected(null); // reset selection
      } else {
        setShowResult(true);
      }
    }, 800); // short delay so user sees their selection
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setScore(0);
    setSelected(null);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      {showResult ? (
        <div className="result">
          <p>Your score: {score} out of {quizData.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question">
            <p>{quizData[currentQuestion].question}</p>
          </div>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`option ${selected === option ? 'selected' : ''}`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
