document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".submit-button");
    const inputField = document.getElementById("competitionName");
    const formContainer = inputField.parentElement; // Parent container

    const socialButtons = document.querySelectorAll(".instagram-button, .facebook-button, .x-button, .google-button");

    // Disable submit button initially
    submitButton.disabled = true;
    submitButton.style.opacity = "0.5"; // Greyed out

    // Disable social buttons initially
    socialButtons.forEach(button => {
        button.style.opacity = "0.5"; // Make them look disabled
        button.style.pointerEvents = "none"; // Disable clicks
    });

    // Enable submit button only when input field is filled
    inputField.addEventListener("input", function () {
        if (inputField.value.trim() !== "") {
            submitButton.disabled = false;
            submitButton.style.opacity = "1"; // Restore visibility
        } else {
            submitButton.disabled = true;
            submitButton.style.opacity = "0.5";
        }
    });

    // Create a container for the loading animation
    const loadingContainer = document.createElement("div");
    loadingContainer.id = "loading-container";
    loadingContainer.style.display = "none"; // Initially hidden
    loadingContainer.style.justifyContent = "center";
    loadingContainer.style.alignItems = "center";
    loadingContainer.style.marginTop = "10px"; // Space for positioning

    // Create the spinner
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    loadingContainer.appendChild(spinner);

    // Create a placeholder for the success message
    const successMessage = document.createElement("div");
    successMessage.id = "success-message";
    successMessage.style.display = "none"; // Initially hidden
    successMessage.style.fontSize = "16px";
    successMessage.style.color = "green";
    successMessage.style.fontWeight = "bold";
    successMessage.style.textAlign = "center";
    successMessage.style.marginTop = "10px";

    // Insert the loading container and success message after the input field
    formContainer.appendChild(loadingContainer);
    formContainer.appendChild(successMessage);

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        if (inputField.value.trim() === "") {
            alert("Please enter a competition name!");
            return;
        }

        // Disable the submit button to prevent multiple clicks
        submitButton.disabled = true;
        submitButton.style.opacity = "0.5";

        // Hide input field and button
        inputField.style.display = "none";
        submitButton.style.display = "none";

        // Show loading animation
        loadingContainer.style.display = "flex";

        setTimeout(() => {
            // Remove loading animation
            loadingContainer.style.display = "none";

            // Show green tick instead of the button
            const checkMark = document.createElement("div");
            checkMark.innerHTML = "✔";
            checkMark.style.fontSize = "24px";
            checkMark.style.color = "green";
            checkMark.style.textAlign = "center";
            formContainer.appendChild(checkMark);

            // Show success message
            successMessage.innerHTML = "Competition is valid";
            successMessage.style.display = "block";

            // Enable social media buttons
            socialButtons.forEach(button => {
                button.style.opacity = "1"; // Restore visibility
                button.style.pointerEvents = "auto"; // Enable clicks
            });

        }, 1000); // 10 seconds delay
    });

    // Prevent social media buttons from working if not verified
    socialButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            if (successMessage.style.display !== "block") {
                event.preventDefault();
                alert("You must verify the competition name first!");
            }
        });
    });
});
