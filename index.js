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

if ((parImpar === "par" && (num + numeroAleatorioEntreZeroeDez) % 2 === 0) || (parImpar === "impar" && (num + numeroAleatorioEntreZeroeDez) % 2 !== 0 )){
    console.log("Você ganhou!")
} else{
    console.log("Você perdeu!")
}