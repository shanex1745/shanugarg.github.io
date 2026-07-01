// --- 1. GLOBAL GAMIFICATION & COIN SYNC ---
let currentCoins = parseInt(localStorage.getItem('shanu_coins')) || 0;

function updateHUD() {
    let currentLevel = Math.floor(currentCoins / 50) + 1;
    const coinEl = document.getElementById('player-coins') || document.getElementById('coinCounter');
    const lvlEl = document.getElementById('player-level');
    if(coinEl) coinEl.innerText = currentCoins;
    if(lvlEl) lvlEl.innerText = 'LVL ' + currentLevel;
}

window.rewardPlayer = function(amount) {
    currentCoins += amount;
    localStorage.setItem('shanu_coins', currentCoins);
    updateHUD();

    // Spawn floating arcade text
    const popup = document.createElement('div');
    popup.classList.add('coin-popup');
    popup.innerText = `+${amount} COINS!`;
    document.body.appendChild(popup);
    setTimeout(() => { popup.remove(); }, 1000); 
};

updateHUD();

window.addEventListener('storage', (e) => {
    if (e.key === 'shanu_coins') {
        currentCoins = parseInt(localStorage.getItem('shanu_coins')) || 0;
        updateHUD();
    }
});


// --- 2. WALLET & ALERT LOGIC ---
const walletTrigger = document.getElementById('walletTrigger');
const walletStage = document.getElementById('walletStage');
let warningAccepted = false;

if (walletTrigger && walletStage) {
    walletTrigger.addEventListener('click', () => {
        if (!warningAccepted && !walletStage.classList.contains('is-open')) {
            // First time opening: Show the retro alert instead
            document.getElementById('systemWarningModal').classList.add('active');
        } else {
            // If already accepted, just toggle normally
            toggleWallet();
        }
    });
}

window.closeWarning = function() {
    document.getElementById('systemWarningModal').classList.remove('active');
};

window.proceedToWallet = function() {
    document.getElementById('systemWarningModal').classList.remove('active');
    warningAccepted = true; // Never show again during this session
    toggleWallet();
};

function toggleWallet() {
    walletStage.classList.toggle('is-open');
    const label = document.querySelector('.wallet-label');
    if (label) {
        label.innerText = walletStage.classList.contains('is-open') ? "▲ CLOSE WALLET" : "▼ OPEN WALLET";
    }
}


