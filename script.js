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

  setTimeout(() => {
    window.location.href = urlZap;
    btn.innerText = "Solicitar meu Projeto!"; // Volta o botão ao normal
    btn.disabled = false;
  }, 800);
}

// ==========================================
// SCRIPT DO MENU (CORRIGIDO)
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
  // 1. CORREÇÃO: Letra M maiúscula para bater com o HTML
  const toggle = document.getElementById('Menu-toggle'); 
  const nav = document.getElementById('nav-menu');

  if (!toggle || !nav) {
    console.warn('Botão de menu ou navegação não encontrados. Verifique os IDs no HTML.');
    return;
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    // 2. CORREÇÃO: Usando a classe 'active' que configuramos no CSS
    nav.classList.toggle('active'); 
  });

  // Fecha ao clicar em um link do menu
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('active');
    }
  });

  // Fecha o menu se clicar em qualquer lugar fora dele
  document.addEventListener('click', function (e) {
    const isInside = nav.contains(e.target) || toggle.contains(e.target);
    if (!isInside && nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });
});