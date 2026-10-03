const SMARTGUARD_EVIDENCE="data:image/webp;base64,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[... TRUNCATED FOR BREVITY IN THIS MESSAGE ...]AAAAAAAAAAAAAAAAAAAAAAA==";
const cases={
"smart-energy-panel":{
 title:"Smart Energy Monitoring & Control Panel",category:"Energy / IoT",year:"2026",status:"Completed client prototype",
 summary:"A custom energy monitoring and control panel designed and constructed for household and small-business use, combining local circuit control, live dashboard monitoring and spreadsheet-based data analysis.",
 image:"./assets/smart-energy-panel-hero.webp",fit:"cover",
 live:null,repo:null,
 tags:["ESP32","Energy Monitoring","4-Channel Control","LCD","Apps Script","Spreadsheet Logging"],
 problem:"The client needed one practical system for monitoring electrical conditions, controlling several circuits and keeping a record of measured data for later analysis. Off-the-shelf pieces could do parts of this, but not as one integrated panel tailored to the use case.",
 approach:"I designed the project as a complete panel rather than only a sensor board. The physical layer combines protected circuit channels, electronic control, local status display and an enclosure; the embedded layer acquires electrical data and manages outputs; the browser dashboard provides live monitoring and remote control; and an Apps Script workflow records data into a spreadsheet for historical analysis.",
 architecture:[
  ["MEASURE","Energy sensing","Acquire voltage, current, power, energy and related electrical values"],
  ["CONTROL","ESP32 + relay channels","Process readings and control four output circuits"],
  ["LOCAL UI","16×2 LCD + panel","Show channel and voltage status directly on the enclosure"],
  ["DATA / WEB","Dashboard + Apps Script","Remote monitoring/control and spreadsheet logging for analysis"]
 ],
 built:["Designed and assembled the complete monitoring/control panel for a client","Integrated four protected output channels into a custom enclosure","Added local LCD status so the system remains understandable without opening the dashboard","Built a browser dashboard for live measurements and four-channel control","Connected recorded data to a spreadsheet using Google Apps Script for later review and analysis","Developed and iterated the physical enclosure, internal wiring layout and electronics packaging"],
 hardware:["ESP32 controller","Energy metering/sensing hardware","Four control channels and relays","Four miniature circuit breakers","16×2 LCD","Custom 3D-printed enclosure and internal mounting hardware"],
 software:["Embedded monitoring/control firmware","Responsive web dashboard","Local network device interface","Google Apps Script data logging","Spreadsheet-based historical analysis"],
 validation:[
  ["PHYSICAL BUILD","The project progressed through component layout, internal wiring, enclosure assembly and final panel integration."],
  ["LOCAL STATUS","The LCD displays individual channel state and voltage information directly on the panel."],
  ["WEB CONTROL","The dashboard presents electrical measurements and independent control for four channels."],
  ["DATA ANALYSIS","Recorded readings are sent through Apps Script into a spreadsheet so trends and historical values can be reviewed."],
  ["CLIENT DELIVERY","This was developed as a client project, so the public portfolio keeps client identity and any private deployment details out of the case study."]
 ],
 result:"The finished prototype demonstrates an end-to-end energy-management product: physical protection and switching, embedded measurement, local feedback, a web interface and persistent data logging. The real build photos make this one of the clearest examples in the portfolio of taking a system from electronics to a packaged client-facing product.",
 next:"Future revisions could improve enclosure finish, add stronger authentication and remote access, introduce configurable alerts and thresholds, and build richer historical charts from the logged data."
},
"recovery-ugv":{
 title:"Autonomous Recovery Assistance UGV",category:"Robotics / AGV",year:"2026",status:"Ongoing mechanical and autonomy prototype",
 summary:"A mobile robotics prototype exploring autonomous transport assistance for repetitive recovery and material-handling work.",
 image:"./assets/agv-prototype-hero.webp",fit:"cover",
 live:null,repo:null,
 tags:["UGV","Line Following","HuskyLens AI","Sensors","Motor Control","Autonomy"],
 problem:"Repeated manual movement of recovered components between work areas can consume time and contribute to operator fatigue. The engineering challenge is to automate the transport step without making the surrounding recovery process harder to operate.",
 approach:"I started with the physical transport problem and built a four-wheel ground-vehicle platform sized for useful payload space. The autonomy direction combines line-following sensors for deterministic route guidance with HuskyLens-based visual recognition and additional proximity sensing. The project is deliberately staged: first prove mechanical mobility and load handling, then integrate navigation, detection, stopping and recovery behaviors.",
 architecture:[
  ["LOAD","Recovery components","Place components on the transport platform"],
  ["GUIDANCE","Line sensors","Follow a defined repeatable route"],
  ["PERCEPTION","HuskyLens + sensors","Recognize markers and detect route/stop conditions"],
  ["MOTION","Motor control","Drive, steer, stop and deliver the load"]
 ],
 built:["Full-size four-wheel mobile chassis and payload deck","Mechanical frame using aluminium extrusion and sheet/board structure","Autonomy concept combining line following and AI-assisted visual recognition","Development plan for sensor-based stopping, route following and repeatable pickup/drop-off behavior","Human-factors goal focused on reducing repetitive manual carrying and operator fatigue"],
 hardware:["Four-wheel UGV chassis","Drive motors and wheels","Line-following sensors","HuskyLens AI vision sensor","Motor drivers and controller","Future proximity/obstacle sensing"],
 software:["Embedded navigation state machine","Line-following control logic","HuskyLens recognition workflow","Motor-control and stop logic","Test/iteration plan for repeatable routes"],
 validation:[
  ["CURRENT STATE","Mechanical prototype construction is underway; the project is not presented as a completed autonomous vehicle."],
  ["HUMAN FACTORS","The design goal is to reduce repetitive carrying and unnecessary walking during recovery/material-handling work."],
  ["IMPACT ESTIMATE","Preliminary workflow analysis suggests meaningful productivity gains are possible, but the improvement is still a projection until measured in controlled operational trials."],
  ["NEXT TESTS","Payload handling, route tracking, stopping accuracy, obstacle response, battery endurance and fail-safe behavior still require systematic validation."]
 ],
 result:"The project has progressed from an operational pain point to a physical UGV platform with a defined autonomy architecture. It is included in the portfolio as ongoing engineering work, with the distinction between prototype evidence and future performance claims kept explicit.",
 next:"Complete the drive electronics and controller integration, tune the line-following loop, add HuskyLens recognition and obstacle sensing, then run repeatable timed trials comparing assisted and manual transport workflows."
},
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
 title:"SmartGuard Home Security",category:"Security / IoT · Client Project",year:"2026",status:"Completed client prototype / next-version integration planned",
 summary:"A three-part intelligent security and automation system combining AI-assisted face recognition, evidence capture, GSM and email alerts, four-channel emergency/appliance control, spreadsheet logging and independent live surveillance.",
 image:SMARTGUARD_EVIDENCE,fit:"cover",
 live:"https://turkson225.github.io/smartguard-dashboard/",repo:"https://github.com/Turkson225/smartguard-dashboard",
 tags:["ESP32-CAM","HuskyLens","SIM800L","4-Channel Relay","Firebase","Apps Script"],
 problem:"The client needed more than a camera or alarm. The system had to identify unknown faces, capture evidence, send alerts through more than one communication path, trigger an emergency/alarm output automatically, control additional appliances, record events for later analysis and still provide live post-alert monitoring.",
 approach:"I designed SmartGuard as three coordinated physical subsystems under one operator experience. The first is the intelligent camera/alert panel using ESP32-CAM, HuskyLens and GSM for recognition, evidence and notification. The second is a four-channel relay control panel: channel 1 is automatically triggered by an unknown-face event and can drive an alarm or emergency input, while channels 2–4 remain available for appliance control. The third is a separate live-surveillance camera used for post-alert monitoring. Firebase, spreadsheet/Drive logging, Apps Script email and the unified web dashboard connect the subsystems at the software layer.",
 architecture:[
  ["SECURITY NODE","ESP32-CAM + HuskyLens + GSM","Recognize faces, capture evidence and initiate local/cloud alerts"],
  ["AUTOMATION NODE","ESP32 + 4 relays","Channel 1 emergency/alarm trigger; channels 2–4 appliance control"],
  ["MONITORING","Dedicated IP camera","Independent live stream for post-alert visual verification"],
  ["UNIFIED LAYER","Dashboard + cloud + spreadsheet","System status, remote control, evidence, email and event history"]
 ],
 built:["Designed and constructed the SmartGuard system as a client project","Unknown-face recognition and evidence-capture workflow","Automatic channel-1 relay activation when an unknown face is detected","Three additional relay channels for appliance control","GSM SMS/call fallback notification path","Email alert containing event information, captured evidence and links back to monitoring resources","Spreadsheet/Google Sheets event logging through Apps Script for later review and analysis","Firebase-backed unified dashboard for status and remote control","Separate live-surveillance camera for post-alert streaming and monitoring","Custom enclosures and packaged electronics for the camera/alert and control subsystems"],
 hardware:["ESP32-CAM — event/evidence camera","HuskyLens — AI-assisted face recognition","SIM800L — GSM SMS/call communication","ESP32 — automation/control node","4-channel relay module — emergency + appliance outputs","Dedicated IP surveillance camera — live monitoring","Custom enclosures, power and interface hardware"],
 software:["Firebase Realtime Database","Google Sheets/Drive evidence workflow","Google Apps Script email and logging automation","Unified GitHub Pages dashboard","Browser-based relay/appliance control","Live camera monitoring through the camera application"],
 validation:[
  ["DETECTION","Observed HuskyLens face-detection distance was approximately 1 m during project testing."],
  ["AUTOMATIC RESPONSE","Unknown-face detection is linked to relay channel 1 so an alarm/emergency circuit can be triggered without a separate manual command."],
  ["RELAY RESPONSE","Observed relay response delays were approximately 2–5 seconds during project tests."],
  ["MULTI-PATH ALERTING","Email/cloud evidence and GSM notification provide separate alert paths rather than relying on one internet-only channel."],
  ["EVENT RECORD","Captured events are logged to a spreadsheet/evidence workflow for later review and analysis."],
  ["POST-ALERT MONITORING","A separate surveillance camera provides live visual monitoring after an alert; it is planned to be embedded more tightly into the unified SmartGuard experience in the next version."]
 ],
 gallery:[
  {src:"./assets/smartguard-system-prototype.jpg",label:"Integrated prototype",caption:"Complete SmartGuard prototype showing the security node, automation panel, connected loads and live-monitoring camera."},
  {src:"./assets/smartguard-camera-node.jpg",label:"Security camera node",caption:"Camera/alert enclosure development with ESP32-CAM, communication hardware and local battery power."},
  {src:"./assets/smartguard-relay-control.jpg",label:"Automation node",caption:"ESP32 four-channel relay controller during bench testing with the mobile control dashboard."},
  {src:"./assets/smartguard-camera-node-2.jpg",label:"Internal assembly",caption:"Second view of the camera/security node enclosure showing component placement and packaging."}
 ]
 result:"SmartGuard became a complete client-facing security and automation prototype rather than a single sensing demo. It links perception, evidence, GSM/email notification, automatic emergency triggering, appliance control, event logging and live monitoring while keeping the physical subsystems modular enough to troubleshoot and upgrade independently.",
 next:"The next version will bring the separate live camera more directly into the unified SmartGuard interface, refine enclosure/power integration, strengthen authentication and cloud rules, and continue reliability testing under internet or cellular-network loss."
},
"smart-circuit":{
 title:"Smart Circuit Isolator",category:"Power / Monitoring",year:"2026",status:"Working monitoring/control prototype",
 summary:"An ESP32-based electrical monitoring and isolation interface bringing measurement, relay state and protection-oriented visibility into one operations dashboard.",
 image:"./assets/smartguard-system-prototype.jpg",fit:"contain",
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

const order=["smart-energy-panel","recovery-ugv","flight-command","smartguard","smart-circuit","space-club","gas-detector","relay-control","flight-deck","turk-innovation"];
const params=new URLSearchParams(location.search);
const id=params.get("project")||"flight-command";
const p=cases[id]||cases["flight-command"];
const root=document.getElementById("caseStudyRoot");
const liveTop=document.getElementById("topLiveLink");
document.title=`${p.title} — Engineering Case Study | Ennis Turkson`;
if(p.live){liveTop.href=p.live}else{liveTop.hidden=true;}

const panels=(items,label)=>items.map(x=>`<div class="case-panel"><span>${label}</span><strong>${x}</strong></div>`).join("");
const arch=p.architecture.map((x,i)=>`<div class="arch-node"><small>0${i+1} / ${x[0]}</small><strong>${x[1]}</strong><p>${x[2]}</p></div>`).join("");
const nextId=order[(order.indexOf(id)+1)%order.length], nextP=cases[nextId];
const galleryHtml=p.gallery&&p.gallery.length?`
<section class="case-section">
  <div class="case-label">06 / Build evidence</div>
  <div class="case-content">
    <h2>Real prototype evidence</h2>
    <p>Selected hardware, interface and bench-test evidence from the actual project build.</p>
    <div class="evidence-gallery">${p.gallery.map(g=>`
      <figure class="evidence-card">
        <img loading="lazy" src="${g.src}" alt="${g.caption}">
        <figcaption><span>${g.label}</span><strong>${g.caption}</strong></figcaption>
      </figure>`).join("")}
    </div>
  </div>
</section>`:"";

root.innerHTML=`
<section class="case-hero">
  <div>
    <p class="case-kicker">${p.category} · ${p.year}</p>
    <h1>${p.title}</h1>
    <p class="case-summary">${p.summary}</p>
    <div class="case-tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    <div class="case-actions">
      ${p.live?`<a class="primary-button" href="${p.live}" target="_blank" rel="noreferrer">Open Live Project ↗</a>`:""}
      ${p.repo?`<a class="text-button" href="${p.repo}" target="_blank" rel="noreferrer">GitHub Source ↗</a>`:""}
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
  <div><span>Evidence</span><strong>${p.live||p.repo?"Live project + source":"Prototype build + case study"}</strong></div>
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

${galleryHtml}
<section class="case-section">
  <div class="case-label">${p.gallery?"07":"06"} / Testing</div>
  <div class="case-content">
    <h2>Testing & validation</h2>
    <div class="validation-list">${p.validation.map(v=>`<div class="validation-item"><b>${v[0]}</b><span>${v[1]}</span></div>`).join("")}</div>
  </div>
</section>

<section class="case-section">
  <div class="case-label">${p.gallery?"08":"07"} / Result</div>
  <div class="case-content"><h2>Result & current status</h2><p>${p.result}</p><div class="case-note"><strong>Next engineering iteration:</strong> ${p.next}</div></div>
</section>

<a class="next-project" href="./case-study.html?project=${nextId}">
  <div><small>Next case study</small><strong>${nextP.title}</strong></div><b>→</b>
</a>
`;


document.addEventListener("error",(event)=>{
  const img=event.target;
  if(!(img instanceof HTMLImageElement)) return;
  if(img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied="true";
  img.classList.add("case-image-fallback");
  img.alt=(img.alt||"Project image")+" — image unavailable";
},true);
