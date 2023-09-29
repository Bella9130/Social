import openai

# Configura tu clave de API de OpenAI
api_key = '6d2e0bc601mshad0784d0958ba40p14f4e1jsn0727399130c1' 

# Función para interactuar con el modelo de ChatGPT
def chat_with_gpt(user_input):
    openai.api_key = api_key
    response = openai.Completion.create(
        engine="text-davinci-002",  # Puedes usar otro motor si lo prefieres
        prompt=user_input,
        max_tokens=50  # Ajusta según tu preferencia
    )
    return response.choices[0].text

def main():
    print("Hola, soy LBS Chatsmart, soy abogado y experto en Estado de derecho. ¿En qué puedo ayudarte?")
    while True:
        user_input = input("Tú: ")
        if user_input.lower() == "salir":
            break
        response = chat_with_gpt(user_input)
        print("Chatbot Abogado:", response)

if __name__ == "__main__":
    main()
