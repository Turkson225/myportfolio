const cases={
"flight-command":{
 title:"Flight Command Center",category:"Flight Systems",year:"2026",status:"Interface milestone / integration ongoing",
 summary:"A fixed-wing flight operations workspace for mission planning, navigation, telemetry, replay, diagnostics and safer system integration.",
 image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/fixed-wing-drone-prototype.jpg",fit:"cover",
 live:"https://turkson225.github.io/flight-command-center/",repo:"https://github.com/Turkson225/flight-command-center",
 tags:["Arduino Nano","ESP gateway","MPU9250","GPS","Firebase","Mission Planning"],
 problem:"Flight preparation, navigation displays, telemetry review and post-flight analysis can become fragmented across separate tools. The project needed one operator workspace while preserving a strict boundary between browser software and flight-critical control.",
 approach:"I designed the browser as a monitoring, planning and analysis layer. The Nano remains responsible for deterministic RC, actuator and failsafe behavior; the ESP gateway handles sensor/network integration; Firebase is an optional authenticated telemetry path; the browser also contains a clearly labeled simulator.",
 architecture:[
  ["AIRCRAFT","Arduino Nano","RC, actuators, modes and failsafe"],
  ["GATEWAY","NodeMCU / ESP","Sensors, UART state and mission relay"],
  ["CLOUD","Firebase","Authenticated telemetry and staged mission data"],
  ["OPERATOR","Web cockpit","Navigation, mission planning, recording and analysis"]
 ],
 built:["Responsive primary flight display and aircraft attitude view","OpenStreetMap navigation with trail, HOME, geofence and return corridor","Mission planner with waypoint editing, per-leg targets/actions, validation and JSON import/export","Browser flight recording, synchronized replay, event markers, summaries and CSV/JSON export","Selectable fault scenarios including GPS failure, low battery, telemetry loss and failsafe","Multiple visual themes and responsive desktop/tablet/phone layouts"],
 hardware:["Arduino Nano — intended flight-critical controller","NodeMCU / ESP gateway — telemetry and network bridge","MPU9250 — intended attitude/heading sensing","NEO GPS — intended navigation source","Aircraft battery sensing"],
 software:["Browser cockpit and deterministic simulation","Firebase Realtime Database cloud reader","IndexedDB flight recording and replay","Mission package validation and CRC32 acknowledgement model","GitHub Pages deployment"],
 validation:[
  ["SIMULATION","Normal flight plus selectable GPS, battery, telemetry and failsafe scenarios are implemented."],
  ["SOURCE CLARITY","Simulation and cloud data are explicitly labeled; stale or missing values are not silently replaced with valid-looking data."],
  ["SAFETY BOUNDARY","The current milestone exposes no continuous aircraft control path from the browser."],
  ["INTEGRATION GAP","Live hardware telemetry, calibration, Nano mission storage/navigation and stabilized control loops still require bench validation."]
 ],
 result:"The project now provides a working mission-intelligence and telemetry interface that can be evaluated before full aircraft integration. Its strongest engineering decision is keeping cloud/browser availability non-critical to onboard control.",
 next:"Bench-validate the UART transport, sensor calibration and live telemetry path; implement bounded mission transfer and onboard storage; then verify failure cases with the aircraft restrained and propulsion made safe."
},
"smartguard":{
 title:"SmartGuard Home Security",category:"Security / IoT",year:"2026",status:"Working prototype / ongoing refinement",
 summary:"A two-system intelligent security and automation architecture combining face recognition, evidence capture, GSM alerts, cloud logging and remote appliance control.",
 image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/smartguard-dashboard.jpg",fit:"cover",
 live:"https://turkson225.github.io/smartguard-dashboard/",repo:"https://github.com/Turkson225/smartguard-dashboard",
 tags:["ESP32-CAM","HuskyLens","SIM800L","Firebase","Apps Script","Relays"],
 problem:"Detection alone is not enough for a useful security system. The operator also needs evidence, notification, fallback communication and a way to understand system status when internet connectivity is unreliable.",
 approach:"I split the design into two coordinated systems: an event/evidence node for recognition and alerts, and a separate ESP32 relay node for alarm/appliance control. GSM remains available as a fallback path while cloud services provide evidence, dashboards and email distribution.",
 architecture:[
  ["PERCEPTION","HuskyLens + ESP32-CAM","Recognize faces and capture event evidence"],
  ["ALERTING","SIM800L GSM","SMS/call fallback independent of cloud email"],
  ["CLOUD","Firebase + Google","State, Sheets/Drive evidence and Apps Script email"],
  ["AUTOMATION","ESP32 + relays","Alarm channel and appliance control"]
 ],
 built:["Unknown-face event flow with evidence capture","Cloud logging to Google Sheets/Drive and email notification workflow","GSM SMS/call alert path","Separate four-channel relay controller for alarm and appliances","Web dashboard for device/system state and remote control","Post-alert surveillance workflow with a separate monitoring camera"],
 hardware:["ESP32-CAM — event/evidence capture","HuskyLens — face recognition","SIM800L — GSM SMS/call alerts","ESP32 — relay/automation controller","4-channel relay module"],
 software:["Firebase Realtime Database","Google Sheets and Drive evidence workflow","Google Apps Script email automation","GitHub Pages dashboard","Browser-based device and system status"],
 validation:[
  ["DETECTION","Observed HuskyLens face-detection distance was approximately 1 m in project testing."],
  ["RELAY RESPONSE","Observed relay response delays were approximately 2–5 seconds in project tests."],
  ["NETWORK FALLBACK","Internet-dependent email/Drive/Firebase functions are separated from GSM/manual fallback paths."],
  ["SYSTEM SPLIT","Security perception/alerting and appliance relay control remain separate nodes rather than one overloaded controller."]
 ],
 result:"SmartGuard demonstrates a complete event chain from perception to evidence, notification and operator response. The modular architecture also makes it easier to diagnose failures and evolve security and automation independently.",
 next:"Improve enclosure/power integration, strengthen authentication and cloud rules, continue reliability testing under network loss, and package the two nodes into a clearer product architecture."
},
"smart-circuit":{
 title:"Smart Circuit Isolator",category:"Power / Monitoring",year:"2026",status:"Working monitoring/control prototype",
 summary:"An ESP32-based electrical monitoring and isolation interface bringing measurement, relay state and protection-oriented visibility into one operations dashboard.",
 image:"./assets/smart-circuit-isolator-dashboard.webp",fit:"contain",
 live:"https://turkson225.github.io/smart-circuit-isolator-dashboard/",repo:"https://github.com/Turkson225/smart-circuit-isolator-dashboard",
 tags:["ESP32","PZEM-004T","ZMPT101B","ACS712","Relays","Web Dashboard"],
 problem:"Electrical faults and overloads are difficult to interpret when measurements, load state and operator controls are disconnected. A useful system needs observability before it can support safer isolation decisions.",
 approach:"I combined electrical measurement, per-channel sensing, relay state, local alert concepts and a browser operations dashboard. The UI is designed to show device state, safety status and electrical parameters together rather than as unrelated values.",
 architecture:[
  ["MEASURE","PZEM + voltage/current sensing","Voltage, current, power, energy and related electrical data"],
  ["EDGE","ESP32","Acquire measurements and coordinate system state"],
  ["CONTROL","Relay outputs","Switch/isolate connected channels"],
  ["OPERATOR","Operations dashboard","Status, telemetry, control and protection context"]
 ],
 built:["Operations-style dashboard with device and safety state","Voltage, current, power, energy, frequency and power-factor presentation","Relay/control status and protection-oriented interface","ESP32 measurement/control architecture","Project-specific live GitHub Pages interface"],
 hardware:["ESP32 controller","PZEM-004T energy meter","ZMPT101B voltage sensing","ACS712 current sensing","Relay outputs","Buzzer/local indication in the broader power-monitoring design"],
 software:["Browser dashboard","Local/network telemetry presentation","Control-state interface","GitHub Pages deployment"],
 validation:[
  ["DASHBOARD","The monitoring/control interface is implemented and published as a working project dashboard."],
  ["OBSERVABILITY","Electrical values and device/safety state are presented in the same operator view."],
  ["CONTROL","Relay switching is represented as a separate control layer rather than mixed into measurement logic."],
  ["DEPLOYMENT BOUNDARY","Hardware protection, isolation ratings and electrical safety compliance require independent validation before any real product deployment."]
 ],
 result:"The project turns a sensor-and-relay prototype into an understandable engineering operations interface. The real dashboard screenshot is now used as portfolio evidence instead of a generic image.",
 next:"Continue electrical calibration, document trip/threshold logic against measured conditions, validate isolation and contactor behavior safely, and separate monitoring features from any safety-critical protection claims."
},
"space-club":{
 title:"Space Engineering Club",category:"Engineering Platform",year:"2026",status:"Active web platform",
 summary:"A role-aware engineering community workspace for learning, projects, submissions, direct messaging, events and administration.",
 image:"./assets/space-engineering-club.webp",fit:"contain",
 live:"https://turkson225.github.io/Turk-Innovation-CLUB/",repo:"https://github.com/Turkson225/Turk-Innovation-CLUB",
 tags:["Supabase","Auth","Realtime","PWA","Role Based Access","Messaging"],
 problem:"An engineering community needs more than a landing page. Teachers, members, founders and administrators need structured workflows for courses, projects, communication, submissions, approvals and events.",
 approach:"I treated the platform as an operating system for the club: role-aware navigation, Supabase-backed data, messaging, learning workflows, notifications, project collaboration and mobile-first interaction.",
 architecture:[
  ["IDENTITY","Auth + roles","Member, teacher, founder, investor and admin access"],
  ["DATA","Supabase","Structured application and platform data"],
  ["REALTIME","Messaging + presence","Channels, DMs, notifications and online state"],
  ["EXPERIENCE","PWA web app","Responsive learning and collaboration workspace"]
 ],
 built:["Role-aware sign-in and navigation","Course and training-track workflows","Teacher review/submission/feedback tools","Channels, threads and WhatsApp-style direct messaging direction","Projects, events, meetings and notifications","Admin approvals, member management, inventory/finance directions and exports","Progressive Web App support and responsive mobile behavior"],
 hardware:["Not a hardware product — this project is an engineering operations platform","Designed to support electronics, robotics, controls, software and AI learning workflows"],
 software:["Supabase database/auth","Realtime messaging/presence concepts","HTML/CSS/JavaScript application","PWA manifest/offline support","GitHub Pages hosting"],
 validation:[
  ["RESPONSIVE","Desktop and mobile layouts are part of the implemented platform direction."],
  ["ROLES","Multiple user types are modeled with different responsibilities and views."],
  ["WORKFLOWS","Courses, submissions, messaging, projects, events and administration are represented as connected workflows."],
  ["SECURITY WORK","RLS and permission issues encountered during development are treated as implementation work to be hardened, not hidden."]
 ],
 result:"The project shows that my engineering work also includes software systems that organize people, learning and technical projects—not only device dashboards.",
 next:"Continue tightening role permissions/RLS, improve push-notification reliability, refine mobile messaging interaction and move toward a more modular production codebase."
},
"gas-detector":{
 title:"ESP32 Gas Detector",category:"Safety / IoT",year:"2026",status:"Prototype",
 summary:"A connected gas-safety prototype that converts sensor readings into understandable local warning states and remote monitoring.",
 image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/gassafe-device-front.jpg",fit:"cover",
 live:"https://turkson225.github.io/ESP32GASDETECTOR.01/",repo:"https://github.com/Turkson225/ESP32GASDETECTOR.01",
 tags:["ESP32","Gas Sensor","Alarm Logic","Web UI","IoT"],
 problem:"A raw gas sensor value is not enough for a user. A useful device must communicate state clearly, respond locally and provide remote visibility without pretending to be a certified safety instrument.",
 approach:"I built the project around an ESP32 sensing node, alarm-state logic and a browser interface. The portfolio presents it as a prototype and separates working connected monitoring from future certification/product requirements.",
 architecture:[
  ["SENSE","Gas sensor","Acquire gas concentration proxy"],
  ["EDGE","ESP32","Filter readings and determine system state"],
  ["LOCAL","Alarm indication","Immediate warning behavior"],
  ["REMOTE","Web dashboard","Monitoring and system visibility"]
 ],
 built:["ESP32 gas-sensing prototype","Local warning/alarm-state behavior","Connected browser dashboard","Prototype enclosure and internal layout exploration","Clear separation between prototype operation and product-level safety requirements"],
 hardware:["ESP32","Gas sensing module","Buzzer/alarm indication","Status indicators","Prototype enclosure"],
 software:["Embedded sensor/alarm logic","Browser monitoring dashboard","GitHub Pages deployment"],
 validation:[
  ["PROTOTYPE","The project is presented as an engineering prototype, not a certified gas detector."],
  ["LOCAL STATE","Alarm behavior is intended to remain understandable at the device, not only in the browser."],
  ["REMOTE VIEW","The published dashboard demonstrates the connected monitoring concept."],
  ["PRODUCT GAP","Sensor calibration, certified sensing, enclosure safety and compliance would be required before productization."]
 ],
 result:"The project demonstrates the full path from sensing to local state and remote visualization, while keeping the portfolio claims appropriately limited to prototype scope.",
 next:"Calibrate against known references, define alarm thresholds from validated sensor behavior, improve enclosure airflow and power design, and document fail-safe behavior."
},
"relay-control":{
 title:"ESP32 Relay Control",category:"Automation / IoT",year:"2026",status:"Working prototype",
 summary:"A four-channel connected appliance-control system pairing ESP32 relay outputs with a browser interface and visible channel state.",
 image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/mobile-relay-dashboard.jpg",fit:"cover",
 live:"https://turkson225.github.io/ESP32RelayControl-0.3/",repo:"https://github.com/Turkson225/ESP32RelayControl-0.3",
 tags:["ESP32","4-Channel Relay","Wi-Fi","Web UI","Automation"],
 problem:"Remote switching becomes confusing when the user cannot tell whether a command was received or what state each output is in.",
 approach:"I designed a simple hardware-to-interface control loop: browser command, connected ESP32 state, relay channel output and visible status. The project is intentionally focused and serves as a foundation for larger automation systems.",
 architecture:[
  ["USER","Web dashboard","Select channel and requested state"],
  ["NETWORK","Wi-Fi / web path","Transport control intent"],
  ["EDGE","ESP32","Process command and maintain channel state"],
  ["OUTPUT","4 relays","Switch connected loads"]
 ],
 built:["Four-channel browser control interface","ESP32 relay mapping and state logic","Remote switching workflow","Status feedback in the dashboard","Responsive control UI for desktop/mobile"],
 hardware:["ESP32","4-channel relay module","Connected test loads","Power/interface wiring"],
 software:["Embedded relay-control logic","HTML/CSS/JavaScript dashboard","GitHub Pages deployment"],
 validation:[
  ["CHANNELS","The project is structured around four independently controlled relay channels."],
  ["FEEDBACK","The UI is designed to show channel state instead of acting as blind one-way buttons."],
  ["DEPLOYMENT","The live project demonstrates the browser-control layer."],
  ["SAFETY","Mains switching requires proper isolation, enclosure, contact ratings and safe installation beyond a prototype bench setup."]
 ],
 result:"This project is a compact demonstration of observable IoT control and became a building block for larger security and power-control projects.",
 next:"Add stronger authentication, local fallback controls, schedules/interlocks and explicit command acknowledgement from the device."
},
"flight-deck":{
 title:"Flight Deck V1",category:"Ground Station",year:"2026",status:"Working ground-station interface / hardware integration path",
 summary:"A fixed-wing ground station that merges nRF24 controller packets, receiver state, UART telemetry, MPU6050 motion and battery information.",
 image:"https://raw.githubusercontent.com/Turkson225/turk-innovation/main/public/evidence/gps-sensor-development-board.jpg",fit:"cover",
 live:"https://turkson225.github.io/FLIGHT-DECK-V1/",repo:"https://github.com/Turkson225/FLIGHT-DECK-V1",
 tags:["Arduino Nano","nRF24L01","ESP8266","MPU6050","UART 38400","Telemetry"],
 problem:"Radio control, receiver state, motion data and battery condition are difficult to debug when they are viewed separately. The aircraft also needs a clear authority boundary so a browser cannot silently replace the physical controller.",
 approach:"I organized the system around a TX Nano → nRF24 → RX Nano → UART → NodeMCU chain. The receiver Nano retains output/failsafe authority; the NodeMCU aggregates telemetry; the browser visualizes and records state with a deliberately constrained bench-control workflow.",
 architecture:[
  ["TRANSMITTER","Arduino Nano","Joysticks, pots, buttons, battery and nRF24 packet"],
  ["RECEIVER","Arduino Nano","Output authority, arbitration and failsafe"],
  ["GATEWAY","NodeMCU ESP8266","UART, MPU6050, battery and telemetry API"],
  ["GROUND STATION","Flight Deck V1","PFD, link health, recording and diagnostics"]
 ],
 built:["Avionics-style roll/pitch display from MPU6050","TX and aircraft battery monitoring","Joystick/AUX/button visualization","Packet delivery, packet age, RF rate, UART health and freshness indicators","30 s / 2 min / 10 min motion charts","Telemetry and event CSV exports","Health score, diagnostics and receiver-acknowledged bench-control concepts","Night/day themes and responsive layouts"],
 hardware:["TX Arduino Nano","RX Arduino Nano","nRF24L01 radio modules","NodeMCU ESP8266","MPU6050","Battery sensing"],
 software:["Dependency-free web dashboard","Telemetry REST API contract","Recording and CSV export","Strict validation/stale-data handling","GitHub Pages hosting"],
 validation:[
  ["DATA HONESTY","MPU6050 limitations are explicitly respected: no fabricated absolute heading, altitude, airspeed or GPS."],
  ["LINK HEALTH","nRF24 health is derived from packet delivery/age rather than inventing numeric RSSI."],
  ["AUTHORITY","The receiver Nano remains the final authority over servo and ESC outputs."],
  ["BENCH SAFETY","Browser control is limited to restrained, propeller-removed bench testing and requires receiver-side authorization/acknowledgement concepts."]
 ],
 result:"Flight Deck V1 turns a custom RC link and sensor chain into an observable development tool. It helped define the telemetry, authority and safety ideas that later informed Flight Command Center.",
 next:"Continue real hardware integration, verify telemetry timing and calibration, exercise link-loss cases and keep any web-control experiments constrained to bench-safe conditions."
},
"turk-innovation":{
 title:"Turk Innovation",category:"Engineering Platform",year:"2026",status:"Public technology platform",
 summary:"A public-facing engineering and technology platform that turns prototypes, evidence and product directions into a coherent technical narrative.",
 image:"./assets/turk-innovation-platform.webp",fit:"contain",
 live:"https://turkson225.github.io/turk-innovation/",repo:"https://github.com/Turkson225/turk-innovation",
 tags:["React","Vite","Tailwind","Supabase","Engineering Evidence"],
 problem:"Technical projects can be difficult for clients, partners or investors to understand when the evidence is scattered across repositories, screenshots and informal updates.",
 approach:"I structured Turk Innovation as an evidence-driven company platform: project pages, engineering proof, product directions, reviews, investor material and visual assets all support one consistent physical-world technology story.",
 architecture:[
  ["CONTENT","Project data","Problems, solutions, status, metrics and evidence"],
  ["APPLICATION","React / Vite","Structured pages and reusable components"],
  ["DATA","Supabase + forms","Interactive platform workflows where needed"],
  ["PUBLIC","GitHub Pages","Accessible technical brand and product communication"]
 ],
 built:["Project and product storytelling pages","Engineering evidence/gallery assets","Investor-facing material","Reviews and contact workflows","Responsive technical visual system","Structured project data for SmartGuard, power, GasSafe, robotics and learning directions"],
 hardware:["Not a single hardware device — this platform documents and connects multiple physical-world engineering projects","Evidence includes real prototypes, dashboards, electronics and field-oriented concepts"],
 software:["React","Vite","Tailwind-style component system","Supabase integration where used","GitHub Pages deployment"],
 validation:[
  ["EVIDENCE","The site uses real project imagery and project-specific content rather than generic stock-only presentation."],
  ["STRUCTURE","Project information is encoded as reusable structured content instead of scattered page copy."],
  ["PUBLIC DEPLOYMENT","The platform is published and used as a live technical/company website."],
  ["CLAIM DISCIPLINE","Project status and prototype limitations are part of the content model so concept work can be separated from completed builds."]
 ],
 result:"Turk Innovation serves as the public narrative layer for a growing set of engineering systems and makes the work easier to understand beyond GitHub.",
 next:"Continue separating company-level product narratives from personal portfolio case studies, strengthen evidence around each project and keep internal/experimental repositories private."
}
};

