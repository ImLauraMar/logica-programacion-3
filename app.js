
let f = document.getElementById('respuesta');


const calFactorial = e => {
    let valor = document.getElementById('number').value;

    n = parseInt(valor);
    console.log(n);

    if (!isNaN(n)) {
        let factorial = 1;
        for (let i = 1; i <= n; i++){
           factorial *= i;

        }
        f.innerHTML = `${valor}! = ${factorial} `;


    }

}
