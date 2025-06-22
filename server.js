const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const config = require('./config');

const app = express();
const PORT = config.PORT;
const GOAL_AMOUNT = config.GOAL_AMOUNT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  db.sumDonations((err, row) => {
    const total = row.total || 0;
    res.render('index', {
      total,
      goal: GOAL_AMOUNT,
      appName: config.APP_NAME,
      appDescription: config.APP_DESCRIPTION
    });
  });
});

app.get('/admin', (req, res) => {
  db.sumDonations((err, row) => {
    const total = row.total || 0;
    db.allDonations((err, donations) => {
      res.render('admin', {
        total,
        goal: GOAL_AMOUNT,
        donations: donations.slice(0, config.DONATIONS_PER_PAGE),
        appName: config.APP_NAME,
        appDescription: config.APP_DESCRIPTION
      });
    });
  });
});

app.post('/admin', (req, res) => {
  const { name, amount } = req.body;
  db.insertDonation(name, parseFloat(amount), (err) => {
    res.redirect('/admin');
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ${config.APP_NAME} rodando em http://localhost:${PORT}`);
  console.log(`📊 Meta de arrecadação: R$ ${GOAL_AMOUNT.toFixed(2)}`);
  console.log(`👥 Página pública: http://localhost:${PORT}`);
  console.log(`⚙️  Painel admin: http://localhost:${PORT}/admin`);
}); 