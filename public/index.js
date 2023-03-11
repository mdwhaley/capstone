const form = document.querySelector("form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const startTime = document.querySelector("#startTime-input");
const finishTime = document.querySelector("#finishTime-input");
const categoryInput = document.querySelector("#category-input");
const categoryList = document.querySelector("#category-list");
const submitButton = document.querySelector("#submit");
const deleteButton = document.querySelector("#delete");
const returnData = document.querySelector("#return-data");
let hoursList = document.querySelector("#hours-list");
let message = document.createElement("p");
let totalHours = document.createElement("h5");
let currentID = 0;

//reset the form to blank values
function formReset() {
  nameInput.value = "";
  emailInput.value = "";
  startTime.value = "";
  finishTime.value = "";
  categoryInput.value = 1;
}

//handle the form submit by checking all values are filled out and calculating hours then submitting to database
function hoursSubmit(e) {
  e.preventDefault();
  returnData.innerHTML = "";

  let hours = (
    (Date.parse(finishTime.value) - Date.parse(startTime.value)) /
    3600000
  ).toFixed(2);
  if (nameInput.value === "") {
    alert("Please enter your name.");
    return;
  } else if (emailInput.value === "") {
    alert("Please enter an email address.");
    return;
  } else if (startTime.value === "") {
    alert("Please enter a Start Time.");
    return;
  } else if (finishTime.value === "") {
    alert("Please enter a Finish Time.");
    return;
  } else if (hours < 0) {
    alert("Whoa! Did you invent time travel?");
    return;
  } else {
    let body = {
      user_name: nameInput.value,
      user_email: emailInput.value,
      start_time: startTime.value,
      finish_time: finishTime.value,
      category_input: categoryInput.value,
      hours,
    };

    axios.post("http://localhost:4027/entry", body).then((res) => {
      res.data;
      currentID = res.data[0];
      getHoursByCategory();
      getTotalHours();
    });
    message.textContent = `Thank You ${nameInput.value} for volunteering ${hours} hours! If you made a mistake hit the Delete button and re-submit`;
    returnData.appendChild(message);
    formReset();
  }
}
//Delete the post made by the user
function deletePost() {
  axios.delete(`http://localhost:4027/entry/${currentID}`).then((res) => {
    res.data;
    alert("Entry Deleted!");
    returnData.innerHTML = "";
    getHoursByCategory();
    getTotalHours();
  });
}

//get a sum of hours by category
function getHoursByCategory() {
  axios.get(`http://localhost:4027/categoryHours`).then((res) => {
    hoursList.innerHTML = "";
    res.data.forEach((elem) => {
      let hoursCard = `<div class="hours-card">
          <h6>${elem.category_name}: ${elem.sum_hours} hours</h6>
          </div>
      `;
      hoursList.innerHTML += hoursCard;
    });
  });
}

//get Total Hours volunteered by all volunteers in all places.
function getTotalHours() {
  axios.get(`http://localhost:4027/totalHours`).then((res) => {
    res.data;
    total_hours = res.data[0].total_hours;

    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    let totalDollars = USDollar.format(total_hours * hourlyRate);
    totalHours.textContent = `Total Hours by all: ${total_hours} at a value of ${totalDollars}`;
    returnData.appendChild(totalHours);
  });
}

//get the categories from the database for the dropdown list
function getCategories() {
  axios.get("http://localhost:4027/category/").then((res) => {
    res.data.forEach((category) => {
      const option = document.createElement("option");
      option.setAttribute("value", category["id"]);
      option.textContent = category.category_name;
      categoryInput.appendChild(option);
    });
  });
}
getCategories();
getTotalHours();
getHoursByCategory();

submitButton.addEventListener("click", hoursSubmit);
deleteButton.addEventListener("click", deletePost);
