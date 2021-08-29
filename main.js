// https://opentdb.com/api.php?amount=8&category=24&difficulty=medium&type=multiple
let triviaForm = document.getElementById("triviaForm");
let pregunta = document.getElementById("pregunta")
// let users = [];

let questions = [];
let i = 0;
let score= 0;

let correctAnswer;

let ans=[];

const crearApiUrl = e => {
    e.preventDefault();
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let difficulty = document.getElementById("difficulty").value;
    let type = document.getElementById("type").value;
    const API = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
    fetchDataApi (API) 
}

const fetchDataApi = url => {
    fetch (url)
    .then (response => response.json ())
    .then (result => fillQuestions(result.results))
    .catch (err => console.log(err));
};

const fillQuestions = questionsAPI => {
    questions = questionsAPI;
    showQuestion();
};

const showQuestion = () => {
    if (questions.length > 0 ){
        console.log(questions)
        variarPregunta();
        correctAnswer = questions[i].correct_answer;

        if (questions[i].incorrect_answers.length > 1) {
            pregunta.innerHTML =`
            
            <div class="contenedor-preguntas">
                <h2 class="pregunta-titulo">QUESTION!</h2>
                <div class= "preguntas-centradas">
                    <label class="espacio-botton">${questions[i].question}</label>
                    <div class="espacio-botton">
                        <button onClick="valorRespuesta(this)">${ans[0]}</button>
                        <button onClick="valorRespuesta(this)">${ans[1]}</button>
                        <button onClick="valorRespuesta(this)">${ans[2]}</button>
                        <button onClick="valorRespuesta(this)">${ans[3]}</button>
                    </div>
                </div>
            </div>
            <p>Let's go! your escore is: </p>
            <p>${score}</p>
            <button onclick="scoreTotal">I FINISHED<button>
            `
            
        }else{
            pregunta.innerHTML =`
            <div class="contenedor-preguntas">
                <h2 class="pregunta-titulo">QUESTION!</h2>
                <div class= "preguntas-centradas">
                    <label class="espacio-botton" for="" id="preguntaVaria">${questions[i].question}</label>
                    <div class="espacio-botton" name="" id="">
                        <button onClick="valorRespuesta(this)">${ans[0]}</button>
                        <button onClick="valorRespuesta(this)">${ans[1]}</button>
                    </div>
                </div>
            </div>
            <p>Let's go! your escore is: </p>
            <p>${score}</p>
            <button onclick="scoreTotal">I FINISHED<button>
            `
        }
    }else{ alert ("oh no, choose a smaller number!")
        pregunta.innerHTML= `<button>reload</button>`
    }
}
const variarPregunta= () =>{
    ans=[];
    if (questions[i].incorrect_answers.length > 1) {
        ans.push(questions[i].correct_answer);
        ans.push(questions[i].incorrect_answers[1]);
        ans.push(questions[i].incorrect_answers[2]);
        ans.push(questions[i].incorrect_answers[3]);
        ans.sort(function(){return Math.random()-0.5});
    }else{
        ans.push(questions[i].correct_answer);
        ans.push(questions[i].incorrect_answers[0]);
        ans.sort(function(){return Math.random()-0.5});
    }
}



const valorRespuesta = button => {
    if (button.innerText === correctAnswer) {
        score++;
        console.log("correcto");
    } else{
        console.log ("incorrecto")
    }
    if(questions.length -1 !== i){
        i++;
        showQuestion();
    }
    else {
        pregunta.innerHTML ="";
        console.log (`your score is ${score}`)
    }
}

const mostrarPregunta = () =>{
    pregunta.innerHTML= "";
    
}
triviaForm.onsubmit = crearApiUrl;
