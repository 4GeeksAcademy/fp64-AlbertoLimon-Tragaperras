const tragaperras = document.querySelector(".tragaperras");
const resultado = document.querySelector(".resultado");

const opcionesTragaperras = ["limones","jirafas","zebras","estrellas","papelera","oro","manzanas"];

let state = [];

const getOpcionRandomTragaperras = (array) => {
    const opcionAleatoria = Math.floor(Math.random() * array.length);
    return array[opcionAleatoria];
}


const setState = (primeraColumna,segundaColumna,terceraColumna) => {
    state = [primeraColumna, segundaColumna, terceraColumna];
    document.querySelector(".primeraColumna").innerHTML = state[0]
    document.querySelector(".segundaColumna").innerHTML = state[1]
    document.querySelector(".terceraColumna").innerHTML = state[2]
    _siJugadorGana(state);
}

const _siJugadorGana = (state) => {
    const ganador = false;
    if(state[0] === state[1] === state[2]){
        resultado.innerHTML = 'Has ganado'
        return ganador = true;
    }
    resultado.innerHTML = 'Has perdido'
    return ganador;
}

const jugar = () => {
    const primeraColumna = getOpcionRandomTragaperras(opcionesTragaperras);
    console.log(primeraColumna)
    const segundaColumna = getOpcionRandomTragaperras(opcionesTragaperras);
    const terceraColumna = getOpcionRandomTragaperras(opcionesTragaperras);
    setState(primeraColumna,segundaColumna,terceraColumna);

}