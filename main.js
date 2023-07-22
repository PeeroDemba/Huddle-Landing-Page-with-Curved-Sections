"use strict";

const email = document.getElementById("email");
const button = document.getElementById("button");
const form = document.forms[0];

let errormsg = document.createElement("p");

function valid() {
  let pattern = /^[a-z0-9]{1,20}@[a-z]{3,10}[.]com$/;
  if (pattern.test(email.value)) {
    alert("Email Sent");
  } else {
    errormsg.innerHTML = "Check your email please";
    errormsg.style.fontSize = "0.8rem";
    errormsg.style.color = "red";
    errormsg.style.marginTop = "0.5rem";
    errormsg.style.order = "2";
    email.style.border = "1px solid red";
    form.appendChild(errormsg);
  }
}

button.addEventListener("click", valid);
email.addEventListener("focus", function () {
  errormsg.innerHTML = "";
  email.style.borderColor = "transparent";
});
