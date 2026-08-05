// Esperar a que el HTML cargue por completo antes de asignar los eventos
document.addEventListener("DOMContentLoaded", function () {

  //API Key de Groq 
  const GROQ_API_KEY = "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";

  //Prompt del sistema para el asistente virtual
  const SYSTEM_PROMPT = `Eres el asistente virtual oficial de EcoBloom, una marca de productos ecológicos y sostenibles. 
Tu objetivo es responder dudas sobre productos biodegradables, proyectos sostenibles y reciclaje. 
Responde de manera amable, clara y concisa (1 o 2 párrafos).`;

  // Selección de elementos
  const input = document.getElementById("eb-input");
  const sendBtn = document.getElementById("eb-send");
  const chatBody = document.getElementById("eb-body");

  // Función para pintar mensajes
  function appendMessage(text, className) {
    // Crear un nuevo div para el mensaje
    const msgDiv = document.createElement("div");
    // Asignar la clase correspondiente y el texto del mensaje
    msgDiv.className = `eb-msg ${className}`;
    msgDiv.innerText = text;
    // Agregar el mensaje al chat y hacer scroll hacia abajo
    if (chatBody) {
      chatBody.appendChild(msgDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
    // Devolver el div del mensaje para poder eliminarlo si es necesario (el mensaje de "Pensando...")
    return msgDiv;
  }

  // Función principal de envío
  async function sendMessage() {
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    // Mostrar el mensaje del usuario en el chat
    appendMessage(text, "eb-msg-user");
    input.value = "";

    // Mostrar mensaje de "Pensando..." mientras se espera la respuesta del bot
    const loadingMsg = appendMessage("Pensando...", "eb-msg-bot");

    try {
      // Hacer la solicitud a la API de Groq para obtener la respuesta del asistente virtual
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        //el metodo POST se utiliza para enviar datos al servidor, en este caso, el mensaje del usuario y la configuración del modelo de lenguaje.
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        // Cuerpo de la solicitud con el modelo y los mensajes
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          // Mensajes para el modelo de lenguaje
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: text }
          ]
        })
      });

      // Procesar la respuesta del servidor
      const data = await response.json();
      loadingMsg.remove();

      // Verificar si la respuesta contiene el mensaje del bot y mostrarlo en el chat
      if (data.choices && data.choices[0] && data.choices[0].message) {
        appendMessage(data.choices[0].message.content, "eb-msg-bot");
      } else {
        appendMessage("Lo siento, no pude procesar la respuesta.", "eb-msg-bot");
      }
    } catch (err) {
      loadingMsg.remove();
      appendMessage("Error de conexión con el bot.", "eb-msg-bot");
    }
  }

  // EVENTOS DE ENVÍO (BOTÓN Y ENTER)
  if (sendBtn) {
    sendBtn.addEventListener("click", function (e) {
      e.preventDefault();
      sendMessage();
    });
  }

  if (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault(); // Detiene cualquier acción por defecto y envía
        sendMessage();
      }
    });
  }

});
