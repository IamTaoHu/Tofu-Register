window.onload = loginLoad;
function loginLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;

	centerForm();  // Call function to center the form
}

function checkLogin() {
    var username = document.forms["myLogin"]["username"].value;
    var password = document.forms["myLogin"]["password"].value;

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        return true; // Allow form submission
    } else {
        alert("Incorrect username or password. Please try again.");
        return false; // Prevent form submission
    }
}

function centerForm() {
    var style = document.createElement('style');
    style.innerHTML = `
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }
        fieldset {
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: #6a1b9a;
        }
    `;
    document.head.appendChild(style);
}
