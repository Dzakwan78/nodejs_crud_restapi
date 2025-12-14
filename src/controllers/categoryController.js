const db = require('../config/database');

exports.create = (req, res) => {
  db.query('INSERT INTO categories (name) VALUES (?)', [req.body.name], err =>
    err ? res.status(500).json(err) : res.json({ message: 'Category created' })
  );
};

exports.getAll = (req, res) => {
  db.query('SELECT * FROM categories', (err, r) =>
    err ? res.status(500).json(err) : res.json(r)
  );
};

exports.getById = (req, res) => {
  db.query('SELECT * FROM categories WHERE id=?', [req.params.id], (e, r) =>
    e ? res.status(500).json(e) : res.json(r[0])
  );
};

exports.update = (req, res) => {
  db.query('UPDATE categories SET name=? WHERE id=?',
    [req.body.name, req.params.id],
    err => err ? res.status(500).json(err) : res.json({ message: 'Updated' })
  );
};

exports.delete = (req, res) => {
  db.query('DELETE FROM categories WHERE id=?', [req.params.id],
    err => err ? res.status(500).json(err) : res.json({ message: 'Deleted' })
  );
};
