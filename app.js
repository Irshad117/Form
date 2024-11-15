const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let firstName = document.querySelector("#firstName").value;
  console.log(firstName);
  let lastName = document.querySelector("#lastName").value;
  console.log(lastName);
  let email = document.querySelector("#inputEmail4").value;
  console.log(email);
  let pass = document.querySelector("#inputPassword4").value;
  console.log(pass);
  let address = document.querySelector("#inputAddress").value;
  console.log(address);
  let city = document.querySelector("#inputCity").value;
  console.log(city);
  let country = document.querySelector("#inputState").value; // Corrected variable name
  console.log(country);
  let education = document.querySelector("#inputZip").value;
  console.log(education);
  const eightCharRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // Check if any fields are empty or if the password is invalid
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    pass === "" ||
    address === "" ||
    city === "" ||
    country === "" ||
    education === "" ||
    !pass.match(eightCharRegex) // Check if password does not match the regex
  ) {
    alert("Please fill in all fields correctly.");
    alert("Password is incorrect password should Az-Za and d@$!%*?& 0-9 ");
    console.log("Please enter information");
    return;
  } else {
    alert("Form submitted successfully");
    console.log("Password is valid");
    // Reset the form
    document.querySelector("form").reset();
    // Disable the button
    btn.disabled = true;
    // Enable the button after 5 seconds
    setTimeout(() => {
      btn.disabled = false;
    }, 5000);
    // Log the button click event
    console.log("Button clicked");
  }
});