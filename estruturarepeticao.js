// for(inicializador; condicaosaida; expressaofinal){
    // Executar o nosso codigo


    // Exercico

    let notas = [2,5,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,50,100,10,25,50,50,100,10,25,50,50,100,10,25,50,50,100,10,25,50,50,100,10,25,50,50,100,10,25,50]
    let total = 0;

    for(let repeticoes = 0; repeticoes < notas.length; repeticoes++ ){
        total = total + notas[repeticoes]
        // ou total += notas[repeticaoes]


    }

    console.log(`O total de seu dinheiro e ${total}`)
