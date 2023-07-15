console.log("Hoje vamos ver métodos de vetores, objetos e funções" );
//Utilizando Template Literal - atenção usar CRASE
console.log(`Vamos criar um vetor (note que utilizamos colchetes). 
Em seguida, vamos percorrer os valores e imprimir cada um ${retornaNome()} utilizando FOREACH`);

function retornaNome()
{ return "PARABENS";}

let listaVetor = ['banana', 'maçã', 'pera', 'morango', 'melancia', 'uva'];
let itemNumber=1

//função SETA - Arrow Function
listaVetor.forEach( (item) => 
{
    console.log(`Fruta ${itemNumber}: ${item}`); 
    itemNumber++;
}
);

console.log("\n o tamanho do vetor é de : " + listaVetor.length + " elementos \n"); //tamanho
console.log(`o terceiro item é o ${listaVetor[2]}`); //index - posição
console.log(`o segundo item é o ${listaVetor[1]}`); //index - posição

console.log('\n Agora, vamos filtrar os itens que começam com a letra M - utilizando método FILTER \n');

//função anônima
let itensLetraM = listaVetor.filter( function(item)  
{
    return item.startsWith('m'); // != 'M'
}
);

//função seta
itensLetraM.forEach((item) => 
{
    console.log(item);
}
);

//outros métodos: toString() , join(), find() -- ENTREM NO W3 E VEJAM UMA VEZ TODOS OS MÉTODOS
//for-of 
console.log('\n ** agora vamos criar um vetor de numeros');

let numeros = [7,5,3,8,9,4];
numeros.forEach( (numero) => { console.log(numero) }); //função seta

console.log('\n Agora, vou dobrar cada um dos valores do vetor usando o método MAP')

let numerosDobrados = numeros.map( function(numero){ return numero * 2;}); //função anônima
numerosDobrados.forEach( (numero) => { console.log(numero) }); //função seta

console.log('\n Agora vou retirar o ultimo elemento do array utilizando o método POP');
numeros.pop();
numeros.forEach( (numero) => { console.log(numero) }); //função seta

console.log('\n Agora vou inserir elemento do array utilizando o método PUSH');
numeros.push('olá eu sou uma string em um array de numeros. Tipagem dinâmica!!');
numeros.forEach( (numero) => { console.log(numero) }); //função seta
// shift() tira do começo e move todos os itens para baixa, unshift(item) insere um item no inicio e move todos pra cima


// -------------------------
//**OBJETOS
//criação de objeto via OBJECT LITERALS
let endereco = {
    rua: 'Moreira de Godoi' ,
    numero: '202' ,
    cep: '09876543',
    bairro: 'Ipiranga',
    cidade: 'Sao Paulo' ,    
}

//bracket notation - notação do colchete
console.log('bracket notation - notação do colchete');
console.log("Rua: " + endereco['rua']);
console.log("Cidade: " + endereco['cidade']);

console.log('dot notation - notação do ponto');
//dot notation - notação do ponto
console.log("Rua: " + endereco.rua);
console.log("Cidade: " + endereco.cidade);
console.log('---------------');


//primeiro vou declarar uma função que percorra e imprima o nome de cada propriedade e seu valor
//utilizando for-in
function mostraEndereco(objetoqualquer){
    for (let cadacampo in objetoqualquer){  //for-in
        console.log(cadacampo , objetoqualquer[cadacampo]); 
    }
    console.log("\n ----------------- \n")
}

mostraEndereco(endereco);

//Factory function - função fábrica - serve para criar objetos
function criarEndereco(rua, numero, CEP, bairro, cidade)
{
    return {rua, numero, CEP, bairro, cidade}
}

console.log('\n --- objetos criados usando função fábrica --- \n');
//criando um novo objeto usando a função fábrica:
let endereco2 = criarEndereco('Nazare', '123', '00998877', 'Mooca', 'Rio de Janeiro');
let endereco3 = criarEndereco('das Laranjas', 333, 87658766, 'Limão', 'Curitiba')

//imprimir valores 
mostraEndereco(endereco2);

mostraEndereco(endereco3);

//constructor function - função construtor
//atenção: pascal-case, uso de THIS e ponto e vígula
function Endereco(banana, numero, cep, bairro, cidade)
{
    this.rua = banana;
    this.numero = numero;
    this.cep = cep;
    this.bairro = bairro;
    this.cidade = cidade;
}
console.log('--- objetos criados usando função construtor---')
//chamar a função construtor: 

let endereco4 = new Endereco('das bananas', 123, 98765433, 'Bananal', 'Porto Alegre');
let endereco5 = new Endereco('Abacaxi', 12, 98765438, 'Uva', 'Fenda do Bikini');

mostraEndereco(endereco4);
mostraEndereco(endereco5);

console.log('\n também podemos ter listas de objetos: ')

let produtos = 
[
    {   id:1 , nome: 'sapato', preco: 100.00 } ,
    {   id:2 , nome: 'sandalia', preco: 250.00 },
    {   id:3 , nome: 'cinto', preco: 450.00},
    {   id:4 , nome: 'bolsa', preco: 650.00}    
]

//percorrendo cada propriedade e cada valor de cada objeto do vetor produto:
// for(let produto of produtos){      //for-of para percorrer cada objeto do o vetor
//     for(let propriedade in produto){   //for-in para percorrer cada propriedade+valor do produto
//         console.log(propriedade, produto[propriedade]);        
//     }
//     console.log('************');    
// }

// produtos.forEach((produto)=>{
//     for(let propriedade in produto){
//         console.log(propriedade, produto[propriedade]);        
//     }
//     console.log('////////////////////');
// });

// for(let i = 0 ; i < produtos.length; i++){
//     mostraEndereco(produtos[i]);
// }


// produtos.forEach( produto => mostraEndereco(produto) );