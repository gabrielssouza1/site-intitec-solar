function enviarEstrategiaVendas() {
  const btn = document.getElementById("btnSimular");
  
  // Captura os dados dos campos do formulário
  const nome = document.getElementById("nome").value;
  const gasto = document.getElementById("gasto").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const email = document.getElementById("email").value;

  // Validação simples para não enviar vazio
  if (!nome || !gasto || !whatsapp) {
    alert("Por favor, preencha seus dados para receber o estudo.");
    return;
  }

  // Organiza os dados exatamente como o Script do Google espera
  const dadosParaPlanilha = {
    data: new Date().toLocaleString("pt-BR"),
    nome_cliente: nome,
    gasto_mensal: gasto,
    whatsapp_contato: whatsapp,
    email_contato: email
  };

  btn.innerText = "Enviando...";
  btn.disabled = true;

  // AQUI VOCÊ USA A SUA URL DO GOOGLE
  fetch("https://script.google.com/macros/s/AKfycbzwHxJEDV3W_WKassr8Rsq3CI824haBophYCvwpq7AQz9raauf3dVx4w1gMhTr76Dqt/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(dadosParaPlanilha)
  });

  // REDIRECIONAMENTO PARA O WHATSAPP (Estratégia de Vendas)
  const mensagem = `Olá! Meu nome é ${nome}. Acabei de Preencher o Fórmulario no site. Meu gasto mensal é R$ ${gasto}. Quero saber quanto vou economizar!`;
  const urlZap = `https://wa.me/5591985981418?text=${encodeURIComponent(mensagem)}`;

  // Espera só um pouquinho para dar tempo do envio e pula para o Zap
  setTimeout(() => {
    window.location.href = urlZap;
  }, 800);
}