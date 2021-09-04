const db = require("../config/db.config");

exports.register = (data, callback) => {
  db.query(
    `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`,
    [data.firstName, data.lastName, data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Registration successful`);
    }
  );
};

exports.login = (data, callback) => {
    db.query(
      `SELECT id FROM users WHERE emailId = ? AND password = ?`,
      [data.emailId, data.password],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        if (results.length > 0) {
          return callback(null, "Login success");
        } else {
          return callback("Invalid credentials");
        }
      }
    );
  };

  exports.getPostAllComments = (data, callback) => {
    db.query(
      `SELECT c.comment, c.datetimeCreated, c.addedByUserId, u.firstName, u.lastName
      FROM comments AS c INNER JOIN users AS u ON c.addedByUserId = u.id
      WHERE c.postId = ?`,
      [data.postId],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  };