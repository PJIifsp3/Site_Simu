// Sample questions (replace with your actual data source)
const questions = [
    {
        question: "Questão 1",
        options: ["A", "B", "C", "D"],
        answer: 1,
        image: "./images/q1.png"
    },
    {
        question: "Questão 2",
        options: ["A", "B", "C", "D"],
        answer: 0,
        image: "./images/q2.png"
    },
    {
        question: "Questão 3",
        options: ["A", "B", "C", "D"],
        answer: 3,
        image: "./images/q3.PNG",
    },
    {
        question: "Questão 4",
        options: ["A", "B", "C", "D"],
        answer: 1,
        image: "./images/q4.PNG"
    },
    {
        question: "Questão 5",
        options: ["A", "B", "C", "D"],
        answer: 0,
        image: "./images/q5.PNG"
    },
    {
        question: "Questão 6",
        options: ["A", "B", "C", "D"],
        answer: 2,
        image: "./images/q6.PNG"
    },
    {
        question: "Questão 7",
        options: ["A", "B", "C", "D"],
        answer: 3,
        image: "./images/q7.PNG"
    },
    {
        question: "Questão 8",
        options: ["A", "B", "C", "D"],
        answer: 0,
        image: "./images/q8.PNG"
    },
    {
        question: "Questão 9",
        options: ["A", "B", "C", "D"],
        answer: 2,
        image: "./images/q9.PNG"
    },
    {
        question: "Questão 10",
        options: ["A", "B", "C", "D"],
        answer: 2,
        image: "./images/q10.PNG"
    },
    {
        question: "Questão 11",
        options: ["A", "B", "C", "D"],
        answer: 2,
        image: "./images/q11.PNG"
    },
    {
        question: "Questão 12",
        options: ["A", "B", "C", "D"],
        answer: 3,
        image: "./images/q12.PNG"
    },
    {
        question: "Questão 13",
        options: ["A", "B", "C", "D"],
        answer: 1,
        image: "./images/q13.PNG"
    },
    {
        question: "Questão 14",
        options: ["A", "B", "C", "D"],
        answer: 3,
        image: "./images/q14.PNG"
    },
    {
        question: "Questão 15",
        options: ["A", "B", "C", "D"],
        answer: 0,
        image: "./images/q16.PNG"
    },
    {
        question: "Questão 16",
        options: ["A", "B", "C", "D"],
        answer: 2,
        image: "./images/q17.PNG"
    },
    {
        question: "Questão 17",
        options: ["A", "B", "C", "D"],
        answer: 1,
        image: "./images/q18.PNG"
    },
    {
        question: "Questão 18",
        options: ["A", "B", "C", "D"],
        answer: 3,
        image: "./images/q19.PNG"
    },
    {
        question: "Questão 19",
        options: ["A", "B", "C", "D"],
        answer: 1,
        image: "./images/q20.PNG"
    },
    {
        question: "Questão 20",
        options: ["A", "B", "C", "D"],
        answer: 3,
        image: "./images/q21.PNG"
    },
    {
        question: "Questão 21",
        options: ["A", "B", "C", "D"],
        answer: 2,
        image: "./images/q22.PNG"
    },
    {
        question: "Questão 22",
        options: ["A", "B", "C", "D"],
        answer: 1,
        image: "./images/q23.PNG"
    },
    {
        question: "Questão 23",
        options: ["A", "B", "C", "D"],
        answer: 2,
        image: "./images/q24.PNG"
    },
    {
        question: "Questão 24",
        options: ["A", "B", "C", "D"],
        answer: 0,
        image: "./images/q25.PNG"
    },
    {
        question: "Questão 25",
        options: ["A", "B", "C", "D"],
        answer: 0,
        image: "./images/q26.PNG"
    },
    {
        question: "Questão 26",
        options: ["A", "B", "C", "D"],
        answer: 0,
        image: "./images/q27.PNG"
    },
    {
        question: "Questão 27",
        options: ["A", "B", "C", "D"],
        answer: 2,
        image: "./images/q28.PNG"
    },
    {
        question: "Questão 28",
        options: ["A", "B", "C", "D"],
        answer: 3,
        image: "./images/q29.PNG"
    },
    {
        question: "Questão 29",
        options: ["A", "B", "C", "D"],
        answer: 1,
        image: "./images/q30.PNG"
    },
    // ... more questions
];

let currentQuestion = 0;

const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    questionText.classList.add("centered");
    answerOptions.innerHTML = ""; // Clear previous options

    if (q.image) {
        const imageElement = document.createElement("img");
        imageElement.src = q.image;
        imageElement.alt = "Question image"; // Add an alt text for accessibility
        answerOptions.appendChild(imageElement);
    }

    q.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => {
            // Check answer and provide feedback
            if (index === q.answer) {
                confirm("Correto!");
            } else {
                confirm("Incorreto. A resposta correta é: " + q.options[q.answer]);
            }
            // Move to the next question (or handle the end of the quiz)
            nextQuestion();
        });
        answerOptions.appendChild(optionElement);
    });

    updateButtonState();
}

function updateButtonState() {
    prevButton.disabled = currentQuestion === 0;
    nextButton.disabled = currentQuestion === questions.length - 1;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        // Handle the end of the quiz
        alert("Quiz finished!");
    }
}

prevButton.addEventListener("click", () => {
    currentQuestion--;
    loadQuestion();
});

nextButton.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});

// Start with the first question
loadQuestion();

