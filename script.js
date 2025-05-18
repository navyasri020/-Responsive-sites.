const quizData = [
    {
      image: "https://wallpapercave.com/wp/wp7421172.png",
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
      correct: 1
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/002/099/443/large_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg",
      question: "Which HTML tag is used to define a JavaScript script?",
      options: ["<js>", "<script>", "<javascript>"],
      correct: 1
    },
    {
      image: "https://wallpapercave.com/wp/wp12456165.png",
      question: "Which of these is a JavaScript framework?",
      options: ["React", "Laravel", "Django"],
      correct: 0
    }
  ];

  let currentQuestion = 0;

  function loadQuiz() {
    const quiz = quizData[currentQuestion];
    document.getElementById("quiz-image").src = quiz.image;
    document.getElementById("question").textContent = quiz.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    quiz.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        alert(idx === quiz.correct ? "✅ Correct!" : "❌ Try again!");
        currentQuestion = (currentQuestion + 1) % quizData.length;
        loadQuiz();
      };
      optionsContainer.appendChild(btn);
    });
  }

  async function fetchJoke() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
      const data = await response.json();
      document.getElementById("joke-text").textContent = data.joke || "Couldn't load a joke.";
    } catch {
      document.getElementById("joke-text").textContent = "Failed to fetch a joke.";
    }
  }

  // Initialize
  loadQuiz();