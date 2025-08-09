// Função principal que é executada quando o DOM está carregado
document.addEventListener('DOMContentLoaded', function () {
  // Obter elementos do DOM
  const solveBtn = document.getElementById('solveBtn');
  const resetBtn = document.getElementById('resetBtn');
  const numbersInput = document.getElementById('numbers');
  const resultDiv = document.getElementById('result');
  const calculationsDiv = document.getElementById('calculations');

  // Adicionar event listeners aos botões
  solveBtn.addEventListener('click', solveTreasure);
  resetBtn.addEventListener('click', resetForm);

  // Função para resolver o enigma do tesouro
  function solveTreasure() {
    // Obter os números do input e limpar espaços em branco
    const input = numbersInput.value.trim();

    // Verificar se o input está vazio
    if (!input) {
      resultDiv.textContent = 'Por favor, insira alguns números.';
      calculationsDiv.textContent = '';
      return;
    }

    // Dividir os números por vírgula e converter para números
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));

    // Verificar se há números inválidos
    if (numbers.some(isNaN)) {
      resultDiv.textContent = 'Por favor, insira apenas números separados por vírgulas.';
      calculationsDiv.textContent = '';
      return;
    }

    // Array para armazenar os resultados
    const validMaps = [];
    let calculationsText = '';

    // Processar cada número
    numbers.forEach(num => {
      // Inverter os dígitos do número
      const reversedNum = reverseNumber(num);

      // Calcular a diferença
      const difference = num - reversedNum;

      // Verificar se é divisível por 7
      const isValid = difference % 7 === 0;

      // Adicionar ao array se for válido
      if (isValid) {
        validMaps.push(num);
      }

      // Adicionar detalhes do cálculo ao texto
      calculationsText += `${num} - ${reversedNum} = ${difference} ${
        isValid ? '✔ (Divisível por 7)' : '✖ (Não divisível por 7)'
      }\n`;
    });

    // Mostrar os resultados
    resultDiv.textContent =
      validMaps.length > 0
        ? `Mapas verdadeiros encontrados: [${validMaps.join(', ')}]`
        : 'Nenhum mapa verdadeiro encontrado.';

    calculationsDiv.textContent = calculationsText;
  }

  // Função para inverter os dígitos de um número
  function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
  }

  // Função para resetar o formulário
  function resetForm() {
    numbersInput.value = '';
    resultDiv.textContent = '';
    calculationsDiv.textContent = '';
  }
});
