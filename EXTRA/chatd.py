import requests

# Tu clave de API de OpenAI
api_key = '6d2e0bc601mshad0784d0958ba40p14f4e1jsn0727399130c1'

# URL de la API de ChatGPT
url = 'https://api.openai.com/v1/engines/davinci-codex/completions'

# Datos de entrada (mensajes de usuario)
data = {
    'messages': [
        {'role': 'system', 'content': 'You are a chatbot lawyer'},
        {'role': 'user', 'content': 'Hola, ¿cómo estás? soy chat junior'},
    ]
}

# Configura las cabeceras con tu clave de API
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json',
}

# Realiza una solicitud POST a la API de OpenAI
response = requests.post(url, json=data, headers=headers)

# Obtiene la respuesta
if response.status_code == 200:
    result = response.json()
    # La respuesta del modelo estará en result['choices'][0]['message']['content']
    respuesta_del_modelo = result['choices'][0]['message']['content']
    print(respuesta_del_modelo)
else:
    print(f'Error al enviar solicitud a la API: {response.status_code}')
