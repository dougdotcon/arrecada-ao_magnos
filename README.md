# 🏳️‍🌈 Tapetrica da Serra - Sistema de Arrecadação

Sistema simples e elegante para arrecadação de fundos para a Parada Gay da Tapetrica da Serra, desenvolvido em Node.js com SQLite.

## ✨ Funcionalidades

- **Página Pública**: Exibe progresso da arrecadação e QR Code PIX
- **Painel Administrativo**: Para registrar doações manualmente
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Tema LGBT**: Cores e design inspirados na bandeira do orgulho
- **Compartilhamento Social**: Botões para WhatsApp, Facebook e Instagram

## 🚀 Instalação

1. **Clone ou baixe o projeto**
2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o QR Code PIX:**
   - Adicione sua imagem do QR Code PIX em `public/images/qr.png`
   - Ou renomeie sua imagem para `qr.png`

4. **Ajuste a meta de arrecadação:**
   - Edite a variável `GOAL_AMOUNT` no arquivo `server.js`
   - Valor padrão: R$ 5.000,00

## 🎯 Como Usar

### Iniciar o Servidor
```bash
node server.js
```

### Acessar as Páginas
- **Página Pública**: http://localhost:3000
- **Painel Admin**: http://localhost:3000/admin

### Registrar Doações
1. Acesse o painel admin
2. Preencha o nome do doador
3. Digite o valor da doação
4. Clique em "Adicionar Doação"

## 📁 Estrutura do Projeto

```
tapetrica-serra/
├── public/
│   ├── css/
│   │   └── style.css          # Estilos da aplicação
│   └── images/
│       └── qr.png             # QR Code PIX (você deve adicionar)
├── views/
│   ├── index.ejs              # Página pública
│   └── admin.ejs              # Painel administrativo
├── db.js                      # Configuração do SQLite
├── server.js                  # Servidor Express
├── package.json               # Dependências do projeto
└── README.md                  # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Runtime JavaScript
- **Express**: Framework web
- **SQLite**: Banco de dados
- **EJS**: Template engine
- **CSS3**: Estilização moderna e responsiva

## 🎨 Personalização

### Cores e Tema
O sistema usa as cores da bandeira LGBT:
- Vermelho: #ff0000
- Laranja: #ff8d00
- Amarelo: #ffee00
- Verde: #008121
- Azul: #004cff
- Roxo: #760188

### Meta de Arrecadação
Edite a linha 8 no arquivo `server.js`:
```javascript
const GOAL_AMOUNT = 5000; // Altere para sua meta
```

### QR Code PIX
Substitua o arquivo `public/images/qr.png` pela sua imagem do QR Code PIX.

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔧 Manutenção

### Backup do Banco
O banco de dados está em `data.sqlite`. Faça backup regularmente.

### Logs
O servidor exibe logs no console para monitoramento.

## 🚀 Deploy

### Local
```bash
node server.js
```

### Produção
Recomendamos usar PM2:
```bash
npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save
```

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todas as dependências estão instaladas
2. Confirme se o QR Code está na pasta correta
3. Verifique se a porta 3000 está disponível

## 🏳️‍🌈 Sobre o Projeto

Este sistema foi desenvolvido para apoiar a comunidade LGBT da Tapetrica da Serra, facilitando a arrecadação de fundos para eventos e iniciativas de orgulho e diversidade.

---

**Desenvolvido com ❤️ para a comunidade LGBT** 