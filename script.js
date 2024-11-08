const questions = [
    {
      question: "Which of the following will Boss Mhademo Choose as his pet?",
      answers: ["Snake", "Dragon", "Crocodile", "Tiger"],
      correct: 1 // Correct answer: Dragon
    },
    {
      question: "What is Boss Mhademo Favourite Game?",
      answers: ["Basketball", "Playing with girls' feelings", "Chess", "Football"],
      correct: 0 // Correct answer: Basketball
    },
    {
      question: "What is Boss Mhademo Favourite Thing to do?",
      answers: ["Beating others", "Send reels", "Gaming", "Watch drama"],
      correct: 2 // Correct answer: Gaming
    },
    {
      question: "What will Boss Mhademo do in a particular program?",
      answers: ["Benediction", "Read Bible", "Host", "Sing"],
      correct: 1 // Correct answer: Read Bible
    },
    {
      question: "Which is Boss Mhademo Favourite car?",
      answers: ["Audi", "Fortuner", "Supra", "GTR"],
      correct: 2 // Correct answer: Supra
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function handleIntroResponse(isYes) {
    const introResponseEl = document.getElementById("intro-response");
    introResponseEl.innerText = isYes ? "You're smart!" : "Haters.";
    introResponseEl.classList.remove("hidden");
  
    setTimeout(() => {
      document.getElementById("intro").classList.add("hidden");
      document.getElementById("quiz").classList.remove("hidden");
      showQuestion();
    }, 1500);
  }
  
  function showQuestion() {
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const question = questions[currentQuestionIndex];
    
    questionEl.innerText = question.question;
    answersEl.innerHTML = ''; // Clear previous answers
  
    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.innerText = answer;
      button.onclick = () => selectAnswer(index);
      answersEl.appendChild(button);
    });
  }
  
  function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");
    const feedbackMessage = document.getElementById("feedback-message");
    const feedbackGif = document.getElementById("feedback-gif");
  
    if (index === question.correct) {
      score++;
      feedbackMessage.innerText = "YOU'RE SMART!";
      feedbackGif.src = "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif";
    } else {
      feedbackMessage.innerText = "YOU'RE A NOOB";
      feedbackGif.src = "https://media.giphy.com/media/26xBs5E6u0Iyel5Ys/giphy.gif";
    }
  
    feedback.classList.remove("hidden");
  
    setTimeout(() => {
      nextQuestion();
    }, 1500); // Wait for feedback before moving to next question
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showFinalScore();
    }
  }
  
  function showFinalScore() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.classList.add("hidden");
  
    const finalScoreContainer = document.getElementById("score-container");
    const finalScoreMessage = document.getElementById("final-score-message");
    const finalMessage = document.getElementById("final-message");
  
    finalScoreMessage.innerText = `YOU SCORED ${score} OUT OF 5!`;
  
    if (score > 3) {
      finalMessage.innerText = "YOU'RE A SMART-ASS KID!";
    } else {
      finalMessage.innerText = "YOU'RE TOO NOOB!";
    }
  
    finalScoreContainer.classList.remove("hidden");
  }
  