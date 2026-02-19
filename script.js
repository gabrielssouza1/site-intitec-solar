// ===== SCROLL SUAVE PARA LINKS DO MENU =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
<script>
document.getElementById("formSolar").addEventListener("submit", function(e) {
  e.preventDefault();

  const gasto = parseFloat(document.getElementById("gasto").value);
  const resultadoDiv = document.getElementById("resultado");
  const valorTexto = document.getElementById("valor-economia");

  // Cálculo Simples: Média de 90% de economia
  const economiaEstimada = gasto * 0.90;

  // Mostrar Resultado com animação simples
  valorTexto.innerText = `R$ ${economiaEstimada.toLocaleString('pt-BR', {minimumFractionDigits: 2})} /mês`;
  resultadoDiv.style.display = "block";
  resultadoDiv.scrollIntoView({ behavior: 'smooth' });

  // Envio dos dados para o Google Sheets (seu código original)
  const dados = {
    nome: document.getElementById("nome").value,
    gasto: gasto,
    whatsapp: document.getElementById("whatsapp").value,
    // Note: adicionei campos conforme o HTML novo
  };

  fetch(https://script.google.com/macros/s/AKfycbzwHxJEDV3W_WKassr8Rsq3C1824haBophYCvwpq7AQz9raauf3dVx4w1gMh7r760gt/exec
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
    body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(() => console.log("Dados enviados!"))
  .catch(err => console.error(err));
});