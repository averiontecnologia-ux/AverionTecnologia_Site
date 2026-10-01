// Averion Tecnologia — conteúdo dinâmico e ícones
const WHATSAPP = "https://wa.me/5511965463339";

const services = [
  { icon:"cpu", title:"Suporte Técnico", tagline:"Seu computador funcionando como deve funcionar.",
    items:[["search","Diagnóstico de Problema"],["gauge","Correção de Lentidão"],["shield-check","Remoção de Vírus"],
           ["mail","Configuração de E-mails"],["printer","Configuração de Impressora"],["headphones","Suporte Remoto"]] },
  { icon:"wrench", title:"Manutenção de Computadores", tagline:"Prevenir custa menos do que corrigir.",
    items:[["wrench","Limpeza Interna"],["thermometer","Troca de Pasta Térmica"],["shield-check","Diagnóstico de Hardware"],
           ["arrow-up-circle","Upgrade"],["refresh-cw","Manutenção Geral"],["lock","Configuração de Privacidade"]] },
  { icon:"wifi", title:"Redes e Internet", tagline:"Conectando você ao que realmente importa.",
    items:[["globe","Configuração de Wi-Fi"],["router","Configuração de Roteadores"],["shield-check","Segurança da Rede"],
           ["signal","Expansão de Sinal"],["cable","Crimpagem e Montagem de Cabos"],["search","Teste e Diagnóstico de Rede"]] },
  { icon:"disc", title:"Formatação e Instalação", tagline:"Mais velocidade, segurança e desempenho.",
    items:[["disc","Formatação Completa"],["folder-open","Backup de Arquivos"],["monitor-cog","Instalação de Sistemas"],
           ["zap","Instalação de Softwares"],["refresh-cw","Atualização de Máquina"],["gauge","Otimização de Desempenho"]] },
];

const highlights = [
  ["map-pin","São Paulo","Atendimento presencial"],
  ["headphones","Remoto","Suporte à distância"],
  ["calendar-days","Seg – Sáb","Dias de atendimento"],
  ["clock","08:00 – 18:00","Horário comercial"],
];

const about = [
  "Atendimento presencial em São Paulo e suporte remoto",
  "Diagnóstico transparente antes de qualquer serviço",
  "Manutenção preventiva para reduzir custos",
  "Atendimento para empresas e residências",
];

document.getElementById("services").innerHTML = services.map(s => `
  <article class="card">
    <div class="card-head">
      <i data-lucide="${s.icon}" class="glow-icon xl"></i>
      <div><h3>${s.title}</h3><p>${s.tagline}</p></div>
    </div>
    <ul class="service-items">
      ${s.items.map(([i,l]) => `<li><i data-lucide="${i}" class="glow-icon"></i><span>${l}</span></li>`).join("")}
    </ul>
  </article>`).join("");

document.getElementById("highlights").innerHTML = highlights.map(([i,t,s]) => `
  <div class="card highlight">
    <i data-lucide="${i}" class="glow-icon lg"></i>
    <p class="strong">${t}</p><p class="tiny muted">${s}</p>
  </div>`).join("");

document.getElementById("about-list").innerHTML = about.map(t => `
  <li><i data-lucide="check-circle-2" class="glow-icon lg"></i><span>${t}</span></li>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

if (window.lucide) lucide.createIcons();
