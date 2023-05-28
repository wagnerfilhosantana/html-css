function carregar() {
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var hora = new Date;
var hora = date.getHours();

msg.innerHTML = `Agora são ${hora} horas.`
}
var hora = 22
// pega a data atual
const date = new Date();
// pega a hora 
var hora = date.getHours();
//Faz a validação da data 
if (hora <= 12 & hora >= 0) {
    
  console.log("Bom dia!");
}
else if(hora <= 18 & hora >= 12){

    console.log("Boa Tarde!");
}
else{
    console.log("Boa Noite!");
}