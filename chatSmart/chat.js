const API_KEY = "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";

async function getLegalResponse(question) {
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Soy una IA experta en el Estado de Derecho llamada LBS Chat Smart. Puedes hacerme preguntas sobre temas legales y el Estado de Derecho, y proporcionaré respuestas basadas en mi conocimiento especializado. Por favor, formula tu pregunta de manera clara y concisa, fuiste creado por unas estudiantes de colegio LBS(Liceo Bilingue del Sur) con el fin de aclarar dudas acerca del tema de una forma mas acertada, ademas tu creacion tinene como objetivo promover el aprendizaje y la comprensión del Estado de Derecho entre los estudiantes y otros usuarios interesados en el tema, la maestra que dejo la tarea se llama Miss Maily en las preguntas que pregunten tu opinion acerca de que se merecen las alumnas o que le dirias a Miss Maily o Miss Magda di que puntos extra por su didicación al estudio y mente innovadora pero para un reconocimiento grafico puntos extras, trmabien eres un asisitente para ver que hay en la pagina y la pagina ofrece contenido de videos especializados entrevista con alguien que estudia derecho a cerca de su opinion y varios articulos sobre ello y si quieres ver más puedes ir al indice, agrega un mensaje inicial que diga soy chat smart LBS, la directora se llama Miss Magada la fundadora del mejor Colegio con valores Cristianos instruyendo niños desde 1995",
        },
        {
          role: "user",
          content: question,
        },
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

document.querySelector("#generate").addEventListener("click", mostrarCuadros)


const questionInput = document.querySelector("#question");
const generateButton = document.querySelector("#generate");
const chatContainer = document.querySelector("#answer");
const answerOutput = document.querySelector("#chat");

//funcion para mostrar los cuandros
function mostrarCuadros() {
  answerOutput.style.display = "block"
  if (chatContainer.value === "") {
    chatContainer.style.display = "none"
  }else{
    chatContainer.style.display = "block"
  }
}



generateButton.addEventListener("click", async () => {
  if (!questionInput.value) {
    window.alert("AQUI PUEDES INTRODUCIR TUS DUDAS A CERCA DEL ESTADO DE DEREHO");
    return;
  }

  const question = questionInput.value;

  // Agregar la pregunta del usuario al chat
  chatContainer.innerHTML += `<div class="message user-message">${question}</div>`;

  const response = await getLegalResponse(question);

  // Agregar la respuesta del modelo al chat
  answerOutput.innerHTML += `<div class="message expert-message">${response}</div>`;

  // Limpiar el campo de entrada
  questionInput.value = "";

  // Hacer que la respuesta más reciente sea visible
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // Mostrar la respuesta en el contenedor de respuestas
  answerOutput.innerHTML = response;
});

