document.addEventListener("DOMContentLoaded", function () {
    loadMessages();
});

function postMessage() {
    let message = document.getElementById("userMessage").value;
    if (message.trim() === "") return;

    let discussionList = document.getElementById("discussionList");
    let li = document.createElement("li");
    li.textContent = message;
    discussionList.appendChild(li);

    saveMessage(message);
    document.getElementById("userMessage").value = "";
}

function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    let discussionList = document.getElementById("discussionList");
    messages.forEach(msg => {
        let li = document.createElement("li");
        li.textContent = msg;
        discussionList.appendChild(li);
    });
}



function fetchCommunityMessages() {
    let messages = JSON.parse(localStorage.getItem("communityMessages")) || [];
    let container = document.getElementById("discussion-container");
    container.innerHTML = ""; // Clear existing messages

    messages.forEach((msg, index) => {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message-box");
        messageDiv.innerHTML = `
            <p>${msg}</p>
            <button onclick="deleteMessage(${index})">🗑 Delete</button>
        `;
        container.appendChild(messageDiv);
    });
}

// Function to delete a single message
function deleteMessage(index) {
    let messages = JSON.parse(localStorage.getItem("communityMessages")) || [];
    messages.splice(index, 1); // Remove message at the given index
    localStorage.setItem("communityMessages", JSON.stringify(messages));
    fetchCommunityMessages(); // Reload messages
} 