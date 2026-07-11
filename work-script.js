// --- 1. GLOBAL GAMIFICATION & COIN SYNC ---

function updateHUD() {
    // ALWAYS fetch fresh from localStorage directly
    let currentCoins = parseInt(localStorage.getItem('shanu_coins')) || 0;
    let currentLevel = Math.floor(currentCoins / 50) + 1;
    
    const coinEl = document.getElementById('player-coins') || document.getElementById('coinCounter');
    const lvlEl = document.getElementById('player-level');
    
    if(coinEl) coinEl.innerText = currentCoins;
    if(lvlEl) lvlEl.innerText = 'LVL ' + currentLevel;
}

window.rewardPlayer = function(amount) {
    let currentCoins = parseInt(localStorage.getItem('shanu_coins')) || 0;
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

// Sync instantly if coins change in another tab
window.addEventListener('storage', (e) => {
    if (e.key === 'shanu_coins') {
        updateHUD();
    }
});

// Sync on page load
document.addEventListener('DOMContentLoaded', updateHUD);

// --- 2. THE 8 PROJECTS DATA (100% PRESERVED, UN-TRUNCATED & RETRO THEMED) ---
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
            <div class="retro-dialogue-box" style="background-color: #0b1831; border-color: #4a4a8c; box-shadow: inset 0 0 0 4px rgba(74,74,140,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🔎</span>
                <span class="punchy-phrase" style="color: #6ce8ff;">CONTEXT & DISCOVERY</span>
                <p style="margin-top: 15px;"><strong>The Systemic Flaw:</strong> Nearly 80% of working Indians are financially unprepared for retirement. The government's tool meant to solve this (NPS) was failing at the grassroots level. The onboarding demanded upfront identity verification, causing massive technical friction and drop-offs due to OTP errors, all while confusing users with dense financial jargon.</p>
                <p style="margin-top: 10px;">We discovered that the <strong>"Compliance Wall" caused 60-70% of drop-offs</strong> early in the process. Furthermore, asking for sensitive personal details (Biodata) before users understood the value proposition destroyed trust.</p>
            </div>

            <div class="pixel-divider" style="height: 4px; background: repeating-linear-gradient(90deg, #4a4a8c, #4a4a8c 12px, transparent 12px, transparent 24px); margin: 2.5rem 0; opacity: 0.5;"></div>

            <span class="punchy-phrase" style="color: #ff77da; display: block; margin-bottom: 1rem;">► APP REDESIGN: COMPLIANCE VS INTENT</span>
            <div class="before-after-grid" style="margin-bottom: 2rem;">
                <div class="ba-box">
                    <div class="ba-label label-before">BEFORE: THE COMPLIANCE WALL</div>
                    <div style="max-height: 100%; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #ff5555;">
                        <img src="nps-old.png" alt="Old OTP/KYC Screens" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #ff5555; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                    <p style="color:#ccc; font-family:monospace; font-size:0.8rem; margin-top:10px;">Flow: OTP -> Biodata -> Nominee -> Validate -> Preview.</p>
                </div>
                <div class="ba-box">
                    <div class="ba-label label-after">AFTER: INTENT-FIRST EXPLORATION</div>
                    <div style="max-height: 100%; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #7cff9b; box-shadow: 0 0 15px rgba(124,255,155,0.15);">
                        <img src="nps-new.png" alt="New Amazon-style Plan Selection" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #7cff9b; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                    <p style="color:#ccc; font-family:monospace; font-size:0.8rem; margin-top:10px;">Flow: Explore Plans -> Add to Cart -> KYC & Payment. Clarity before compliance.</p>
                </div>
            </div>

            <div class="retro-dialogue-box" style="background-color: #0d2115; border-color: #2e8b57; box-shadow: inset 0 0 0 4px rgba(46,139,87,0.3), 8px 8px 0 #06101d; margin-top: 2rem;">
                <span class="retro-sprite">🤖</span>
                <span class="punchy-phrase" style="color: #7cff9b;">AI INTEGRATION</span>
                <p style="margin-top: 15px;"><strong>Major Design Challenge:</strong> How do you make highly complex financial forecasts accessible to low-literacy or first-time investors from the informal sector? Simplified text wasn't enough; we integrated a Multilingual AI Voice Assistant. If users were confused by a chart, they could ask the AI to clarify in their regional language.</p>
            </div>
            
            <div style="max-height: 100%; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #333; margin-bottom: 2rem;">
                <img src="nps-ai.png" alt="AI Voice Assistant Interface" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>

            <div class="retro-dialogue-box" style="background-color: #2b1f10; border-color: #b38b14; box-shadow: inset 0 0 0 4px rgba(179,139,20,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">✨</span>
                <span class="punchy-phrase" style="color: #ffd84f;">IMPACT & LEARNINGS</span>
                <p style="margin-top: 15px;">During testing, informal sector users naturally explored plans before committing, vastly improving their clarity. The AI voice support fascinated users, transitioning from a fallback to a primary engagement tool. We proved that public utilities can serve the marginalized without compromising on technical security or compliance.</p>
            </div>
        `
    },

    proj2: { // Cam Secure
        title: "Cam Secure: Active ATM Defense", 
        heroImage: "cam-render.png", 
        role: "PRODUCT DESIGNER", 
        timeline: "Research & Hardware Prototyping Sprint", 
        themeIcons: ['🏧', '📷', '🚨', '🛡️'], 
        behanceLink: "https://www.behance.net/gallery/232022145/Retrofit-Device-for-Enhancing-ATM-Camera-Surveillance",
        tldr: {
            problem: "Existing ATM security relies on passive recording, allowing robbers to easily bypass CCTVs using gas cutters or spray paint, leaving off-site ATMs highly vulnerable and users feeling unsafe.",
            solution: "Cam Secure, a ₹1500 retrofit hybrid detection device combining hardware (ultrasonic/smoke sensors) and AI (weapon/behavior detection) to proactively prevent tampering and trigger instant local alarms.",
            impact: "Transformed the security paradigm from passive recording to active 'tamper response,' engineering a sensor-fusion ecosystem capable of instantly neutralizing the two most common ATM attack methods (62% of breaches)."
        },
        dynamicHTML: `
            <div class="retro-dialogue-box" style="background-color: #240a0a; border-color: #8b2222; box-shadow: inset 0 0 0 4px rgba(139,34,34,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🚨</span>
                <span class="punchy-phrase" style="color: #ff5555;">THE SYSTEMIC FLAW</span>
                <p style="margin-top: 15px;">ATMs placed in high-traffic, off-site areas suffer from a severe security deficit due to the high cost of posting human guards. The existing digital infrastructure is fundamentally flawed: <strong>cameras simply record crimes as they happen.</strong></p>
                <p style="margin-top: 10px;">Primary Stakeholders included grassroots citizens feeling actively unsafe, and unorganized security personnel placed in lethal environments without technological backup.</p>
            </div>

            <div class="pixel-divider" style="height: 4px; background: repeating-linear-gradient(90deg, #4a4a8c, #4a4a8c 12px, transparent 12px, transparent 24px); margin: 2.5rem 0; opacity: 0.5;"></div>

            <span class="punchy-phrase" style="color: #6ce8ff; display: block; margin-bottom: 1rem;">► RESEARCH & DISCOVERY</span>
            <div style="max-height: 100%; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none; margin-bottom: 2rem;">
                <img src="cam-secure.png" alt="Statistical Threat Analysis & Market Gaps" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>
            
            <div class="retro-dialogue-box" style="background-color: #0b1831; border-color: #4a4a8c; box-shadow: inset 0 0 0 4px rgba(74,74,140,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">⚙️</span>
                <span class="punchy-phrase" style="color: #6ce8ff;">DUAL-LAYER ARCHITECTURE</span>
                <p style="margin-top: 15px;">To solve the disconnect between physical tampering and digital response, we mapped a complex dual-layer data architecture. <strong>Front-Loading the Friction:</strong> The flow is now proactive: [Thief sprays camera -> Ultrasonic sensor detects proximity -> Local server triggers 120dB alarm instantly -> AI validates weapon/fire -> Authorities alerted].</p>
            </div>

            <div style="max-height: 100%; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none; margin-bottom: 2rem;">
                <img src="cam-idea.png" alt="Dual-Layer Data Architecture Map" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>

            <span class="punchy-phrase" style="color: #ff77da; display: block; margin-bottom: 1rem;">► HARDWARE ITERATION</span>
            <div style="max-height: 100%; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab; flex: none; margin-bottom: 2rem;">
                <img src="cam-ideation.png" alt="CAD Modeling and Hardware Breadboarding" style="display: block; width: 100%; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>

            <span class="punchy-phrase" style="color: #7cff9b; display: block; margin-bottom: 1rem;">► FINAL SENSOR-FUSION SOLUTION</span>
            <div style="max-height: 100%; overflow-y: auto; background: #050d1f; border-radius: 8px; border: 2px solid #7cff9b; box-shadow: 0 0 15px rgba(124,255,155,0.15); cursor: grab; flex: none; margin-bottom: 2rem;">
                <video width="100%" controls>
                  <source src="Detection.mp4" type="video/mp4">
                </video>
            </div>

            <div class="retro-dialogue-box" style="background-color: #2b1f10; border-color: #b38b14; box-shadow: inset 0 0 0 4px rgba(179,139,20,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🏆</span>
                <span class="punchy-phrase" style="color: #ffd84f;">STRUCTURAL MITIGATION</span>
                <p style="margin-top: 15px;">The dual hardware+AI architecture specifically neutralizes the two most frequent attack vectors—Gas Cutters (37.5%) and Camera Spraying (25%)—effectively covering 62.5% of all known ATM vulnerabilities.</p>
                <p style="margin-top: 10px;"><strong>Ethical Design:</strong> High-end security shouldn't be a luxury. By designing a highly cost-effective (₹1500) retrofit solution, we made advanced AI and sensor-fusion accessible to grassroots, rural ATMs.</p>
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
                .h-root { border: 1px solid; padding: 8px 12px; font-family: 'Press Start 2P', cursive; font-size: 8px; letter-spacing: 1px; background: rgba(0,0,0,0.4); display: inline-block; margin-top: 4px;}
                .h-node { border: 1px solid; padding: 5px 10px; font-family: 'Space Mono', monospace; font-size: 9px; background: rgba(0,0,0,0.3); white-space: nowrap; flex-shrink: 0; margin-top: 2px; }
                .h-leaf { border: 1px solid; padding: 4px 8px; font-family: 'Space Mono', monospace; font-size: 8px; background: rgba(0,0,0,0.2); white-space: nowrap; flex-shrink: 0; margin-top: 1px;}
                .h-branch { display: flex; align-items: flex-start; gap: 6px; margin-bottom: 4px; }
                .h-children { display: flex; flex-direction: column; border-left: 1px dashed; padding-left: 14px; margin-left: 8px; margin-bottom: 4px;}
                .h-icon { font-family: monospace; font-size: 12px; flex-shrink: 0; opacity: 0.6; margin-top: 2px; }
            </style>

            <div class="retro-dialogue-box" style="background-color: #0b1831; border-color: #4a4a8c; box-shadow: inset 0 0 0 4px rgba(74,74,140,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🔍</span>
                <span class="punchy-phrase" style="color: #6ce8ff;">LINGUISTIC GATEKEEPING</span>
                <p style="margin-top: 15px;">Through Heuristic Evaluation and Global Competitive Analysis, we uncovered severe Accessibility Barriers. Overlapping navigation bars with nested sub-menus caused massive navigational paralysis, effectively locking out the public.</p>
            </div>

            <div class="pixel-divider" style="height: 4px; background: repeating-linear-gradient(90deg, #4a4a8c, #4a4a8c 12px, transparent 12px, transparent 24px); margin: 2.5rem 0; opacity: 0.5;"></div>

            <span class="punchy-phrase" style="color: #ff77da; display: block; margin-bottom: 1rem;">► THE UI OVERHAUL</span>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 5rem;" class="before-after-grid">
                <div style="display: flex; flex-direction: column;">
                    <div class="retro-title" style="color: #ff5555; border-color: #ff5555; width: max-content;">► BEFORE: THE MAZE</div>
                    <div style="max-height: 500px; max-width: 500px; overflow: auto; background: #000; border-radius: 4px; border: 2px solid #ff5555;">
                        <img src="nai-old.png" alt="Old NAI Website" style="display: block; width: 100%; min-width: 600px; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #ff5555; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column;">
                    <div class="retro-title" style="color: #7cff9b; border-color: #7cff9b; width: max-content;">► AFTER: INTENT-DRIVEN</div>
                    <div style="max-height: 500px; max-width: 500px; overflow: auto; background: #000; border-radius: 4px; border: 2px solid #7cff9b; box-shadow: 0 0 20px rgba(124,255,155,0.15);">
                        <img src="nai-new.jpg" alt="New NAI Website" style="display: block; width: 100%; min-width: 600px; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display: none; padding: 40px 20px; text-align: center; color: #7cff9b; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
                    </div>
                </div>
            </div>

            <div class="retro-dialogue-box" style="background-color: #240a0a; border-color: #8b2222; box-shadow: inset 0 0 0 4px rgba(139,34,34,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🛑</span>
                <span class="punchy-phrase" style="color: #ff5555;">BEFORE: THE NAVIGATIONAL MAZE</span>
                <p style="margin-top: 15px;">The legacy architecture forced users to navigate three entirely separate, conflicting navigation structures, alongside a deep 5-level vertical tree. Below is the exhaustive map of the old system's cognitive overload.</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 2rem; align-items: stretch;" class="before-after-grid">
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

            <div class="retro-dialogue-box" style="background-color: #1a1525; border-color: #7cff9b; box-shadow: inset 0 0 0 4px rgba(124,255,155,0.1), 8px 8px 0 #06101d;">
                <span class="retro-sprite">✨</span>
                <span class="punchy-phrase" style="color: #7cff9b;">AFTER: THE UNIFIED I.A. TREE</span>
                <p style="margin-top: 15px;">I dismantled the bloated hierarchies and merged all conflicting navigation structures into a single, logical, intent-driven expanding map.</p>
            </div>

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

            <div class="retro-dialogue-box" style="background-color: #2b1f10; border-color: #ffd84f; box-shadow: inset 0 0 0 4px rgba(255,216,79,0.1), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🏛️</span>
                <span class="punchy-phrase" style="color: #ffd84f;">CIVIC ETHICS</span>
                <p style="margin-top: 15px;">By implementing robust screen-reader support, scalable text, and high-contrast modes, the redesign champions inclusivity. These choices frame the platform as "moral infrastructure"—treating equitable access to national heritage as a fundamental civic right.</p>
            </div>
        `
    },

    proj4: { // Panchamitra
        title: "Mobile Panchamitra", 
        heroImage: "rdpr-hero.png", 
        behanceLink: "https://www.youtube.com/watch?v=QuULupXWl8M",
        role: "LEAD UX DESIGNER", 
        timeline: "FY 24-25 Focus", 
        themeIcons: ['🌾', '📱', '🔊', '📊'],
        tldr: {
            problem: "Despite digitizing local governance data across 6,000 Gram Panchayats, rural citizens were entirely excluded from the platform due to systemic barriers in digital, numerical, and linguistic literacy.",
            solution: "An audio-first, low-data mobile platform for citizens, paired with a streamlined, error-preventing Meeting Management system for Panchayat officials.",
            impact: "Dramatically improved data comprehension among illiterate users, transforming raw civic data into moral infrastructure."
        },
        dynamicHTML: `
            <div class="retro-dialogue-box" style="background-color: #0b1831; border-color: #4a4a8c; box-shadow: inset 0 0 0 4px rgba(74,74,140,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">📉</span>
                <span class="punchy-phrase" style="color: #6ce8ff;">THE NUMBER BARRIER</span>
                <p style="margin-top: 15px;">1-on-1 Usability Testing revealed a massive flaw: users completely failed to comprehend percentages or decimals. Furthermore, officials were manually copying shorthand notes under time pressure, resulting in vague civic records.</p>
            </div>

            <div class="pixel-divider" style="height: 4px; background: repeating-linear-gradient(90deg, #4a4a8c, #4a4a8c 12px, transparent 12px, transparent 24px); margin: 2.5rem 0; opacity: 0.5;"></div>

            <span class="punchy-phrase" style="color: #ff77da; display: block; margin-bottom: 0.5rem;">► I.A. DASHBOARD: THE MACRO SYSTEM</span>
            <p style="color:#ccc; font-family: 'Space Mono', monospace; font-size:0.9rem; margin-bottom: 2rem; line-height: 1.6;">
                The original architecture possessed a deeply nested, overwhelming structure. I reorganized the core navigation into a unified dashboard. Below is the complete expansion of the <strong>HOME</strong> module, detailing the deep horizontal task flows required for data retrieval. [SCROLL ►]
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

            <span class="punchy-phrase" style="color: #6ce8ff; display: block; margin-top: 4rem; margin-bottom: 0.5rem;">► I.A. TREE: MEETING MANAGEMENT (M.O.M)</span>
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

            <div class="retro-dialogue-box" style="background-color: #2b1f10; border-color: #ffd84f; box-shadow: inset 0 0 0 4px rgba(255,216,79,0.1), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🔊</span>
                <span class="punchy-phrase" style="color: #ffd84f;">AUDIO-FIRST DATA VISUALIZATION</span>
                <p style="margin-top: 15px;">Data visualizations alone failed. But pairing animated visuals with Kannada audio narrations resulted in an 8x increase in comprehension. Stripping away decimals and formal language wasn't "dumbing down" the app; it was an act of profound respect for the user's cognitive load and reality.</p>
            </div>

            <div style="max-height: 100%; max-width: 100%; overflow: auto; background: #050d1f; border-radius: 8px; border: 2px solid #333; margin-bottom: 2rem;">
                <img src="rdpr-audio.png" alt="Mobile Panchamitra UI" style="display: block; width: 100%; min-width: 600px; height: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 40px 20px; text-align: center; color: #ccc; font-family: 'Space Mono', monospace; font-size: 12px;"></div>
            </div>
        `
    },
    
    proj5: { // Salt
        title: "Salt: Urban Relocation Gap", 
        heroImage: "salt-hero.png", 
        role: "UI DESIGNER", timeline: "Research & Design Sprint", themeIcons: ['🏙️', '📦', '🗺️', '🐘'], behanceLink: "https://www.behance.net/shanux17",
        tldr: {
            problem: "Residents relocating to new cities suffer from severe cognitive overload and isolation due to fragmented, unreliable access to daily essentials, transport, and culture.",
            solution: "Salt, a unified, community-driven 'super-app' that consolidates local commerce and transport comparison, while gamifying cultural integration.",
            impact: "Established a highly validated, user-driven architecture that bridges the gap between newcomers and the local grassroots economy."
        },
        dynamicHTML: `
            <div class="retro-dialogue-box" style="background-color: #240a0a; border-color: #8b2222; box-shadow: inset 0 0 0 4px rgba(139,34,34,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🧩</span>
                <span class="punchy-phrase" style="color: #ff5555;">SYSTEMIC FLAW</span>
                <p style="margin-top: 15px;">The transition into a new city is highly fragmented ("Three apps. One pizza. Zero clarity"). Existing real estate platforms function as mere directories; they severely lack "life in the area" guidance or trust signals (safety, curfews), leaving newcomers isolated.</p>
            </div>

            <div class="pixel-divider" style="height: 4px; background: repeating-linear-gradient(90deg, #4a4a8c, #4a4a8c 12px, transparent 12px, transparent 24px); margin: 2.5rem 0; opacity: 0.5;"></div>

            <span class="punchy-phrase" style="color: #6ce8ff; display: block; margin-bottom: 1rem;">► USER FLOW & ARCHITECTURE BOOKLET</span>
            <div class="booklet-carousel" style="margin-bottom: 2rem;">
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="salt-card.png" alt="Participatory Open Card Sorting" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">Mathematical UX: Calculated priority scores to dictate the 4 hubs (Home, Travel, Explore, Learn). Safety features explicitly overrode convenience.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="salt-market.png" alt="Aggregated Decision UI" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">Comparing all existing app solutions side-by-side.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="salt-pakhi.png" alt="Pakhi Gamification Zone" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">To make the directory app feel warm, I introduced "Pakhi" the elephant. Daily trivia transforms passive scrolling into joyful engagement.</p>
                </div>
            </div>

            <div class="retro-dialogue-box" style="background-color: #2b1f10; border-color: #ffd84f; box-shadow: inset 0 0 0 4px rgba(255,216,79,0.1), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🏠</span>
                <span class="punchy-phrase" style="color: #ffd84f;">MORAL INFRASTRUCTURE</span>
                <p style="margin-top: 15px;">The platform name, "Salt," is rooted in social impact—in India, salt is a traditional housewarming gift symbolizing warmth. The platform features an "All-in-one directory" that elevates unorganized local service providers (house helps, electricians), giving marginalized grassroots workers equal digital real estate.</p>
            </div>
        `
    },

    proj6: { // Navya
        title: "Navya: Dignified CP Care", 
        heroImage: "navya-hero.png", 
        role: "PRODUCT DESIGNER", timeline: "Research & Design Sprint", themeIcons: ['♿', '🚿', '🦽', '❤️'], behanceLink: "https://www.behance.net/gallery/229048977/Baithing-Aid-for-Cerebral-Palsy-Children",
        tldr: {
            problem: "Bathing a growing child with Cerebral Palsy in a compact Indian bathroom is a hazardous, physically draining task causing caregiver burnout and patient guilt.",
            solution: "Navya, a compact, adaptable side-transfer bathing wheelchair specifically engineered for small spaces, eliminating the need to physically lift the child.",
            impact: "Transformed an anxiety-inducing hazard into a safe, dignified routine, validated through rigorous FMEA safety testing."
        },
        dynamicHTML: `
            <div class="retro-dialogue-box" style="background-color: #0b1831; border-color: #4a4a8c; box-shadow: inset 0 0 0 4px rgba(74,74,140,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🚿</span>
                <span class="punchy-phrase" style="color: #6ce8ff;">RESEARCH & DISCOVERY</span>
                <p style="margin-top: 15px;">Through Contextual Ethnography, we found the "Transfer Bottleneck" was the hardest part—transferring a heavy child from bed to wet bathroom. Emotional trauma overpowered physical limitation; children felt immense guilt over being a "burden." Existing imported solutions required massive remodeling and constant electricity, making them useless in India.</p>
            </div>

            <div class="pixel-divider" style="height: 4px; background: repeating-linear-gradient(90deg, #4a4a8c, #4a4a8c 12px, transparent 12px, transparent 24px); margin: 2.5rem 0; opacity: 0.5;"></div>

            <span class="punchy-phrase" style="color: #ff77da; display: block; margin-bottom: 1rem;">► SPATIAL JOURNEY FLOW</span>
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

            <div class="retro-dialogue-box" style="background-color: #2b1f10; border-color: #ffd84f; box-shadow: inset 0 0 0 4px rgba(255,216,79,0.1), 8px 8px 0 #06101d;">
                <span class="retro-sprite">❤️</span>
                <span class="punchy-phrase" style="color: #ffd84f;">REFLECTIONS & IMPACT</span>
                <p style="margin-top: 15px;">Protecting the vulnerable patient meant I first had to protect the caregiver. Empathy requires contextual realism: a $30,000 automated tub is a failed design if it doesn't fit the user's environment. True user-centric design adapts to the user's reality; it doesn't demand the user adapt to the design.</p>
            </div>
        `
    },

    proj7: { // EZAM
        title: "EZAM: Tactile Game Design", 
        heroImage: "ezam-bg.png", 
        role: "PRODUCT DESIGNER", timeline: "Design Impact Movement", themeIcons: ['🎲', '🧠', '🤝', '🧩'], behanceLink: "https://www.behance.net/gallery/214356517/Portfolio",
        tldr: {
            problem: "Visually impaired (VI) and visually abled (VA) children lacked an equitable way to play; existing games gave VA children an advantage, leading to dynamics of pity.",
            solution: "EZAM, a tactile board game featuring a hidden magnetic maze that completely neutralizes visual advantages, forcing all players to rely on spatial memory.",
            impact: "Dismantled the inherent 'pity dynamic' in mixed-ability play, fostering genuine positive competition."
        },
        dynamicHTML: `
            <div class="retro-dialogue-box" style="background-color: #0b1831; border-color: #4a4a8c; box-shadow: inset 0 0 0 4px rgba(74,74,140,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🧠</span>
                <span class="punchy-phrase" style="color: #6ce8ff;">RESEARCH & INSIGHTS</span>
                <p style="margin-top: 15px;">When VI and VA children played mainstream games, VA children played with sympathy, making VI children feel insecure and like a "liability." VI children actively rejected being coddled, displaying heightened cognitive abilities and excelling in spatial and tactile memory.</p>
            </div>

            <div class="pixel-divider" style="height: 4px; background: repeating-linear-gradient(90deg, #4a4a8c, #4a4a8c 12px, transparent 12px, transparent 24px); margin: 2.5rem 0; opacity: 0.5;"></div>

            <span class="punchy-phrase" style="color: #ff77da; display: block; margin-bottom: 1rem;">► LEVELING THE PLAYING FIELD</span>
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

            <span class="punchy-phrase" style="color: #6ce8ff; display: block; margin-bottom: 1rem;">► PHYSICAL PRODUCT DETAILS</span>
            <div style="max-height: 100%; max-width: 100%; overflow: auto; background: #050d1f; border-radius: 8px; border: 2px solid #333; margin-bottom: 2rem; position: relative; padding-bottom: 56.25%;">
                <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/4cMisV6p1UM?si=ZdK-Fy0uWpFibekp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class="retro-dialogue-box" style="background-color: #2b1f10; border-color: #ffd84f; box-shadow: inset 0 0 0 4px rgba(255,216,79,0.1), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🎲</span>
                <span class="punchy-phrase" style="color: #ffd84f;">REFLECTIONS</span>
                <p style="margin-top: 15px;">True Inclusion means removing advantage, not just adding accommodations. Designing for accessibility isn't always about creating an assistive feature; sometimes, it is about strategically stripping away the inherent advantages of the privileged user to create a truly level playing field.</p>
            </div>
        `
    },

    proj8: { // CoolieCo
        title: "CoolieCo: Formalizing Labor", 
        heroImage: "coolie-hero.png", 
        role: "UX RESEARCHER", timeline: "Research & Design Sprint", themeIcons: ['🚂', '🧳', '🎫', '🤝'], behanceLink: "https://www.behance.net/gallery/219800943/CoolieCo",
        tldr: {
            problem: "A severe breakdown of trust between Indian railway travelers and coolies (porters) led to mutual avoidance, passenger injuries, and financial instability for labor.",
            solution: "An intuitive digital platform that formalizes baggage handling through standardized pricing, live tracking, and secure OTP-handshakes.",
            impact: "Transformed an exploitative, trustless ecosystem into a transparent utility, scoring a 9/10 in heuristic evaluation."
        },
        dynamicHTML: `
            <div class="retro-dialogue-box" style="background-color: #0b1831; border-color: #4a4a8c; box-shadow: inset 0 0 0 4px rgba(74,74,140,0.3), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🚂</span>
                <span class="punchy-phrase" style="color: #6ce8ff;">RESEARCH & DISCOVERY</span>
                <p style="margin-top: 15px;">Observational Ethnography and quantitative surveys revealed that <strong>Bargaining is the True Bottleneck</strong>. 80% of passengers were willing to pay for a porter, but only if the system removed the anxiety of haggling. Physical hardware solutions (stair-climbing trolleys) were unviable in crowded stations.</p>
            </div>

            <div class="pixel-divider" style="height: 4px; background: repeating-linear-gradient(90deg, #4a4a8c, #4a4a8c 12px, transparent 12px, transparent 24px); margin: 2.5rem 0; opacity: 0.5;"></div>

            <span class="punchy-phrase" style="color: #ff77da; display: block; margin-bottom: 1rem;">► DESIGN EXECUTION & ITERATION</span>
            <div class="booklet-carousel" style="margin-bottom: 2rem;">
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="coolie-id.png" alt="Low-Fi Physical Sticky-Note Maps" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">Card Sorting exercises mapped the complex backend logistics into a seamless frontend experience matching the "Real World" hiring model.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="coolie-low.png" alt="Mid-Fi Booking Screens" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">One Action Per Screen: Reduced cognitive load for chaotic railway environments (Train No. -> Luggage -> Pickup) with Dynamic Pricing.</p>
                </div>
                <div class="booklet-page">
                    <div style="max-height: 60vh; overflow-y: auto; overflow-x: hidden; background: #050d1f; border-radius: 8px; border: 2px solid #444; cursor: grab;">
                        <img src="coolie-hi.png" alt="High-Fi UI / OTP Handshake" style="display: block; width: 100%; height: auto;">
                    </div>
                    <p class="booklet-desc" style="margin-top: 12px; color: #aaa;">The OTP Handshake: The coolie only takes possession, and the timer begins, once the digital OTP is shared in person—establishing mutual trust.</p>
                </div>
            </div>

            <div class="retro-dialogue-box" style="background-color: #2b1f10; border-color: #ffd84f; box-shadow: inset 0 0 0 4px rgba(255,216,79,0.1), 8px 8px 0 #06101d;">
                <span class="retro-sprite">🤝</span>
                <span class="punchy-phrase" style="color: #ffd84f;">UX AS SOCIAL MEDIATION</span>
                <p style="margin-top: 15px;">By standardizing rates and formalizing the labor process, the app acts as moral infrastructure. It ensures passengers aren't extorted, while simultaneously guaranteeing marginalized laborers a predictable, dignified living wage without forcing them to beg or haggle.</p>
            </div>
        `
    }
};

// --- NEW DATA: MUSEUM ARTIFACTS (REFERENCE IMAGE THEME) ---
const museumData = {
    art1: {
        title: "Moral Infrastructure",
        role: "DESIGN PHILOSOPHY",
        heroImage: "philosophy.png",
        themeIcons: ['⚖️', '🧠', '🏗️'],
        content: `
            <div class="retro-dialogue-box">
                <span class="retro-sprite">🍄</span>
                <span class="punchy-phrase">NOT JUST EFFICIENCY.<br>MORAL INFRASTRUCTURE.</span>
                <p style="margin-top: 15px; font-size: 1.05rem;">
                    Whether it's redesigning the National Archives to dismantle digital gatekeeping or engineering a ₹1500 retrofit sensor for ATMs—<strong>design determines who is included and who is left behind.</strong>
                </p>
            </div>
            
            <div class="retro-dialogue-box" style="background-color: #4b692f; box-shadow: inset 0 0 0 4px #658c42, 8px 8px 0 rgba(0,0,0,0.4);">
                <span class="retro-sprite">🛡️</span>
                <span class="punchy-phrase">UX AS SOCIAL MEDIATION.</span>
                <p style="margin-top: 15px;">
                    In projects like Panchamitra and CoolieCo, I realized UX transforms exploitative, trustless environments into transparent utilities, giving marginalized laborers predictable dignity without forcing them to beg or haggle.
                </p>
            </div>
        `
    },
    art2: {
        title: "ServDes 2025 Paper",
        role: "RESEARCH PUBLICATION",
        heroImage: "serv.png",
        themeIcons: ['📜', '🔬', '🎓'],
        content: `
            <div class="retro-dialogue-box">
                <span class="punchy-phrase" style="color: #7cff9b;">> PUBLISHED ABSTRACT</span>
                <p style="margin-top: 10px;"><strong>Title:</strong> Lessons Learned in Inclusive Game Design: Bridging the Gaps for Visually Diverse Players.</p>
            </div>

            <div class="retro-dialogue-box">
                <span class="retro-sprite">⚔️</span>
                <span class="punchy-phrase">ADVANTAGE NEUTRALIZATION</span>
                <p style="margin-top: 15px;">
                    When visually impaired and visually abled children play together, <em>accommodative design</em> often creates a dynamic of pity. 
                    <br><br>
                    This paper explores a paradigm shift: proving that true accessibility sometimes means <strong>strategically stripping away the advantages of the privileged user</strong> to create a genuinely level playing field.
                </p>
               
                <p style="margin-top: 25px; color: #ffd84f; font-family: 'Press Start 2P', cursive; font-size: 0.7rem;">[ SCROLL TO READ ORIGINAL DOC ]</p>
                <iframe src="serv.pdf" class="pdf-container" title="ServDes Research Paper PDF"></iframe>
             
            </div>
        `
    },
    art3: {
        title: "Endorsements & LORs",
        role: "PROFESSIONAL VOUCH",
        heroImage: "lor-cover.png",
        themeIcons: ['🤝', '⭐', '🖋️'],
        content: `
            <div class="retro-dialogue-box">
                <span class="retro-sprite">⭐</span>
                <span class="punchy-phrase">LEVEL UP ACQUIRED!</span>
                <p style="margin-top: 15px; font-style: italic;">
                    "Shanu possesses a rare combination of deeply empathetic grassroots research skills and high-level strategic systems thinking. Her ability to synthesize complex bureaucratic data into audio-first mobile interfaces was exceptional."
                </p>
                
                <p style="margin-top: 25px; color: #ffd84f; font-family: 'Press Start 2P', cursive; font-size: 0.7rem;">[ SCROLL TO READ ORIGINAL DOC ]</p>
                <iframe src="lor.pdf" class="pdf-container" title="Letter of Recommendation PDF"></iframe>


            </div>
        `
    },
    art4: {
        title: "Field Notes & Failures",
        role: "LEARNINGS",
        heroImage: "fieldnotes.png",
        themeIcons: ['📝', '💡', '🌱'],
        content: `
            <div class="retro-dialogue-box" style="background-color: #1a4d66; box-shadow: inset 0 0 0 4px #2c7399, 8px 8px 0 rgba(0,0,0,0.4);">
                <span class="retro-sprite">💡</span>
                <span class="punchy-phrase" style="color: #6ce8ff;">GRASSROOTS REVELATIONS</span>
                
                <ul style="list-style-type: none; padding-left: 0; margin-top: 20px;">
                    <li style="margin-bottom: 25px;">
                        <span style="color: #ff77da; font-weight: bold; font-size: 1.1rem;">[ 01 ] THE NUMBER BARRIER</span><br>
                        Beautiful data visualization fails if the user can't read decimals. We pivoted to Kannada audio narrations. <br><strong style="color: #ffd84f;">Lesson: Empathy requires realism, not just aesthetics.</strong>
                    </li>
                    <li style="margin-bottom: 25px;">
                        <span style="color: #ff77da; font-weight: bold; font-size: 1.1rem;">[ 02 ] THE TRANSFER BOTTLENECK</span><br>
                        Protecting a vulnerable patient means first protecting the caregiver from burnout. <br><strong style="color: #ffd84f;">Lesson: The user journey includes the invisible support system.</strong>
                    </li>
                    <li>
                        <span style="color: #ff77da; font-weight: bold; font-size: 1.1rem;">[ 03 ] PHYSICAL CONTEXT IS KING</span><br>
                        An automated system is a failed design if it doesn't fit the user's home. <br><strong style="color: #ffd84f;">Lesson: Do not demand the user adapt to the design.</strong>
                    </li>
                </ul>
            </div>
        `
    }
};

// --- 3. SHOP UI LOGIC ---

let currentTab = 'snapshots'; 
let currentRole = 'ALL';

function initShop() {
    renderShopCards();
}

// Tab Switching
window.switchTab = function(tab) {
    currentTab = tab;
    
    document.getElementById('tab-snapshots').classList.remove('active');
    document.getElementById('tab-archives').classList.remove('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
    
    const grid = document.getElementById('shopGrid');
    const sidebar = document.getElementById('shopSidebar');

    if (tab === 'snapshots') {
        grid.classList.remove('grid-archives');
        grid.classList.add('grid-snapshots');
        
        // Show the left section again
        sidebar.style.display = 'block';
    } else {
        grid.classList.remove('grid-snapshots');
        grid.classList.add('grid-archives');
        
        // Completely remove the left section to allow full-width graphics
        sidebar.style.display = 'none';
    }
    
    renderShopCards();
};
// Filtering
window.filterRole = function(role, element) {
    if(currentTab !== 'snapshots') return; // Disable filtering in Archives
    currentRole = role;
    
    const listItems = document.querySelectorAll('#roleFilterList li');
    listItems.forEach(li => li.classList.remove('active'));
    element.classList.add('active');
    
    renderShopCards();
};

// Render Cards (Splits logic between Snapshots and Archives)
function renderShopCards() {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    if (currentTab === 'snapshots') {
        Object.keys(projectData).forEach(key => {
            const data = projectData[key];
            
            if (currentRole !== 'ALL' && !data.role.includes(currentRole)) return; 
            
            const cardHTML = `
                <article class="shop-card" onclick="handleCardClick('${key}')">
                    <div class="shop-card-img">
                        <img src="${data.heroImage}" alt="${data.title}" onerror="this.style.display='none'">
                    </div>
                    <div class="shop-card-body">
                        
                        <div class="shop-card-content">
                            <h3 class="shop-card-title">${data.title}</h3>
                            <div class="shop-card-icons">
                                ${data.themeIcons.join(' ')}
                            </div>
                        </div>
                        <div class="shop-card-bottom">
                            <span>VIEW SNAPSHOT</span>
                            <span style="color: #4a4a8c; background: #fff; padding: 2px 6px; border-radius: 4px;">🪙 +1 </span>
                        </div>
                    </div>
                </article>
            `;
            grid.innerHTML += cardHTML;
        });
    } else {
        // Render ARCHIVES with Detailed 8-Bit Mario Scenery
        let archiveHTML = `
            <div class="archive-scene-layer">
                <!-- Background Hills -->
                <div class="archive-hill" style="left: 5%; width: 180px; height: 100px;"></div>
                <div class="archive-hill" style="right: 8%; width: 280px; height: 140px;"></div>
                <div class="archive-hill" style="left: 45%; width: 120px; height: 60px;"></div>
                
                <!-- Clouds -->
                <div class="archive-cloud" style="top: 15%; left: 10%;"></div>
                <div class="archive-cloud" style="top: 25%; right: 15%; transform: scale(1.5);"></div>
                <div class="archive-cloud" style="top: 10%; left: 50%; transform: scale(0.8);"></div>

                <!-- Floating Bricks & Coins -->
                <div class="archive-brick" style="top: 180px; left: 15%;"></div>
                <div class="archive-q-block" style="top: 180px; left: calc(15% + 32px);">?</div>
                <div class="archive-brick" style="top: 180px; left: calc(15% + 64px);"></div>
                <div class="archive-scene-coin" style="top: 140px; left: calc(15% + 40px);"></div>
                
                <div class="archive-brick" style="top: 250px; right: 20%;"></div>
                <div class="archive-brick" style="top: 250px; right: calc(20% - 32px);"></div>
                <div class="archive-scene-coin" style="top: 210px; right: 20%;"></div>

                <!-- Pipes -->
                <div class="archive-pipe" style="left: 12%; bottom: 50px;"></div>
                <div class="archive-plant" style="left: calc(12% + 8px); bottom: 130px;">🍄</div>
                <div class="archive-pipe" style="right: 25%; bottom: 50px; height: 120px;"></div>
                
                <!-- Ground -->
                <div class="archive-ground"></div>
            </div>
        `;
        
       // Render Artifact Cards
        Object.keys(museumData).forEach(key => {
            const data = museumData[key];
            archiveHTML += `
                <article class="artifact-card" onclick="handleCardClick('${key}')">
                    <div class="artifact-img">
                        <img src="${data.heroImage}" alt="${data.title}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23111\\'/><text x=\\'50\\' y=\\'50\\' font-family=\\'monospace\\' font-size=\\'12\\' fill=\\'%23555\\' text-anchor=\\'middle\\' alignment-baseline=\\'middle\\'>IMG FAIL</text></svg>'">
                    </div>
                    <div class="artifact-content">
                        <div class="artifact-icons">${data.themeIcons.join(' ')}</div>
                        <div class="artifact-role">${data.role}</div>
                        <h3 class="artifact-title">${data.title}</h3>
                        <div class="artifact-btn">OPEN FILE ↗</div>
                    </div>
                </article>
            `;
        });
        
        grid.innerHTML = archiveHTML;
    }
}
// Click Routing
window.handleCardClick = function(id) {
    if (currentTab === 'snapshots') {
        openModal(id); 
    } else {
        openArtifactModal(id); 
    }
};

// Snapshot Modal Logic
window.openModal = function(projectId) {
    const data = projectData[projectId];
    if(!data) return;
    
    window.rewardPlayer(1);
    const modal = document.getElementById('projectModal');
    
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalRole').innerText = data.role;
    document.getElementById('modalTimeline').innerText = data.timeline || "Completed";
    document.getElementById('modalProblem').innerText = data.tldr.problem;
    document.getElementById('modalSolution').innerText = data.tldr.solution;
    document.getElementById('modalImpact').innerText = data.tldr.impact;
    
    const heroImgDiv = document.getElementById('modalHeroImg');
    if (data.heroImage) {
        heroImgDiv.innerHTML = `<img src="${data.heroImage}" alt="${data.title} Hero Image" style="display: block; width: 100%; height: auto;">`;
        heroImgDiv.style.background = "#050d1f"; 
        heroImgDiv.style.border = "2px solid #333"; 
        heroImgDiv.style.borderRadius = "8px"; 
        heroImgDiv.style.maxHeight = "500px"; 
        heroImgDiv.style.overflowY = "auto";
    }
    
    const linkUrl = data.behanceLink || "https://www.behance.net/shanux17";
    document.getElementById('modalTopLink').href = linkUrl;

    const buttonHTML = `
        <div style="text-align: center; margin-top: 4rem; padding-bottom: 2rem;">
            <a href="${linkUrl}" target="_blank" class="hire-me-btn" style="position:relative; margin:0 auto; width:max-content; justify-content:center;">VIEW FULL BEHANCE ↗</a>
        </div>
    `;

    document.getElementById('dynamicContentArea').innerHTML = data.dynamicHTML + buttonHTML;
    
    const themeBox = document.getElementById('modalThemeGraphics');
    themeBox.innerHTML = '';
    if(data.themeIcons) {
        data.themeIcons.forEach((icon, i) => {
            const span = document.createElement('span');
            span.className = 'theme-icon'; span.innerText = icon;
            span.style.top = `${Math.random() * 70 + 10}%`; span.style.left = `${(i * 20) + 10}%`; span.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
            themeBox.appendChild(span);
        });
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
};

// Museum Artifact Modal Logic
window.openArtifactModal = function(id) {
    const data = museumData[id];
    if(!data) return;
    
    window.rewardPlayer(5); // Lore rewards more!
    const modal = document.getElementById('artifactModal');
    
    document.getElementById('artifactTitle').innerText = data.title;
    document.getElementById('artifactType').innerText = data.role;
    document.getElementById('artifactContentArea').innerHTML = data.content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
};

// Global Close
window.closeModal = function(modalId, e) {
    if (e) e.preventDefault();
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto'; 
};

document.addEventListener("DOMContentLoaded", () => {
    initShop();
});
