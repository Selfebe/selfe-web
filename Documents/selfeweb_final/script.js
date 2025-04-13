let isDarkMode = false;

// Funktion zum Umschalten der Farbschemata
function toggleColorScheme() {
  const body = document.body;
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    body.classList.add("retro-color-scheme");
  } else {
    body.classList.remove("retro-color-scheme");
  }
}

// Registrierung und Profilanzeige
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const bio = document.getElementById("bio").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Temporäre Speicherung der Daten (hier könnte eine echte Datenbankverbindung stehen)
  localStorage.setItem("username", username);
  localStorage.setItem("bio", bio);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Anzeige des Profils
  document.getElementById("signup-section").style.display = "none";
  document.getElementById("profile-section").style.display = "block";
  document.getElementById("username-display").innerText = username;
  document.getElementById("bio-display").innerText = bio;
});

// Chat-Funktionalität
document.getElementById("chatButton").addEventListener("click", function() {
  document.getElementById("profile-section").style.display = "none";
  document.getElementById("chat-section").style.display = "block";
  document.getElementById("chat-username").innerText = localStorage.getItem("username");
});

function checkMessage() {
  const message = document.getElementById("chat-input").value;
  const sendButton = document.getElementById("sendMessage");

  // Überprüfen, ob die Nachricht keinen Text enthält oder verbotenes Wort
  if (message.length > 0 && !message.includes("verboteWort")) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

document.getElementById("sendMessage").addEventListener("click", function() {
  const message = document.getElementById("chat-input").value;
  const chatMessages = document.getElementById("chat-messages");

  const newMessage = document.createElement("p");
  newMessage.textContent = message;
  chatMessages.appendChild(newMessage);
  document.getElementById("chat-input").value = "";
  sendButton.disabled = true;
});