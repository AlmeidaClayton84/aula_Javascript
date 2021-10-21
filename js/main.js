function clicou(){
    //alert ("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>"
}
 function redirecionar(){
     window.open("https://digitalinnovation.one/");  /*abrir em outra aba*/
     window.location.href = "https://digitalinnovation.one/";  /*abrir na mesma aba*/
 }

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    // alert("trocar texto");     
 }

 function voltar(elemento){
    elemento.innerHTML ="Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    // alert("trocar texto");     
 }

function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}

/*var validar = 0;
function validaIdade(idade){
    if (idade >=18){
        validar=true
    }else{
        validar=false
    }
    return validar;
}
var idade = prompt("Qual a sua Idade");
validaIdade(idade)
alert (validar);
*/



/*function soma(n1, n2){
    return n1+n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

//alert(soma(5,10));
console.log (soma (5,10));
alert (setReplace("Vai Japão", "Japão", "Brasil"));*/


/*var d = new Date();
alert (d.getMonth());
alert (d.getDay());*/


/*var count;
for(count=0; count <=5; count++){
   alert(count)
};
*/



/*var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count++;
}
*/



/*var idade = prompt("Qual a sua idade");
if ( idade >= 18 ){
    alert ("maior de idade");
}else {
    alert ("menor de idade");
};
*/



/*var frutas = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxo"}, {nome:"banana", cor:"amarelo"}];
console.log (frutas);
alert(frutas[1].nome);*/


/*var fruta = {nome:"maça", cor:"vermelho"}
console.log (fruta.nome);
alert(fruta.cor);*/


//var lista = ["maça", "pera" ,"laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" / "));

/*var nome = "Clayton Almeida";
var n1 = 5;
var n2 = 3;
var frase = "japão é o melhor time do mundo";



alert("Bem vindo " + nome);*/

