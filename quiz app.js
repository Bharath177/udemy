const quizData = [
    {
        question: "Where is thousand pillar temple located in telangana?",
        a: "suryapet",
        b: "warangal",
        c: "karimnager",
        d: "nizambad",
        correct: "b",
    },
    {
        question: "What does KU stand for?",
        a: "Kakathiya university",
        b: "keluru university",
        c: "kel univerise",
        d: "karma university",
        correct: "a",
    },
    {
        question: "in which century warangal fort is built?",
        a: "12 th",
        b: "13 th",
        c: "14 th",
        d: "17 th",
        correct: "b",
    },
    {
        question: "who is the ruler of warangal in the year 1323?",
        a: "prataparudra",
        b: "Qutb Shahi",
        c: "thuqlaq",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
}) 