const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a
console.log(minhaString.trim())

//b
console.log(`
Quantidade de caracteres da string:
Antes: ${minhaString.length}
Depois: ${minhaString.trim().length}
`)

//c
console.log(`
    ${minhaString.replaceAll("________", "“sticioso”")}
`)