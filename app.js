console.log("Olá Mundo")
console.log(10 * 2)
console.log(30 + 1)
console.log(100 / 2)
console.log(35.7 * 3.8)
console.log(99 + 21 + 125)
console.log(32 - 3 / 4.5)
console.log(4 + 4 + 4 + 4 / 4)
console.log(127.75 + 53.82)
console.log(355 - 22.7)

/* comentario de 
varias linhas */

// comentario de uma linha

/* variáveis */
/* 
-variável é um espaço reservado na memória 
para armanezar um valor 
-toda varáiavel tem um nome e um tipo
-a variavel deve ter um nome significativo, exemplo:
infotmçaõ idade pode ter o nomer de IDADE, uma varieavel que vai armanezar o preço de venda de um produto pode ter o nome PRECOVENDA
- a recomendação é que o nome da variavel seja simples e significativo, sem caracteres especiais,
sem acento, sem espaço e lembrando que o javascipt diferencia maiúsculas de minúsculas,
isso significa que PrecoVenda é diferente de precovenda 
*/

//var nome
let nome = 'João'
let idade = 17
let nota1 = 6.5
let fumante = false
//nome

console.log(nome)
console.log(idade, nota1, fumante)
console.log('Sua nota é ' + nota1)

/*Tipos de variaveis*/
console.log(typeof nome) //João é string
console.log(typeof idade) // João é 17 number
console.log(typeof nota1) //6.5 é number
console.log(typeof fumante) // false é boolean

let veiculos = ['carro', 'moto', 'avião']
console.log(veiculos)
console.log(typeof veiculos)

let cliente = {
    Nome: 'João',
    idade: 17
}

console.log(cliente)
console.log(typeof cliente)

let salvar = function () {

}
console.log(typeof salvar)

/* operadores relacionais */
console.log(10 > 3) // maior
console.log(5 > 3) //menor
console.log(15 >= 10) // maior ou igual
console.log(15 <= 10) //menor ou igual
console.log(10 == 10) // igual
console.log(10 != 10) // diferente

/* operadores lógicos */
console.log('============')
console.log(10 > 3 && 10 > 15) // operador E - todas as espressões
//devem ser verdadeiras para o resultado ser vedadeiro

console.log(10 > 3 || 10 > 15 || 10 > 8) //Operador ou (OR) - com o operador OU apenas uma expressão precisa ser verdadeira 
//para o resultado se verdadeiro 

console.log(!10 > 3) // operador  NÃO (NOT) - o operador NOT inverte o resultado da expressão, se for verdadeiro ele inverte 
//para e se falso ele inverte para verdadeiro

//alert("Olá mundo")

//document.write("<h3>Olá mundo</h3>")

function Rosa() {

    // inserir um valor em um elemento da pagina
    document.getElementById('titulo').
        innerHTML = 'Aula 02 de JS'

    document.getElementById('texto').
        innerHTML = 'Vamos estudar a interação com DOM'

    document.body.style.backgroundColor = 'violet'
    document.body.style.color = 'white'
    document.getElementById('titulo').style.color = ('yellow')

    //pegar um valor de um elemento na pagino
    let titulo = document.getElementById('titulo').
        innerHTML

    console.log(titulo)
}

function Laranja(){
document.body.style.backgroundColor = 'orangered'
document.body.style.color = 'lightblue'
}


