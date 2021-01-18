let numeros = [3,1,5,6,7,8]

numeros.sort(ordenacao)

function ordenacao(a, b) {
    return a - b;
}

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}