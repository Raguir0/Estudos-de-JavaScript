function soma(num1, num2){
    // E O CODIGO DA SUA FUNCAO
    return num1 + num2;
}

function subtrair(num1, num2){
    // E O CODIGO DA SUA FUNCAO
    return num1 - num2;
}

function multiplicacao(num1, num2){
    // E O CODIGO DA SUA FUNCAO
    return num1 * num2;
}

function dividir(num1, num2){
    // E O CODIGO DA SUA FUNCAO
    return num1 / num2;
}

let parametro1 = parseFloat(prompt("Insira primeiro numero a ser calculado"));
let parametro2 = parseFloat(prompt("Insira o segundo numero a ser calculado"));
let operacao = prompt("Escolha a operacao (digitar 1 para soma, 2 para subtracao, 3 para multiplicacao, 4 para divisao)")

if (operacao === "1"){
    alert(soma(parametro1,parametro2));
} else if(operacao === "2"){
    alert(subtrair(parametro1,parametro2));
} else if(operacao === "3"){
    alert(multiplicacao(parametro1,parametro2));
} else if(operacao === "4"){
    alert(dividir(parametro1,parametro2));
} else{
    alert("Operacao digitade errado, tente novamente")
}
