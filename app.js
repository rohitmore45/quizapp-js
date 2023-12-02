const quizQuestions = [
    {
        ques: 'What is the capital city of India?',
        a: 'New Delhi',
        b: 'Mumbai',
        c: 'Kolkata',
        d: 'Delhi',
        correct: 'a',
        ans: 'New Delhi',
    },
    {
        ques: 'Which place in India is also known as the “Land of Rising Sun”?',
        a: 'Sikkim',
        b: 'Assam',
        c: 'Karnataka',
        d: 'Arunachal Pradesh',
        correct: 'd',
        ans: 'Arunachal Pradesh',
    },
    {
        ques: 'Who is popularly known as the “Iron Man” of India?',
        a: 'Lal Bahadur Shastri',
        b: 'Sardar Vallabh Bhai Patel',
        c: 'Mahatma Gandhi',
        d: 'Dr. B.R Ambedkar',
        correct: 'b',
        ans: 'Sardar Vallabh Bhai Patel',

    },
    {
        ques: 'Ranchi is the capital of which Indian state?',
        a: 'Bihar',
        b: 'Telangana',
        c: 'Jharkhand',
        d: 'Madhya Pradesh',
        correct: 'c',
        ans: 'Jharkhand',
    },
    {
        ques: 'Which is the longest river in India?',
        a: 'Brahmaputra',
        b: 'Indus',
        c: 'Ganga',
        d: 'Yamuna',
        correct: 'c',
        ans: 'Ganga',
    },
    {
        ques: 'Which of the following states is not located in the North?',
        a: 'Jharkhand',
        b: 'Jammu and Kashmir',
        c: 'Himachal Pradesh',
        d: 'Haryana',
        correct: 'a',
        ans: 'Jharkand',

    },
    {
        ques: 'How many Cricket world cups does India have?',
        a: 'Two',
        b: 'One',
        c: 'Four',
        d: 'None',
        correct: 'a',
        ans: 'Two',
    },
    {
        ques: 'National Tree of India is?',
        a: 'Strawberry tree',
        b: 'Neem tree',
        c: 'Mango tree',
        d: 'Banyan tree',
        correct: 'd',
        ans: 'Banyan tree',
    },
    {
        ques: 'Which is the national sport of India?',
        a: 'Cricket',
        b: 'Hockey',
        c: 'Kabaddi',
        d: 'Football',
        correct: 'b',
        ans: 'Hockey',
    },
    {
        ques: 'Which state is also known as the “Fruit Bowl” of India?',
        a: 'Jammu and Kashmir',
        b: 'Himachal Pradesh',
        c: 'Assam',
        d: 'Meghalaya',
        correct: 'b',
        ans: 'Himachal Pradesh',
    },
]
let index = 0;
let total = quizQuestions.length;
let right = 0, wrong = 0;
const quesheading = document.getElementById("quesheading");
const optionInputs = document.querySelectorAll(".options");

const loadQuizQuestions = () => {
    if (index === total) {
        return submitQuiz();
    }
    else {
        reset();
    }
    let data = quizQuestions[index];
    quesheading.innerHTML = `${index + 1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    if (index === total) {
        index = 0;
    }
}

const nextQuestion = () => {
    const data = quizQuestions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuizQuestions();
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}
const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    })
}
const submitQuiz = () => {
    document.getElementById("quizbox").innerHTML = `
        <div class="submitdiv"">
        <h2>Your Quiz is over!!</h2>
        <h3>submit your quiz below...</h3> 
        <button class="submitbtn" onclick="getResult()">submit</button>
        </div>
    `
}

const getResult = () => {
    document.querySelector("#quizbox").innerHTML = `
        <div style="text-align:center">
        <h3 style="margin-bottom:10px;">Your Result :</h3>
        <h1>${right}/${total} are CORRECT!! </h1>
        <div class="ans-replay">
        <button class="ansbtn" onclick ="getAllAnswers()">Get Answers</button>
        </div>
        </div>
    `
}

const getAllAnswers = () => {
    let innerHtml;
    quizQuestions.forEach((data) => {
        innerHtml += `<h5 style="margin-bottom:5px">Q) ${data.ques}</h5>
                      <h4 style="margin-bottom:20px">Ans: ${data.correct}) ${data.ans}</h4>`
    });

    document.getElementById("quizbox").innerHTML = innerHtml;
}

//Initial call
loadQuizQuestions();