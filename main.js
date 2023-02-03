document.querySelector('#precioInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      consultarPrecio()
    }
});

let consultarBtn = document.querySelector("#consultarBtn");
consultarBtn.addEventListener("click", () =>{
    consultarPrecio()
})



function consultarPrecio(){
    let push = document.querySelector("#grid")
    let precioInput = document.querySelector("#precioInput");
    let margenInput = document.querySelector("#marginInput").value;
    if(isNaN(margenInput)){
        let resultadoDom = document.querySelector("#resultadoInput")
        resultadoDom.innerHTML = `Falta margen`;
    }
    else{
        parseInt(margenInput)
    let resultado = (precioInput.value * 1.21) * margenInput;

    precioInput.value = "";
    let resultadoDom = document.querySelector("#resultadoInput")
    resultadoDom.innerHTML = `${resultado.toFixed(1)}$`;
    push.appendChild(resultadoDom)

    }
    

}