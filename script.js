const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const form = document.getElementById("form");
const existingBtn = document.getElementById("existing");

// Show existing login button if data is saved
window.onload = () => {
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (savedUser && savedPass) {
        existingBtn.style.display = "block";
    }
};

// Form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = username.value;
    const pass = password.value;

    alert(Logged in as ${user});

    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    if (localStorage.getItem("username")) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
});

// Existing user login
existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    alert(Logged in as ${savedUser});
});
