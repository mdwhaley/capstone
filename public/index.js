const form = document.querySelector("form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const startTime = document.querySelector("#startTime-input");
const finishTime = document.querySelector("#finishTime-input");
const categoryInput = document.querySelector("#category-input");
const categoryList = document.querySelector("#category-list");
const submitButton = document.querySelector("#submit");
const checkHoursButton = document.querySelector("#checkHours");
const returnData = document.querySelector("#return-data");

//reset the form to blank values
function formReset() {
  nameInput.value = "";
  emailInput.value = "";
  startTime.value = "";
  finishTime.value = "";
  categoryInput.value = 1;
}

//handle the form submit by checking all values are filled out and calculating hours
function hoursSubmit(e) {
  e.preventDefault();
  returnData.innerHTML = "";
  let message = document.createElement("p");
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
    message.textContent = `Thank You ${nameInput.value} for volunteering ${hours} hours!`; //Stuck on returning category text
  }
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
    const currentID = res.data[0];
    console.log(currentID);
  });

  returnData.appendChild(message);
  //formReset();
  // axios.get("http://localhost:4027/userPost", body).then((res) => {
  //   res.data;
  //   console.log(nameInput.value);
  // });
}

function getUserPost() {
  const email = emailInput.value;
  axios.get(`http://localhost:4027/entry/${email}`).then((res) => {
    console.log(res.data);
  });
}

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
submitButton.addEventListener("click", hoursSubmit);
checkHoursButton.addEventListener("click", getUserPost);
