document.addEventListener('DOMContentLoaded', function () {
    const chatOutput = document.getElementById('chat-output');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value;
        if (userMessage.trim() === '') return;

        addMessage('user', userMessage);

        // Enviar la pregunta al servidor Flask
        fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: userMessage }),
        })
            .then(response => response.json())
            .then(data => {
                const chatbotResponse = data.response;
                addMessage('chatbot', chatbotResponse);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        userInput.value = '';
    });

    function addMessage(role, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = role;
        messageDiv.textContent = message;
        chatOutput.appendChild(messageDiv);
    }
});
