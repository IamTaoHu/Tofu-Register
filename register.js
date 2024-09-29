window.onload = pageLoad;
function pageLoad() {
    var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    var firstname = document.forms["myRegister"]["firstname"].value;
    var lastname = document.forms["myRegister"]["lastname"].value;
    var gender = document.forms["myRegister"]["gender"].value;
    var bday = document.forms["myRegister"]["bday"].value;
    var email = document.forms["myRegister"]["email"].value;
    var username = document.forms["myRegister"]["username"].value;
    var password = document.forms["myRegister"]["password"][0].value; // first password field
    var retypePassword = document.forms["myRegister"]["password"][1].value; // retype password field

    if (firstname === "" || lastname === "" || gender === "" || bday === "" || email === "" || username === "" || password === "" || retypePassword === "") {
        document.getElementById("errormsg").innerHTML = "All fields are required!";
        return false;
    }

    if (password !== retypePassword) {
        document.getElementById("errormsg").innerHTML = "Passwords do not match!";
        return false;
    }

    // Save data in localStorage for the login page
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    return true;
}
