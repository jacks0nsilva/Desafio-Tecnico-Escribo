const inputNumero = document.getElementById("numero");
const resultadoDiv = document.getElementById("resultado");
const botao = document.getElementById("botao");
botao.addEventListener("click", ValoresDivisiveis);

function ValoresDivisiveis() {
  const numero = parseInt(inputNumero.value);
  if (isNaN(numero)) {
    // Verifica se numero é do tipo number
    resultadoDiv.innerText =
      "O valor inserido não é um número, tente novamente";
  } else if (numero < 0) {
    // Analisa se o valor inserido é um número inteiro.
    resultadoDiv.innerText = "O valor inserido deve ser um número inteiro.";
  } else {
    // Chama a função SomatorioDosValores que por sua vez retorna a soma de todos os números divisíveis por 3 ou por 5
    let valor = SomatorioDosValores(numero);
    resultadoDiv.innerText = `A soma dos valores inteiros divisíveis por 3 ou por 5 é: ${valor}`;
  }
}

function SomatorioDosValores(numero) {
  // Função para obter a somatório dos números divisíveis por 3 ou por 5
  let somaTotal = 0;
  // O loop percorre todos os valores menores que o número recebido pelo parâmetro da função
  for (let i = 1; i < numero; i++) {
    // Verifica se o valor é múltiplo de 3 ou de 5, através do resto da divisão
    if (i % 3 === 0 || i % 5 === 0) {
      somaTotal += i;
    }
  }
  return somaTotal;
}
