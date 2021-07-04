function funcaoChange(elemento){
    console.log(elemento.value)
}

function load(){
    alert("Página carregada")
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui"
}

function redirecionar(){
    //window.open("https://m0onfall.github.io/Portifolio-Vinicius/")
    window.location.href = "https://m0onfall.github.io/Portifolio-Vinicius/"
}

function button(){
    document.getElementById("thanks").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("thanks"))
    //alert("Obrigado pro clicar")
}



/*function soma (n1, n2){
    return n1 + n2;
}
var validar;
function validaIdade(idade){

    if(idade >= 18){
        validar = true;
    } else{
        validar = false;
    }

    return validar
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade))
*/
//alert(soma(2,10))

/*var d = new Date()

alert(d.getMinutes())
*/
/*var count;
for(count = 0; count <= 5; count++){
    alert(count)
}*/

/*var count = 0
while(count <= 5){
    console.log(count)
    count++
}
*/
/*var idade = prompt("Qual sua idade?")
if(idade >= 18){
    alert("Maior de idade")
} else {
    alert("Menor de idade")
}
*/

/*var frutas = [{nome:"uva", cor:"roxo" }, {nome:"maçã", cor:"vermelho" } ]
console.log(frutas)
console.log(frutas[0].nome)
console.log(frutas[1].nome)*/


/*var frutas = {nome:"uva", cor:"roxo" }

console.log(frutas.nome)
console.log(frutas.cor)
*/

/*var lista = ["maçã", "uva", "maracujá"]

lista.push("melancia")//adiciona na última posição
lista.pop()//exclui o último item

console.log(lista);
console.log(lista.toString())
console.log(lista.join(" - "))
*/

/*var nome = "Vinícius Carvalho "
var n2 = 16;
var n1 = 10;
var frase =  "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos")
//alert(idade + idade2)

//console.log(nome);
//console.log(idade + idade2)
console.log(frase)
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
*/