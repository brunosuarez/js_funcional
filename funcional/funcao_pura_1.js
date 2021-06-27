const PI = 3.14

//impura pois PI é um valor externo(mas nesse caso é algo estável)
function areaCirc(raio){
    return raio * raio * PI
}

console.log(areaCirc(10))
console.log(areaCirc(10))
console.log(areaCirc(10))

//transformando a função em pura
function areaCircPura(raio, pi){
    return raio * raio * PI
}

console.log(areaCirc(10, 3.14))
console.log(areaCirc(10, 3.141592))
console.log(areaCirc(10, Math.pi))