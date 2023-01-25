/* Variáveis criadas para armazenar os argumentos no node */
const parImpar = process.argv[2]
const num = Number(process.argv[3]) // O segundo tem o Number pois será inserido um número e não array

/* Função entregue para ajudar  */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
const numeroAleatorioEntreZeroeDez = getRndInteger(0, 10)

/* Imprimi os dados de escolha minha e os dados aleatórios do computador */
console.log(`Você escolheu ${parImpar} e o número ${num}`);
console.log(`O computador escolheu o número ${numeroAleatorioEntreZeroeDez}, e a soma total é ${(num + numeroAleatorioEntreZeroeDez)}`);

/* LENDO O CÓDIGO */

/*Se no argumento for entregue "par", considerar */
if (parImpar === "par") {
    /*Se a soma do meu número + o número aleatório do computador for divisível por 2 (não restar nada) */
    if ((num + numeroAleatorioEntreZeroeDez) % 2 === 0){
        /* Imprimir que eu ganhei*/
      console.log("VOCÊ GANHOU!");
    }else{
        /* Senão, imprimir que eu perdi */
      console.log("VOCÊ PERDEU!");
    }
  } else {
    /*Se o argumento entregue NÃO for "par", cairá nessa parte do código - No caso, for ímpar */
    if ((num + numeroAleatorioEntreZeroeDez) % 2 === 0){
    /*Se a soma do número + o número aleatório do computador for divisível por 2 (não restar nada) */
      console.log("VOCÊ PERDEU!");
    }else{
    /*Senão, imprimir que eu ganhei, pois o número resultante não é divisível por 2 */
      console.log("VOCÊ GANHOU!");
    }
  }

/*

Após compreender o solicitado com o exercício, reescrevi para que o código ficasse menor.
** Acredito que ainda haja formas simples de melhorá-lo.


if ((parImpar === "par" && (num + numeroAleatorioEntreZeroeDez) % 2 === 0) || (parImpar === "impar" && (num + numeroAleatorioEntreZeroeDez) % 2 !== 0 )){
    console.log("Você ganhou!")
} else{
    console.log("Você perdeu!")
}

*/