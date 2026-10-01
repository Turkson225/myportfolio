const projects=[
{title:"Flight Command Center",category:"Flight Systems",year:"2026",description:"Mission planning, telemetry intelligence, flight analysis and navigation interfaces for a fixed-wing aircraft platform.",stack:["Arduino Nano","ESP","MPU9250","GPS","Firebase"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/fixed-wing-drone-prototype.jpg",live:"https://turkson225.github.io/flight-command-center/",repo:"https://github.com/Turkson225/flight-command-center",problem:"Flight telemetry and mission preparation were spread across separate tools and test flows.",solution:"A unified command-center interface for navigation, mission packages, telemetry, replay and diagnostics."},
{title:"SmartGuard Home Security",category:"Security / IoT",year:"2026",description:"Face recognition, evidence capture, GSM alerts, cloud logging and remote monitoring in one connected security system.",stack:["ESP32-CAM","HuskyLens","SIM800L","Firebase","Apps Script"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/smartguard-dashboard.jpg",live:"https://turkson225.github.io/smartguard-dashboard/",repo:"https://github.com/Turkson225/smartguard-dashboard",problem:"Security alerts are less useful without evidence, fallback communication and remote visibility.",solution:"Layer local recognition, GSM/email notification, cloud evidence and operator monitoring."},
{title:"Smart Circuit Isolator",category:"Power / Monitoring",year:"2026",description:"Electrical telemetry, relay control and protection-oriented monitoring around an ESP32 measurement platform.",stack:["ESP32","PZEM004T","ZMPT101B","ACS712","Relays"],image:"./assets/smart-circuit-isolator-dashboard.webp",live:"https://turkson225.github.io/smart-circuit-isolator-dashboard/",repo:"https://github.com/Turkson225/smart-circuit-isolator-dashboard",problem:"Electrical faults and overloads are harder to understand when measurement and load state are separated.",solution:"Unify live readings, channel state, control and protection context in one interface."},
{title:"Space Engineering Club",category:"Engineering Platform",year:"2026",description:"Role-aware engineering community platform with courses, projects, submissions, messaging, events and administration.",stack:["Supabase","Auth","Realtime","PWA","Web"],image:"./assets/space-engineering-club.webp",imageFit:"contain",imageAlt:"Space Engineering Club platform displayed on a monitor with its official website address",live:"https://turkson225.github.io/Turk-Innovation-CLUB/",repo:"https://github.com/Turkson225/Turk-Innovation-CLUB",problem:"Engineering communities need structured learning, collaboration and administration in one place.",solution:"Combine training, projects, messaging, events and role-based operations in one platform."},
{title:"ESP32 Gas Detector",category:"Safety / IoT",year:"2026",description:"Gas-safety prototype with local warning behaviour, enclosure development and connected monitoring.",stack:["ESP32","Gas Sensor","Alarm","Web"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/gassafe-device-front.jpg",live:"https://turkson225.github.io/ESP32GASDETECTOR.01/",repo:"https://github.com/Turkson225/ESP32GASDETECTOR.01",problem:"A raw gas reading does not provide enough safety context for a user.",solution:"Translate sensor readings into clear alarm states and remote visibility."},
{title:"ESP32 Relay Control",category:"Automation / IoT",year:"2026",description:"Four-channel appliance automation with remote switching and browser-based state feedback.",stack:["ESP32","Relays","Wi-Fi","Web UI"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/mobile-relay-dashboard.jpg",live:"https://turkson225.github.io/ESP32RelayControl-0.3/",repo:"https://github.com/Turkson225/ESP32RelayControl-0.3",problem:"Remote switching is unreliable for users if channel state is unclear.",solution:"Pair relay commands with a visible control and feedback interface."},
{title:"Flight Deck V1",category:"Ground Station",year:"2026",description:"RC telemetry and bench-control interface using nRF24 radio, UART and IMU data for fixed-wing development.",stack:["nRF24L01","Arduino Nano","ESP8266","MPU6050","UART"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/gps-sensor-development-board.jpg",live:"https://turkson225.github.io/FLIGHT-DECK-V1/",repo:"https://github.com/Turkson225/FLIGHT-DECK-V1",problem:"Radio, motion and battery state are difficult to debug when they are observed separately.",solution:"Bring control, link-health and sensor telemetry into one responsive ground-station view."},
{title:"Turk Innovation",category:"Engineering Platform",year:"2026",description:"A technology platform presenting engineering systems, evidence, product directions and technical communication.",stack:["React","Vite","Tailwind","Supabase","Web"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/operations-command-center.jpg",live:"https://turkson225.github.io/turk-innovation/",repo:"https://github.com/Turkson225/turk-innovation",problem:"Engineering work needs a clear evidence-based public narrative to be understood outside the lab.",solution:"Present projects, prototypes, proof and product direction through one coherent technical platform."}
];

const projectGrid=document.getElementById("projectGrid");
const miniProjectGrid=document.getElementById("miniProjectGrid");
const dialog=document.getElementById("projectDialog");
const dialogBody=document.getElementById("dialogBody");
const dialogClose=document.getElementById("dialogClose");

projectGrid.innerHTML=projects.map((p,i)=>`
  <article class="project-card" data-project="${i}">
    <div class="project-image ${p.imageFit==='contain'?'project-image-contain':''}"><img loading="lazy" src="${p.image}" alt="${p.imageAlt||p.title}"></div>
    <div class="project-copy">
      <div class="project-meta"><span>${p.category}</span><span>${p.year}</span></div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.stack.map(s=>`<span>${s}</span>`).join("")}</div>
      <div class="project-action"><span>View Case Study</span><b>↗</b></div>
    </div>
  </article>`).join("");

miniProjectGrid.innerHTML=projects.map(p=>`<div class="mini-project"><strong>${p.title}</strong><span>${p.category}</span></div>`).join("");

function openProject(index){
  const p=projects[index];
  dialogBody.innerHTML=`
    <div class="dialog-image ${p.imageFit==='contain'?'dialog-image-contain':''}"><img src="${p.image}" alt="${p.imageAlt||p.title}"></div>
    <div class="dialog-kicker">${p.category} / ${p.year}</div>
    <h2>${p.title}</h2>
    <p>${p.description}</p>
    <div class="dialog-details">
      <div><span>PROBLEM</span><strong>${p.problem}</strong></div>
      <div><span>SOLUTION</span><strong>${p.solution}</strong></div>
      <div><span>TECHNOLOGY</span><strong>${p.stack.join(" · ")}</strong></div>
      <div><span>STATUS</span><strong>Engineering project / documented build</strong></div>
    </div>
    <div class="dialog-actions">
      <a class="primary-button" href="${p.live}" target="_blank" rel="noreferrer">Live Project ↗</a>
      <a class="text-button" href="${p.repo}" target="_blank" rel="noreferrer">GitHub Source ↗</a>
    </div>`;
  dialog.showModal();
}
projectGrid.addEventListener("click",e=>{
  const card=e.target.closest("[data-project]");
  if(card)openProject(Number(card.dataset.project));
});
dialogClose.addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});

document.querySelectorAll(".tab-button").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab-button").forEach(b=>b.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-"+btn.dataset.tab).classList.add("active");
}));

const menuButton=document.getElementById("menuButton");
const nav=document.getElementById("nav");
menuButton.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(open));
});
nav.addEventListener("click",()=>nav.classList.remove("open"));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const target=document.querySelector(a.getAttribute("href"));
  if(!target)return;
  e.preventDefault();
  target.scrollIntoView({behavior:"smooth",block:"start"});
}));
