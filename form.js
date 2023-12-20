
function validateForm() {
    var NameInput = document.getElementById("Name");
    var NameValue = NameInput.value.trim();
    if (NameValue == "" || NameValue == null) {
        alert("Please enter your name");
        NameInput.focus();
        return false;
    }

    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var atPosition = emailValue.indexOf("@");
    var dotPosition = emailValue.lastIndexOf(".");

    if (emailValue === "") {
        alert("Please enter your email");
        emailInput.focus();
        return false;
    }

    if (atPosition < 1 || dotPosition - atPosition < 2) {
        alert("Please enter correct email ID");
        emailInput.focus();
        return false;
    }

    var passwordInput = document.getElementById("password");
    var passwordValue = passwordInput.value.trim();
    if (passwordValue == "" || passwordValue == null) {
        alert("Please enter your password");
        passwordInput.focus();
        return false;
    }

    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (!male.checked || !female.checked) {
        alert("Please select your gender");
        return false;
    }

    var course = document.getElementById("course");
    if (course.value == "") {
        alert("Please select your course");
        return false;
    }

    var city = document.getElementById("city");
    if (city.value == "") {
        alert("Please select your city");
        return false;
    }

    return true;
}
