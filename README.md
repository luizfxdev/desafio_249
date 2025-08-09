🏴‍☠️ Tesouros de Zaul

Um desafio de programação inspirado no enigma do pirata Barba Rubra, onde você deve decifrar mapas do tesouro usando um código matemático secreto.

📜 O Enigma
Segundo a lenda, o pirata Barba Rubra escondeu seus tesouros na ilha de Zaul e deixou um código para encontrá-los:

"Para cada número, inverta seus dígitos e subtraia o resultado do original. Se o resultado for divisível por 7, é um mapa verdadeiro!"

Exemplo:
Número: 234

Invertido: 432

Subtração: 234 - 432 = -198

-198 ÷ 7 ≈ -28.285 → Não é divisível (Mapa falso ❌)

Número: 720

Invertido: 027 → 27

Subtração: 720 - 27 = 693

693 ÷ 7 = 99 → Divisível! (Mapa verdadeiro ✅)

🚀 Como Usar
Clone o repositório:

sh
git clone https://github.com/luizfxdev/desafio_249.git
Abra o arquivo index.html no navegador.

Insira os números separados por vírgula:

text
1680, 2079, 9009, 8540
Clique em DESVENDAR para ver os mapas válidos.

Clique em RETORNAR para limpar os resultados.

🧩 Solução do Desafio
Números que Funcionam:
1680 → 1680 - 861 = 819 (819 ÷ 7 = 117) ✅

2079 → 2079 - 9702 = -7623 (-7623 ÷ 7 = -1089) ✅

9009 → 9009 - 9009 = 0 (0 ÷ 7 = 0) ✅

Números que Não Funcionam:
8540 → 8540 - 0458 = 8082 (8082 ÷ 7 ≈ 1154.57) ❌

🎯 Como o Código Funciona
Input:

Recebe números separados por vírgula (ex: 123, 456).

Processamento:

Para cada número:

Inverte os dígitos.

Subtrai o invertido do original.

Verifica se o resultado é divisível por 7.

Output:

Mostra os números válidos e os cálculos detalhados.

🎨 Design
Tema: Escuro com efeitos neon (roxo e verde).

Botões animados (hover com brilho e movimento).

Responsivo (funciona em celulares e desktops).

🛠 Tecnologias
HTML5

CSS3 (Flexbox, Animations)

JavaScript (ES6)

📜 Licença
MIT © [Seu Nome]

🏆 Desafie-se a encontrar todos os mapas verdadeiros!

🔗 Link para o Projeto Online (substitua pelo seu link)

Feito com 💙 por [@luizfx.dev]

📌 Dica para Testar:

Tente números como 234, 561, 789, 720 e veja se são válidos!
