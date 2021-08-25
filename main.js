// https://opentdb.com/api.php?amount=8&category=24&difficulty=medium&type=multiple
let triviaForm = document.getElementById("triviaForm");

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

triviaForm.onsubmit = crearApiUrl;