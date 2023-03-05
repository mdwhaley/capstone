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
let entry_id = 0;
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
        entry_id = dbRes[0][0].id;
        //console.log(entry_id);
        // console.log(
        //   sequelize.query(`select * from entry where id = ${entry_id};`)
        // );
      })
      .catch((err) => console.log(err));
  },

  deletePost: (req, res) => {
    //const email = req.params.email;
    sequelize
      .query(`delete from entry where id = '${entry_id}';`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
        console.log(entry_id);
      })
      .catch((err) => console.log(err));
  },
};
