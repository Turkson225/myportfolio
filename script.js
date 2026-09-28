const projects = [
  {
    id:"smartguard", title:"SmartGuard Home Security", category:"iot", label:"Security / IoT", year:"2026",
    description:"Connected intrusion detection combining ESP32-CAM, HuskyLens recognition, GSM alerts, cloud evidence capture and a remote security dashboard.",
    detail:"A two-system home-security architecture: the recognition unit detects unknown faces, captures evidence and sends alerts while a separate ESP32 relay unit manages the intrusion alarm and appliance channels. The platform connects Firebase, Google Sheets, Apps Script and Drive with email/SMS notification paths.",
    stack:["ESP32-CAM","HuskyLens","SIM800L","Firebase","Apps Script"],
    repo:"https://github.com/Turkson225/smartguard-dashboard", live:"https://turkson225.github.io/smartguard-dashboard/", accent:"cyan"
  },
  {
    id:"flight-command", title:"Flight Command Center", category:"flight", label:"Flight systems", year:"2026",
    description:"A browser cockpit for fixed-wing navigation, telemetry intelligence, mission planning and post-flight analysis.",
    detail:"The current platform combines an aircraft-side Nano/ESP architecture with a rich browser workspace: attitude, navigation, health, alerts, simulation, mission packages, JSON import/export, recordings and analysis. The design keeps flight-critical authority onboard rather than in the browser.",
    stack:["Arduino Nano","ESP gateway","MPU9250","GPS","Firebase"],
    repo:"https://github.com/Turkson225/flight-command-center", live:"https://turkson225.github.io/flight-command-center/", accent:"lime"
  },
  {
    id:"flight-deck", title:"Flight Deck V1", category:"flight", label:"Ground station", year:"2026",
    description:"Responsive RC telemetry and bench-control interface for a custom fixed-wing platform.",
    detail:"nRF24 control packets are received by a Nano, forwarded over framed UART to an ESP8266 gateway, then surfaced in a telemetry-first dashboard with pitch/roll, link health, battery, button states, recording and diagnostics.",
    stack:["nRF24L01","Arduino Nano","ESP8266","MPU6050","UART"],
    repo:"https://github.com/Turkson225/FLIGHT-DECK-V1", live:"https://turkson225.github.io/FLIGHT-DECK-V1/", accent:"cyan"
  },
  {
    id:"power", title:"Smart Circuit Isolator", category:"power", label:"Power / Monitoring", year:"2026",
    description:"A connected power monitoring and isolation concept with live electrical measurements, relay control and protection logic.",
    detail:"The project direction combines voltage/current sensing, multi-channel control, fault logging and a responsive dashboard for electrical visibility. It grew from practical PZEM/ZMPT/ACS712 bench work into a more structured protection-oriented interface.",
    stack:["ESP32","PZEM004T","ZMPT101B","ACS712","Relays"],
    repo:"https://github.com/Turkson225/smart-circuit-isolator-dashboard", live:"#", accent:"orange"
  },
  {
    id:"gas", title:"ESP32 Gas Detector", category:"iot", label:"Safety / IoT", year:"2026",
    description:"Embedded gas-detection prototype focused on local sensing, alarm behavior and connected monitoring.",
    detail:"A compact ESP32-based safety prototype that represents the broader pattern across the portfolio: sensor input, local decision logic, human-visible alarm states and a path toward connected monitoring.",
    stack:["ESP32","Gas sensor","Alarm","IoT"],
    repo:"https://github.com/Turkson225/ESP32GASDETECTOR.01", live:"#", accent:"orange"
  },
  {
    id:"relay", title:"ESP32 Relay Control", category:"iot", label:"Automation", year:"2026",
    description:"Several iterations of networked relay control experiments used to validate appliance automation and remote switching.",
    detail:"These repos capture the iterative engineering path behind connected actuator control: basic relay switching, improved channel handling and dashboard-friendly control patterns.",
    stack:["ESP32","Relays","Wi-Fi","Web UI"],
    repo:"https://github.com/Turkson225/ESP32RelayControl-0.3", live:"#", accent:"lime"
  },
  {
    id:"robotics", title:"Turk Robotics", category:"robotics", label:"Robotics", year:"2026",
    description:"A growing robotics platform spanning autonomous vehicle concepts, UGV work and embedded control experiments.",
    detail:"The robotics work is the physical side of the portfolio: chassis, sensing, control, embedded compute and operator interfaces built with an emphasis on useful prototypes rather than isolated demonstrations.",
    stack:["Embedded C/C++","Sensors","Motors","Control","Web"],
    repo:"https://github.com/Turkson225/turk-robotics", live:"#", accent:"lime"
  },
  {
    id:"innovation", title:"Turk Innovation", category:"web", label:"Digital product", year:"2026",
    description:"A technology brand platform connecting engineering work, products, services, stories and investor-facing communication.",
    detail:"This platform acts as the presentation layer for the wider engineering practice: product narratives, portfolio material, applications, reviews and a visual language designed to make technical work approachable.",
    stack:["React","Vite","Tailwind","Supabase","Web"],
    repo:"https://github.com/Turkson225/turk-innovation", live:"#", accent:"cyan"
  },
  {
    id:"club", title:"InnovateX Engineering Club", category:"web", label:"Platform / Community", year:"2026",
    description:"A role-aware engineering community platform with courses, projects, submissions, DMs, events, notifications and administration.",
    detail:"Built as a practical operating system for an engineering club: teachers manage courses and feedback, members collaborate, founders coordinate, and admins govern roles and content with Supabase-backed workflows.",
    stack:["Supabase","Auth","PWA","Realtime","Web"],
    repo:"https://github.com/Turkson225/Turk-Innovation-CLUB", live:"https://turkson225.github.io/Turk-Innovation-CLUB/", accent:"orange"
  },
  {
    id:"store", title:"Jedi's Store", category:"web", label:"E-commerce", year:"2026",
    description:"A full product-commerce experience with customer accounts, catalog management, checkout architecture and Ghana-focused delivery flows.",
    detail:"The project explores the software side of product engineering: structured catalog data, customer flows, protected owner operations, payments integration and transactional email patterns.",
    stack:["Next.js","Supabase","Paystack","Netlify","Auth"],
    repo:"https://github.com/Turkson225/turkvanta-store", live:"#", accent:"lime"
  },
  {
    id:"electronics", title:"Turk Electronics", category:"iot", label:"Engineering brand", year:"2025–26",
    description:"An umbrella engineering space for electronics, embedded prototypes, product ideas and technical communication.",
    detail:"This repository represents the broader electronics practice around connected devices, circuit prototyping and productization.",
    stack:["Electronics","ESP32","Arduino","IoT","Product"],
    repo:"https://github.com/Turkson225/turk-electronics", live:"#", accent:"cyan"
  }
];

