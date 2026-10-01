const projects = [
  {
    id:"flight-command", featured:true, title:"Flight Command Center", category:"Flight systems", year:"2026",
    description:"Fixed-wing navigation, telemetry intelligence, mission planning and post-flight analysis in one operator workspace.",
    detail:"A browser-based flight operations platform designed around an onboard-first safety architecture. It brings together attitude, navigation, health, mission packages, simulation, recording and analysis while keeping flight-critical control on the aircraft.",
    stack:["Arduino Nano","ESP gateway","MPU9250","GPS","Firebase"],
    image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/fixed-wing-drone-prototype.jpg",
    repo:"https://github.com/Turkson225/flight-command-center",
    live:"https://turkson225.github.io/flight-command-center/",
    problem:"Flight data, mission preparation and post-flight review were fragmented across separate tools and test flows.",
    solution:"A single command-center interface that unifies telemetry, planning, replay and diagnostics around a safer onboard-control architecture."
  },
  {
    id:"smartguard", featured:true, title:"SmartGuard Home Security", category:"Security / IoT", year:"2026",
    description:"AI-assisted recognition, evidence capture, GSM alerts, cloud logging and appliance control built as one connected security system.",
    detail:"A two-system home-security architecture combining ESP32-CAM, HuskyLens, SIM800L, Firebase, Google Sheets, Drive and relay control. Unknown-face detection triggers evidence and alert paths while a second controller manages alarms and appliance channels.",
    stack:["ESP32-CAM","HuskyLens","SIM800L","Firebase","Apps Script"],
    image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/smartguard-dashboard.jpg",
    repo:"https://github.com/Turkson225/smartguard-dashboard",
    live:"https://turkson225.github.io/smartguard-dashboard/",
    problem:"Security alerts are less useful when they do not include evidence, fallback communication or an operator view.",
    solution:"Combine local detection, cloud evidence, email/GSM alerts and remote monitoring into one layered response."
  },
  {
    id:"power", featured:true, title:"Smart Circuit Isolator", category:"Power / Monitoring", year:"2026",
    description:"Electrical telemetry, relay control and protection-oriented monitoring built around an ESP32-based measurement platform.",
    detail:"A connected power-monitoring and isolation project that combines voltage/current measurement, relay outputs, fault-oriented visibility and a browser dashboard for understanding load behaviour.",
    stack:["ESP32","PZEM004T","ZMPT101B","ACS712","Relays"],
    image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/smart-power-dashboard.jpg",
    repo:"https://github.com/Turkson225/smart-circuit-isolator-dashboard",
    live:"https://turkson225.github.io/smart-circuit-isolator-dashboard/",
    problem:"Electrical systems are harder to troubleshoot when measurements and load state are not visible together.",
    solution:"Bring measurements, status, switching and fault context into a single monitoring interface."
  },
  {
    id:"club", featured:true, title:"InnovateX Engineering Club", category:"Engineering platform", year:"2026",
    description:"A role-aware engineering community platform for courses, projects, submissions, messaging, events and administration.",
    detail:"A complete operating platform for an engineering club with member, teacher, founder, investor and administrator roles; course workflows; direct messaging; projects; alerts; PWA support and Supabase-backed data.",
    stack:["Supabase","Auth","Realtime","PWA","Web"],
    image:"https://raw.githubusercontent.com/Turkson225/Turk-Innovation-CLUB/main/assets/engineering-lab.webp",
    repo:"https://github.com/Turkson225/Turk-Innovation-CLUB",
    live:"https://turkson225.github.io/Turk-Innovation-CLUB/",
    problem:"Engineering communities need one place to manage learning, projects, communication and roles without losing structure.",
    solution:"A dedicated platform that connects training, collaboration, administration and member communication."
  },
  {
    id:"gas", featured:false, title:"ESP32 Gas Detector", category:"Safety / IoT", year:"2026",
    description:"Embedded gas-safety prototype with local alarm behaviour and a connected monitoring interface.",
    detail:"An ESP32-based gas-detection system developed around sensing, local warning states, enclosure design and connected monitoring.",
    stack:["ESP32","Gas sensor","Alarm","Web"],
    image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/gassafe-device-front.jpg",
    repo:"https://github.com/Turkson225/ESP32GASDETECTOR.01",
    live:"https://turkson225.github.io/ESP32GASDETECTOR.01/",
    problem:"Gas-safety prototypes need clear local warning and remote visibility, not just a raw sensor reading.",
    solution:"Translate sensing into understandable alarm states and a compact monitoring experience."
  },
  {
    id:"relay", featured:false, title:"ESP32 Relay Control", category:"Automation / IoT", year:"2026",
    description:"Four-channel connected appliance control with remote switching and browser-based state feedback.",
    detail:"A practical hardware-to-cloud automation experiment using ESP32 relay outputs and a dashboard to make device state visible and controllable.",
    stack:["ESP32","Relays","Wi-Fi","Web UI"],
    image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/mobile-relay-dashboard.jpg",
    repo:"https://github.com/Turkson225/ESP32RelayControl-0.3",
    live:"https://turkson225.github.io/ESP32RelayControl-0.3/",
    problem:"Remote switching is weak without clear state feedback.",
    solution:"Pair connected relay control with a UI that communicates command and channel state."
  },
  {
    id:"flight-deck", featured:false, title:"Flight Deck V1", category:"Ground station", year:"2026",
    description:"RC telemetry and bench-control interface for a custom fixed-wing platform using nRF24 and UART.",
    detail:"A ground-station interface that visualizes controller packets, receiver status, IMU values, batteries and link health while preserving receiver-side authority and failsafes.",
    stack:["nRF24L01","Arduino Nano","ESP8266","MPU6050","UART"],
    image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/gps-sensor-development-board.jpg",
    repo:"https://github.com/Turkson225/FLIGHT-DECK-V1",
    live:"https://turkson225.github.io/FLIGHT-DECK-V1/",
    problem:"Bench and flight-development data can be difficult to interpret when radio, UART, IMU and battery states are separate.",
    solution:"Unify link, control and motion telemetry in a responsive ground-station interface."
  },
  {
    id:"innovation", featured:false, title:"Turk Innovation", category:"Engineering platform", year:"2026",
    description:"A technology brand platform presenting intelligent systems, engineering evidence and product directions.",
    detail:"A public technology platform for communicating engineering work, prototypes, product directions, evidence and investor-facing material.",
    stack:["React","Vite","Tailwind","Supabase","Web"],
    image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/operations-command-center.jpg",
    repo:"https://github.com/Turkson225/turk-innovation",
    live:"https://turkson225.github.io/turk-innovation/",
    problem:"Technical work needs a clear public narrative and evidence layer to be understood outside the lab.",
    solution:"Present systems, proof, product direction and company story through one coherent technical brand platform."
  }
];

