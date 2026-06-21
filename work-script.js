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


// --- 3. DYNAMIC PROJECT DATA RENDERER (FULL PDF CONTENT) ---
const projectData = {
    proj1: { // NPS
        title: "NPS: Intent-First Design", role: "UX DESIGNER & RESEARCHER", timeline: "Hackathon Sprint (2026)", themeIcons: ['🇮🇳', '💸', '📱', '🗣️'], behanceLink: "https://www.behance.net/shanux17",
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
                    <div class="wireframe-placeholder" style="aspect-ratio: 9/16;">[IMAGE: Old OTP/KYC Drop-off Screens]</div>
                    <p style="color:#ccc; font-family:monospace; font-size:0.8rem; margin-top:10px;">Flow: OTP -> Biodata -> Nominee -> Validate -> Preview.</p>
                </div>
                <div class="ba-box">
                    <div class="ba-label label-after">AFTER: INTENT-FIRST EXPLORATION</div>
                    <div class="wireframe-placeholder" style="aspect-ratio: 9/16; border-color: #7cff9b; color:#7cff9b;">[IMAGE: New Amazon-style 'Add to Cart' Plan Selection]</div>
                    <p style="color:#ccc; font-family:monospace; font-size:0.8rem; margin-top:10px;">Flow: Explore Plans -> Add to Cart -> KYC & Payment. Clarity before compliance.</p>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">Design Execution & AI Integration</h3>
                <p><strong>Major Design Challenge:</strong> How do you make highly complex financial forecasts accessible to low-literacy or first-time investors from the informal sector? Simplified text wasn't enough; we integrated a Multilingual AI Voice Assistant. If users were confused by a chart, they could ask the AI to clarify in their regional language.</p>
            </div>
            
            <div class="hero-image-placeholder" style="aspect-ratio: 21/9; margin-top: 1rem; margin-bottom: 2rem;">[IMAGE: AI Voice Assistant Interface translating financial jargon]</div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">Impact & Core Learnings</h3>
                <p>During testing, informal sector users naturally explored plans before committing, vastly improving their clarity. The AI voice support fascinated users, transitioning from a fallback to a primary engagement tool. We proved that public utilities can serve the marginalized without compromising on technical security or compliance.</p>
            </div>
        `
    },

    proj2: { // Corporate K-Oscars
        title: "KDSI", role: "DIGITAL COMMUNICATION AI FELLOW", timeline: "Corporate Campaigns Sprint", themeIcons: ['🏢', '🎨', '🤖', '✨'], behanceLink: "https://www.behance.net/shanux17",
        tldr: {
            problem: "Internal comms suffered from generic templates lacking empathy, desktop-focused layouts, and AI-generated assets eroding trust through unchecked hallucinations.",
            solution: "A 4-phase human-centric design framework that established a unified visual identity from scratch and implemented strict human QA protocols.",
            impact: "Successfully built the company's inaugural visual language from zero brand equity, democratized design templates, and eradicated tokenism."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">The Context & Problem Space</h3>
                <p>The organization's internal ecosystem was fragmented by "Breaking Down the Gaps": The Empathy Gap (generic templates), The Identity Gap (no baseline visual language), The Format Gap (desktop layouts vs mobile habits), and The Trust Gap (AI hallucinatory errors requiring heavy manual correction).</p>
            </div>

            <h3 class="section-heading">4-PHASE EXECUTION BOOKLET</h3>
            <div class="booklet-carousel" style="margin-bottom: 2rem;">
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Contextual Discovery / Empathy Mapping]</div>
                    <p class="booklet-desc">Phase 1: Grounding design in human research. Discovered that stock photos alienate users; specific cultural nuance was mandatory for DEI/Pride.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Modern Brutalist / Bangalore Style UI]</div>
                    <p class="booklet-desc">Phase 2: Defining Inclusive Semantics and standardizing the visual language from zero brand equity.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: K-Oscars 3D Metallic Logos & Templates]</div>
                    <p class="booklet-desc">Phase 3: Democratizing Architecture via reusable Figma templates for non-designers to edit safely.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: 3-Tier Human QA Pipeline]</div>
                    <p class="booklet-desc">Phase 4: Rigorous System Deployment via self-peer-mentor QA to actively correct AI hallucinations (like fixing the year to 2025).</p>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">Ethical & Governance Alignment</h3>
                <p>This framework acts as "moral infrastructure." By conducting deep empathy research, we eliminated tokenism. Furthermore, by enforcing rigorous human oversight models on AI, we protected the organization's integrity, ensuring efficiency never superseded truth and accuracy.</p>
            </div>
        `
    },

    proj3: { // NAI
        title: "National Archives of India", role: "UX RESEARCHER & UI DESIGNER", timeline: "Redesign Sprint", themeIcons: ['📜', '🏛️', '🔍', '♿'], behanceLink: "https://www.behance.net/gallery/217962985/Redesigning-National-Archives-of-India",
        tldr: {
            problem: "The National Archives platform functioned as a digital gatekeeper, suffering from an inaccessible architecture that systematically excluded screen-reader users and the public.",
            solution: "A modernized, WCAG-compliant digital repository with streamlined information architecture, intuitive search, and multilingual support.",
            impact: "Eliminated massive cognitive overload by collapsing a 4-level navigation system, democratizing access to over 3.7 million historical records."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">Research & Discovery</h3>
                <p>Through Heuristic Evaluation and Global Competitive Analysis, we uncovered severe Accessibility Barriers. Linguistic gatekeeping and three overlapping navigation bars with four levels of nested sub-menus caused massive navigational paralysis.</p>
            </div>

            <h3 class="section-heading">THE ARCHITECTURAL OVERHAUL</h3>
            <div class="before-after-grid" style="margin-bottom: 3rem;">
                <div class="ba-box">
                    <div class="ba-label label-before">BEFORE: THE MAZE</div>
                    <div class="wireframe-placeholder" style="aspect-ratio: 16/9;">[IMAGE: Old NAI Homepage]</div>
                </div>
                <div class="ba-box">
                    <div class="ba-label label-after">AFTER: INTENT-DRIVEN</div>
                    <div class="wireframe-placeholder" style="aspect-ratio: 16/9; border-color: #7cff9b; color:#7cff9b;">[IMAGE: New NAI Homepage]</div>
                </div>
            </div>
            
            <h3 class="section-heading">I.A. MIND MAP: UNTANGLING THE MAZE</h3>
            
            <div style="display: flex; flex-direction: column; gap: 3rem; background: #0d1117; padding: 2rem; border: 2px solid #333; border-radius: 8px; margin-bottom: 2rem; overflow-x: auto;">
                
                <!-- OLD I.A. MIND MAP (Red / Chaotic) -->
                <div>
                    <div class="ba-label label-before" style="margin-bottom: 1.5rem; text-align: left; color: #ff5555;">BEFORE: 3 CONFLICTING NAV BARS</div>
                    
                    <div style="display: flex; align-items: center; min-width: 800px; padding: 1rem 0;">
                        <!-- Root -->
                        <div style="border: 2px dashed #ff5555; background: rgba(255,85,85,0.1); color: #ff5555; padding: 10px 20px; font-family: 'Space Mono', monospace; font-size: 0.8rem; font-weight: bold; border-radius: 6px;">NAI PORTAL</div>
                        <div style="width: 30px; height: 2px; background: #ff5555;"></div>
                        
                        <!-- Level 1 Spine -->
                        <div style="display: flex; flex-direction: column; border-left: 2px solid #ff5555; padding: 15px 0; gap: 20px;">
                            
                            <!-- Branch 1 -->
                            <div style="display: flex; align-items: center;">
                                <div style="width: 30px; height: 2px; background: #ff5555;"></div>
                                <div style="border: 1px solid #ff5555; color: #ff5555; padding: 8px 15px; font-family: 'Space Mono', monospace; font-size: 0.7rem; font-weight: bold; background: #111;">Central Nav Bar</div>
                                <div style="width: 30px; height: 2px; background: #ff5555; opacity: 0.5;"></div>
                                <div style="display: flex; flex-direction: column; border-left: 1px dashed #ff5555; padding: 10px 0; gap: 10px; opacity: 0.8;">
                                    <div style="display: flex; align-items: center;"><div style="width: 20px; height: 1px; background: #ff5555;"></div><div style="font-family: 'Space Mono', monospace; font-size: 0.6rem; color: #ff5555;">History & Organization</div></div>
                                    <div style="display: flex; align-items: center;"><div style="width: 20px; height: 1px; background: #ff5555;"></div><div style="font-family: 'Space Mono', monospace; font-size: 0.6rem; color: #ff5555;">Records (Public, Private, Microfilms)</div></div>
                                    <div style="display: flex; align-items: center;"><div style="width: 20px; height: 1px; background: #ff5555;"></div><div style="font-family: 'Space Mono', monospace; font-size: 0.6rem; color: #ff5555;">Record Management Forms</div></div>
                                </div>
                            </div>

                            <!-- Branch 2 -->
                            <div style="display: flex; align-items: center;">
                                <div style="width: 30px; height: 2px; background: #ff5555;"></div>
                                <div style="border: 1px solid #ff5555; color: #ff5555; padding: 8px 15px; font-family: 'Space Mono', monospace; font-size: 0.7rem; font-weight: bold; background: #111;">Side Nav Bar</div>
                                <div style="width: 30px; height: 2px; background: #ff5555; opacity: 0.5;"></div>
                                <div style="display: flex; flex-direction: column; border-left: 1px dashed #ff5555; padding: 10px 0; gap: 10px; opacity: 0.8;">
                                    <div style="display: flex; align-items: center;"><div style="width: 20px; height: 1px; background: #ff5555;"></div><div style="font-family: 'Space Mono', monospace; font-size: 0.6rem; color: #ff5555;">Explore National Archives</div></div>
                                    <div style="display: flex; align-items: center;"><div style="width: 20px; height: 1px; background: #ff5555;"></div><div style="font-family: 'Space Mono', monospace; font-size: 0.6rem; color: #ff5555;">Digital & Current Exhibitions</div></div>
                                    <div style="display: flex; align-items: center;"><div style="width: 20px; height: 1px; background: #ff5555;"></div><div style="font-family: 'Space Mono', monospace; font-size: 0.6rem; color: #ff5555;">Abhilekh Patal Portal Link</div></div>
                                </div>
                            </div>

                            <!-- Branch 3 -->
                            <div style="display: flex; align-items: center;">
                                <div style="width: 30px; height: 2px; background: #ff5555;"></div>
                                <div style="border: 1px solid #ff5555; color: #ff5555; padding: 8px 15px; font-family: 'Space Mono', monospace; font-size: 0.7rem; font-weight: bold; background: #111;">Resources Nav Bar</div>
                                <div style="width: 30px; height: 2px; background: #ff5555; opacity: 0.5;"></div>
                                <div style="display: flex; flex-direction: column; border-left: 1px dashed #ff5555; padding: 10px 0; gap: 10px; opacity: 0.8;">
                                    <div style="display: flex; align-items: center;"><div style="width: 20px; height: 1px; background: #ff5555;"></div><div style="font-family: 'Space Mono', monospace; font-size: 0.6rem; color: #ff5555;">Learning & Training</div></div>
                                    <div style="display: flex; align-items: center;"><div style="width: 20px; height: 1px; background: #ff5555;"></div><div style="font-family: 'Space Mono', monospace; font-size: 0.6rem; color: #ff5555;">Reference Tools & Rules</div></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <hr style="border: 0; border-top: 2px solid #333; margin: 1rem 0;">

                <!-- NEW I.A. MIND MAP (Green / Clean) -->
                <div>
                    <div class="ba-label label-after" style="margin-bottom: 1.5rem; text-align: left; color: #7cff9b;">AFTER: UNIFIED 3-PILLAR SYSTEM</div>
                    
                    <div style="display: flex; align-items: center; min-width: 600px; padding: 1rem 0;">
                        <!-- Root -->
                        <div style="background: #fff; color: #000; padding: 12px 24px; font-family: 'Space Mono', monospace; font-size: 0.8rem; font-weight: bold; border-radius: 6px; box-shadow: 0 0 15px rgba(255,255,255,0.2);">ABHILEKH PATAL</div>
                        <div style="width: 40px; height: 2px; background: #fff;"></div>
                        
                        <!-- Level 1 Spine -->
                        <div style="display: flex; flex-direction: column; border-left: 2px solid #fff; padding: 20px 0; gap: 25px;">
                            
                            <!-- Branch 1 -->
                            <div style="display: flex; align-items: center;">
                                <div style="width: 40px; height: 2px; background: #fff;"></div>
                                <div style="background: #111; border: 2px solid #fff; color: #fff; padding: 10px 20px; font-family: 'Space Mono', monospace; font-size: 0.75rem; font-weight: bold; border-radius: 4px;">🔍 Record Search</div>
                            </div>

                            <!-- Branch 2 -->
                            <div style="display: flex; align-items: center;">
                                <div style="width: 40px; height: 2px; background: #fff;"></div>
                                <div style="background: #111; border: 2px solid #fff; color: #fff; padding: 10px 20px; font-family: 'Space Mono', monospace; font-size: 0.75rem; font-weight: bold; border-radius: 4px;">📚 Research & Reference</div>
                            </div>

                            <!-- Branch 3 -->
                            <div style="display: flex; align-items: center;">
                                <div style="width: 40px; height: 2px; background: #fff;"></div>
                                <div style="background: #111; border: 2px solid #fff; color: #fff; padding: 10px 20px; font-family: 'Space Mono', monospace; font-size: 0.75rem; font-weight: bold; border-radius: 4px;">🎓 Learning & Training</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">6. The Final Solution & Ethics</h3>
                <p>By implementing robust screen-reader support, scalable text, and high-contrast modes, the redesign champions inclusivity. These choices frame the platform as "moral infrastructure"—treating equitable access to national heritage as a fundamental civic right.</p>
            </div>
        `
    },

    proj4: { // Panchamitra & Meeting Management
        title: "Mobile Panchamitra", 
        behanceLink: "https://www.behance.net/shanux17",
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
                <h3 class="section-heading">3. Research & Discovery</h3>
                <p>1-on-1 Usability Testing revealed "The Number Barrier": users completely failed to comprehend percentages or decimals. Furthermore, officials were manually copying shorthand notes under time pressure, resulting in vague civic records.</p>
            </div>

            <h3 class="section-heading">I.A. DASHBOARD: THE MACRO SYSTEM</h3>
            <p style="color:#ccc; font-family: 'Space Mono', monospace; font-size:0.9rem; margin-bottom: 2rem; line-height: 1.6;">
                The original architecture possessed a deeply nested, overwhelming structure. I reorganized the core navigation into a unified dashboard, separating internal administrative tools from citizen-facing services.
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

                <div style="flex: 1; min-width: 400px;">
                    <div style="display: inline-flex; align-items: center; gap: 10px; border: 2px solid #6ce8ff; background: rgba(108, 232, 255, 0.1); padding: 12px 20px; font-family: 'Press Start 2P', cursive; font-size: 0.7rem; color: #6ce8ff; text-shadow: 0 0 10px #6ce8ff; margin-bottom: 25px; box-shadow: 0 0 20px rgba(108, 232, 255, 0.2);">
                        ► HOME / PANCHATANTRA 2.0
                    </div>

                    <div style="display: flex; flex-direction: column; border-left: 2px solid #6ce8ff; margin-left: 20px; padding: 10px 0; gap: 10px;">
                        <div style="display: flex; align-items: center;">
                            <div style="width: 30px; height: 2px; background: #6ce8ff;"></div>
                            <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.8rem; min-width: 250px;">FINANCE & ACCOUNTING</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 30px; height: 2px; background: #6ce8ff;"></div>
                            <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.8rem; min-width: 250px;">REVENUE COLLECTION</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 30px; height: 2px; background: #6ce8ff;"></div>
                            <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.8rem; min-width: 250px;">CITIZEN SERVICES</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 30px; height: 2px; background: #6ce8ff;"></div>
                            <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.8rem; min-width: 250px;">PLANNING</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 30px; height: 2px; background: #6ce8ff;"></div>
                            <div style="border: 2px solid #6ce8ff; background: #6ce8ff; color: #000; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.8rem; min-width: 250px; box-shadow: 0 0 15px #6ce8ff;">HRMS MODULE</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 30px; height: 2px; background: #6ce8ff;"></div>
                            <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.8rem; min-width: 250px;">PUBLIC INFO PORTAL</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 30px; height: 2px; background: #6ce8ff;"></div>
                            <div style="border: 2px solid #6ce8ff; background: #6ce8ff; color: #000; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.8rem; min-width: 250px; box-shadow: 0 0 15px #6ce8ff;">MEETING MANAGEMENT (MOM)</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 30px; height: 2px; background: #6ce8ff;"></div>
                            <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.8rem; min-width: 250px;">OTHER DEPT. SERVICES</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 30px; height: 2px; background: #6ce8ff;"></div>
                            <div style="border: 2px solid #6ce8ff; background: #060d20; color: #6ce8ff; padding: 10px 15px; font-family: 'Space Mono', monospace; font-weight: bold; font-size: 0.8rem; min-width: 250px;">LEARNING & KNOWLEDGE</div>
                        </div>
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
            <div class="hero-image-placeholder" style="aspect-ratio: 21/9; margin-bottom: 2rem;">
                <img src="assets/rdpr-audio-ui.jpg" style="width: 100%; height: 100%; object-fit: cover;" alt="Mobile Panchamitra UI" onerror="this.style.display='none'">
                <span style="position: absolute; pointer-events: none;">[IMAGE: High-contrast progress bars with spoken Kannada 'Audio' buttons]</span>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">7. Impact & Reflections</h3>
                <p>Data visualizations alone failed. But pairing animated visuals with Kannada audio narrations resulted in an 8x increase in comprehension. Stripping away decimals and formal language wasn't "dumbing down" the app; it was an act of profound respect for the user's cognitive load and reality.</p>
            </div>
        `
    },

    proj5: { // Salt
        title: "Salt: Urban Relocation Gap", role: "UX RESEARCHER & UI/UX DESIGNER", timeline: "Research & Design Sprint", themeIcons: ['🏙️', '📦', '🗺️', '🐘'], behanceLink: "https://www.behance.net/shanux17",
        tldr: {
            problem: "Residents relocating to new cities suffer from severe cognitive overload and isolation due to fragmented, unreliable access to daily essentials, transport, and culture.",
            solution: "Salt, a unified, community-driven 'super-app' that consolidates local commerce and transport comparison, while gamifying cultural integration.",
            impact: "Established a highly validated, user-driven architecture that bridges the gap between newcomers and the local grassroots economy."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">2. Context & Systemic Flaw</h3>
                <p>The transition into a new city is highly fragmented ("Three apps. One pizza. Zero clarity"). Existing real estate platforms function as mere directories; they severely lack "life in the area" guidance or trust signals (safety, curfews), leaving newcomers isolated.</p>
            </div>

            <h3 class="section-heading">USER FLOW & ARCHITECTURE BOOKLET</h3>
            <div class="booklet-carousel" style="margin-bottom: 2rem;">
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Participatory Open Card Sorting]</div>
                    <p class="booklet-desc">Mathematical UX: Calculated priority scores to dictate the 4 hubs (Home, Travel, Explore, Learn). Safety features explicitly overrode convenience.</p>
                </div>
                <div class="booklet-page">
                    <div class="wireframe-placeholder">[IMAGE: Aggregated Decision UI]</div>
                    <p class="booklet-desc">Aggregated Decision Making: Comparing Uber/Ola/Rapido side-by-side to eliminate app-hopping decision fatigue.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Pakhi Gamification Zone]</div>
                    <p class="booklet-desc">To make the directory app feel warm, I introduced "Pakhi" the elephant. Daily trivia transforms passive scrolling into joyful engagement.</p>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">6. Moral Infrastructure</h3>
                <p>The platform name, "Salt," is rooted in social impact—in India, salt is a traditional housewarming gift symbolizing warmth. The platform features an "All-in-one directory" that elevates unorganized local service providers (house helps, electricians), giving marginalized grassroots workers equal digital real estate.</p>
            </div>
        `
    },

    proj6: { // Navya
        title: "Navya: Dignified CP Care", role: "UX RESEARCHER & PRODUCT DESIGNER", timeline: "Research & Design Sprint", themeIcons: ['♿', '🚿', '🦽', '❤️'], behanceLink: "https://www.behance.net/gallery/229048977/Baithing-Aid-for-Cerebral-Palsy-Children",
        tldr: {
            problem: "Bathing a growing child with Cerebral Palsy in a compact Indian bathroom is a hazardous, physically draining task causing caregiver burnout and patient guilt.",
            solution: "Navya, a compact, adaptable side-transfer bathing wheelchair specifically engineered for small spaces, eliminating the need to physically lift the child.",
            impact: "Transformed an anxiety-inducing hazard into a safe, dignified routine, validated through rigorous FMEA safety testing."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">3. Research & Discovery</h3>
                <p>Through Contextual Ethnography, we found the "Transfer Bottleneck" was the hardest part—transferring a heavy child from bed to wet bathroom. Emotional trauma overpowered physical limitation; children felt immense guilt over being a "burden." Existing imported solutions required massive remodeling and constant electricity, making them useless in India.</p>
            </div>

            <h3 class="section-heading">SPATIAL JOURNEY FLOW</h3>
            <div class="booklet-carousel" style="margin-bottom: 2rem;">
                <div class="booklet-page">
                    <div class="wireframe-placeholder">[IMAGE: Contextual Ethnography / Empathy Mapping]</div>
                    <p class="booklet-desc">The "As-Is" chaotic journey: Bed -> Lift -> Carry -> Place in Tub -> Bathe -> Lift -> Carry -> Bed.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: PVC & Foam Prototyping]</div>
                    <p class="booklet-desc">Iterative scaled physical models testing spatial constraints to navigate narrow Indian doorways and bathrooms.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Foldable Side-Bracket System]</div>
                    <p class="booklet-desc">Eradicating the vertical lift. The side folds down to create a horizontal canvas bridge from bed to chair.</p>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">7. Reflections & Impact</h3>
                <p>Protecting the vulnerable patient meant I first had to protect the caregiver. Empathy requires contextual realism: a $30,000 automated tub is a failed design if it doesn't fit the user's environment. True user-centric design adapts to the user's reality; it doesn't demand the user adapt to the design.</p>
            </div>
        `
    },

    proj7: { // EZAM
        title: "EZAM: Tactile Game Design", role: "UX RESEARCHER & UI/UX DESIGNER", timeline: "Design Impact Movement", themeIcons: ['🎲', '🧲', '🤝', '🧩'], behanceLink: "https://www.behance.net/gallery/214356517/Portfolio",
        tldr: {
            problem: "Visually impaired (VI) and visually abled (VA) children lacked an equitable way to play; existing games gave VA children an advantage, leading to dynamics of pity.",
            solution: "EZAM, a tactile board game featuring a hidden magnetic maze that completely neutralizes visual advantages, forcing all players to rely on spatial memory.",
            impact: "Dismantled the inherent 'pity dynamic' in mixed-ability play, fostering genuine positive competition."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">3. Research & Insights</h3>
                <p>When VI and VA children played mainstream games, VA children played with sympathy, making VI children feel insecure and like a "liability." VI children actively rejected being coddled, displaying heightened cognitive abilities and excelling in spatial and tactile memory.</p>
            </div>

            <h3 class="section-heading">LEVELING THE PLAYING FIELD</h3>
            <div class="before-after-grid" style="margin-bottom: 2rem;">
                <div class="ba-box">
                    <div class="ba-label label-before">THE FLAW: VISUAL WAYFINDING</div>
                    <div class="wireframe-placeholder" style="aspect-ratio: 1;">[IMAGE: Traditional Games causing isolation]</div>
                </div>
                <div class="ba-box">
                    <div class="ba-label label-after">THE FIX: DUAL-LAYER ARCHITECTURE</div>
                    <div class="wireframe-placeholder" style="aspect-ratio: 1; border-color: #7cff9b; color:#7cff9b;">[IMAGE: EZAM Top Tactile Grid & Hidden Magnetic Maze]</div>
                </div>
            </div>
            
            <h3 class="section-heading">PHYSICAL PRODUCT DETAILS</h3>
            <div class="hero-image-placeholder" style="aspect-ratio: 21/9; margin-bottom: 2rem;">[IMAGE: Hexagonal tactile die and distinct magnetic pawns]</div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">7. Reflections</h3>
                <p>True Inclusion means removing advantage, not just adding accommodations. Designing for accessibility isn't always about creating an assistive feature; sometimes, it is about strategically stripping away the inherent advantages of the privileged user to create a truly level playing field.</p>
            </div>
        `
    },

    proj8: { // CoolieCo
        title: "CoolieCo: Formalizing Labor", role: "UX RESEARCHER & UI DESIGNER", timeline: "Research & Design Sprint", themeIcons: ['🚂', '🧳', '🎫', '🤝'], behanceLink: "https://www.behance.net/gallery/219800943/CoolieCo",
        tldr: {
            problem: "A severe breakdown of trust between Indian railway travelers and coolies (porters) led to mutual avoidance, passenger injuries, and financial instability for labor.",
            solution: "An intuitive digital platform that formalizes baggage handling through standardized pricing, live tracking, and secure OTP-handshakes.",
            impact: "Transformed an exploitative, trustless ecosystem into a transparent utility, scoring a 9/10 in heuristic evaluation."
        },
        dynamicHTML: `
            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6; margin-bottom: 2rem;">
                <h3 class="section-heading">3. Research & Discovery</h3>
                <p>Observational Ethnography and quantitative surveys revealed that <strong>Bargaining is the True Bottleneck</strong>. 80% of passengers were willing to pay for a porter, but only if the system removed the anxiety of haggling. Physical hardware solutions (stair-climbing trolleys) were unviable in crowded stations.</p>
            </div>

            <h3 class="section-heading">DESIGN EXECUTION & ITERATION</h3>
            <div class="booklet-carousel" style="margin-bottom: 2rem;">
                <div class="booklet-page">
                    <div class="wireframe-placeholder">[IMAGE: Low-Fi Physical Sticky-Note Maps]</div>
                    <p class="booklet-desc">Card Sorting exercises mapped the complex backend logistics into a seamless frontend experience matching the "Real World" hiring model.</p>
                </div>
                <div class="booklet-page">
                    <div class="wireframe-placeholder">[IMAGE: Mid-Fi Booking Screens]</div>
                    <p class="booklet-desc">One Action Per Screen: Reduced cognitive load for chaotic railway environments (Train No. -> Luggage -> Pickup) with Dynamic Pricing.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: High-Fi UI / OTP Handshake]</div>
                    <p class="booklet-desc">The OTP Handshake: The coolie only takes possession, and the timer begins, once the digital OTP is shared in person—establishing mutual trust.</p>
                </div>
            </div>

            <div style="font-family: 'Space Mono', monospace; color: #ccc; line-height: 1.6;">
                <h3 class="section-heading">7. UX as Social Mediation</h3>
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
    
    // Create the stylized SEE MORE button
    const linkUrl = data.behanceLink || "https://www.behance.net/shanux17";
    const buttonHTML = `
        <div style="text-align: center; margin-top: 4rem; padding-bottom: 2rem;">
            <a href="${linkUrl}" target="_blank" onmouseover="this.style.transform='translate(-4px, -4px)'; this.style.boxShadow='10px 10px 0 #244d66';" onmouseout="this.style.transform='none'; this.style.boxShadow='6px 6px 0 #244d66';" style="background: #6ce8ff; color: #092138; border: 4px solid #fff; box-shadow: 6px 6px 0 #244d66; font-family: 'Press Start 2P', cursive; font-size: 0.9rem; padding: 1rem 1.5rem; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; transition: transform 0.1s, box-shadow 0.1s; cursor: pointer;">
                SEE MORE ON BEHANCE <span style="font-family: sans-serif; font-size: 1.2rem; font-weight: bold;">↗</span>
            </a>
        </div>
    `;

    // Inject the dynamic HTML plus the new button
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
