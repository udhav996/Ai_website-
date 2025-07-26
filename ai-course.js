// List of random questions with keyword hints
const questions = [
    {
        question: "Rewrite this prompt to be more specific: 'Tell me about history.'",
        keywords: ["time period", "important events", "famous people"]
    },
    {
        question: "Rewrite this prompt: 'Tell me about technology.'",
        keywords: ["latest trends", "impact", "future innovations"]
    },
    {
        question: "Rewrite this prompt: 'Tell me about science.'",
        keywords: ["discoveries", "scientists", "applications"]
    },
    {
        question: "Create a structured prompt for a step-by-step guide.",
        keywords: ["step", "process", "how to", "guide"]
    },
    {
        question: "Create a structured prompt for learning a new skill.",
        keywords: ["step", "practice", "beginner tips"]
    }
];

function loadRandomQuestions() {
    let exercise1 = document.getElementById("exercise1-question");
    let exercise2 = document.getElementById("exercise2-question");
    let exercise1Hint = document.getElementById("exercise1-hint");
    let exercise2Hint = document.getElementById("exercise2-hint");

    let randomQ1 = questions[Math.floor(Math.random() * questions.length)];
    let randomQ2 = questions[Math.floor(Math.random() * questions.length)];

    exercise1.innerText = randomQ1.question;
    exercise1Hint.innerText = "🔹 Try using these keywords: " + randomQ1.keywords.join(", ");

    exercise2.innerText = randomQ2.question;
    exercise2Hint.innerText = "🔹 Try using these keywords: " + randomQ2.keywords.join(", ");
}

function checkExercises() {
    let exercise1Answer = document.getElementById("exercise1").value.trim();
    let exercise2Answer = document.getElementById("exercise2").value.trim();
    let feedback = document.getElementById("exercise-feedback");

    let minLength = 10;

    if (exercise1Answer.length < minLength || exercise2Answer.length < minLength) {
        feedback.innerText = "⚠️ Please write at least 10 characters for each answer.";
        return;
    }

    feedback.innerText = "✅ Good job! Your answers meet the criteria.";
    showCertificateButton();
}

function showCertificateButton() {
    alert("Congratulations! You've completed the exercises.");



} 

// Load random questions when the page loads
window.onload = loadRandomQuestions; 

// AI Prompt Quiz
function startQuiz() {
    let questions = [
        {
            question: "Which prompt type is best for AI-generated stories? (Instruction, Creative, Informational)",
            answer: "creative",
            feedback: "✅ Correct! Creative prompts work best for AI-generated stories."
        },
        {
            question: "What type of prompt works best for step-by-step instructions? (Instruction, Creative, Informational)",
            answer: "instruction",
            feedback: "✅ Correct! Instruction prompts are best for step-by-step guides."
        },
        {
            question: "Which prompt type is best for summarizing articles? (Instruction, Creative, Informational)",
            answer: "informational",
            feedback: "✅ Correct! Informational prompts work best for summarization."
        },
        {
            question: "What is the key to writing good AI prompts? (Clarity, Randomness, Length)",
            answer: "clarity",
            feedback: "✅ Correct! Clarity is essential for writing good AI prompts."
        }
    ];

    // Select a random question
    let randomIndex = Math.floor(Math.random() * questions.length);
    let selectedQuestion = questions[randomIndex];

    // Ask the question
    let userAnswer = prompt(selectedQuestion.question).toLowerCase().trim();

    // Check the answer
    let result;
    if (userAnswer === selectedQuestion.answer) {
        result = selectedQuestion.feedback;
    } else {
        result = "❌ Incorrect. Try again!";
    }

    // Display the result
    document.getElementById("quiz-result").innerText = result;
} 

// Generate Certification
function generateCertificate() {
    let feedbackText = document.getElementById("exercise-feedback").innerText;
    let quizResult = document.getElementById("quiz-result").innerText;

    if (feedbackText.includes("Good job") && quizResult.includes("Correct")) {
        document.getElementById("certificate-message").innerText = "🏅 Congratulations! Click the button below to download your certificate.";

        // Create Certificate
        let canvas = document.getElementById("certificateCanvas");
        let ctx = canvas.getContext("2d");

        // Background
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Border
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 10;
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

        // Certificate Title
        ctx.font = "40px Arial";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText("Prompt Engineering Certificate", canvas.width / 2, 150);

        // User Name
        let userName = prompt("Enter your name for the certificate:");

        if(!userName || userName.trim()===""){
            alert ("you must enter your name to generate a certificate.");
            return;
        }
        ctx.font = "30px Arial";
        ctx.fillText(userName, canvas.width / 2, 250);

        // Completion Message
        ctx.font = "20px Arial";
        ctx.fillText("Has successfully completed the Prompt Engineering Course", canvas.width / 2, 320);
        ctx.fillText("Date: " + new Date().toLocaleDateString(), canvas.width / 2, 370);

        // Display Download Link
        let downloadLink = document.getElementById("downloadCertificate");
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.style.display = "block";
        downloadLink.innerText = "📜 Download Your Certificate";
    } else {
        document.getElementById("certificate-message").innerText = "❌ You need to complete the exercises and quiz before getting the certificate.";
    }
}
