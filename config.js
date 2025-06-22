// Configurações do Sistema de Arrecadação - Tapetrica da Serra
module.exports = {
  // Configurações do Servidor
  PORT: process.env.PORT || 3000,
  
  // Meta de Arrecadação (em reais)
  GOAL_AMOUNT: 5000,
  
  // Configurações do Banco de Dados
  DATABASE: './data.sqlite',
  
  // Configurações da Aplicação
  APP_NAME: 'Tapetrica da Serra',
  APP_DESCRIPTION: 'Sistema de Arrecadação para a Parada Gay',
  
  // Configurações de Exibição
  DONATIONS_PER_PAGE: 10,
  
  // Cores do Tema LGBT (para referência)
  COLORS: {
    RED: '#ff0000',
    ORANGE: '#ff8d00',
    YELLOW: '#ffee00',
    GREEN: '#008121',
    BLUE: '#004cff',
    PURPLE: '#760188'
  }
}; 