const order=["flight-command","smartguard","smart-circuit","space-club","gas-detector","relay-control","flight-deck","turk-innovation"];
const params=new URLSearchParams(location.search);
const id=params.get("project")||"flight-command";
const p=cases[id]||cases["flight-command"];
const root=document.getElementById("caseStudyRoot");
const liveTop=document.getElementById("topLiveLink");
document.title=`${p.title} — Engineering Case Study | Ennis Turkson`;
liveTop.href=p.live;

const panels=(items,label)=>items.map(x=>`<div class="case-panel"><span>${label}</span><strong>${x}</strong></div>`).join("");
const arch=p.architecture.map((x,i)=>`<div class="arch-node"><small>0${i+1} / ${x[0]}</small><strong>${x[1]}</strong><p>${x[2]}</p></div>`).join("");
const nextId=order[(order.indexOf(id)+1)%order.length], nextP=cases[nextId];

root.innerHTML=`
<section class="case-hero">
  <div>
    <p class="case-kicker">${p.category} · ${p.year}</p>
    <h1>${p.title}</h1>
    <p class="case-summary">${p.summary}</p>
    <div class="case-tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    <div class="case-actions">
      <a class="primary-button" href="${p.live}" target="_blank" rel="noreferrer">Open Live Project ↗</a>
      <a class="text-button" href="${p.repo}" target="_blank" rel="noreferrer">GitHub Source ↗</a>
    </div>
  </div>
  <div class="case-hero-media ${p.fit==="contain"?"contain":""}">
    <img src="${p.image}" alt="${p.title}">
  </div>
</section>

<section class="case-proof-strip">
  <div><span>Status</span><strong>${p.status}</strong></div>
  <div><span>Year</span><strong>${p.year}</strong></div>
  <div><span>Primary domain</span><strong>${p.category}</strong></div>
  <div><span>Evidence</span><strong>Live project + source</strong></div>
</section>

<section class="case-section">
  <div class="case-label">01 / Problem</div>
  <div class="case-content"><h2>What problem was I solving?</h2><p>${p.problem}</p></div>
</section>

<section class="case-section">
  <div class="case-label">02 / Engineering approach</div>
  <div class="case-content"><h2>How I approached the system</h2><p>${p.approach}</p></div>
</section>

<section class="case-section">
  <div class="case-label">03 / Architecture</div>
  <div class="case-content"><h2>System architecture</h2><div class="architecture">${arch}</div></div>
</section>

<section class="case-section">
  <div class="case-label">04 / What I built</div>
  <div class="case-content"><h2>Implementation</h2><ul class="case-list">${p.built.map(x=>`<li>${x}</li>`).join("")}</ul></div>
</section>

<section class="case-section">
  <div class="case-label">05 / Stack</div>
  <div class="case-content">
    <h2>Hardware & software</h2>
    <div class="case-grid">
      <div><h3>Hardware / physical layer</h3><div class="case-grid">${panels(p.hardware,"HARDWARE")}</div></div>
      <div><h3>Software / data layer</h3><div class="case-grid">${panels(p.software,"SOFTWARE")}</div></div>
    </div>
  </div>
</section>

<section class="case-section">
  <div class="case-label">06 / Testing</div>
  <div class="case-content">
    <h2>Testing & validation</h2>
    <div class="validation-list">${p.validation.map(v=>`<div class="validation-item"><b>${v[0]}</b><span>${v[1]}</span></div>`).join("")}</div>
  </div>
</section>

<section class="case-section">
  <div class="case-label">07 / Result</div>
  <div class="case-content"><h2>Result & current status</h2><p>${p.result}</p><div class="case-note"><strong>Next engineering iteration:</strong> ${p.next}</div></div>
</section>

<a class="next-project" href="./case-study.html?project=${nextId}">
  <div><small>Next case study</small><strong>${nextP.title}</strong></div><b>→</b>
</a>
`;
