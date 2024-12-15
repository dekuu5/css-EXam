const questions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Scripts",
      "Cascading Script Sheets",
      "Cascading Style Sheets",
      "Computing Style Sheets"
    ],
    correctAnswer: 2
  },
  {
    question: "How do you change the text color of an element?",
    options: [
      "text-color: red;",
      "color: red;",
      "font-color: red;",
      "background-color: red;"
    ],
    correctAnswer: 1
  },
  {
    question: "Which property is used to change the font of an element?",
    options: [
      "font-family",
      "font-size",
      "font-weight",
      "font-style"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the default value of the color property?",
    options: [
      "black",
      "white",
      "transparent",
      "inherit"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the correct way to apply bold formatting to text using CSS?",
    options: [
      "font-weight: bold;",
      "text-style: bold;",
      "font-family: bold;",
      "text-weight: bold;"
    ],
    correctAnswer: 0
  },
  {
    question: "Which CSS property controls the text size?",
    options: [
      "text-size",
      "font-size",
      "text-style",
      "font-style"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following selects all elements with the class 'highlight'?",
    options: [
      ".highlight",
      "#highlight",
      "*highlight",
      "highlight*"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following is a CSS pseudo-element?",
    options: [
      "::hover",
      "::before",
      ".before",
      "#before"
    ],
    correctAnswer: 1
  },
  {
    question: "How can you insert content before an HTML element using CSS?",
    options: [
      ".element {before: content;}",
      ".element::before {content: 'Text';}",
      ".element::before {text: 'Text';}",
      ".element::before {value: 'Text';}"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following properties is not part of the CSS box model?",
    options: [
      "margin",
      "padding",
      "border",
      "display"
    ],
    correctAnswer: 3
  },
  {
    question: "How do you add space between the border and the content inside an element?",
    options: [
      "margin",
      "padding",
      "border",
      "height"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the default display property of a &lt;div&gt; element?",
    options: [
      "inline",
      "block",
      "inline-block",
      "none"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following elements has a default display: inline?",
    options: [
      "&lt;span&gt",
      "&lt;div&gt",
      "&lt;section&gt",
      "&lt;header&gt"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the difference between display: block; and display: inline;?",
    options: [
      "Block elements take up the full width available, while inline elements only take up as much width as necessary.",
      "Inline elements take up the full width available, while block elements only take up as much width as necessary.",
      "Both block and inline elements take up the full width.",
      "Block elements are invisible, while inline elements are visible."
    ],
    correctAnswer: 0
  },
  {
    question: "Which property is used to make an element float to the left or right?",
    options: [
      "display",
      "float",
      "position",
      "overflow"
    ],
    correctAnswer: 1
  },
  {
    question: "What does the clear property do in CSS?",
    options: [
      "Removes all content inside an element.",
      "Prevents elements from floating on the left or right side of an element.",
      "Clears all inline styles.",
      "Clears the element's margin and padding."
    ],
    correctAnswer: 1
  },
  {
    question: "If an element is floated, which property can be used to prevent the parent from collapsing?",
    options: [
      "overflow: hidden;",
      "display: block;",
      "clear: both;",
      "float: none;"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of the clearfix hack?",
    options: [
      "To hide floated elements.",
      "To clear floats within a container so that it correctly contains floated elements.",
      "To remove margins and padding from elements.",
      "To increase the width of floated elements."
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following correctly applies a clearfix in modern CSS?",
    options: [
      ".clearfix::before {content: ''; clear: both;}",
      ".clearfix::after {content: ''; display: table; clear: both;}",
      ".clearfix::after {content: ''; display: block; clear: both;}",
      ".clearfix::before {content: ''; display: block; float: both;}"
    ],
    correctAnswer: 1
  },
  {
    question: "How can you center an element horizontally using CSS?",
    options: [
      "text-align: center;",
      "margin-left: auto; margin-right: auto;",
      "position: absolute; left: 50%;",
      "float: center;"
    ],
    correctAnswer: 1
  },
  {
    "question": "What is the correct way to link an external CSS file?",
    "options": [
      "<script src='style.css'>",
      "<link rel='stylesheet' href='style.css'>",
      "<style src='style.css'>",
      "<link src='style.css'>"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is not a valid CSS unit?",
    "options": [
      "px",
      "em",
      "pt",
      "mt"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Which property is used to change the background color of an element?",
    "options": [
      "color",
      "background",
      "background-color",
      "bgcolor"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What does the z-index property do?",
    "options": [
      "Controls the stacking order of elements",
      "Sets the zoom level of an element",
      "Defines the opacity of an element",
      "Determines the visibility of an element"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following is not a CSS selector?",
    "options": [
      "Class",
      "ID",
      "Tag",
      "AttributeValue"
    ],
    "correctAnswer": 3
  },
  {
    "question": "What does the position property do in CSS?",
    "options": [
      "Specifies the stacking context",
      "Specifies how an element is positioned in the document",
      "Specifies the float direction of an element",
      "Specifies the display type of an element"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following values is not valid for the display property?",
    "options": [
      "block",
      "inline",
      "grid",
      "center"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Which property can be used to make text italic in CSS?",
    "options": [
      "text-style",
      "font-variant",
      "font-weight",
      "font-style"
    ],
    "correctAnswer": 3
  },
  {
    "question": "What is the default position value of an element?",
    "options": [
      "relative",
      "absolute",
      "fixed",
      "static"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Which of the following is a valid way to select elements with the class 'box' and id 'header'?",
    "options": [
      "#header.box",
      ".box #header",
      "#header .box",
      ".header.box"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What is the correct way to apply a transition effect in CSS?",
    "options": [
      "transition-effect: all 0.3s;",
      "transition: all 0.3s;",
      "effect: transition 0.3s;",
      "animation: all 0.3s;"
    ],
    "correctAnswer": 1
  },
  {
    "question": "How can you hide an element in CSS?",
    "options": [
      "display: hide;",
      "visibility: false;",
      "visibility: hidden;",
      "hide: true;"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Which property sets the amount of space between the content and the border of an element?",
    "options": [
      "margin",
      "padding",
      "border-spacing",
      "content-spacing"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which pseudo-class targets the first child of an element?",
    "options": [
      ":first",
      ":first-child",
      "::first",
      "::child-first"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What is the purpose of the media query @media in CSS?",
    "options": [
      "To apply styles only for specific devices or screen sizes",
      "To add animations to an element",
      "To specify a different stylesheet",
      "To define variables for CSS"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which property is used to align text in CSS?",
    "options": [
      "alignment",
      "text-align",
      "align",
      "text-position"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What does the overflow property control?",
    "options": [
      "How content is handled when it overflows the boundaries of an element",
      "The spacing outside an element",
      "The visibility of an element",
      "The stacking order of elements"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which property is used to make a responsive design in CSS?",
    "options": [
      "responsive",
      "media-query",
      "viewport",
      "@media"
    ],
    "correctAnswer": 3
  },
  {
    "question": "What does the CSS property flex-direction control?",
    "options": [
      "The alignment of items inside a flex container",
      "The direction of the main axis in a flex container",
      "The size of flex items",
      "The spacing between flex items"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a valid CSS grid property?",
    "options": [
      "grid-align",
      "grid-template-rows",
      "grid-position",
      "grid-span"
    ],
    "correctAnswer": 1
  }

];

let currentQuestionIndex = 0;
let selectedAnswers = [];
let time = 120000; // 20 minutes in seconds
let timerInterval;

function startQuiz() {
  document.getElementById('startBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'inline-block';
  
  // Start the timer
  timerInterval = setInterval(updateTimer, 1000);
  
  // Render the first question
  renderQuestion();
}

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById("time").textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

  time--;
  if (time < 0) {
    clearInterval(timerInterval);
    alert("Time's up! Submitting the quiz.");
    submitQuiz();
  }
}

function renderQuestion() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = ''; // Clear previous content

  const questionObj = questions[currentQuestionIndex];
  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.innerHTML = `<p>${questionObj.question}</p>`;

  questionObj.options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = `<input type="radio" name="q${currentQuestionIndex}" value="${index}" ${
      selectedAnswers[currentQuestionIndex] === index ? 'checked' : ''
    }> ${option}`;
    questionElement.appendChild(optionLabel);
    questionElement.appendChild(document.createElement("br"));
  });

  quizContainer.appendChild(questionElement);

  // Show/Hide Previous and Next buttons based on the current question
  document.getElementById('prevBtn').style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
  document.getElementById('nextBtn').style.display = currentQuestionIndex < questions.length - 1 ? 'inline-block' : 'none';
  document.getElementById('submitBtn').style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
  saveAnswer(); // Save the selected answer before moving to the next question
  currentQuestionIndex++;
  renderQuestion();
}

function prevQuestion() {
  saveAnswer(); // Save the selected answer before moving to the previous question
  currentQuestionIndex--;
  renderQuestion();
}

function saveAnswer() {
  const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
  if (selectedOption) {
    selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  }
}

function submitQuiz() {
  clearInterval(timerInterval);

  // Calculate the score
  let score = 0;
  questions.forEach((question, index) => {
    if (selectedAnswers[index] === question.correctAnswer) {
      score++;
    }
  });

  // Show the result
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;

  // Hide the submit button
  document.getElementById("submitBtn").style.display = 'none';
}