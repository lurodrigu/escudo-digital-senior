/*document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.getElementById('mychat');
    const mensajeInput = document.getElementById('mensaje-input');
    const enviarBoton = document.getElementById('enviar-boton');

    // Borrar el texto del input al hacer clic
    mensajeInput.addEventListener('click', function() {
        if (this.placeholder === 'Escriba su pregunta aquí, este texto se borrara al pulsar.') {
            this.placeholder = '';
            this.value = '';
        }
    });

    enviarBoton.addEventListener('click', enviarMensaje);
    mensajeInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            enviarMensaje();
        }
    });

    function enviarMensaje() {
        const mensajeTexto = mensajeInput.value.trim();
        if (mensajeTexto !== '') {
            agregarMensaje(mensajeTexto, true); // true indica que es un mensaje del usuario
            // Aquí iría la lógica para la respuesta del "asistente inteligente"
            // Por ahora, simularemos una respuesta después de un breve retraso
            setTimeout(() => {
                agregarMensaje(generarRespuestaInteligente(mensajeTexto), false); // false indica mensaje del asistente
            }, 1000);
            mensajeInput.value = ''; // Limpiar el input después de enviar
            mensajeInput.placeholder = 'Escriba su pregunta aquí, este texto se borrara al pulsar.'; // Restaurar el placeholder
        }
    }

    function agregarMensaje(texto, remitente) {
    const chat = document.getElementById("mychat");
    const mensajeHTML = `<div><strong>${remitente}:</strong> ${texto}</div>`;
    chat.innerHTML += mensajeHTML;
}



   /* document.getElementById("mensaje-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault(); // Evita que se envíe un formulario si hay uno
        document.getElementById("enviar-boton").click();
    }
});

 /* function agregarMensaje(mensaje, esUsuario) {
        const nuevoMensaje = document.createElement('p');
        nuevoMensaje.textContent = mensaje;
        if (esUsuario) {
            nuevoMensaje.classList.add('user-message');
        }
        chatWindow.appendChild(nuevoMensaje);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Hacer scroll al último mensaje
    }

   /* function generarRespuestaInteligente(pregunta) {
        // Simulación de respuestas basadas en algunas palabras clave
        const preguntaLower = pregunta.toLowerCase();
        if (preguntaLower.includes('página web falsa') || preguntaLower.includes('sitio falso')) {
            return "Para identificar una página web falsa, revise la URL (busque errores ortográficos o caracteres extraños), verifique el certificado de seguridad (el candado en la barra de direcciones), desconfíe de diseños descuidados y de solicitudes de información personal sospechosas.";
        } else if (preguntaLower.includes('contraseña') || preguntaLower.includes('clave')) {
            return "Una contraseña segura debe ser larga, incluir una combinación de letras mayúsculas y minúsculas, números y símbolos. Evite usar información personal fácil de adivinar.";
        } else if (preguntaLower.includes('phishing')) {
            return "El phishing es un intento de engañarle para que revele información personal a través de correos electrónicos, mensajes o sitios web falsos que parecen legítimos.";
        } else {
            return "No logro comprender su pregunta. Por favor, sea más específico o pregunte sobre otro tema de ciberseguridad para adultos mayores.";
        }
    }*/
});