//a
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase)

//b 
const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(novaFrase)

//c Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(novaFrase.includes("verde"))
console.log(novaFrase.includes("laranja"))

//Extra
console.log(frase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"))



