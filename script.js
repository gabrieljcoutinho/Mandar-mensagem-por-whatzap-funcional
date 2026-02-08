const btnZap = document.getElementById('btn-zap');
const modal = document.getElementById('modal-zap');
const btnConfirmar = document.getElementById('confirmar-zap');
const btnFechar = document.getElementById('fechar-modal');

// Configurações
const numeroTelefone = "5511999999999"; // Coloque o número aqui (só números) nescessario ter o 55 ou pais e o 11 ou otra cidade
const mensagem = encodeURIComponent("Olá, tudo bem?");

// Abrir modal
btnZap.onclick = () => {
    modal.style.display = "flex";
};

// Fechar modal
btnFechar.onclick = () => {
    modal.style.display = "none";
};

// Redirecionar para o Zap
btnConfirmar.onclick = () => {
    window.open(`https://wa.me/${numeroTelefone}?text=${mensagem}`, '_blank');
    modal.style.display = "none";
};

// Fechar se clicar fora da modal
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};