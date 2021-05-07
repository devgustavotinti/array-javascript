// Array.from()
// Array.from() é um método utilizado para transformar array-like objects, em uma array.

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)

// console.log(li)
// console.log(arrayLi)



// Array.isArray()
// Verifica se o valor passado é uma array e retorna um valor booleano.

// console.log(Array.isArray(li))
// console.log(Array.isArray(arrayLi))



// Array.of(), Array() e new Array()
// Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array.

Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]

// console.log(Array.of(10))



// Propriedades e Métodos do Prototype
// [].length retorna o tamanho da array.

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]

// console.log(frutas[2][0].length)



// Métodos Modificadores [].sort()
// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

const instrumentos = ['Guitarra', 'Baixo', 'Violão']
instrumentos.sort()

// console.log(instrumentos)

const idades = [32,21,33,43,1,12,8];
idades.sort() // em numero não coloca certo
// console.log(idades)



// [].unshift() e [].push()
// [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];
// console.log(carros)

carros.push('Ferrari', 'Tesla'); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];
// console.log(carros)



// [].shift() e [].pop()
// [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.
// console.log(carros.pop())
// console.log(carros)

// console.log(carros.shift())
// console.log(carros)



// [].reverse()
// [].reverse() inverte os itens da array e retorna a nova array.
// console.log(carros.reverse())



// [].splice()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
// console.log(carros)

// carros.splice(2, 0, 'Fusca')
// console.log(carros)

// console.log(carros.splice(2, 5, 'Parati'))
// console.log(carros)



// [].copyWithin()
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.
// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(2, 0, 2))



// [].fill()
// [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.
// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// // ['Banana', 'Banana', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// // ['Item1', 'Item2', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']



// Métodos de Acesso [].concat()
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];
// console.log(maisTransportes)
// console.log(transporte2.concat('Bicicleta'))



// [].includes(), [].indexOf() e [].lastIndexOf()
// [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5



// [].join()
// [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

linguagens.join(); // 'html,css,js,php,python'
linguagens.join(' '); // 'html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>

// console.log(htmlString)



// [].slice()
// [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
// linguagens2.slice(3); // ['php', 'python']
// linguagens2.slice(1, 4); // ['css', 'js', 'php']

// console.log(linguagens2.slice(2,4))

const cloneLinguagens = linguagens.slice();

console.log(linguagens2.pop())
console.log(linguagens2)
console.log(cloneLinguagens)
