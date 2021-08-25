let hojaPreguntas = document.getElementById ("pregunta")

function saleHoja (){
    if (hojaPreguntas.classList.contains('agrego')){
        hojaPreguntas.classList.remove('agrego');
    } else{
        hojaPreguntas.classList.add('agrego')
    }
}