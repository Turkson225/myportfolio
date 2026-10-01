const projects=[
{slug:"flight-command",title:"Flight Command Center",category:"Flight Systems",year:"2026",description:"Mission planning, telemetry intelligence, flight analysis and navigation interfaces for a fixed-wing aircraft platform.",stack:["Arduino Nano","ESP","MPU9250","GPS","Firebase"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/fixed-wing-drone-prototype.jpg",live:"https://turkson225.github.io/flight-command-center/",repo:"https://github.com/Turkson225/flight-command-center",problem:"Flight telemetry and mission preparation were spread across separate tools and test flows.",solution:"A unified command-center interface for navigation, mission packages, telemetry, replay and diagnostics."},
{slug:"smartguard",title:"SmartGuard Home Security",category:"Security / IoT · Client Project",year:"2026",description:"Three-part intelligent security and automation system combining AI-assisted face recognition, GSM/email alerts, four-channel control, spreadsheet logging and live surveillance.",stack:["ESP32-CAM","HuskyLens","SIM800L","4-Channel Relay","Apps Script"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/gsm-security-node.jpg",live:"https://turkson225.github.io/smartguard-dashboard/",repo:"https://github.com/Turkson225/smartguard-dashboard",problem:"The client needed security detection, evidence, emergency triggering, appliance control and post-alert monitoring to work as one coordinated system rather than separate devices.",solution:"Build three coordinated physical subsystems under one dashboard: an intelligent camera/alert panel, a four-channel automation panel and a dedicated live-monitoring camera, with cloud/spreadsheet evidence and GSM fallback."},
{slug:"smart-energy-panel",title:"Smart Energy Monitoring & Control Panel",category:"Energy / IoT",year:"2026",description:"Client-built household and small-business energy panel combining live electrical monitoring, four-channel control, local display and spreadsheet data analysis.",stack:["ESP32","Energy Metering","4-Channel Control","LCD","Apps Script"],image:"./assets/smart-energy-panel-hero.webp",live:null,repo:null,problem:"Homes and small businesses often lack a simple way to see energy conditions, control multiple circuits and keep historical records in one system.",solution:"Build an integrated panel that combines electrical monitoring, local circuit control, on-device status display, a web dashboard and spreadsheet logging for later analysis."},
{slug:"smart-circuit",title:"Smart Circuit Isolator",category:"Power / Monitoring",year:"2026",description:"Electrical telemetry, relay control and protection-oriented monitoring around an ESP32 measurement platform.",stack:["ESP32","PZEM004T","ZMPT101B","ACS712","Relays"],image:"./assets/smart-circuit-isolator-dashboard.webp",live:"https://turkson225.github.io/smart-circuit-isolator-dashboard/",repo:"https://github.com/Turkson225/smart-circuit-isolator-dashboard",problem:"Electrical faults and overloads are harder to understand when measurement and load state are separated.",solution:"Unify live readings, channel state, control and protection context in one interface."},
{slug:"space-club",title:"Space Engineering Club",category:"Engineering Platform",year:"2026",description:"Role-aware engineering community platform with courses, projects, submissions, messaging, events and administration.",stack:["Supabase","Auth","Realtime","PWA","Web"],image:"./assets/space-engineering-club.webp",imageFit:"contain",imageAlt:"Space Engineering Club platform displayed on a monitor with its official website address",live:"https://turkson225.github.io/Turk-Innovation-CLUB/",repo:"https://github.com/Turkson225/Turk-Innovation-CLUB",problem:"Engineering communities need structured learning, collaboration and administration in one place.",solution:"Combine training, projects, messaging, events and role-based operations in one platform."},
{slug:"gas-detector",title:"ESP32 Gas Detector",category:"Safety / IoT",year:"2026",description:"Gas-safety prototype with local warning behaviour, enclosure development and connected monitoring.",stack:["ESP32","Gas Sensor","Alarm","Web"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/gassafe-device-front.jpg",live:"https://turkson225.github.io/ESP32GASDETECTOR.01/",repo:"https://github.com/Turkson225/ESP32GASDETECTOR.01",problem:"A raw gas reading does not provide enough safety context for a user.",solution:"Translate sensor readings into clear alarm states and remote visibility."},
{slug:"relay-control",title:"ESP32 Relay Control",category:"Automation / IoT",year:"2026",description:"Four-channel appliance automation with remote switching and browser-based state feedback.",stack:["ESP32","Relays","Wi-Fi","Web UI"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/mobile-relay-dashboard.jpg",live:"https://turkson225.github.io/ESP32RelayControl-0.3/",repo:"https://github.com/Turkson225/ESP32RelayControl-0.3",problem:"Remote switching is unreliable for users if channel state is unclear.",solution:"Pair relay commands with a visible control and feedback interface."},
{slug:"flight-deck",title:"Flight Deck V1",category:"Ground Station",year:"2026",description:"RC telemetry and bench-control interface using nRF24 radio, UART and IMU data for fixed-wing development.",stack:["nRF24L01","Arduino Nano","ESP8266","MPU6050","UART"],image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/gps-sensor-development-board.jpg",live:"https://turkson225.github.io/FLIGHT-DECK-V1/",repo:"https://github.com/Turkson225/FLIGHT-DECK-V1",problem:"Radio, motion and battery state are difficult to debug when they are observed separately.",solution:"Bring control, link-health and sensor telemetry into one responsive ground-station view."},
{slug:"turk-innovation",title:"Turk Innovation",category:"Engineering Platform",year:"2026",description:"A technology platform presenting engineering systems, evidence, product directions and technical communication.",stack:["React","Vite","Tailwind","Supabase","Web"],image:"./assets/turk-innovation-platform.webp",imageFit:"contain",imageAlt:"Turk Innovation homepage showing its logo and Engineering intelligent systems for the real world headline",live:"https://turkson225.github.io/turk-innovation/",repo:"https://github.com/Turkson225/turk-innovation",problem:"Engineering work needs a clear evidence-based public narrative to be understood outside the lab.",solution:"Present projects, prototypes, proof and product direction through one coherent technical platform."},
{slug:"recovery-ugv",title:"Autonomous Recovery Assistance UGV",category:"Robotics / AGV",year:"2026",description:"Ongoing autonomous ground-vehicle prototype designed to reduce repetitive manual material transport in a high-throughput recovery workflow.",stack:["Line Following","HuskyLens AI","Sensors","Motor Control","UGV"],image:"./assets/agv-prototype-hero.webp",live:null,repo:null,problem:"Repeated manual transport of recovered components can add physical strain and consume operator time in high-throughput workflows.",solution:"Develop a compact autonomous UGV that can follow a defined route, use onboard sensing and AI-assisted recognition, and carry recovered components between work areas."}
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
      <div class="project-action"><span>Open Engineering Case Study</span><b>↗</b></div>
    </div>
  </article>`).join("");

miniProjectGrid.innerHTML=projects.map(p=>`<a class="mini-project" href="./case-study.html?project=${p.slug}"><strong>${p.title}</strong><span>${p.category}</span></a>`).join("");

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
  if(!card)return;
  const project=projects[Number(card.dataset.project)];
  location.href="./case-study.html?project="+encodeURIComponent(project.slug);
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
