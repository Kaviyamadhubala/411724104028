const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");
const messageList = document.getElementById("messageList");
let messages = [];
// Character Count
messageInput.addEventListener("input", function () {
    charCount.textContent = "Character Count: " + messageInput.value.length;
});
// Display Messages
function displayMessages() {
    messageList.innerHTML = "";
    messages.forEach(function (msg) {
        const div = document.createElement("div");
        div.className = "message";
        div.textContent = msg;
        messageList.appendChild(div);
        // Remove message after 10 seconds
        setTimeout(function () {
            const index = messages.indexOf(msg);
            if (index !== -1) {
                messages.splice(index, 1);
                displayMessages();
                status.textContent = "Message Expired";
            }
        }, 10000);
    });
}
// Add Message Button
addBtn.addEventListener("click", function () {
    const message = messageInput.value.trim();
    const promise = new Promise(function (resolve, reject) {
        if (message.length >= 3) {
            resolve(message);
        } else {
            reject("Message must contain at least 3 characters");
        }

    });

    promise
        .then(function (msg) {
            status.textContent = "Message Added Successfully";
            messages.push(msg);
            displayMessages();
            messageInput.value = "";
            charCount.textContent = "Character Count: 0";
        })
        .catch(function (error) {
            status.textContent = error;
        });

});
// Clear All Messages
clearBtn.addEventListener("click", function () {
    messages = [];
    messageList.innerHTML = "";
    status.textContent = "All Messages Cleared";

});