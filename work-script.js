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


// --- 3. DYNAMIC PROJECT DATA RENDERER (FROM CASE STUDIES) ---
const projectData = {
    proj1: { // National Pension System
        title: "NPS: Intent-First Design",
        role: "UX DESIGNER & RESEARCHER",
        timeline: "Hackathon Sprint (2026)",
        themeIcons: ['🇮🇳', '💸', '📱', '🗣️'],
        tldr: {
            problem: "The app prioritized rigid compliance over understanding, forcing users through complex KYC/OTP hurdles before explaining the retirement plans.",
            solution: "An 'Intent-First' experience using e-commerce models and a Multilingual AI Voice Assistant for accessible financial exploration.",
            impact: "Transformed a cognitively taxing hurdle into an engaging flow, drastically increasing comprehension for informal sector workers."
        },
        dynamicHTML: `
            <h3 class="section-heading">APP REDESIGN: COMPLIANCE VS INTENT</h3>
            <div class="before-after-grid" style="margin-bottom: 3rem;">
                <div class="ba-box">
                    <div class="ba-label label-before">BEFORE: THE COMPLIANCE WALL</div>
                    <div class="wireframe-placeholder" style="aspect-ratio: 9/16;">[IMAGE: Old OTP/KYC Drop-off Screens]</div>
                    <p style="color:#ccc; font-family:monospace; font-size:0.8rem; margin-top:10px;">Forced upfront identity verification caused massive friction.</p>
                </div>
                <div class="ba-box">
                    <div class="ba-label label-after">AFTER: INTENT-FIRST EXPLORATION</div>
                    <div class="wireframe-placeholder" style="aspect-ratio: 9/16; border-color: #7cff9b; color:#7cff9b;">[IMAGE: New Amazon-style 'Add to Cart' Plan Selection]</div>
                    <p style="color:#ccc; font-family:monospace; font-size:0.8rem; margin-top:10px;">KYC moved to the end. Users explore projected returns first.</p>
                </div>
            </div>
            <h3 class="section-heading">MULTILINGUAL AI INTEGRATION</h3>
            <div class="hero-image-placeholder" style="aspect-ratio: 21/9;">[IMAGE: AI Voice Assistant Interface translating financial jargon]</div>
        `
    },
    
    proj2: { // K-Oscars / Corporate Framework
        title: "Building Moral Infrastructure",
        role: "LEAD UX & VISUAL DESIGNER",
        timeline: "Corporate Campaigns Sprint",
        themeIcons: ['🏢', '🎨', '🤖', '✨'],
        tldr: {
            problem: "Internal comms suffered from generic templates lacking empathy, and AI-generated assets were eroding trust through unchecked hallucinations.",
            solution: "A 4-phase human-centric design framework establishing unified visual identity, prioritizing authentic narratives, and strict AI QA.",
            impact: "Built the inaugural visual language from zero equity, democratized design templates, and eradicated tokenism."
        },
        dynamicHTML: `
            <h3 class="section-heading">4-PHASE EXECUTION BOOKLET</h3>
            <div class="booklet-carousel">
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Contextual Discovery / Empathy Mapping]</div>
                    <p class="booklet-desc">Phase 1: Grounding design in human research to avoid tokenism in DEI/Pride campaigns.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Modern Brutalist / Bangalore Style UI]</div>
                    <p class="booklet-desc">Phase 2: Defining Inclusive Semantics and standardizing the visual language.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: K-Oscars 3D Metallic Logos & Templates]</div>
                    <p class="booklet-desc">Phase 3: Democratizing Architecture via reusable Figma templates for non-designers.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: 3-Tier Human QA Pipeline]</div>
                    <p class="booklet-desc">Phase 4: Rigorous System Deployment to correct AI hallucinations before launch.</p>
                </div>
            </div>
        `
    },

    proj3: { // NAI
        title: "National Archives of India",
        role: "UX RESEARCHER & UI DESIGNER",
        timeline: "Redesign Sprint",
        themeIcons: ['📜', '🏛️', '🔍', '♿'],
        tldr: {
            problem: "The digital repository acted as a gatekeeper, systematically excluding screen-reader users and the public via a chaotic 4-level navigation.",
            solution: "A modernized, WCAG-compliant platform with streamlined architecture, intuitive search, and multilingual support.",
            impact: "Democratized access to 3.7+ million historical records by collapsing cognitive overload and menu fatigue."
        },
        dynamicHTML: `
            <h3 class="section-heading">THE ARCHITECTURAL OVERHAUL</h3>
            <div class="before-after-grid" style="margin-bottom: 3rem;">
                <div class="ba-box">
                    <div class="ba-label label-before">BEFORE: THE MAZE</div>
                    <div class="wireframe-placeholder" style="aspect-ratio: 16/9;">[IMAGE: Old NAI Homepage with 3 overlapping menus]</div>
                </div>
                <div class="ba-box">
                    <div class="ba-label label-after">AFTER: INTENT-DRIVEN</div>
                    <div class="wireframe-placeholder" style="aspect-ratio: 16/9; border-color: #7cff9b; color:#7cff9b;">[IMAGE: New NAI Homepage with prominent search]</div>
                </div>
            </div>
            
            <h3 class="section-heading">INTERACTIVE I.A. RESTRUCTURE</h3>
            <div class="ia-tree-container">
                <div class="ia-node">ABHILEKH PATAL (ROOT)</div>
                <div style="width: 2px; height: 20px; background: #6ce8ff;"></div>
                <div class="ia-branches">
                    <div class="ia-branch"><div class="ia-node">Record Search</div></div>
                    <div class="ia-branch"><div class="ia-node">Research & Reference</div></div>
                    <div class="ia-branch"><div class="ia-node">Learning & Training</div></div>
                </div>
            </div>
        `
    },

    proj4: { // RDPR / Mobile Panchamitra
        title: "Mobile Panchamitra",
        role: "LEAD UX RESEARCHER & UI DESIGNER",
        timeline: "FY 24-25 Focus",
        themeIcons: ['🌾', '📱', '🔊', '📊'],
        tldr: {
            problem: "Digitized governance data (Panchatantra 2.0) excluded rural citizens due to systemic barriers in digital, numerical, and linguistic literacy.",
            solution: "An audio-first, low-data mobile platform for citizens, paired with an error-preventing Meeting Management system for officials.",
            impact: "Improved data comprehension among illiterate users from 1/12 to 8/12 charts, bringing 'moral infrastructure' to 4 Crore citizens."
        },
        dynamicHTML: `
            <h3 class="section-heading">I.A. RADICAL SIMPLIFICATION</h3>
            <div class="ia-tree-container" style="margin-bottom: 3rem;">
                <div class="ia-node">CITIZEN HOME (6 Main Actions)</div>
                <div style="width: 2px; height: 20px; background: #6ce8ff;"></div>
                <div class="ia-branches">
                    <div class="ia-branch"><div class="ia-node">Home</div></div>
                    <div class="ia-branch"><div class="ia-node">AI Radio (Audio)</div></div>
                    <div class="ia-branch"><div class="ia-node">Local Contacts</div></div>
                </div>
            </div>
            <h3 class="section-heading">AUDIO-FIRST DATA VISUALIZATION</h3>
            <div class="hero-image-placeholder" style="aspect-ratio: 21/9;">[IMAGE: High-contrast progress bars with spoken Kannada 'Audio/Play' buttons]</div>
        `
    },

    proj5: { // Salt
        title: "Salt: Urban Relocation Gap",
        role: "UX RESEARCHER & UI/UX DESIGNER",
        timeline: "Research & Design Sprint",
        themeIcons: ['🏙️', '📦', '🗺️', '🐘'],
        tldr: {
            problem: "Relocating residents suffer cognitive overload and isolation from fragmented access to daily essentials, transport, and local culture.",
            solution: "A unified super-app consolidating commerce and transport, gamified with 'Pakhi' the elephant to teach local culture.",
            impact: "Established a user-driven architecture bridging newcomers and grassroots economies, validating 'Mathematical UX'."
        },
        dynamicHTML: `
            <h3 class="section-heading">USER FLOW BOOKLET</h3>
            <div class="booklet-carousel">
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Participatory Open Card Sorting]</div>
                    <p class="booklet-desc">Mathematical UX: Calculated priority scores to dictate the 4 hubs (Home, Travel, Explore, Learn).</p>
                </div>
                <div class="booklet-page">
                    <div class="wireframe-placeholder">[IMAGE: Aggregated Decision UI]</div>
                    <p class="booklet-desc">Comparing Uber/Ola/Rapido side-by-side to eliminate app-hopping decision fatigue.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Pakhi Gamification Zone]</div>
                    <p class="booklet-desc">Daily trivia and local treasure hunts transforming passive scrolling into joyful engagement.</p>
                </div>
            </div>
        `
    },

    proj6: { // Navya
        title: "Navya: Dignified CP Care",
        role: "UX RESEARCHER & PRODUCT DESIGNER",
        timeline: "Research & Design Sprint",
        themeIcons: ['♿', '🚿', '🦽', '❤️'],
        tldr: {
            problem: "Bathing a growing child with Cerebral Palsy in a compact Indian bathroom is hazardous, causing severe caregiver burnout and patient guilt.",
            solution: "Navya, a compact, highly adaptable side-transfer bathing wheelchair engineered for small spaces, eliminating vertical lifting.",
            impact: "Transformed an anxiety-inducing daily hazard into a safe, dignified routine, validated through FMEA safety testing."
        },
        dynamicHTML: `
            <h3 class="section-heading">SPATIAL JOURNEY FLOW</h3>
            <div class="booklet-carousel">
                <div class="booklet-page">
                    <div class="wireframe-placeholder">[IMAGE: Contextual Ethnography / Empathy Mapping]</div>
                    <p class="booklet-desc">Identifying the "Transfer Bottleneck" as the highest point of physical friction and emotional trauma.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: PVC & Foam Prototyping]</div>
                    <p class="booklet-desc">Iterative scaled physical models testing spatial constraints in narrow Indian doorways.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: Foldable Side-Bracket System]</div>
                    <p class="booklet-desc">Eradicating the vertical lift by creating a seamless horizontal canvas bridge from bed to chair.</p>
                </div>
            </div>
        `
    },

    proj7: { // EZAM
        title: "EZAM: Tactile Game Design",
        role: "UX RESEARCHER & UI/UX DESIGNER",
        timeline: "Design Impact Movement",
        themeIcons: ['🎲', '🧲', '🤝', '🧩'],
        tldr: {
            problem: "Visually impaired and visually abled children lacked an equitable way to play; existing games gave visual advantages leading to pity.",
            solution: "EZAM, a tactile board game featuring a hidden magnetic maze that neutralizes visual advantages, forcing reliance on spatial memory.",
            impact: "Dismantled the 'pity dynamic' in mixed-ability play, fostering genuine positive competition."
        },
        dynamicHTML: `
            <h3 class="section-heading">LEVELING THE PLAYING FIELD</h3>
            <div class="before-after-grid" style="margin-bottom: 3rem;">
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
            <div class="hero-image-placeholder" style="aspect-ratio: 21/9;">[IMAGE: Hexagonal tactile die and distinct magnetic pawns]</div>
        `
    },

    proj8: { // CoolieCo
        title: "CoolieCo: Formalizing Labor",
        role: "UX RESEARCHER & UI DESIGNER",
        timeline: "Research & Design Sprint",
        themeIcons: ['🚂', '🧳', '🎫', '🤝'],
        tldr: {
            problem: "Mutual avoidance between railway travelers and coolies led to passenger injury and poverty-level financial instability for laborers.",
            solution: "A digital platform formalizing baggage handling via standardized pricing, live tracking, and secure OTP-handshakes.",
            impact: "Transformed an exploitative ecosystem into a transparent utility, scoring a 9/10 in heuristic evaluation."
        },
        dynamicHTML: `
            <h3 class="section-heading">DESIGN EXECUTION & ITERATION</h3>
            <div class="booklet-carousel">
                <div class="booklet-page">
                    <div class="wireframe-placeholder">[IMAGE: Observational Ethnography Data]</div>
                    <p class="booklet-desc">Discovering that haggling, not cost, was the true bottleneck for passenger adoption.</p>
                </div>
                <div class="booklet-page">
                    <div class="wireframe-placeholder">[IMAGE: Low-Fidelity Wireframes]</div>
                    <p class="booklet-desc">Structuring 'One Action Per Screen' to reduce cognitive load in noisy railway environments.</p>
                </div>
                <div class="booklet-page">
                    <div class="hero-image-placeholder">[IMAGE: High-Fidelity UI / OTP Handshake]</div>
                    <p class="booklet-desc">Dual-verification flow establishing immediate mutual accountability and trust.</p>
                </div>
            </div>
        `
    }
};

window.openModal = function(projectId) {
    const data = projectData[projectId];
    if(!data) return;
    
    // Reward player 1 coin for exploring a project case study!
    window.rewardPlayer(1);

    const modal = document.getElementById('projectModal');
    
    // Populate Header & TLDR
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalRole').innerText = data.role;
    document.getElementById('modalTimeline').innerText = data.timeline;
    document.getElementById('modalProblem').innerText = data.tldr.problem;
    document.getElementById('modalSolution').innerText = data.tldr.solution;
    document.getElementById('modalImpact').innerText = data.tldr.impact;
    
    // Inject Custom Interactive Layouts (Booklets, Trees, Grids)
    document.getElementById('dynamicContentArea').innerHTML = data.dynamicHTML;
    
    // Generate Thematic Background Emojis
    const themeBox = document.getElementById('modalThemeGraphics');
    themeBox.innerHTML = '';
    if(data.themeIcons) {
        data.themeIcons.forEach((icon, i) => {
            const span = document.createElement('span');
            span.className = 'theme-icon';
            span.innerText = icon;
            // Randomize position across the background
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
