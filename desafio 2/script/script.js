function countingAs(string) {

    let contador = 0;

    for(let i = 0; i < string.length; i++) {
        let caractere = string[i];

        if (caractere === 'a' || caractere === 'A') {
            contador ++
        }
    }
        if (contador > 0) {
            return contador
        } else {
            return "A letra 'A' não foi encontrada"
        }
    }

console.log(countingAs('Desafio técnico, encontrando caracteres nas palavras.'))