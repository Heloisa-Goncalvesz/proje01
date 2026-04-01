//pergunte o valor para o usuário
let valorCompra = Number(prompt("Insira o valor total de sua compra"));


//verifica se o valor da compra é maoir ou igual a 100
if(valorCompra >= 100) { 
    //declarando variaveis para calcular o desconto
    let desconto = valorCompra * 0.10;

    //aplicando o desconto no valor da compra
    let valorComDesconto = valorCompra - desconto;
    alert ("Você ganhou um desconto de 10%!");
    alert ("Valor do desconto: R$" + desconto.toFixed(2));
    alert ("Valor total com desconto: R$" + valorComDesconto.toFixed(2));
//caso o valor da compra seja menor que 100, não adicione o desconto
} else {
    alert ("Compra abaixo de R$100. Sem desconto");
    alert ("Valor total:R$" + valorCompra.toFixed(2));
}

