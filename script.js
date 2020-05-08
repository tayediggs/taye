const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
while(answerButtonsElement.firstchild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
   }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
  })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
      nextButton.classList.remove('hide')  
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
      } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
      element.classList.remove('correct')
      element.classList.remove('wrong')
}

const questions = [
    
    {
        question: 'Which year was the premier league founded?',
        answers: [
            { text: '2000', correct: false },
            { text: '1992', correct: true },
            { text: '1990', correct: false },
            { text: '2005', correct: false }
        ]
    },
    {
        question: 'What is the full form of RAM?',
        answers: [
            { text: 'Random Access Memory', correct: true},
            { text: 'Random', correct: false },
            { text: 'Run Accept Memory', correct: false },
            { text: 'None of these', correct: false }
        ]
    },
     {
        question: 'Who is the best YouTuber?',
        answers: [
            { text: 'Web Dev Simplified', correct: true },
            { text: 'Traversy Media', correct: false },
            { text: 'Dev Ed', correct: false },
            { text: 'Fun Fun Function', correct: false }
        ]
    },
    {
        question: 'Is web developer fun?',
        answers: [
            { text: 'Kinda', correct: false },
            { text: 'Yes!!!', correct: true },
            { text: 'Um no', correct: false },
            { text: 'IDK', correct: false }
        ]
    },
    {
        question: 'Which club won the 2017 UEFA super cup?',
        answers: [
            { text: 'chelsea', correct: false },
            { text: 'Real Madrid', correct: true },
            { text: 'Man U', correct: false },
            { text: 'IDK', correct: false }
        ]
    },
]