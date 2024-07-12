// Função para gerar um número aleatório dentro de um intervalo específico
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para criar um floco de neve
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '.'; // Caractere de floco de neve
  
  // Posicionamento inicial aleatório
  snowflake.style.left = `${randomInRange(0, window.innerWidth)}px`;
  snowflake.style.animationDuration = `${randomInRange(5, 15)}s`; // Duração da animação variável
  
  document.body.appendChild(snowflake); // Adiciona o floco à página
  
  // Remove o floco da página após a animação
  snowflake.addEventListener('animationend', () => {
      snowflake.remove();
  });
}

// Função para iniciar a queda de flocos de neve
function startSnowfall() {
  setInterval(createSnowflake, 500); // Cria um novo floco a cada 0,5 segundos
}

// Inicia a queda de flocos de neve quando a página carrega
window.onload = startSnowfall;