window.onload = function() {
    show(0);
}
// QUESTIONS

let questions=[
    {
    id: 1;
    question: "What is the full form of RAM ?",
    answers: "Random Access Memory",
    options: [
        "Random Access Memory",
        "Randomly Access Memory",
        "Run Accept Memory",
        "None of these"
        ]
    },
    {
    id: 2;
    question: "What is the full form of CPU ?",
    answers: "Central Processing Unit",
    options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
        ]
    },
    {
    id: 3;
    question: "What is the full form of E-mail ?",
    answers: "Electronic Mail",
    options: [
        "Electronic Mail",
        "Eletric Mail",
        "Engine Mail",
        "None of these"
        ]
    }
  ];

function submitform(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    
    // store player name
    sessionStorage.setItem("name", name);
    
    location.href="quiz.html";
}

let question_count = 0;
let point = 0;

function next() {   
    let user_answer = document.querySelector("li.option.active").innerHTML;
    
    // check answer by the user
    if(user_answer == questions[question_count].answer) {
    point +=10;    
    sessionStorage.setItem("points", point);
    }
    question_count++;
    show(question_count);
}

function show(count) {
  let question = document.getElementById("question");
    
  //question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = '
    <h2>Q$(question_count+1).${questions[count].question}</h2>
    <ul class="option_group">   
    <li class="option">${question[count].options[0]}</li>
    <li class="option">${question[count].options[1]}</li>
    <li class="option">${question[count].options[2]}</li>
    <li class="option">${question[count].options[3]}</li>
    </ul>
    ';
    
toggleActive();    
}

function toggleActive() {
    let option =document.querySelectorAll("li.option")
    
    for(let i=0; i< option.length; i++) {
        option[1].onclick = function() {
            for(let j=0; j< option.length; j++) {
                if(option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[1].classList.add("active");
        }
    }
}