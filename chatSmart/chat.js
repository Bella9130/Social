document.addEventListener('DOMContentLoaded', function () {
    const chatOutput = document.getElementById('chat-output');
    addMessage('user', 'Hola soy LBS Chat Smart ¿En que puedo ayudarte acerca del Estado de Derecho?')
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Declarar un array para almacenar los mensajes
    const messages = [];

    const apiKey = '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'; 

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        // Añadir el mensaje del usuario al chat
        addMessage('user', userMessage);

        // Enviar la pregunta del usuario al chatbot
        chatS(userMessage);

        userInput.value = '';
    });

    function addMessage(role, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = role;
        messageDiv.innerHTML = message; // Utiliza innerHTML en lugar de textContent
        chatOutput.appendChild(messageDiv);
    }
    

    async function chatS(prompt) {
        const userPrompt = prompt;
        messages.push({ role: 'user', content: userPrompt });

        try {
            // Enviar los mensajes al modelo de lenguaje GPT-3.5 Turbo
            const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
                messages: messages
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}` // Utilizar la apiKey aquí
                }
            });

            const assistantResponse = response.data.choices[0].message.content;
            messages.push({ role: 'assistant', content: assistantResponse });

            // Mostrar la respuesta del asistente en el chat
            addMessage('assistant', assistantResponse);

            console.log(assistantResponse);
        } catch (error) {
            console.error('No se pudo obtener la respuesta del asistente:', error);
        }
    }
});
