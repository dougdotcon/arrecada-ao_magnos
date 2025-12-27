# 🏳️‍🌈 Tapetrica da Serra - Sistema de Arrecadação

Um sistema profissional e elegante para arrecadação de fundos para a Parada Gay da Tapetrica da Serra. Desenvolvido com Node.js, Express e SQLite, proporciona uma maneira transparente de gerenciar doações e acompanhar o progresso da meta.

## ✨ Funcionalidades

- **Página Pública**: Exibe o progresso da arrecadação em tempo real e o QR Code para doações via PIX.
- **Painel Administrativo**: Interface segura para registrar e gerenciar doações manualmente.
- **Design Responsivo**: Totalmente otimizado para desktop, tablet e dispositivos móveis.
- **Tema LGBT**: Design vibrante e inclusivo inspirado na bandeira do orgulho.
- **Compartilhamento Social**: Botões integrados para compartilhar no WhatsApp, Facebook e Instagram.

## 🚀 Instalação e Configuração

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v14 ou superior)
- npm (vem junto com o Node.js)

### Passos

1. **Clone o repositório:**
   bash
   git clone <url_do_repositorio>
   cd tapetrica_serra_fundraising
   

2. **Instale as dependências:**
   bash
   npm install
   

3. **Configure a Meta de Arrecadação:**
   - Abra o arquivo `server.js` em seu editor de código.
   - Encontre a linha `const GOAL_AMOUNT = 5000;`
   - Altere `5000` para o valor da sua meta desejada (ex: `10000`).

4. **Adicione seu QR Code do PIX:**
   - Coloque sua imagem do QR Code na pasta `public/images/`.
   - Certifique-se de que o arquivo se chame `qr.png`.
   - **Importante**: Se sua imagem tiver um nome diferente, renomeie-a para `qr.png`.

5. **(Opcional) Proteja o Painel Admin:**
   - Por padrão, o painel administrativo é aberto. Para produção, é altamente recomendado adicionar um middleware de autenticação simples.

## 🎯 Como Usar

### Iniciar o Servidor
bash
node server.js

Você verá uma mensagem como `Server is running on port 3000`.

### Acessar a Aplicação
- **Página Pública**: [http://localhost:3000](http://localhost:3000)
- **Painel Administrativo**: [http://localhost:3000/admin](http://localhost:3000/admin)

### Adicionar Doações via Painel Admin
1. Acesse o Painel Administrativo.
2. Digite o nome do doador.
3. Insira o valor da doação (não inclua símbolos de moeda).
4. Clique em "Adicionar Doação".

## 📁 Estrutura do Projeto


tapetrica_serra_fundraising/
├── data.sqlite              # Arquivo do banco de dados SQLite (gerado automaticamente)
├── db.js                    # Conexão e configuração do banco de dados
├── server.js                # Aplicação principal do servidor Express
├── package.json             # Metadados e dependências do projeto
├── public/
│   ├── css/
│   │   └── style.css        # Estilos globais e regras responsivas
│   └── images/
│       └── qr.png           # Seu QR Code do PIX (você fornece este arquivo)
├── views/
│   ├── index.ejs            # Página pública de arrecadação
│   └── admin.ejs            # Painel administrativo para adicionar doações
└── README.md                # Arquivo de documentação


## 🛠️ Pilha Tecnológica

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Banco de Dados**: [SQLite](https://www.sqlite.org/)
- **Template Engine**: [EJS](https://ejs.co/)
- **Estilização**: CSS3 personalizado (Flexbox & Grid)

## 🔧 Configuração e Personalização

### Alterar Cores do Tema
Para modificar o esquema de cores, edite as variáveis `:root` em `public/css/style.css`.

css
:root {
    --red: #ff0000;
    --orange: #ff8d00;
    --yellow: #ffee00;
    --green: #008121;
    --blue: #004cff;
    --purple: #760188;
}


### Gerenciamento do Banco de Dados
O sistema cria automaticamente o arquivo `data.sqlite` na primeira execução.
- **Backup**: Copie o arquivo `data.sqlite` para um local seguro.
- **Reset**: Pare o servidor, delete o arquivo `data.sqlite` e reinicie. Um novo banco vazio será criado.

## 🚀 Deploy em Produção

Para ambiente de produção, recomendamos o uso do `pm2` para manter a aplicação rodando continuamente.

bash
# Instale o pm2 globalmente
npm install -g pm2

# Inicie sua aplicação
pm2 start server.js --name "tapetrica-fundraising"

# Salve a lista de processos para reiniciar após reboot
pm2 save
pm2 startup


## 📞 Suporte

Em caso de problemas:
1. Verifique se todas as dependências foram instaladas (`npm install`).
2. Confirme se o arquivo `qr.png` existe em `public/images/`.
3. Verifique o console do servidor para mensagens de erro.
4. Certifique-se de que sua versão do Node.js é 14 ou superior.
