document.getElementById("enviar-boton").addEventListener("click", async () => {
    const input = document.getElementById("mensaje-input");
    const mensaje = input.value.trim();
    if (!mensaje) return;

    input.value = "";

    const chat = document.getElementById("mychat");
    chat.innerHTML += `<div><strong>Tú:</strong> ${mensaje}</div>`;

    try {
        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: mensaje })
        });

        const data = await response.json();
        chat.innerHTML += `<div><strong>Asistente:</strong> ${data.reply}</div>`;
    } catch (error) {
        console.error("Error:", error);
        chat.innerHTML += `<div style="color:red"><strong>Error:</strong> No se pudo obtener respuesta</div>`;
    }
});