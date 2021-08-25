// https://opentdb.com/api.php?amount=8&category=24&difficulty=medium&type=multiple
let triviaForm = document.getElementById("triviaForm");
let users = [];

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
    .then (result => console.log(result.results))
    .catch (err => console.log(err));
};

const fillQuestions = questionsAPI => {
    questions = questionsAPI;
    showQuestion();
};

const showQuestion = () => {
    questions.forEach(question => {
        console.log(`Preunta: ${question.question}`);
        console.log(`Respuesta correcta: ${question.correct_answer}`);
        console.log(`Respuestas incorrectas: ${question.incorrect_answers}`);
        console.log(`Dificultad : ${question.difficulty}`)
        console.log(`Categoría: ${question.category}`)
    });
}

const renderList = () =>{
    contenedor.innerHTML= "";
    if (users.length > 0){
        users.forEach(pregunta =>{
            const contenedorPregunta = document.createElement("form");
            contenedorPregunta.action.add("");
            contenedorPregunta.classList.add("pregunta")

            const labelPregunta = document.createElement("label")
            labelPregunta.innerText.add("QUESTION!")

            const seleccionarPregunta = document.createElement("selec")
        })
    }
}
triviaForm.onsubmit = crearApiUrl;
