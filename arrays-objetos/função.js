
//uma função é um mecanismo que executa uma tarefa ou realiza uma operação matemática. Ela pode ou não receber um valor(es) de entrada como argumentos, e pode ou não retornar um valor para o programa que a está chamando

function cubo(numero)
{
return(numero **3);
}

let cubode3 = cubo(3);
let cubode5 = cubo(5);
let cubodevaloralto = cubo(23423);
let cuborecursivo = cubo(cubo(3)); //recursividade

console.log(cubode3);
console.log(cuborecursivo);

