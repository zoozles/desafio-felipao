let apresentacaoNome = "ItzBllackNiyZx" //Digite o nome do seu personagem.
let xp = 5001   //Digite o nivel do seu personagem.
let patente ="" 

let contador = 0 //declarei a iterador "contador", que geralmente é representado por "i".

while(contador < 1){
    contador++
 //determina a quantidade de vezes que o programa é exibido
 
if (xp <= 1000) {
   patente = "Ferro"

} else if(xp >= 1001 && xp <= 2000) {
    patente = "Bronze"

    
} else if(xp >=2001 && xp <= 5000) {
    patente = "Prata"
    

} else if(xp >= 5001 && xp <= 7000 ) {
    patente = "Ouro"
    

} else if(xp >= 7001 && xp <= 8000) {
    patente = "Platina"
    
    
} else if(xp >= 8001 && xp <= 9000) {
    patente = "Ascendente"
    

} else if(xp >= 9001 && xp <= 10000 ) {
    patente = "Imortal"
    

} else if (xp >= 10001) {
    patente ="Radiante"
    

 } else {
    console.log("Favor, verificar as informações digitadas! ")
 }

console.log("O Herói de nome "+apresentacaoNome+" está no nível de "+patente)
}