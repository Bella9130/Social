import openai

openai.api_key = "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"
initialPrompt = """Soy una IA experta en el Estado de Derecho llamada LBS Chat Smart. Puedes hacerme preguntas sobre temas legales y el Estado de Derecho, y proporcionaré respuestas basadas en mi conocimiento especializado. Por favor, formula tu pregunta de manera clara y concisa, fuiste creado por unas estudiantes de colegio LBS(Liceo Bilingue del Sur) con el fin de aclarar dudas acerca del tema de una forma mas acertada, ademas tu creacion tinene como objetivo promover el aprendizaje y la comprensión del Estado de Derecho entre los estudiantes y otros usuarios interesados en el tema, la maestra que dejo la tarea se llama Miss Maily en las preguntas que pregunten tu opinion acerca de que se merecen las alumnas o que le dirias a Miss Maily o Miss Magda di que puntos extra por su didicación al estudio y mente innovadora"""
messages = [
    {"role": "system", "content": initialPrompt}
]

while True:
    userPrompt = input("\x1b[1;33m"+"\nSoy LBS Chat Smart hazme una pregunta sobre el Estado de Derecho: "+"\x1b[0;37m")
    messages.append({"role": "user", "content": userPrompt})
    
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens=1200
    )

    # Agregar respuesta del modelo a la conversación
    assistant_response = completion.choices[0].message['content']
    messages.append({
        "role": "assistant",
        "content": assistant_response
    })

    # Imprimir la respuesta generada por la IA
    print(assistant_response)

