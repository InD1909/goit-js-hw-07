const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = loginForm.elements["email"].value.trim();
  const passwordValue = loginForm.elements["password"].value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);

    loginForm.reset();
  }
});

document.querySelectorAll("form > label").forEach((label) => {
  if (!label.classList.contains("form-label")) {
    label.classList.add("form-label", "form-label:not(:last-child)");
  }
});

document.querySelectorAll("form > label > input").forEach((input) => {
  if (!input.classList.contains("form-input")) {
    input.classList.add("form-input");
  }
});

const formBtn = document.querySelector("button");

formBtn.classList.add("form-btn");
