// AUTOR : GABRIEL EMILIO PINO JAIMES

function ResultadoIMC({nombre,peso,altura}){

    let imc = peso / (altura * altura)
    let  diagnostico = ""

    if(imc>=30.0){
        diagnostico = "Obesidad"
    }
    else if(imc>=25 && imc<30){
        diagnostico = "Sobrepeso"
    }else if(imc>=18.5 && imc<25){
        diagnostico = "Peso Normal"
    }else if(imc<18.5){
        diagnostico="Bajo peso"
    }


    return(
        <div className="ResultadoIMC">
            <p>Nombre : {nombre}</p>
            <p>Altura {altura}</p>
            <p>Peso : {peso}</p>
            <p>IMC : {imc.toFixed(1)}</p>
            <p>Diagnostico : {diagnostico}</p>
        </div>

    )
}

export default ResultadoIMC;