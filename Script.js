document.getElementById("openGame").addEventListener("click", function() {
    alert("Abrir Free Fire (simulado)");
});

document.getElementById("optimize").addEventListener("click", function() {
    alert("Optimización iniciada (simulado)");
});

// Simulación de estadísticas
let fps = 60;
let ping = 30;

function updateStats() {
    document.getElementById("fps").textContent = fps;
    document.getElementById("ping").textContent = ping;
    requestAnimationFrame(updateStats);
}

updateStats();
