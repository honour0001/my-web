const inputs = document.querySelectorAll("input");
const loginButton = document.querySelector(".login-button");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (inputs[0].value.trim() !== "" && inputs[1].value.trim() !== "") {
            loginButton.style.backgroundColor = "red";  // Change to red when input is entered
        } else {
            loginButton.style.backgroundColor = "pink"; // Default color is pink
        }
    });
});
