const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const startTime = document.querySelector("#startTime-input");
const finishTime = document.querySelector("#finishTime-input");
const category = document.querySelector("#category-input");
const submitButton = document.querySelector("#submit");
const returnData = document.querySelector("#return-data");
let message = document.createElement("p");
let hours = 0;

//reset the form to blank values
function formReset() {
  nameInput.value = "";
  emailInput.value = "";
  startTime.value = "";
  finishTime.value = "";
  category.value = "Chestnut Ridge";
}

//handle the form submit by checking all values are filled out and calculating hours
function hoursSubmit(e) {
  e.preventDefault();
  returnData.innerHTML = "";
  hours = (
    (Date.parse(finishTime.value) - Date.parse(startTime.value)) /
    3600000
  ).toFixed(2);
  if (nameInput.value === "") {
    message.textContent = "Please enter your name.";
  } else if (emailInput.value === "") {
    message.textContent = "Please enter an email address.";
  } else if (startTime.value === "") {
    message.textContent = "Please enter a Start Time.";
  } else if (finishTime.value === "") {
    message.textContent = "Please enter a Finish Time.";
  } else if (hours < 0) {
    message.textContent = "Whoa! Did you invent time travel?";
  } else {
    message.textContent = `Thank You ${nameInput.value} for volunteering ${hours} hours at ${category.value}!`;
  }
  returnData.appendChild(message);
  formReset();
}

submitButton.addEventListener("click", hoursSubmit);
