


let dataEvento = new Date ('02/02/2022')
let dataHoje = new Date ()

console.log (dataEvento)
if (dataEvento > dataHoje){
    console.log ("Evento Válido")
} else {
    console.log ("Evento Inválido")

}
let idadeParticipante = 19

if (idadeParticipante >=18){
    console.log ("idade maior de 18 ,permitir cadastro")
}  else {console.log ("idade menor de 18, proibido o cadastro")

}
let listaParticipantes = ["Roberto","Carlos","Maria","Joana"]

for (let contador = 0 ; contador < listaParticipantes.length; contador++) { 
    console.log(listaParticipantes[contador])
    
}
let quantidadeParticipante =101   

if (quantidadeParticipante <=100){
    console.log ("quantidade menor que 100, pode participar")
}  else {console.log("quantidade maior nao pode participar")

}