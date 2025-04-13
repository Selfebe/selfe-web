// script.js

// Farbschema wechseln
const themeButton = document.getElementById('themeButton');
let isDarkTheme = true;

themeButton.addEventListener('click', () => {
    if (isDarkTheme) {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        isDarkTheme = false;
        themeButton.innerText = 'Wechsel zu Neon';
    } else {
        document.body.style.backgroundColor = '#111';
        document.body.style.color = '#ffffff';
        isDarkTheme = true;
        themeButton.innerText = 'Wechsel zu Hell';
    }
});

// Hinweis auf Screenshot-Verbot
alert('Bitte beachte, dass das Erstellen von Screenshots oder Bildschirmfotos auf dieser Seite verboten ist!');