function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (
        input.includes("hello") ||
        input.includes("hi") ||
        input.includes("hey")
    ) {
        output = "Hello, nice to meet you! How can I help you today?";
    } else if (input.includes("what services do you offer")) {
        output =
            "We specialize in managing weddings, birth ceremonies, family milestones, and other custom events. Let us know your requirements!";
    } else if (input.includes("how to book an event")) {
        output =
            "Go to book event section and fill the form. We will get back to you as soon as possible.";
    } else if (input.includes("how much does it cost")) {
        output =
            "Costs depend on the services you select.Please select the services you want in book event section and we will get back to you with the cost.";
    } else if (input.includes("what is your refund policy")) {
        output =
            "Cancellations are subject to our policy. Share your booking ID, and I will guide you through the process.";
    } else if (input.includes("contact")) {
        output =
            "You can contact us at 8766683310 or email us at atharv.kulkarni864@gmail.com";
    } else {
        output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
}


function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}


function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function () {
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = "";
    }
}


document.getElementById("button").addEventListener("click", sendMessage);
document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
});
