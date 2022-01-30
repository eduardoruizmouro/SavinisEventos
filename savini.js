

let listaParticipantes = ["Roberto","Carlos","Maria","Joana"]

for (let contador=0;contador > listaParticipantes.length;contador++){ 
    console.log(listaParticipantes[contador])
}

let dataEvento = new Date ('02/02/2022')
let dataHoje = new Date ()

console.log (dataEvento)
if (dataEvento > dataHoje){
    console.log ("Evento Válido")
} else {
    console.log ("Evento Inválido")

}

