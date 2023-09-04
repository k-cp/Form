document.getElementById("myFornm"),addEventListener("submit", function (event) {
    var password = document.getElementById("password");
    var cfr = document.getElementById("cfr");
    console.log(password, cfr)
    var errorMessage = document.getElementById("errorMessage");
    if (cfr.value  != password.value) {
        event.preventDefault()
        errorMessage.textContent = "Please enter a mathing password";
    } else {
        errorMessage.textContent = "";
    }

})