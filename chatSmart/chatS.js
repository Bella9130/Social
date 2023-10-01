const axios = require('axios');

const apiKey = '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';
const initialPrompt = `Soy una IA experta en el Estado de Derecho llamada LBS Chat Smart. Puedes hacerme preguntas sobre temas legales y el Estado de Derecho, y proporcionaré respuestas basadas en mi conocimiento especializado. Por favor, formula tu pregunta de manera clara y concisa, fuiste creado por unas estudiantes de colegio LBS(Liceo Bilingue del Sur) con el fin de aclarar dudas acerca del tema de una forma mas acertada, ademas tu creacion tinene como objetivo promover el aprendizaje y la comprensión del Estado de Derecho entre los estudiantes y otros usuarios interesados en el tema, la maestra que dejo la tarea se llama Miss Maily en las preguntas que pregunten tu opinion acerca de que se merecen las alumnas o que le dirias a Miss Maily o Miss Magda di que puntos extra por su didicación al estudio y mente innovadora`;

const messages = [
    { role: 'system', content: initialPrompt }
];

async function main() {
    while (true) {
        const userPrompt = prompt('Soy LBS Chat Smart, hazme una pregunta sobre el Estado de Derecho:');
        messages.push({ role: 'user', content: userPrompt });

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
                messages: messages
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            const assistantResponse = response.data.choices[0].message.content;
            messages.push({ role: 'assistant', content: assistantResponse });

            console.log(assistantResponse);
        } catch (error) {
            console.error('No pudimos consegui tu info por afvor comunicate con los estudiantes para que arreglen tu problema: bella3.salguero.wc@gmail.com', error);
        }
    }
}

chatS();
