const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+=[]{},|:;<>.?/";

const passwordElOne = document.getElementById("pw-1");
const passwordElTwo = document.getElementById("pw-2");

function generateRandomChar() {
    const char = characters[Math.floor(Math.random() * characters.length)];
    return char === "<" ? "&lt;" : char;
}

function generatePassword(length = 15) {
    let passwordOne = "";
    let passwordTwo = "";

    for (let i = 0; i < length; i++) {
        passwordOne += generateRandomChar();
        passwordTwo += generateRandomChar();
    }

    passwordElOne.textContent = passwordOne;
    passwordElTwo.textContent = passwordTwo;
}