const featuredGrid=document.getElementById("featuredGrid");
const projectGrid=document.getElementById("projectGrid");
const dialog=document.getElementById("projectDialog");
const dialogBody=document.getElementById("dialogBody");
const dialogClose=document.getElementById("dialogClose");

function tags(stack){return stack.map(t=>`<span class="tech-tag">${t}</span>`).join("")}

function featuredCard(p){
  return `<article class="feature-card reveal" data-id="${p.id}">
    <div class="feature-media">
      <img loading="lazy" decoding="async" src="${p.image}" alt="${p.title}">
      <span class="feature-label">${p.category}</span>
    </div>
    <div class="feature-body">
      <div class="card-kicker"><span>${p.category}</span><span>${p.year}</span></div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tag-row">${tags(p.stack)}</div>
      <div class="card-footer"><span>OPEN CASE STUDY</span><span>↗</span></div>
    </div>
  </article>`;
}
function projectCard(p){
  return `<article class="project-card reveal" data-id="${p.id}">
    <div class="feature-media">
      <img loading="lazy" decoding="async" src="${p.image}" alt="${p.title}">
      <span class="feature-label">${p.category}</span>
    </div>
    <div class="project-body">
      <div class="card-kicker"><span>${p.category}</span><span>${p.year}</span></div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tag-row">${tags(p.stack.slice(0,4))}</div>
      <div class="card-footer"><span>VIEW PROJECT</span><span>↗</span></div>
    </div>
  </article>`;
}

featuredGrid.innerHTML=projects.filter(p=>p.featured).map(featuredCard).join("");
projectGrid.innerHTML=projects.filter(p=>!p.featured).map(projectCard).join("");

function openProject(id){
  const p=projects.find(x=>x.id===id); if(!p)return;
  dialogBody.innerHTML=`
    <div class="dialog-hero"><img src="${p.image}" alt="${p.title}"></div>
    <div class="dialog-kicker">${p.category.toUpperCase()} / ${p.year}</div>
    <h2 class="dialog-title">${p.title}</h2>
    <p class="dialog-description">${p.detail}</p>
    <div class="dialog-grid">
      <div class="dialog-box"><small>PROBLEM</small><strong>${p.problem}</strong></div>
      <div class="dialog-box"><small>SOLUTION</small><strong>${p.solution}</strong></div>
      <div class="dialog-box"><small>TECHNOLOGY</small><strong>${p.stack.join(" · ")}</strong></div>
      <div class="dialog-box"><small>STATUS</small><strong>Engineering project / documented build</strong></div>
    </div>
    <div class="dialog-actions">
      <a class="btn btn-primary" href="${p.live}" target="_blank" rel="noreferrer">Live project ↗</a>
      <a class="btn btn-ghost" href="${p.repo}" target="_blank" rel="noreferrer">GitHub source ↗</a>
    </div>`;
  dialog.showModal();
}
document.addEventListener("click",e=>{
  const card=e.target.closest("[data-id]"); if(card && (card.classList.contains("feature-card")||card.classList.contains("project-card"))) openProject(card.dataset.id);
});
dialogClose.addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});

const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(open))});
nav.addEventListener("click",()=>nav.classList.remove("open"));

const glow=document.getElementById("cursorGlow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"},{passive:true});

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("in");revealObserver.unobserve(entry.target)}
}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const skillObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  const card=entry.target; const value=Number(card.dataset.skill||0); const ring=card.querySelector(".skill-ring");
  ring.style.setProperty("--p",value); skillObserver.unobserve(card);
}),{threshold:.3});
document.querySelectorAll(".skill-card").forEach(card=>skillObserver.observe(card));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const target=document.querySelector(a.getAttribute("href")); if(!target)return;
  e.preventDefault(); target.scrollIntoView({behavior:"smooth",block:"start"});
}));
