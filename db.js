const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.sqlite');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS donations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      amount REAL NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = {
  allDonations: (cb) => db.all(`SELECT * FROM donations ORDER BY created_at DESC`, cb),
  insertDonation: (name, amount, cb) => {
    db.run(`INSERT INTO donations (name, amount) VALUES (?, ?)`, [name, amount], cb);
  },
  sumDonations: (cb) => {
    db.get(`SELECT SUM(amount) as total FROM donations`, cb);
  }
}; 