// const form = document.querySelector("form");
const emailInput = document.querySelector("#email-input");
const startTime = document.querySelector("#startTime-input");
const finishTime = document.querySelector("#finishTime-input");
const category = document.querySelector("#category-input");
const submitButton = document.querySelector("#submit");
const returnData = document.querySelector("#return-data");

function testSubmit(e) {
  e.preventDefault();
  let hours = (
    (Date.parse(finishTime.value) - Date.parse(startTime.value)) /
    3600000
  ).toFixed(2);
  console.log(emailInput.value);
  console.log(category.value);
  console.log(hours);
  let message = document.createElement("p");
  message.textContent = `Thank You ${emailInput.value} for volunteering ${hours} hours at ${category.value}!`;
  returnData.appendChild(message);
}

submitButton.addEventListener("click", testSubmit);