const grid=document.getElementById("projectGrid");
const dialog=document.getElementById("projectDialog");
const dialogBody=document.getElementById("dialogBody");
const dialogClose=document.getElementById("dialogClose");

function art(accent){
  const color = accent==="lime" ? "#c5f46a" : accent==="orange" ? "#ff9a62" : "#70e1dc";
  return `<div class="card-grid"></div><span class="card-tag">SYSTEM VIEW</span><div class="device-art" style="--accent:${color}"><div class="frame"></div><i class="wire w1"></i><i class="wire w2"></i></div>`;
}
function render(list=projects){
  grid.innerHTML=list.map(p=>`
    <article class="project-card reveal" data-category="${p.category}" data-id="${p.id}">
      <div class="card-visual">${art(p.accent)}</div>
      <div class="card-body">
        <div class="card-kicker"><span>${p.label}</span><span>${p.year}</span></div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tag-row">${p.stack.map(t=>`<span class="tech-tag">${t}</span>`).join("")}</div>
        <div class="card-footer"><span>VIEW SYSTEM</span><span>↗</span></div>
      </div>
    </article>`).join("");
  observeReveal();
}
render();

document.getElementById("filters").addEventListener("click", e=>{
  const btn=e.target.closest(".filter"); if(!btn)return;
  document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active")); btn.classList.add("active");
  const f=btn.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card=>card.classList.toggle("hidden", f!=="all" && card.dataset.category!==f));
});

grid.addEventListener("click", e=>{
  const card=e.target.closest(".project-card"); if(!card)return;
  const p=projects.find(x=>x.id===card.dataset.id); if(!p)return;
  dialogBody.innerHTML=`
    <div class="dialog-kicker">${p.label.toUpperCase()} / ${p.year}</div>
    <h2 class="dialog-title">${p.title}</h2>
    <p class="dialog-description">${p.detail}</p>
    <div class="dialog-specs">
      <div class="dialog-spec"><small>SCOPE</small><strong>${p.label}</strong></div>
      <div class="dialog-spec"><small>STACK</small><strong>${p.stack.slice(0,3).join(" · ")}</strong></div>
      <div class="dialog-spec"><small>REPOSITORY</small><strong>TURKSON225</strong></div>
    </div>
    <div class="dialog-actions">
      <a class="btn btn-primary" href="${p.repo}" target="_blank" rel="noreferrer">Open GitHub ↗</a>
      ${p.live!="#" ? `<a class="btn btn-ghost" href="${p.live}" target="_blank" rel="noreferrer">Open live ↗</a>` : ""}
    </div>`;
  dialog.showModal();
});
dialogClose.addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});

const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
nav.addEventListener("click",()=>nav.classList.remove("open"));

const glow=document.getElementById("cursorGlow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

function observeReveal(){
  const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.08});
  document.querySelectorAll(".reveal:not(.in)").forEach(el=>io.observe(el));
}
observeReveal();

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const target=document.querySelector(a.getAttribute("href")); if(!target)return;
  e.preventDefault(); target.scrollIntoView({behavior:"smooth",block:"start"});
}));
