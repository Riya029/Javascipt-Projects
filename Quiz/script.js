// alert("Hola");
// dom elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// quiz questions
const quizQuestions = [
    {
        question: "Which of the following is not a Java primitive data type?",
        answers:[
            {text: " int", correct: false},
            {text: "float", correct: false},
            { text: "String", correct:true},
            {text:"char", correct: false},
        ],
    },
    {
        question:"Which keyword is used to define a constant in Java?",
        answers:[
            {text: "const", correct: false},
            {text:"final", correct: true},
            {text:"static", correct: false},
            {text:"constant", correct: false},
        ],
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        answers:[
            {text:"true", correct: false},
            {text:"false", correct: true},
            {text:"null", correct:false},
            {text:"0", correct:false},
        ],
    },
    {
        question:"Which method is the entry point of a Java program?",
        answers:[
            {text: "start()", correct: false},
            {text:"run()", correct: false},
            {text:"main()", correct: true},
            {text:"execute()", correct: false},

        ],
    },
    {
        question:"Which symbol is used for single-line comments in Java?",
        answers:[
            {text: "//", correct: true},
            {text:"#", correct: false},
            {text:"/**/", correct: false},
            {text:"<!-->", correct: false},
        ],
    },
    {
        question:"What will System.out.println(5/2); output?",
        answers:[
            {text: "2" ,correct: true},
            {text:"2.5", correct: false},
            {text:"2.0", correct: false},
            {text:"<2.50", correct: false},
        ],
    },
    {
        question:"Which of these can store a sequence of characters?",
        answers:[
            {text: "char" ,correct: false},
            {text:"String", correct: true},
            {text:"boolean", correct: false},
            {text:"int", correct: false},
        ],

    },
     {
        question:"What is the size of an int in Java?",
        answers:[
            {text: "8 bits" ,correct: false},
            {text:"16 bits", correct: false},
            {text:"32 bits", correct: true},
            {text:"64 bits", correct: false},
        ],

    },
     {
        question:"Which method is called when an object is created?",
        answers:[
            {text: "javac" ,correct: true},
            {text:"java", correct: false},
            {text:"javap", correct: false},
            {text:"javadoc", correct: false},
        ],

    },
    {
        question:"Which concept of OOP means:- wrapping data and methods together?",
        answers:[
            {text:"Abstraction" ,correct: false},
            {text:"Encapsulation", correct: true},
            {text:"Inheritance", correct: false},
            {text:"Polymorphism", correct: false},
        ],

    },
     {
        question:"Which of these data types can store a 64-bit integer?",
        answers:[
            {text:"int" ,correct: false},
            {text:"short", correct: false},
            {text:"long", correct: true},
            {text:"float", correct: false},
        ],

    },
    {
        question:"WWhat will be the output of System.out.println(10 + 20 + Java);?",
        answers:[
            {text:"30Java" ,correct: true},
            {text:"Java30", correct: false},
            {text:"1020Java", correct: false},
            {text:"Compilation error", correct: false},
        ],

    },
    {
        question:"Which of these is not a feature of Java?",
        answers:[
            {text:"Platform Independent" ,correct: false},
            {text:"Object-Oriented", correct: false},
            {text:"Pointer Arithmetic", correct: true},
            {text:"Automatic Memory Management", correct: false},
        ],

    },
    {
        question:" Which collection class allows you to grow or shrink its size and provides indexed access to its elements?",
        answers:[
            {text:"Array" ,correct: false},
            {text:"ArrayList", correct: true},
            {text:"LinkedList", correct: false},
            {text:"HashMap", correct: false},
        ],

    },
    {
        question:"Which statement is true about Java?",
        answers:[
            {text:"Java uses a compiler only" ,correct: false},
            {text:"Java uses an interpreter only", correct: false},
            {text:"Java uses both compiler and interpreter", correct: true},
            {text:"Java doesn't need either", correct: false},
        ],

    },
    {
        question:"Which loop is guaranteed to execute at least once?",
        answers:[
            {text:"for" ,correct: false},
            {text:"while", correct: false},
            {text:"foreach", correct: false},
            {text:"dowhile", correct: true},
        ],

    },
    {
        question:"Which of these is used to handle exceptions in Java?",
        answers:[
            {text:"catch" ,correct: false},
            {text:"try-catch", correct: true},
            {text:"throw", correct: false},
            {text:"finally", correct: false},
        ],

    },
    {
        question:"Which of these is not a Java access modifier?",
        answers:[
            {text:"public" ,correct: false},
            {text:"private", correct: false},
            {text:"protected", correct: false},
            {text:"package", correct: true},
        ],

    },
    {
        question:" Which operator is used to compare two values in Java?",
        answers:[
            {text:"=" ,correct: false},
            {text:"==", correct: true},
            {text:"equals()", correct: false},
            {text:":=", correct: false},
        ],

    },
    {
        question:"What is the size of a boolean variable in Java?",
        answers:[
            {text:"1 bit" ,correct: false},
            {text:"8 bit", correct: false},
            {text:"JVM dependent", correct: true},
            {text:"16 bit", correct: false},
        ],

    }

]

// quiz state vars
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length
//event liestener

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)


function startQuiz(){
    // console.log("quiz started");
    //reset vars
    currentQuestionIndex = 0;
    score: 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}

function showQuestion(){
    //reset state
    answersDisabled = false

    const currentQuestion = quizQuestions[currentQuestionIndex]

    currentQuestionSpan.textContent = currentQuestionIndex + 1

    //update progress var

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    // clear previous buttons
    answerContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        // dataset to store custom data means its a peoperty of the button that allows you to store custom data
        button.dataset.correct = answer.correct
        
        // click event
        button.addEventListener("click", selectAnswer)

        answerContainer.appendChild(button)
    })
}

function selectAnswer(event){
    if (answersDisabled) return 
    answersDisabled = true

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct ==="true"

    Array.from(answerContainer.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        else if (button === selectedButton){
            button.classList.add("incorrect")
        }
    });

    if(isCorrect){
         score++;
         scoreSpan.textContent = score
    }

    setTimeout (() =>{
        currentQuestionIndex++;
//  check that the last question is done or not
        if(currentQuestionIndex <  quizQuestions.length){
            showQuestion()
        }else{
            showResults()
        }
    },1000)
       

}

function showResults(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;

    const percentage = (score/quizQuestions.length) * 100

    if(percentage === 100){
        resultMessage.textContent = "Perfect! You're a genius dude";
    }
    else if(percentage >= 80){
        resultMessage.textContent  = "Good Efforts! Keep learning you're almost there";
    }
    else if(percentage >= 60){
        resultMessage.textContent = "Good effort! Stay focused";
    }
    else if(percentage >= 40){
        resultMessage.textContent = "Not bad Learn fundamentals more";
    }
    else {
        resultMessage.textContent = "Keep learning You'll get Better";
    }
}



function restartQuiz(){
    resultScreen.classList.remove("active");

    startQuiz();
}