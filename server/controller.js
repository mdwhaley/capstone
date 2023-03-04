require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");
// const { SELECT } = require("sequelize/types/query-types");
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getCategories: (req, res) => {
    sequelize
      .query(`select * from category;`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log(err));
  },

  createEntry: (req, res) => {
    const {
      user_name,
      user_email,
      start_time,
      finish_time,
      category_input,
      hours,
    } = req.body;
    sequelize
      .query(
        `insert into entry (name, email, start_time, finish_time, category_id, hours)
        values ('${user_name}', '${user_email}', '${start_time}', '${finish_time}', ${category_input}, ${hours} ) 
        returning id;
        `
      )

      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
        console.log(dbRes[0]);
      })
      .catch((err) => console.log(err));
  },

  getUserPost: (req, res) => {
    const email = req.params.email;
    sequelize
      .query(`select * from entry where email = '${email}';`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log(err));
  },
};
