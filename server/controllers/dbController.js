const sqlite3 = require("sqlite3").verbose();

class dbController {
  constructor() {}

  connectdb() {
    this.db = new sqlite3.Database("../tweakasix.db", (err) => {
      if (err) {
        console.error(err.message);
      }
      this.db.serialize(function () {
        this.db.run(`CREATE TABLE IF NOT EXISTS'color_set' (
                    'id' int NOT NULL AUTO_INCREMENT,
                    'user_id' int DEFAULT '1',
                    'gtrname' varchar(45) DEFAULT NULL,
                    PRIMARY KEY ('id'),
                    KEY 'fk_color_set_user_idx' ('user_id'),
                    CONSTRAINT 'fk_color_set_user' FOREIGN KEY ('user_id') REFERENCES 'user' ('id')
                  ) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`);
      });
      console.log("Database Connected.");
    });
  }
}
module.exports = dbController;
