require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
let entry_id = 0;
let total_hours = 0;
let category_name = "";
let category_hours = 0;
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
        returning *;
        `
      )

      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
        entry_id = dbRes[0][0].id;
      })
      .catch((err) => console.log(err));
  },

  deletePost: (req, res) => {
    sequelize
      .query(`delete from entry where id = '${entry_id}';`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log(err));
  },

  getTotalHours: (req, res) => {
    sequelize
      .query(
        `SELECT SUM(hours) as total_hours
        FROM entry;`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
        total_hours = dbRes[0].total_hours;
      })
      .catch((err) => console.log(err));
  },

  getHoursByCategory: (req, res) => {
    sequelize
      .query(
        `SELECT category.category_name, SUM(hours) as sum_hours
        FROM entry
        JOIN category
        ON category.id = entry.category_id
        GROUP BY category_name
        ORDER BY sum_hours DESC;`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log(err));
  },
};
