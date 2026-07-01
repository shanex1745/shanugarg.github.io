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
};

updateHUD();

window.addEventListener('storage', (e) => {
    if (e.key === 'shanu_coins') {
        currentCoins = parseInt(localStorage.getItem('shanu_coins')) || 0;
        updateHUD();
    }
});


// --- 2. WALLET DESK LOGIC ---
const walletTrigger = document.getElementById('walletTrigger');
const walletStage = document.getElementById('walletStage');

if (walletTrigger && walletStage) {
    walletTrigger.addEventListener('click', () => {
        walletStage.classList.toggle('is-open');
        const label = document.querySelector('.wallet-label');
        if (label) {
            label.innerText = walletStage.classList.contains('is-open') ? "▲ CLOSE WALLET" : "▼ OPEN WALLET";
        }
    });
}


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
                        <img src="nps-old.png" alt="Old OTP/KYC Screens" style="display: block; width: 100%; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #ff5555; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                    <p style="color:#ccc; font-family:monospace; font-size:0.8rem; margin-top:10px;">Flow: OTP -> Biodata -> Nominee -> Validate -> Preview.</p>
                </div>
                <div class="ba-box">
                    <div class="ba-label label-after">AFTER: INTENT-FIRST EXPLORATION</div>
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #7cff9b; box-shadow: 0 0 15px rgba(124,255,155,0.15);">
                        <img src="nps-new.png" alt="New Amazon-style Plan Selection" style="display: block; width: 100%; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
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
                <img src="nps-ai.png" alt="AI Voice Assistant Interface" style="display: block; width: 100%; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
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
                <img src="cam-secure.png" alt="Statistical Threat Analysis & Market Gaps" style="display: block; width: 100%; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
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
                <img src="cam-idea.png" alt="Dual-Layer Data Architecture Map" style="display: block; width: 100%; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
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
                <img src="cam-ideation.png" alt="CAD Modeling and Hardware Breadboarding" style="display: block; width: 100%; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
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
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none">
                        <img src="salt-card.png" alt="Participatory Open Card Sorting" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">Mathematical UX: Calculated priority scores to dictate the 4 hubs (Home, Travel, Explore, Learn). Safety features explicitly overrode convenience.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none;">
                        <img src="salt-market.png" alt="Aggregated Decision UI" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">Comparing all existing app solutions side-by-side.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none;">
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
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none;">
                        <img src="navya-journey.png" alt="Contextual Ethnography / Empathy Mapping" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">The "As-Is" chaotic journey: Bed -> Lift -> Carry -> Place in Tub -> Bathe -> Lift -> Carry -> Bed.</p>
                </div>
                
                <div class="booklet-page" style="margin-bottom: 2rem;">
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none;">
                        <img src="navya-market.png" alt="Bathing Aid Market Study" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">The existing products did not account for space constraints one face in Indian houses.</p>
                </div>
                
                <div class="booklet-page" style="margin-bottom: 2rem;">
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none;">
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
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none;">
                        <img src="coolie-id.png" alt="Low-Fi Physical Sticky-Note Maps" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">Card Sorting exercises mapped the complex backend logistics into a seamless frontend experience matching the "Real World" hiring model.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none;">
                        <img src="coolie-low.png" alt="Mid-Fi Booking Screens" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc">One Action Per Screen: Reduced cognitive load for chaotic railway environments (Train No. -> Luggage -> Pickup) with Dynamic Pricing.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none;">
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
        heroImgDiv.style.maxHeight = "60vh";
        heroImgDiv.style.overflowY = "auto";
    } else {
        heroImgDiv.innerHTML = `<span>[HERO IMAGE PLACEHOLDER: 16:9 Context Shot]</span>`;
        heroImgDiv.style.background = "transparent";
        heroImgDiv.style.border = "2px dashed #444";
        heroImgDiv.style.overflow = "hidden";
    }

    // Call to Action Button
    const linkUrl = data.behanceLink || "https://www.behance.net/shanux17";
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
