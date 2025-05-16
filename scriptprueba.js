document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.getElementById('mychat');
    const mensajeInput = document.getElementById('mensaje-input');
    const enviarBoton = document.getElementById('enviar-boton');

    mensajeInput.addEventListener('click', function() {
        if (this.placeholder === 'Escriba su pregunta aquí, este texto se borrara al pulsar.') {
            this.placeholder = '';
            this.value = '';
        }
    });

    enviarBoton.addEventListener('click', enviarMensaje);

    mensajeInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            enviarMensaje();
        }
    });

    function agregarMensaje(texto, remitente) {
        const mensajeHTML = `<div><strong>${remitente}:</strong> ${texto}</div>`;
        chatWindow.innerHTML += mensajeHTML;
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    async function enviarMensaje() {
        const mensajeTexto = mensajeInput.value.trim();
        if (mensajeTexto === '') return;

        agregarMensaje(mensajeTexto, "Tú");
        mensajeInput.value = '';
        mensajeInput.placeholder = 'Escriba su pregunta aquí, este texto se borrara al pulsar.';

        try {
            const response = await fetch("http://localhost:3000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: mensajeTexto })
            });

            if (!response.ok) {
                throw new Error(`Error del servidor: ${response.status}`);
            }

            const data = await response.json();
            agregarMensaje(data.reply, "Asistente");

        } catch (error) {
            console.error("Error al obtener respuesta del backend:", error);
            agregarMensaje("Error al obtener respuesta del servidor. Verifica que el backend esté funcionando.", "Sistema");
        }
    }
});