// --- 3. THE 8 PROJECTS DATA ---
const projectData = {
    proj1: { // NPS
        title: "NPS: Intent-First Design", 
        heroImage: "nps-hero.png", 
        role: "UX DESIGNER & RESEARCHER", timeline: "Hackathon Sprint (2026)", themeIcons: ['🇮🇳', '💸', '📱', '🗣️'], behanceLink: "https://www.figma.com/deck/UiI6WXsbMLdUhkVxOdIRDe/NPS-Stage-2--Copy-?node-id=0-1&t=bnogZwzgBczwizBO-1",
        tldr: {
            problem: "The NPS app prioritized rigid government compliance over human understanding—forcing users through complex KYC and error-prone OTP verifications before letting them see the plans.",
            solution: "An 'Intent-First' digital experience utilizing familiar e-commerce mental models and a Multilingual AI Voice Assistant.",
            impact: "Successfully transformed a cognitively taxing bureaucratic hurdle into an engaging, inclusive flow, increasing comprehension for informal sector workers."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">The Context & Problem Space</h3>
                <p><strong>The Systemic Flaw:</strong> Nearly 80% of working Indians are financially unprepared for retirement. The government's tool meant to solve this (NPS) was failing at the grassroots level. The onboarding demanded upfront identity verification, causing massive technical friction and drop-offs due to OTP errors, all while confusing users with dense financial jargon.</p>
                <p><strong>Primary Stakeholders:</strong> Working Citizens (especially youth/informal sector) needing retirement planning, Corporate HR forced to manually collect paper forms due to app complexity, and the PFRDA (Government).</p>
                
                <h3 class="section-heading">Research & Discovery</h3>
                <p>We conducted Primary Heuristic Research, mapped the "As-Is" friction points, and performed Large-Scale Sentiment Analysis of over 100 recent app store reviews. We discovered that the "Compliance Wall" caused 60-70% of drop-offs due to OTP errors early in the process. Furthermore, asking for sensitive personal details (Biodata) before users understood the value proposition destroyed trust.</p>
            </div>

            <h3 class="section-heading">APP REDESIGN: COMPLIANCE VS INTENT</h3>
            <div class="before-after-grid" style="margin-bottom: 2rem;">
                <div class="ba-box">
                    <div class="ba-label label-before">BEFORE: THE COMPLIANCE WALL</div>
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #ff5555;">
                        <img src="nps-old.png" alt="Old OTP/KYC Screens" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #ff5555; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                    <p style="color:#ccc; font-family:monospace; font-size:0.8rem; margin-top:10px;">Flow: OTP -> Biodata -> Nominee -> Validate -> Preview.</p>
                </div>
                <div class="ba-box">
                    <div class="ba-label label-after">AFTER: INTENT-FIRST EXPLORATION</div>
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #7cff9b; box-shadow: 0 0 15px rgba(124,255,155,0.15);">
                        <img src="nps-new.png" alt="New Amazon-style Plan Selection" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #7cff9b; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                    <p style="color:#ccc; font-family:monospace; font-size:0.8rem; margin-top:10px;">Flow: Explore Plans -> Add to Cart -> KYC & Payment. Clarity before compliance.</p>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">Design Execution & AI Integration</h3>
                <p><strong>Major Design Challenge:</strong> How do you make highly complex financial forecasts accessible to low-literacy or first-time investors from the informal sector? Simplified text wasn't enough; we integrated a Multilingual AI Voice Assistant. If users were confused by a chart, they could ask the AI to clarify in their regional language.</p>
            </div>
            
            <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #333; margin-top: 1rem; margin-bottom: 2rem;">
                <img src="nps-ai.png" alt="AI Voice Assistant Interface" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">Impact & Core Learnings</h3>
                <p>During testing, informal sector users naturally explored plans before committing, vastly improving their clarity. The AI voice support fascinated users, transitioning from a fallback to a primary engagement tool. We proved that public utilities can serve the marginalized without compromising on technical security or compliance.</p>
            </div>
        `
    },

    proj2: { // Cam Secure
        title: "Cam Secure: Active ATM Defense", 
        heroImage: "cam-render.png", 
        role: "UX/SYSTEM DESIGNER & RESEARCHER", 
        timeline: "Research & Hardware Prototyping Sprint", 
        themeIcons: ['🏧', '📷', '🚨', '🛡️'], 
        behanceLink: "https://www.behance.net/gallery/232022145/Retrofit-Device-for-Enhancing-ATM-Camera-Surveillance",
        tldr: {
            problem: "Existing ATM security relies on passive recording, allowing robbers to easily bypass CCTVs using gas cutters or spray paint, leaving off-site ATMs highly vulnerable and users feeling unsafe.",
            solution: "Cam Secure, a ₹1500 retrofit hybrid detection device combining hardware (ultrasonic/smoke sensors) and AI (weapon/behavior detection) to proactively prevent tampering and trigger instant local alarms.",
            impact: "Transformed the security paradigm from passive recording to active 'tamper response,' engineering a sensor-fusion ecosystem capable of instantly neutralizing the two most common ATM attack methods (62% of breaches)."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">The Context & Problem Space</h3>
                <p><strong>The Systemic Flaw:</strong> ATMs placed in high-traffic, off-site areas (like railway stations and isolated markets) suffer from a severe security deficit due to the high cost of posting human guards. The existing digital infrastructure is fundamentally flawed: cameras simply record crimes as they happen. We set out to solve a massive systemic gap where high-end AI software exists, but hardware remains completely defenseless against simple physical attacks like covering the lens or using gas cutters.</p>
                <br>
                <p><strong>Primary Stakeholders:</strong><br>
                • <strong>Everyday Citizens:</strong> Grassroots users who reported feeling actively unsafe and threatened while using isolated ATMs.<br>
                • <strong>Bank Management & ATM Owners:</strong> Facing severe financial losses (crores of rupees annually) due to successful heists.<br>
                • <strong>Security Personnel:</strong> Unorganized laborers often placed in high-risk, potentially lethal environments without adequate technological backup.</p>
            </div>

            <h3 class="section-heading">Research & Discovery</h3>
            <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none; margin-bottom: 2rem;">
                <img src="cam-secure.png" alt="Statistical Threat Analysis & Market Gaps" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>
            
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <p><strong>Critical Insights Uncovered:</strong><br>
                • <strong>The "Blindspot" Vulnerability:</strong> 25% of all ATM robberies succeed simply by spraying the CCTV camera. Premium market cameras offer absolutely no physical resistance or immediate alerts when their field of view is blocked.<br>
                • <strong>Gas Cutters are the Primary Threat:</strong> 37.5% of attacks utilize gas cutters, yet traditional cameras lack localized smoke or heat detection to preemptively flag an intrusion.<br>
                • <strong>The Hardware-Software Disconnect:</strong> Deep research revealed that while advanced AI for gun detection exists, it is strictly software-based; there were zero cameras currently in the market featuring integrated hardware-level gun detection.</p>
            </div>

            <h3 class="section-heading">The Idea</h3>
            <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none; margin-bottom: 2rem;">
                <img src="cam-idea.png" alt="Dual-Layer Data Architecture Map" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <p><strong>Structuring Complex System Data:</strong> To solve the disconnect between physical tampering and digital response, We mapped a complex dual-layer data architecture. The flow was split into a Local Server (handling rapid analog inputs from Obstruction and Smoke sensors) and a Central Server (handling heavy video data streams for AI Analysis).</p>
                <br>
                <p><strong>Rationale Behind the Restructured User Flow:</strong><br>
                • <strong>Front-Loading the Friction (Proactive vs. Passive):</strong> I redesigned the security journey to trigger before a crime occurs. The flow is now proactive: [Thief sprays camera -> Ultrasonic sensor detects proximity -> Local server triggers 120dB alarm instantly -> AI validates weapon/fire -> Authorities alerted].<br>
                • <strong>Eliminating Cloud Latency for Physical Threats:</strong> By routing basic obstruction and smoke data directly through a local Arduino Uno rather than sending it to the cloud, we eliminated processing latency. The system responds instantly to immediate physical threats, ensuring rapid deterrence.</p>
            </div>

            <h3 class="section-heading">Design Execution & Iteration</h3>
            <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none; margin-bottom: 2rem;">
                <img src="cam-ideation.png" alt="CAD Modeling and Hardware Breadboarding" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <p><strong>Rapid Prototyping & Testing:</strong> Transitioned from behavioral storyboarding to 3D CAD modeling, meticulously iterating on the physical constraints of an ATM enclosure. We built functional breadboard circuits using Arduino, HC-SR04 (Ultrasonic), and MQ (Smoke) sensors.</p>
                <br>
                <p><strong>The Overcome:</strong> We engineered a Retrofit Corner-Mount Architecture. Rather than a full system replacement, the casing was designed to be manufactured easily from Aluminum alloy (6061/6063) and mounts seamlessly into the corner of any existing enclosure. I positioned the camera specifically at a 45-degree angle for maximum visibility, and aligned the ultrasonic sensor perfectly parallel to the lens, ensuring any hand or spray can entering the camera's blind spot is instantly detected.</p>
            </div>

            <h3 class="section-heading">The Final Solution</h3>
            <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #7cff9b; box-shadow: 0 0 15px rgba(124,255,155,0.15); cursor: grab; flex: none; margin-bottom: 2rem;">
                <video width="100%" controls>
                  <source src="Detection.mp4" type="video/mp4">
                </video>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <p><strong>The Deliverables:</strong> Cam Secure, a highly durable, retrofit security unit priced at just ₹1500. The final design houses a 45-degree camera, side pods for gas detection, a parallel ultrasonic sensor for blockage detection, and a loud Arduino-powered buzzer, all feeding into an AI model trained for fire, weapon, and behavioral anomaly detection.</p>
                <p><strong>Ethical & Governance Considerations:</strong> This product acts directly as "moral infrastructure." High-end security shouldn't be a luxury reserved for premium bank branches. By designing a highly cost-effective (₹1500) retrofit solution, we made advanced AI and sensor-fusion accessible to grassroots, rural, and isolated off-site ATMs. Furthermore, processing sensor data locally rather than relying purely on continuous cloud surveillance ensures rapid response while keeping sensitive operational data secure.</p>
                <br>
            </div>

            <h3 class="section-heading">Impact, Metrics & Reflections</h3>
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <p><strong>Structural Mitigation (Quantitative):</strong> The dual hardware+AI architecture specifically neutralizes the two most frequent attack vectors—Gas Cutters (37.5%) and Camera Spraying (25%)—effectively covering 62.5% of all known ATM vulnerabilities.</p>
                <p><strong>Qualitative Ecosystem Shift:</strong> Successfully reduced false alarms by shifting from "single-source alerts" (relying just on motion) to a "cross-verified by AI + Sensors" model, drastically improving trust for monitoring authorities.</p>
                <p><strong>Core Learnings:</strong> True security requires sensory fusion. AI is powerful, but software cannot "feel" a spray paint can. Bridging the gap between physical hardware (ultrasonic) and digital intelligence (AI) is where real systemic improvement happens. Furthermore, designing a cheap, adaptable retrofit solution proved that empathetic, user-centric design must also account for economic viability and ease of installation.</p>
            </div>
        `
    },

    proj3: { // NAI
        title: "National Archives of India", 
        heroImage: "nai-hero.png", 
        behanceLink: "https://www.behance.net/gallery/217962985/Redesigning-National-Archives-of-India",
        role: "UX RESEARCHER & UI DESIGNER", 
        timeline: "Redesign Sprint", 
        themeIcons: ['📜', '🏛️', '🔍', '♿'],
        tldr: {
            problem: "The National Archives platform functioned as a digital gatekeeper, suffering from an inaccessible architecture that systematically excluded screen-reader users and the public.",
            solution: "A modernized, WCAG-compliant digital repository with streamlined information architecture, intuitive search, and multilingual support.",
            impact: "Eliminated massive cognitive overload by collapsing a 4-level navigation system, democratizing access to over 3.7 million historical records."
        },
        dynamicHTML: `
            <style>
                /* Cyberpunk/Retro Clean IA Styles */
                .retro-title { font-family: 'Press Start 2P', cursive; font-size: 7px; padding: 8px 14px; letter-spacing: 1px; border: 1px solid; background: #060d20; display: inline-block; margin-bottom: -1px; position: relative; z-index: 2; white-space: nowrap; }
                .retro-content { border: 1px solid; background: #050d1f; padding: 20px 16px; overflow: hidden; margin-bottom: 25px; }
                .ia-parent { border: 1px solid; padding: 6px 10px; font-family: 'Space Mono', monospace; font-size: 9px; white-space: nowrap; flex-shrink: 0; background: rgba(0,0,0,0.3); }
                .ia-tag { border: 1px solid; padding: 3px 6px; font-size: 8px; font-family: 'Space Mono', monospace; background: rgba(0,0,0,0.2); }
                .branch-icon { font-family: monospace; font-size: 12px; margin-right: 8px; margin-top: 2px; flex-shrink: 0; opacity: 0.6; }
                .flow-icon { font-family: monospace; font-size: 12px; margin: 2px 8px 0; flex-shrink: 0; opacity: 0.4; }
                .v-node { border: 1px solid; padding: 5px 10px; font-family: 'Space Mono', monospace; font-size: 9px; display: inline-block; background: rgba(0,0,0,0.3); }
                .v-row { display: flex; align-items: flex-start; margin-bottom: 6px; }
                .v-children { border-left: 1px dashed; margin-left: 12px; padding-left: 16px; margin-bottom: 10px; padding-top: 4px; display: flex; flex-direction: column; }
                .v-tree-icon { font-family: monospace; font-size: 12px; margin-right: 8px; flex-shrink: 0; line-height: 20px; opacity: 0.6; }
                
                /* New IA Horizontal Expanding Tree */
                .h-root { border: 1px solid; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 8px; letter-spacing: 1px; background: rgba(0,0,0,0.4); display: inline-block; margin-top: 4px;}
                .h-node { border: 1px solid; padding: 5px 10px; font-family: 'Space Mono', monospace; font-size: 9px; background: rgba(0,0,0,0.3); white-space: nowrap; flex-shrink: 0; margin-top: 2px; }
                .h-leaf { border: 1px solid; padding: 4px 8px; font-family: 'Space Mono', monospace; font-size: 8px; background: rgba(0,0,0,0.2); white-space: nowrap; flex-shrink: 0; margin-top: 1px;}
                .h-branch { display: flex; align-items: flex-start; gap: 6px; margin-bottom: 4px; }
                .h-children { display: flex; flex-direction: column; border-left: 1px dashed; padding-left: 14px; margin-left: 8px; margin-bottom: 4px;}
                .h-icon { font-family: monospace; font-size: 12px; flex-shrink: 0; opacity: 0.6; margin-top: 2px; }
            </style>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 3rem;">
                <h3 class="section-heading">Research & Discovery</h3>
                <p>Through Heuristic Evaluation and Global Competitive Analysis, we uncovered severe Accessibility Barriers. Linguistic gatekeeping and overlapping navigation bars with nested sub-menus caused massive navigational paralysis.</p>
            </div>

            <h3 class="section-heading">THE UI OVERHAUL</h3>
            <p style="color:#aaa; font-family: 'Space Mono', monospace; font-size:0.85rem; margin-bottom: 2rem;">
                Scroll inside the windows below to view the legacy interface versus the modernized, WCAG-compliant redesign.
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 5rem;">
                <div style="display: flex; flex-direction: column;">
                    <div class="retro-title" style="color: #ff5555; border-color: #ff5555; width: max-content;">► BEFORE: THE MAZE</div>
                    <div style="max-height: 500px; max-width: 100%; overflow: auto; background: #000; border-radius: 4px; border: 2px solid #ff5555;">
                        <img src="nai-old.png" alt="Old NAI Website" style="display: block; width: 100%; min-width: 600px; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #ff5555; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column;">
                    <div class="retro-title" style="color: #7cff9b; border-color: #7cff9b; width: max-content;">► AFTER: INTENT-DRIVEN</div>
                    <div style="max-height: 500px; max-width: 100%; overflow: auto; background: #000; border-radius: 4px; border: 2px solid #7cff9b; box-shadow: 0 0 20px rgba(124,255,155,0.15);">
                        <img src="nai-new.jpg" alt="New NAI Website" style="display: block; width: 100%; min-width: 600px; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #7cff9b; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                </div>
            </div>

            <h3 class="section-heading" style="color: #ff5555;">BEFORE: THE NAVIGATIONAL MAZE (FULL SCOPE)</h3>
            <p style="color:#aaa; font-family: 'Space Mono', monospace; font-size:0.85rem; margin-bottom: 2rem;">
                The legacy architecture forced users to navigate three entirely separate, conflicting navigation structures, alongside a deep 5-level vertical tree. Below is the exhaustive map of the old system's cognitive overload.
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 2rem; align-items: stretch;">
                <div style="display: flex; flex-direction: column; min-width: 0;">
                    <div>
                        <div class="retro-title" style="color: #00ffff; border-color: #00ffff;">► EXPLORE NATIONAL ARCHIVE</div>
                        <div class="retro-content" style="border-color: #00ffff;">
                            <div style="border-left: 1px solid rgba(0,255,255,0.3); padding-left: 12px; display: flex; flex-direction: column; gap: 14px;">
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">├►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Research and References</div><span class="flow-icon" style="color: #00ffff;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Access Rules</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Withdrawal</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Reference Tools</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Registration</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Requisitioning</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Reprographic Services</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">├►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Microfilm Section</div><span class="flow-icon" style="color: #00ffff;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Catalogue</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Viewing Facility</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Prints on Demand</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">├►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Finding Aids</div><span class="flow-icon" style="color: #00ffff;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Accession Registers</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Index Volumes</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Transfer Lists</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">├►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Historical Sense of Place</div><span class="flow-icon" style="color: #00ffff;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Maps</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Place Names</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Photographs</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Satellite Imagery</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">├►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Digital Archives</div><span class="flow-icon" style="color: #00ffff;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Online Catalogue</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Digitised Records</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Document Viewer</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">├►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Digitisation & Records</div><span class="flow-icon" style="color: #00ffff;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Digitisation Policy</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Digital Preservation</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Born-Digital Records</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">├►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Conferences & Events</div><span class="flow-icon" style="color: #00ffff;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Schedule</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Registration</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Past Events</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">├►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Links</div><span class="flow-icon" style="color: #00ffff;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Tenders</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Ads</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">e-Abhilekh</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Disclaimer</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Help</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Feedback</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Site Map</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">├►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Festival of Archives</div><span class="flow-icon" style="color: #00ffff;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Annual Programme</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Workshops</span><span class="ia-tag" style="color: rgba(0,255,255,0.8); border-color: rgba(0,255,255,0.3);">Public Lectures</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #00ffff;">└►</span><div class="ia-parent" style="color: #00ffff; border-color: #00ffff; width: 170px;">Permanent Exhibition</div></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="retro-title" style="color: #ff6655; border-color: #ff6655;">► NATIONAL ARCHIVES</div>
                        <div class="retro-content" style="border-color: #ff6655;">
                            <div style="border-left: 1px solid rgba(255,102,85,0.3); padding-left: 12px; display: flex; flex-direction: column; gap: 14px;">
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ff6655;">├►</span><div class="ia-parent" style="color: #ff6655; border-color: #ff6655; width: 160px;">State Archives</div><span class="flow-icon" style="color: #ff6655;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(255,102,85,0.8); border-color: rgba(255,102,85,0.3);">Listings</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ff6655;">├►</span><div class="ia-parent" style="color: #ff6655; border-color: #ff6655; width: 160px;">All Projects</div><span class="flow-icon" style="color: #ff6655;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(255,102,85,0.8); border-color: rgba(255,102,85,0.3);">In-House Pubs</span><span class="ia-tag" style="color: rgba(255,102,85,0.8); border-color: rgba(255,102,85,0.3);">Sub-National</span><span class="ia-tag" style="color: rgba(255,102,85,0.8); border-color: rgba(255,102,85,0.3);">Record Mgmt</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ff6655;">├►</span><div class="ia-parent" style="color: #ff6655; border-color: #ff6655; width: 160px;">The Archival Studio</div><span class="flow-icon" style="color: #ff6655;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(255,102,85,0.8); border-color: rgba(255,102,85,0.3);">Booking</span><span class="ia-tag" style="color: rgba(255,102,85,0.8); border-color: rgba(255,102,85,0.3);">Facilities</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ff6655;">└►</span><div class="ia-parent" style="color: #ff6655; border-color: #ff6655; width: 160px;">The Production Studio</div><span class="flow-icon" style="color: #ff6655;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(255,102,85,0.8); border-color: rgba(255,102,85,0.3);">Booking</span><span class="ia-tag" style="color: rgba(255,102,85,0.8); border-color: rgba(255,102,85,0.3);">Equipment</span></div></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="retro-title" style="color: #ffbb44; border-color: #ffbb44;">► RESOURCES</div>
                        <div class="retro-content" style="border-color: #ffbb44;">
                            <div style="border-left: 1px solid rgba(255,187,68,0.3); padding-left: 12px; display: flex; flex-direction: column; gap: 14px;">
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ffbb44;">├►</span><div class="ia-parent" style="color: #ffbb44; border-color: #ffbb44; width: 160px;">Events</div><span class="flow-icon" style="color: #ffbb44;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(255,187,68,0.8); border-color: rgba(255,187,68,0.3);">Upcoming</span><span class="ia-tag" style="color: rgba(255,187,68,0.8); border-color: rgba(255,187,68,0.3);">Past Events</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ffbb44;">├►</span><div class="ia-parent" style="color: #ffbb44; border-color: #ffbb44; width: 160px;">Talks & Seminars</div><span class="flow-icon" style="color: #ffbb44;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(255,187,68,0.8); border-color: rgba(255,187,68,0.3);">Programme</span><span class="ia-tag" style="color: rgba(255,187,68,0.8); border-color: rgba(255,187,68,0.3);">Register</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ffbb44;">├►</span><div class="ia-parent" style="color: #ffbb44; border-color: #ffbb44; width: 160px;">National Glossary</div><span class="flow-icon" style="color: #ffbb44;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(255,187,68,0.8); border-color: rgba(255,187,68,0.3);">A-Z Terms</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ffbb44;">├►</span><div class="ia-parent" style="color: #ffbb44; border-color: #ffbb44; width: 160px;">Biography</div><span class="flow-icon" style="color: #ffbb44;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(255,187,68,0.8); border-color: rgba(255,187,68,0.3);">Notable Archivists</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ffbb44;">├►</span><div class="ia-parent" style="color: #ffbb44; border-color: #ffbb44; width: 160px;">Learning@NAI</div><span class="flow-icon" style="color: #ffbb44;">─►</span><div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;"><span class="ia-tag" style="color: rgba(255,187,68,0.8); border-color: rgba(255,187,68,0.3);">School Resources</span><span class="ia-tag" style="color: rgba(255,187,68,0.8); border-color: rgba(255,187,68,0.3);">Online Modules</span></div></div>
                                <div style="display: flex; align-items: flex-start;"><span class="branch-icon" style="color: #ffbb44;">└►</span><div class="ia-parent" style="color: #ffbb44; border-color: #ffbb44; width: 160px;">Career</div></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="retro-title" style="color: #ff44cc; border-color: #ff44cc;">► HORIZONTAL NAVIGATION BARS</div>
                        <div class="retro-content" style="border-color: #ff44cc; margin-bottom: 0;">
                            <div style="border-left: 1px solid rgba(255,68,204,0.3); padding-left: 12px; display: flex; flex-direction: column; gap: 20px;">
                                <div>
                                    <div style="display: flex; align-items: flex-start;">
                                        <span class="branch-icon" style="color: #ff44cc;">├►</span><div class="ia-parent" style="color: #ff88cc; border-color: #ff88cc; width: 160px;">RESEARCH & REFERENCE</div><span class="flow-icon" style="color: #ff44cc;">─►</span>
                                        <div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;">
                                            <span class="ia-tag" style="color: rgba(255,136,204,0.8); border-color: rgba(255,136,204,0.3);">Access Rules</span><span class="ia-tag" style="color: rgba(255,136,204,0.8); border-color: rgba(255,136,204,0.3);">Withdrawal of Public Records</span><span class="ia-tag" style="color: rgba(255,136,204,0.8); border-color: rgba(255,136,204,0.3);">Reference Tools</span><span class="ia-tag" style="color: rgba(255,136,204,0.8); border-color: rgba(255,136,204,0.3);">Registration & Admission</span><span class="ia-tag" style="color: rgba(255,136,204,0.8); border-color: rgba(255,136,204,0.3);">Requisitioning & Reserving Records</span><span class="ia-tag" style="color: rgba(255,136,204,0.8); border-color: rgba(255,136,204,0.3);">Reprographic Services</span><span class="ia-tag" style="color: rgba(255,136,204,0.8); border-color: rgba(255,136,204,0.3);">Digital Photography</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style="display: flex; align-items: flex-start;">
                                        <span class="branch-icon" style="color: #ff44cc;">└►</span><div class="ia-parent" style="color: #cc88ff; border-color: #cc88ff; width: 160px;">WHAT'S NEW / LINKS</div><span class="flow-icon" style="color: #ff44cc;">─►</span>
                                        <div style="display: flex; flex-wrap: wrap; gap: 4px; flex: 1;">
                                            <span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Tenders</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Advertisements</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">e-Abhilekh</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Related Links</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Disclaimer</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Help</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Archival Data</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Feedback</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Site Map</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Website Policies</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Terms & Conditions</span><span class="ia-tag" style="color: rgba(204,136,255,0.8); border-color: rgba(204,136,255,0.3);">Photo / Video Gallery</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style="display: flex; flex-direction: column; min-width: 0; height: 100%;">
                    <div class="retro-title" style="color: #4488ff; border-color: #4488ff;">► VERTICAL NAVIGATION (DEEP TREE OVERLAP)</div>
                    <div class="retro-content" style="border-color: #4488ff; flex: 1; margin-bottom: 0;">
                        
                        <div class="v-row"><div class="v-node" style="color: #4488ff; border-color: #4488ff;">HOME</div></div>
                        
                        <div class="v-children" style="border-color: rgba(68,136,255,0.3);">
                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">├►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">ABOUT US</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3);">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">OUR HISTORY</div></div>
                                <div class="v-children" style="border-color: rgba(170,85,255,0.3);">
                                    <div class="v-row"><span class="v-tree-icon" style="color: #ffcc33;">├►</span><div class="v-node" style="color: #ffcc33; border-color: #ffcc33;">ORGANISATION</div></div>
                                    <div class="v-children" style="border-color: rgba(255,204,51,0.3);">
                                        <div class="v-row"><span class="v-tree-icon" style="color: #ffaa55;">└►</span><div class="v-node" style="color: #ffaa55; border-color: #ffaa55;">ANNUAL REPORTS</div></div>
                                    </div>
                                    <div class="v-row"><span class="v-tree-icon" style="color: #ffcc33;">└►</span><div class="v-node" style="color: #ffcc33; border-color: #ffcc33;">STRATEGIC PLAN</div></div>
                                </div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">STAFF & CONTACTS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">GOVERNANCE</div></div>
                            </div>
                            
                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">├►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">COLLECTIONS</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3);">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">DIGITAL ARCHIVE</div></div>
                                <div class="v-children" style="border-color: rgba(170,85,255,0.3);">
                                    <div class="v-row"><span class="v-tree-icon" style="color: #ffcc33;">├►</span><div class="v-node" style="color: #ffcc33; border-color: #ffcc33;">ONLINE CATALOGUE</div></div>
                                    <div class="v-children" style="border-color: rgba(255,204,51,0.3);">
                                        <div class="v-row"><span class="v-tree-icon" style="color: #ffaa55;">└►</span><div class="v-node" style="color: #ffaa55; border-color: #ffaa55;">SEARCH RECORDS</div></div>
                                    </div>
                                    <div class="v-row"><span class="v-tree-icon" style="color: #ffcc33;">└►</span><div class="v-node" style="color: #ffcc33; border-color: #ffcc33;">DIGITISED RECORDS</div></div>
                                </div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">NATIONAL COLLECTION</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">SPECIAL COLLECTIONS</div></div>
                            </div>

                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">├►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">RESEARCH</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3);">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">READING ROOM</div></div>
                                <div class="v-children" style="border-color: rgba(170,85,255,0.3);">
                                    <div class="v-row"><span class="v-tree-icon" style="color: #ffcc33;">├►</span><div class="v-node" style="color: #ffcc33; border-color: #ffcc33;">ACCESS POLICY</div></div>
                                    <div class="v-row"><span class="v-tree-icon" style="color: #ffcc33;">└►</span><div class="v-node" style="color: #ffcc33; border-color: #ffcc33;">BOOKING</div></div>
                                </div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">FINDING AIDS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">RESEARCH GUIDANCE</div></div>
                            </div>

                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">├►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">EXHIBITIONS</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3);">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">CURRENT EXHIBITIONS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">ONLINE EXHIBITIONS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">PERMANENT EXHIBITION</div></div>
                            </div>

                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">├►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">EDUCATION</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3);">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">SCHOOLS PROGRAMME</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">WORKSHOPS</div></div>
                            </div>

                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">├►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">SERVICES</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3);">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">ORDERING RECORDS</div></div>
                                <div class="v-children" style="border-color: rgba(170,85,255,0.3);">
                                    <div class="v-row"><span class="v-tree-icon" style="color: #ffcc33;">└►</span><div class="v-node" style="color: #ffcc33; border-color: #ffcc33;">RECORD REQUEST FORM</div></div>
                                </div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">REPRODUCTIONS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">CONSERVATION</div></div>
                            </div>
                            
                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">├►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">CIVIL REGISTRATION</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3);">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">HISTORICAL RECORDS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">ONLINE RESEARCH</div></div>
                            </div>

                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">├►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">RESPONSIBILITIES</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3);">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">ARCHIVES ACT</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">DEPARTMENTAL RECORDS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">GUIDELINES</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">INSPECTION POLICY</div></div>
                            </div>

                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">├►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">BIBLIOGRAPHY</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3);">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">PUBLICATIONS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">JOURNALS</div></div>
                            </div>

                            <div class="v-row"><span class="v-tree-icon" style="color: #44dd88;">└►</span><div class="v-node" style="color: #44dd88; border-color: #44dd88;">DESCRIPTIONS</div></div>
                            <div class="v-children" style="border-color: rgba(68,221,136,0.3); margin-bottom: 0;">
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">RECORD TYPES</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">FINDING TOOLS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">ARCHIVAL STANDARDS</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">├►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">METADATA SCHEMA</div></div>
                                <div class="v-row"><span class="v-tree-icon" style="color: #aa55ff;">└►</span><div class="v-node" style="color: #aa55ff; border-color: #aa55ff;">ACCESS LEVELS</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="section-heading" style="color: #7cff9b;">AFTER: THE UNIFIED I.A. TREE</h3>
            <p style="color:#aaa; font-family: 'Space Mono', monospace; font-size:0.85rem; margin-bottom: 2rem;">
                I dismantled the bloated hierarchies and merged all conflicting navigation structures into a single, logical, intent-driven expanding map.
            </p>

            <div style="background: #050d1f; border: 2px solid #333; border-radius: 8px; padding: 2.5rem; overflow-x: auto; margin-bottom: 3rem;">
                
                <div style="display: flex; align-items: flex-start; min-width: max-content; gap: 8px;">
                    
                    <div class="h-root" style="color: #ff55cc; border-color: #ff55cc;">HOME / NAI</div>
                    <div class="h-icon" style="color: #ff55cc; margin-top: 10px;">══►</div>
                    
                    <div class="h-children" style="border-color: rgba(255,85,204,0.3); padding-top: 5px;">
                        
                        <div class="h-branch">
                            <span class="h-icon" style="color: #ff55cc;">├─►</span>
                            <div class="h-node" style="color: #5599ff; border-color: #5599ff;">ABOUT US</div>
                            <div class="h-children" style="border-color: rgba(85,153,255,0.3);">
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">BACKGROUND</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">HISTORY OF NAI</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">MISSION & VISION</div></div>
                                    </div>
                                </div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">ORGANISATIONAL STRUCTURE</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">STAFF INFORMATION</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">ADVISORY COMMITTEE</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">VENUE & LOCATION</div></div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">ANNUAL REPORTS</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">ANNUAL REPORT 2022-23</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">PREVIOUS REPORTS</div></div>
                                    </div>
                                </div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">RIGHT TO INFORMATION</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">RTI ACT</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">RTI APPLICATIONS</div></div>
                                    </div>
                                </div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">CONTACT US</div></div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">└─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">RECRUITMENT</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">CURRENT OPENINGS</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">ARCHIVE</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="h-branch">
                            <span class="h-icon" style="color: #ff55cc;">├─►</span>
                            <div class="h-node" style="color: #5599ff; border-color: #5599ff;">ARCHIVES</div>
                            <div class="h-children" style="border-color: rgba(85,153,255,0.3);">
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">PRE-INDEPENDENCE RECORDS</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">CENTRAL RECORDS</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">STATE RECORDS</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">PRIVATE PAPERS</div></div>
                                    </div>
                                </div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">POST-INDEPENDENCE RECORDS</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">GOVERNMENT RECORDS</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">MAPS & CHARTS</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">PHOTOGRAPHS</div></div>
                                    </div>
                                </div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">FINDING AIDS</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">SEARCH ONLINE</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">PHYSICAL CATALOGUE</div></div>
                                    </div>
                                </div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">MICROFILM SECTION</div></div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">DIGITISATION</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">DIGITISED RECORDS</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">DIGITISATION POLICY</div></div>
                                    </div>
                                </div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">└─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">DIGITAL ARCHIVES</div></div>
                            </div>
                        </div>

                        <div class="h-branch">
                            <span class="h-icon" style="color: #ff55cc;">├─►</span>
                            <div class="h-node" style="color: #5599ff; border-color: #5599ff;">ARCHIVAL TREASURES</div>
                            <div class="h-children" style="border-color: rgba(85,153,255,0.3);">
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">RARE DOCUMENTS</div></div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">HISTORICAL MAPS</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">MAP COLLECTION</div></div>
                                    </div>
                                </div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">MANUSCRIPTS</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">PHOTOGRAPHS</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">└─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">NEWSPAPER ARCHIVES</div></div>
                            </div>
                        </div>

                        <div class="h-branch">
                            <span class="h-icon" style="color: #ff55cc;">├─►</span>
                            <div class="h-node" style="color: #5599ff; border-color: #5599ff;">LEGISLATION / POLICY</div>
                            <div class="h-children" style="border-color: rgba(85,153,255,0.3);">
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">PUBLIC RECORDS ACT 1993</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">PUBLIC RECORDS RULES</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">RTI FRAMEWORK</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">└─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">ARCHIVAL GUIDELINES</div></div>
                            </div>
                        </div>

                        <div class="h-branch">
                            <span class="h-icon" style="color: #ff55cc;">├─►</span>
                            <div class="h-node" style="color: #5599ff; border-color: #5599ff;">RESEARCH & REFERENCE</div>
                            <div class="h-children" style="border-color: rgba(85,153,255,0.3);">
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">READING ROOM</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">ACCESS RULES</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">BOOKING</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">TIMINGS</div></div>
                                    </div>
                                </div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">REFERENCE SERVICES</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">WITHDRAWAL OF RECORDS</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">REQUISITIONING</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">REGISTRATION & ADMISSION</div></div>
                                    </div>
                                </div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">REPROGRAPHIC SERVICES</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">DIGITAL PHOTOGRAPHY</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">PHOTOCOPIES</div></div>
                                    </div>
                                </div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">└─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">MICROFILM FACILITIES</div></div>
                            </div>
                        </div>

                        <div class="h-branch">
                            <span class="h-icon" style="color: #ff55cc;">└─►</span>
                            <div class="h-node" style="color: #5599ff; border-color: #5599ff;">WHAT'S NEW</div>
                            <div class="h-children" style="border-color: rgba(85,153,255,0.3);">
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">TENDERS</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">NOTICES & CIRCULARS</div></div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">EVENTS & EXHIBITIONS</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">├─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">EVENTS CALENDAR</div></div>
                                        <div class="h-branch"><span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ff7755; border-color: #ff7755;">PAST EVENTS</div></div>
                                    </div>
                                </div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">ANNOUNCEMENTS</div></div>
                                <div class="h-branch"><span class="h-icon" style="color: #5599ff;">├─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">ADVERTISEMENTS</div></div>
                                <div class="h-branch">
                                    <span class="h-icon" style="color: #5599ff;">└─►</span><div class="h-node" style="color: #44ee88; border-color: #44ee88;">PHOTO GALLERY</div>
                                    <div class="h-children" style="border-color: rgba(68,238,136,0.3);">
                                        <div class="h-branch">
                                            <span class="h-icon" style="color: #44ee88;">└─►</span><div class="h-leaf" style="color: #ffdd33; border-color: #ffdd33;">VIDEO GALLERY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div style="display: flex; gap: 15px; justify-content: center; margin-top: 30px; border-top: 2px solid #222; padding-top: 20px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; gap: 6px;"><div style="width: 10px; height: 10px; background: rgba(255,85,204,0.2); border: 1px solid #ff55cc;"></div><span style="font-family: 'Press Start 2P', cursive; font-size: 5px; color: #ff55cc;">L1 (ROOT)</span></div>
                    <div style="display: flex; align-items: center; gap: 6px;"><div style="width: 10px; height: 10px; background: rgba(85,153,255,0.2); border: 1px solid #5599ff;"></div><span style="font-family: 'Press Start 2P', cursive; font-size: 5px; color: #5599ff;">L2</span></div>
                    <div style="display: flex; align-items: center; gap: 6px;"><div style="width: 10px; height: 10px; background: rgba(68,238,136,0.2); border: 1px solid #44ee88;"></div><span style="font-family: 'Press Start 2P', cursive; font-size: 5px; color: #44ee88;">L3</span></div>
                    <div style="display: flex; align-items: center; gap: 6px;"><div style="width: 10px; height: 10px; background: rgba(255,119,85,0.2); border: 1px solid #ff7755;"></div><span style="font-family: 'Press Start 2P', cursive; font-size: 5px; color: #ff7755;">L4</span></div>
                    <div style="display: flex; align-items: center; gap: 6px;"><div style="width: 10px; height: 10px; background: rgba(255,221,51,0.2); border: 1px solid #ffdd33;"></div><span style="font-family: 'Press Start 2P', cursive; font-size: 5px; color: #ffdd33;">L5 (LEAF)</span></div>
                </div>

            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">The Final Solution & Ethics</h3>
                <p>By implementing robust screen-reader support, scalable text, and high-contrast modes, the redesign champions inclusivity. These choices frame the platform as "moral infrastructure"—treating equitable access to national heritage as a fundamental civic right.</p>
            </div>
        `
    },

    proj4: { // Panchamitra
        title: "Mobile Panchamitra", 
        heroImage: "rdpr-hero.png", 
        behanceLink: "https://www.youtube.com/watch?v=QuULupXWl8M",
        role: "LEAD UX RESEARCHER & UI/UX DESIGNER", 
        timeline: "FY 24-25 Focus", 
        themeIcons: ['🌾', '📱', '🔊', '📊'],
        tldr: {
            problem: "Despite digitizing local governance data across 6,000 Gram Panchayats, rural citizens were entirely excluded from the platform due to systemic barriers in digital, numerical, and linguistic literacy.",
            solution: "An audio-first, low-data mobile platform for citizens, paired with a streamlined, error-preventing Meeting Management system for Panchayat officials.",
            impact: "Dramatically improved data comprehension among illiterate users, transforming raw civic data into moral infrastructure."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">Research & Discovery</h3>
                <p>1-on-1 Usability Testing revealed "The Number Barrier": users completely failed to comprehend percentages or decimals. Furthermore, officials were manually copying shorthand notes under time pressure, resulting in vague civic records.</p>
            </div>

            <h3 class="section-heading">I.A. DASHBOARD: THE MACRO SYSTEM</h3>
            <p style="color:#ccc; font-family: 'Space Mono', monospace; font-size:0.9rem; margin-bottom: 2rem; line-height: 1.6;">
                The original architecture possessed a deeply nested, overwhelming structure. I reorganized the core navigation into a unified dashboard. Below is the complete expansion of the <strong>HOME</strong> module, detailing the deep horizontal task flows required for data retrieval.
            </p>

            <div style="display: flex; gap: 2rem; background: #050d1f; padding: 2.5rem; border: 2px solid #333; border-radius: 8px; margin-bottom: 3rem; overflow-x: auto; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);">
                
                <div style="width: 220px; flex-shrink: 0;">
                    <div style="font-family: 'Press Start 2P', cursive; font-size: 0.6rem; color: rgba(108, 232, 255, 0.6); text-align: center; padding: 10px; border: 2px solid rgba(108, 232, 255, 0.2); background: #0a1535; margin-bottom: 15px; letter-spacing: 2px;">
                        ◄ MAIN MENU ►
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <div style="padding: 12px; border: 2px solid #6ce8ff; background: rgba(108, 232, 255, 0.15); color: #6ce8ff; box-shadow: 0 0 15px rgba(108, 232, 255, 0.3), inset 0 0 10px rgba(108, 232, 255, 0.1); font-family: 'Press Start 2P', cursive; font-size: 0.6rem; line-height: 1.8;">
                            ► HOME<br><span style="font-size: 0.5rem; opacity: 0.7; font-family: 'Space Mono', monospace;">PANCHATANTRA 2.0</span>
                        </div>
                        <div style="padding: 12px 12px 12px 24px; border: 2px solid rgba(108, 232, 255, 0.2); background: #060d20; color: rgba(108, 232, 255, 0.5); font-family: 'Press Start 2P', cursive; font-size: 0.6rem;">ABOUT US</div>
                        <div style="padding: 12px 12px 12px 24px; border: 2px solid rgba(108, 232, 255, 0.2); background: #060d20; color: rgba(108, 232, 255, 0.5); font-family: 'Press Start 2P', cursive; font-size: 0.6rem;">CONTACT US</div>
                        <div style="padding: 12px 12px 12px 24px; border: 2px solid rgba(108, 232, 255, 0.2); background: #060d20; color: rgba(108, 232, 255, 0.5); font-family: 'Press Start 2P', cursive; font-size: 0.6rem;">RECRUITMENT</div>
                        <div style="padding: 12px 12px 12px 24px; border: 2px solid rgba(108, 232, 255, 0.2); background: #060d20; color: rgba(108, 232, 255, 0.5); font-family: 'Press Start 2P', cursive; font-size: 0.6rem;">DOWNLOAD</div>
                        <div style="padding: 12px 12px 12px 24px; border: 2px solid rgba(108, 232, 255, 0.2); background: #060d20; color: rgba(108, 232, 255, 0.5); font-family: 'Press Start 2P', cursive; font-size: 0.6rem;">ATTENDANCE</div>
                        <div style="padding: 12px 12px 12px 24px; border: 2px solid rgba(108, 232, 255, 0.2); background: #060d20; color: rgba(108, 232, 255, 0.5); font-family: 'Press Start 2P', cursive; font-size: 0.6rem;">FEEDBACK</div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; justify-content: flex-start; padding-top: 72px;">
                    <div style="color: #6ce8ff; font-family: monospace; font-size: 24px; text-shadow: 0 0 14px #6ce8ff; letter-spacing: -2px;">═════►</div>
                </div>

                <div style="flex: 1; min-width: max-content;">
                    <div style="display: inline-flex; align-items: center; gap: 10px; border: 2px solid #6ce8ff; background: rgba(108, 232, 255, 0.1); padding: 12px 20px; font-family: 'Press Start 2P', cursive; font-size: 0.7rem; color: #6ce8ff; text-shadow: 0 0 10px #6ce8ff; margin-bottom: 25px; box-shadow: 0 0 20px rgba(108, 232, 255, 0.2);">
                        ► HOME / PANCHATANTRA 2.0
                    </div>

                    <style>
                        .ia-node-p { border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.75rem; width: 220px; flex-shrink: 0; box-shadow: inset 0 0 8px rgba(108,232,255,0.1); display: flex; align-items: center; }
                        .ia-node-expanded { box-shadow: 0 0 10px rgba(108,232,255,0.2), inset 0 0 10px rgba(108,232,255,0.2); }
                        .ia-sub-node { border: 1px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.7rem; width: 200px; flex-shrink: 0; }
                        .ia-filter { border: 1px solid #3a4a7a; background: #080f28; color: #7a9acc; padding: 6px 12px; font-family: 'Space Mono', monospace; font-size: 0.65rem; white-space: nowrap; box-shadow: 0 0 4px rgba(58,74,122,0.3); flex-shrink: 0; }
                        .ia-search { border: 1px solid #00cc66; background: #001a0d; color: #00ff88; padding: 6px 12px; font-family: 'Space Mono', monospace; font-size: 0.65rem; white-space: nowrap; box-shadow: 0 0 8px rgba(0,204,102,0.4); flex-shrink: 0; }
                        .ia-arrow { color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 6px; font-size: 14px; user-select: none; }
                        .ia-arrow-flow { color: rgba(58,74,122,0.8); font-family: monospace; margin: 0 4px; font-size: 12px; user-select: none; }
                    </style>

                    <div style="display: flex; flex-direction: column; border-left: 2px solid rgba(108,232,255,0.4); margin-left: 20px; padding: 5px 0; gap: 10px;">
                        
                        <div style="display: flex; align-items: center;"><div style="width: 20px; height: 2px; background: rgba(108,232,255,0.4);"></div><div class="ia-node-p">FINANCE & ACCOUNTING</div></div>
                        <div style="display: flex; align-items: center;"><div style="width: 20px; height: 2px; background: rgba(108,232,255,0.4);"></div><div class="ia-node-p">REVENUE COLLECTION</div></div>
                        <div style="display: flex; align-items: center;"><div style="width: 20px; height: 2px; background: rgba(108,232,255,0.4);"></div><div class="ia-node-p">CITIZEN SERVICES</div></div>
                        <div style="display: flex; align-items: center;"><div style="width: 20px; height: 2px; background: rgba(108,232,255,0.4);"></div><div class="ia-node-p">PLANNING</div></div>

                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 20px; height: 2px; background: rgba(108,232,255,0.4);"></div>
                                <div class="ia-node-p ia-node-expanded">▼ HRMS MODULE</div>
                            </div>
                            <div style="display: flex; flex-direction: column; border-left: 1px dashed rgba(108,232,255,0.4); margin-left: 40px; padding: 5px 0; gap: 8px;">
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 15px; height: 1px; background: rgba(108,232,255,0.4);"></div>
                                    <div class="ia-sub-node">► GENERAL BODY MEMBERS</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">DISTRICT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">TALUK</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">GRAM PANCHAYAT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-search">SEARCH</div>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 15px; height: 1px; background: rgba(108,232,255,0.4);"></div>
                                    <div class="ia-sub-node">► TOTAL STAFF</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">DISTRICT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">TALUK</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">GRAM PANCHAYAT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">STAFF TYPE</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-search">SEARCH</div>
                                </div>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center;">
                            <div style="width: 20px; height: 2px; background: rgba(108,232,255,0.4);"></div>
                            <div class="ia-node-p">PUBLIC INFO PORTAL</div>
                            <span class="ia-arrow-flow" style="margin-left: 10px;">──►</span><div class="ia-filter">DISTRICT</div>
                            <span class="ia-arrow-flow">──►</span><div class="ia-filter">TALUK</div>
                            <span class="ia-arrow-flow">──►</span><div class="ia-filter">GRAM PANCHAYAT</div>
                            <span class="ia-arrow-flow">──►</span><div class="ia-search">SEARCH</div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 20px; height: 2px; background: rgba(108,232,255,0.4);"></div>
                                <div class="ia-node-p ia-node-expanded">▼ MEETING MANAGEMENT</div>
                            </div>
                            <div style="display: flex; flex-direction: column; border-left: 1px dashed rgba(108,232,255,0.4); margin-left: 40px; padding: 5px 0; gap: 8px;">
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 15px; height: 1px; background: rgba(108,232,255,0.4);"></div>
                                    <div class="ia-sub-node">► TOTAL MEETINGS</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">DISTRICT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">TALUK</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">GRAM PANCHAYAT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">MEETING TYPE</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">FROM DATE</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">TO DATE</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-search">SEARCH</div>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 15px; height: 1px; background: rgba(108,232,255,0.4);"></div>
                                    <div class="ia-sub-node">► TOTAL DEMAND</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">DISTRICT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">TALUK</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">GRAM PANCHAYAT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">FINANCIAL YEAR</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-search">SEARCH</div>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 15px; height: 1px; background: rgba(108,232,255,0.4);"></div>
                                    <div class="ia-sub-node">EVENTS CONDUCTED</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">DISTRICT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">TALUK</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">GRAM PANCHAYAT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">EVENT TYPE</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">START FROM</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">END AT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-search">SEARCH</div>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 15px; height: 1px; background: rgba(108,232,255,0.4);"></div>
                                    <div class="ia-sub-node">► EVENTS</div>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 15px; height: 1px; background: rgba(108,232,255,0.4);"></div>
                                    <div class="ia-sub-node">INITIATIVES</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">DISTRICT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">TALUK</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">GRAM PANCHAYAT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">INITIATIVE TYPE</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">START FROM</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-filter">END AT</div>
                                    <span class="ia-arrow-flow">──►</span><div class="ia-search">SEARCH</div>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 15px; height: 1px; background: rgba(108,232,255,0.4);"></div>
                                    <div class="ia-sub-node">► TOTAL CITIZEN APPLICATIONS</div>
                                </div>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center;"><div style="width: 20px; height: 2px; background: rgba(108,232,255,0.4);"></div><div class="ia-node-p">OTHER DEPT. SERVICES</div></div>
                        <div style="display: flex; align-items: center;"><div style="width: 20px; height: 2px; background: rgba(108,232,255,0.4);"></div><div class="ia-node-p">LEARNING & KNOWLEDGE</div></div>

                    </div>
                </div>
            </div>

            <h3 class="section-heading" style="margin-top: 4rem;">I.A. TREE: MEETING MANAGEMENT (M.O.M)</h3>
            <p style="color:#ccc; font-family: 'Space Mono', monospace; font-size:0.9rem; margin-bottom: 2rem; line-height: 1.6;">
                Zooming into the administrative side, the Meeting Management architecture was rebuilt into a linear, sequential flow to eliminate data entry errors by Panchayat officials.
            </p>

            <div style="display: flex; gap: 2rem; background: #050d1f; padding: 2.5rem; border: 2px solid #333; border-radius: 8px; margin-bottom: 3rem; overflow-x: auto; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);">
                
                <div style="flex-shrink: 0; display: flex; align-items: flex-start; padding-top: 10px;">
                    <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 12px 15px; font-family: 'Press Start 2P', cursive; font-size: 0.6rem; text-align: center; box-shadow: 0 0 15px rgba(108,232,255,0.3); line-height: 1.6;">
                        MEETING<br>MODULE
                    </div>
                    <div style="color: #6ce8ff; font-family: monospace; font-size: 20px; text-shadow: 0 0 10px #6ce8ff; margin-left: 10px; margin-top: 8px;">════►</div>
                </div>

                <div style="flex: 1; border-left: 2px solid rgba(108,232,255,0.3); padding-left: 15px; display: flex; flex-direction: column; gap: 12px; min-width: max-content;">

                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <div style="display: flex; align-items: center;">
                            <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                            <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">CREATE MEETING</div>
                            <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                            <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">LIST OF MEETINGS</div>
                            <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                            <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">MEETING DETAILS</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 6px; margin-left: 30px; border-left: 2px solid rgba(108,232,255,0.2); padding-left: 15px;">
                            <div style="display: flex; align-items: center;">
                                <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">└►</span>
                                <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">ADD NEW PARTICIPANTS</div>
                                <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                                <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">NEW PARTICIPANT DETAILS</div>
                            </div>
                            <div style="display: flex; align-items: center; margin-left: 30px; border-left: 2px solid rgba(108,232,255,0.2); padding-left: 15px;">
                                <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">└►</span>
                                <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">LIST OF PARTICIPANTS</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                        <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">START MEETING</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">PAST MEETINGS</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">TODAY'S MEETING</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">FUTURE MEETINGS</div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <div style="display: flex; align-items: center;">
                            <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                            <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">MEETING PROCEEDING</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 6px; margin-left: 30px; border-left: 2px solid rgba(108,232,255,0.2); padding-left: 15px;">
                            <div style="display: flex; align-items: center;">
                                <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                                <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">VIEW MEETING...</div>
                                <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                                <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">VIEW PROCEEDINGS</div>
                                <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                                <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">SIGN PROCEEDINGS</div>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">└►</span>
                                <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">MEETING DETAILS</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                        <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">MEETING LIST</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">VIEW MEETING</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">MEETING NOTICE</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">CANCEL MEETING</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">ADJOURN MEETING</div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                        <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">PARTICIPANT DETAILS</div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                        <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">COMPLETED REMARK</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">LIST OF MEETINGS</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">VIEW PROCEEDINGS</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">SIGN NOTICE</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">PRINT PROCEEDINGS</div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                        <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">SUB COMMITTEE MAP</div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                        <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">ADD MAPPING</div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">├►</span>
                        <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">ATR UPDATE</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">AGENDA LIST</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">AGENDA DETAILS</div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <span style="font-family: monospace; color: rgba(108,232,255,0.4); margin-right: 8px; font-size: 16px;">└►</span>
                        <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 0.5rem; width: 180px;">UPLOAD LEAVE DOC</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">MEETING NAME</div>
                        <span style="color: rgba(108,232,255,0.4); font-family: monospace; margin: 0 8px;">──►</span>
                        <div style="border: 1px solid rgba(108,232,255,0.3); background: #0a1535; color: #ccc; font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 4px 8px;">LIST OF ENTRIES</div>
                    </div>

                </div>
            </div>

            <h3 class="section-heading">AUDIO-FIRST DATA VISUALIZATION</h3>
            <div style="max-height: 100%; max-width: 100%; overflow: auto; background: #050d1f; border-radius: 8px; border: 2px solid #333; margin-bottom: 2rem;">
                <img src="rdpr-audio.png" alt="Mobile Panchamitra UI" style="display: block; width: 100%; min-width: 600px; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">Impact & Reflections</h3>
                <p>Data visualizations alone failed. But pairing animated visuals with Kannada audio narrations resulted in an 8x increase in comprehension. Stripping away decimals and formal language wasn't "dumbing down" the app; it was an act of profound respect for the user's cognitive load and reality.</p>
            </div>
        `
    },
    
    proj5: { // Salt
        title: "Salt: Urban Relocation Gap", 
        heroImage: "salt-hero.png", 
        role: "UX RESEARCHER & UI/UX DESIGNER", timeline: "Research & Design Sprint", themeIcons: ['🏙️', '📦', '🗺️', '🐘'], behanceLink: "https://www.behance.net/shanux17",
        tldr: {
            problem: "Residents relocating to new cities suffer from severe cognitive overload and isolation due to fragmented, unreliable access to daily essentials, transport, and culture.",
            solution: "Salt, a unified, community-driven 'super-app' that consolidates local commerce and transport comparison, while gamifying cultural integration.",
            impact: "Established a highly validated, user-driven architecture that bridges the gap between newcomers and the local grassroots economy."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">Context & Systemic Flaw</h3>
                <p>The transition into a new city is highly fragmented ("Three apps. One pizza. Zero clarity"). Existing real estate platforms function as mere directories; they severely lack "life in the area" guidance or trust signals (safety, curfews), leaving newcomers isolated.</p>
            </div>

            <h3 class="section-heading">USER FLOW & ARCHITECTURE BOOKLET</h3>
            <div class="booklet-carousel" style="margin-bottom: 2rem;">
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="salt-card.png" alt="Participatory Open Card Sorting" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">Mathematical UX: Calculated priority scores to dictate the 4 hubs (Home, Travel, Explore, Learn). Safety features explicitly overrode convenience.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="salt-market.png" alt="Aggregated Decision UI" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">Comparing all existing app solutions side-by-side.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="salt-pakhi.png" alt="Pakhi Gamification Zone" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">To make the directory app feel warm, I introduced "Pakhi" the elephant. Daily trivia transforms passive scrolling into joyful engagement.</p>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">Moral Infrastructure</h3>
                <p>The platform name, "Salt," is rooted in social impact—in India, salt is a traditional housewarming gift symbolizing warmth. The platform features an "All-in-one directory" that elevates unorganized local service providers (house helps, electricians), giving marginalized grassroots workers equal digital real estate.</p>
            </div>
        `
    },

    proj6: { // Navya
        title: "Navya: Dignified CP Care", 
        heroImage: "navya-hero.png", 
        role: "UX RESEARCHER & PRODUCT DESIGNER", timeline: "Research & Design Sprint", themeIcons: ['♿', '🚿', '🦽', '❤️'], behanceLink: "https://www.behance.net/gallery/229048977/Baithing-Aid-for-Cerebral-Palsy-Children",
        tldr: {
            problem: "Bathing a growing child with Cerebral Palsy in a compact Indian bathroom is a hazardous, physically draining task causing caregiver burnout and patient guilt.",
            solution: "Navya, a compact, adaptable side-transfer bathing wheelchair specifically engineered for small spaces, eliminating the need to physically lift the child.",
            impact: "Transformed an anxiety-inducing hazard into a safe, dignified routine, validated through rigorous FMEA safety testing."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">Research & Discovery</h3>
                <p>Through Contextual Ethnography, we found the "Transfer Bottleneck" was the hardest part—transferring a heavy child from bed to wet bathroom. Emotional trauma overpowered physical limitation; children felt immense guilt over being a "burden." Existing imported solutions required massive remodeling and constant electricity, making them useless in India.</p>
            </div>

            <h3 class="section-heading">SPATIAL JOURNEY FLOW</h3>
            <div class="booklet-carousel" style="margin-bottom: 2rem;">
                <div class="booklet-page" style="margin-bottom: 2rem;">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="navya-journey.png" alt="Contextual Ethnography / Empathy Mapping" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">The "As-Is" chaotic journey: Bed -> Lift -> Carry -> Place in Tub -> Bathe -> Lift -> Carry -> Bed.</p>
                </div>
                
                <div class="booklet-page" style="margin-bottom: 2rem;">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="navya-market.png" alt="Bathing Aid Market Study" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">The existing products did not account for space constraints one face in Indian houses.</p>
                </div>
                
                <div class="booklet-page" style="margin-bottom: 2rem;">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="navya.png" alt="Foldable Side-Bracket System" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">Eradicating the vertical lift. The side folds down to create a horizontal canvas bridge from bed to chair.</p>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">Reflections & Impact</h3>
                <p>Protecting the vulnerable patient meant I first had to protect the caregiver. Empathy requires contextual realism: a $30,000 automated tub is a failed design if it doesn't fit the user's environment. True user-centric design adapts to the user's reality; it doesn't demand the user adapt to the design.</p>
            </div>
        `
    },

    proj7: { // EZAM
        title: "EZAM: Tactile Game Design", 
        heroImage: "ezam-play.png", 
        role: "UX RESEARCHER & UI/UX DESIGNER", timeline: "Design Impact Movement", themeIcons: ['🎲', '🧲', '🤝', '🧩'], behanceLink: "https://www.behance.net/gallery/214356517/Portfolio",
        tldr: {
            problem: "Visually impaired (VI) and visually abled (VA) children lacked an equitable way to play; existing games gave VA children an advantage, leading to dynamics of pity.",
            solution: "EZAM, a tactile board game featuring a hidden magnetic maze that completely neutralizes visual advantages, forcing all players to rely on spatial memory.",
            impact: "Dismantled the inherent 'pity dynamic' in mixed-ability play, fostering genuine positive competition."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">Research & Insights</h3>
                <p>When VI and VA children played mainstream games, VA children played with sympathy, making VI children feel insecure and like a "liability." VI children actively rejected being coddled, displaying heightened cognitive abilities and excelling in spatial and tactile memory.</p>
            </div>

            <h3 class="section-heading">LEVELING THE PLAYING FIELD</h3>
            <div class="before-after-grid" style="margin-bottom: 2rem;">
                <div class="ba-box">
                    <div class="ba-label label-before">THE FLAW: VISUAL WAYFINDING</div>
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #ff5555;">
                        <img src="ezam-tr.png" alt="Traditional Games causing isolation" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #ff5555; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                </div>
                <div class="ba-box">
                    <div class="ba-label label-after">THE FIX: DUAL-LAYER ARCHITECTURE</div>
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #7cff9b; box-shadow: 0 0 15px rgba(124,255,155,0.15);">
                        <img src="ezam-g.png" alt="EZAM Top Tactile Grid & Hidden Magnetic Maze" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #7cff9b; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                </div>
            </div>

            <h3 class="section-heading">PHYSICAL PRODUCT DETAILS</h3>
            <div style="max-height: 500px; max-width: 100%; overflow: auto; background: #050d1f; border-radius: 8px; border: 2px solid #333; margin-bottom: 2rem;">
                <iframe width="100%" height="315" src="https://youtu.be/4cMisV6p1UM" frameborder="0" allowfullscreen style="border: 2px solid #4fb1ff; border-radius: 8px;"></iframe>
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">Reflections</h3>
                <p>True Inclusion means removing advantage, not just adding accommodations. Designing for accessibility isn't always about creating an assistive feature; sometimes, it is about strategically stripping away the inherent advantages of the privileged user to create a truly level playing field.</p>
            </div>
        `
    },

    proj8: { // CoolieCo
        title: "CoolieCo: Formalizing Labor", 
        heroImage: "coolie-hero.png", 
        role: "UX RESEARCHER & UI DESIGNER", timeline: "Research & Design Sprint", themeIcons: ['🚂', '🧳', '🎫', '🤝'], behanceLink: "https://www.behance.net/gallery/219800943/CoolieCo",
        tldr: {
            problem: "A severe breakdown of trust between Indian railway travelers and coolies (porters) led to mutual avoidance, passenger injuries, and financial instability for labor.",
            solution: "An intuitive digital platform that formalizes baggage handling through standardized pricing, live tracking, and secure OTP-handshakes.",
            impact: "Transformed an exploitative, trustless ecosystem into a transparent utility, scoring a 9/10 in heuristic evaluation."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">Research & Discovery</h3>
                <p>Observational Ethnography and quantitative surveys revealed that <strong>Bargaining is the True Bottleneck</strong>. 80% of passengers were willing to pay for a porter, but only if the system removed the anxiety of haggling. Physical hardware solutions (stair-climbing trolleys) were unviable in crowded stations.</p>
            </div>

            <h3 class="section-heading">DESIGN EXECUTION & ITERATION</h3>
            <div class="booklet-carousel" style="margin-bottom: 2rem;">
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="coolie-id.png" alt="Low-Fi Physical Sticky-Note Maps" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">Card Sorting exercises mapped the complex backend logistics into a seamless frontend experience matching the "Real World" hiring model.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="coolie-low.png" alt="Mid-Fi Booking Screens" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">One Action Per Screen: Reduced cognitive load for chaotic railway environments (Train No. -> Luggage -> Pickup) with Dynamic Pricing.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="coolie-hi.png" alt="High-Fi UI / OTP Handshake" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">The OTP Handshake: The coolie only takes possession, and the timer begins, once the digital OTP is shared in person—establishing mutual trust.</p>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">UX as Social Mediation</h3>
                <p>By standardizing rates and formalizing the labor process, the app acts as moral infrastructure. It ensures passengers aren't extorted, while simultaneously guaranteeing marginalized laborers a predictable, dignified living wage without forcing them to beg or haggle.</p>
            </div>
        `
    }
};

window.openModal = function(projectId) {
    const data = projectData[projectId];
    if(!data) return;
    
    window.rewardPlayer(1);

    const modal = document.getElementById('projectModal');
    
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalRole').innerText = data.role;
    document.getElementById('modalTimeline').innerText = data.timeline;
    document.getElementById('modalProblem').innerText = data.tldr.problem;
    document.getElementById('modalSolution').innerText = data.tldr.solution;
    document.getElementById('modalImpact').innerText = data.tldr.impact;
    
    // Auto-Scaling Hero Image
    const heroImgDiv = document.getElementById('modalHeroImg');
    if (data.heroImage) {
        heroImgDiv.innerHTML = `<img src="${data.heroImage}" alt="${data.title} Hero Image" style="display: block; width: 100%; height: auto;">`;
        heroImgDiv.style.background = "#050d1f";
        heroImgDiv.style.border = "2px solid #333";
        heroImgDiv.style.borderRadius = "8px";
        heroImgDiv.style.maxHeight = "500px";
        heroImgDiv.style.overflowY = "auto";
        heroImgDiv.style.overflowX = "hidden";
    } else {
        heroImgDiv.innerHTML = `<span>[HERO IMAGE PLACEHOLDER: 16:9 Context Shot]</span>`;
        heroImgDiv.style.background = "transparent";
        heroImgDiv.style.border = "2px dashed #444";
        heroImgDiv.style.overflow = "hidden";
    }

    // Call to Action Buttons
    const linkUrl = data.behanceLink || "https://www.behance.net/shanux17";
    document.getElementById('modalTopLink').href = linkUrl;

    const buttonHTML = `
        <div style="text-align: center; margin-top: 4rem; padding-bottom: 2rem;">
            <a href="${linkUrl}" target="_blank" onmouseover="this.style.transform='translate(-4px, -4px)'; this.style.boxShadow='10px 10px 0 #244d66';" onmouseout="this.style.transform='none'; this.style.boxShadow='6px 6px 0 #244d66';" style="background: #6ce8ff; color: #092138; border: 4px solid #fff; box-shadow: 6px 6px 0 #244d66; font-family: 'Press Start 2P', cursive; font-size: 0.9rem; padding: 1rem 1.5rem; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; transition: transform 0.1s, box-shadow 0.1s; cursor: pointer;">
                SEE MORE <span style="font-family: sans-serif; font-size: 1.2rem; font-weight: bold;">↗</span>
            </a>
        </div>
    `;

    document.getElementById('dynamicContentArea').innerHTML = data.dynamicHTML + buttonHTML;
    
    const themeBox = document.getElementById('modalThemeGraphics');
    themeBox.innerHTML = '';
    if(data.themeIcons) {
        data.themeIcons.forEach((icon, i) => {
            const span = document.createElement('span');
            span.className = 'theme-icon';
            span.innerText = icon;
            span.style.top = `${Math.random() * 70 + 10}%`;
            span.style.left = `${(i * 20) + 10}%`;
            span.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
            themeBox.appendChild(span);
        });
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
};

window.closeModal = function(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('projectModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto'; 
};

// URL Hash Routing
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        if (projectData[targetId]) {
            const walletStage = document.getElementById('walletStage');
            const walletLabel = document.querySelector('.wallet-label');
            if (walletStage) {
                walletStage.classList.add('is-open');
                if (walletLabel) walletLabel.innerText = "▲ CLOSE WALLET";
            }
            setTimeout(() => {
                openModal(targetId);
            }, 600);
    }
});
