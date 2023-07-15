console.log('estou antes da lista de produtos');

fetch('json.json').then(function (response) {
        return response.json();
    }).then(function (data) {        
        data.forEach((produto) => {
            for (let propriedade in produto) {
                console.log(propriedade, produto[propriedade]);
                // document.querySelector('.output').innerHTML += propriedade + " " + produto[propriedade] + '<br>';
            }
        }
        )
    })

console.log('por que estou aqui em cima??');
