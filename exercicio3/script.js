//a
const trecho = `"BOAS VINDAS, mas não deixe o gato sair"`
let frase = `Jorge tem uma casa verde e com portão azul, com os dizeres:`
console.log(frase, trecho)

//b 
const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(novaFrase)

//c Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(novaFrase.includes("verde")) // false
console.log(novaFrase.includes("laranja")) // true
console.log(novaFrase.includes("verde") && novaFrase.includes("laranja")) // false

//Extra
//console.log(frase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"))
console.log(frase, trecho.toUpperCase())




