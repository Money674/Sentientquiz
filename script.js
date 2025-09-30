const quizData = [
    {
        question: "What is the primary mission of SentientAGI?",
        options: [
            "To develop proprietary AI models for commercial use",
            "To ensure Artificial General Intelligence (AGI) is open-source and community-controlled",
            "To create AI models for government surveillance",
            "To build AI models exclusively for academic research"
        ],
        answer: 1
    },
    {
        question: "Which blockchain technology does SentientAGI utilize to support its ecosystem?",
        options: ["Ethereum", "Solana", "Polygon", "Not specified in the available information"],
        answer: 3
    },
    {
        question: "What is the name of the lightweight social agent developed by SentientAGI?",
        options: ["SentientBot", "Dobby-Mini", "Sentient-Social-Agent", "AGI-Connect"],
        answer: 2
    },
    {
        question: "What is the core philosophy behind SentientAGI's approach to AI development?",
        options: [
            "Proprietary AI models for exclusive use",
            "Community-built, community-owned, community-aligned, and community-controlled AI",
            "Government-funded AI research",
            "Corporate partnerships for AI development"
        ],
        answer: 1
    },
    {
        question: "Which platform hosts the models developed by SentientAGI?",
        options: ["GitHub", "Hugging Face", "TensorFlow Hub", "PyTorch Hub"],
        answer: 1
    },
    {
        question: "What is the name of the framework provided by SentientAGI for building agents?",
        options: ["Sentient-Agent-Framework", "AGI-Builder", "Sentient-Toolkit", "AI-Forge"],
        answer: 0
    },
    {
        question: "What is the main goal of SentientAGI's open-source approach?",
        options: [
            "To restrict access to AI models",
            "To enable developers to monetize their AI models",
            "To promote transparency and collaboration in AI development",
            "To develop AI models for military applications"
        ],
        answer: 2
    },
    {
        question: "How does SentientAGI aim to support developers and creators?",
        options: [
            "By providing proprietary AI tools",
            "Through community-driven platforms and protocols",
            "By offering government grants for AI research",
            "By licensing AI models to corporations"
        ],
        answer: 1
    },
    {
        question: "What is the significance of the term 'Loyal AI' in SentientAGI's mission?",
        options: [
            "AI that is loyal to corporate interests",
            "AI that is loyal to government regulations",
            "AI that is loyal to humanity, not corporations",
            "AI that is loyal to academic institutions"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of the Sentient-Social-Agent?",
        options: [
            "To serve as a personal assistant for users",
            "To demonstrate a lightweight social agent with minimal dependencies",
            "To conduct surveillance activities",
            "To replace human social interactions"
        ],
        answer: 1
    },
    {
        question: "What type of AI models does SentientAGI focus on?",
        options: ["Proprietary models", "Open-source models", "Government-developed models", "Commercially licensed models"],
        answer: 1
    },
    {
        question: "Which community platform is affiliated with SentientAGI?",
        options: ["OpenAGISummit", "AI-CommunityHub", "Sentient-Forum", "AGI-Developers"],
        answer: 0
    },
    {
        question: "What is the role of the Sentient-Agent-Framework?",
        options: [
            "To provide a platform for AI model training",
            "To serve as a framework for building agents that handle Sentient Chat events",
            "To manage AI model deployment",
            "To analyze AI model performance"
        ],
        answer: 1
    },
    {
        question: "How does SentientAGI's approach differ from traditional AI development models?",
        options: [
            "By focusing on closed-source, proprietary models",
            "By emphasizing community involvement and open-source principles",
            "By prioritizing commercial interests over transparency",
            "By restricting access to AI technologies"
        ],
        answer: 1
    },
    {
        question: "What is the significance of the Sentient-Social-Agent's design?",
        options: [
            "It is designed for high computational efficiency",
            "It is a lightweight agent with minimal dependencies, open to community contributions",
            "It is a complex agent requiring extensive resources",
            "It is a proprietary agent for corporate use"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");
const progressDiv = document.getElementById("progress");
const shareBtn = document.getElementById("share-btn");

function loadQuestion() {
    const q = quizData[currentQuestion];
    progressDiv.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    quizContainer.innerHTML = `
        <h2>${q.question}</h2>
        ${q.options.map((option, index) => `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="option" id="option${index}" value="${index}">
                <label class="form-check-label" for="option${index}">${option}</label>
            </div>
        `).join("")}
    `;
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return alert("Please select an answer!");

    if (parseInt(selected.value) === quizData[currentQuestion].answer) score++;

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = "";
        nextBtn.style.display = "none";
        progressDiv.style.display = "none";
        animateScore(score, quizData.length);
    }
});

function animateScore(score, total) {
    let count = 0;
    const interval = setInterval(() => {
        resultDiv.textContent = `You scored ${count} out of ${total}!`;
        if (count === score) {
            clearInterval(interval);
            // Show share button
            const tweetText = encodeURIComponent(`I scored ${score}/${total} on the SentientAGI Quiz! Can you beat me? 🚀`);
            const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&hashtags=SentientAGI,Quiz,AI`;
            shareBtn.href = tweetUrl;
            shareBtn.style.display = "inline-block";
        }
        count++;
    }, 150);
}

// Load first question
loadQuestion();
