// --- 1. GLOBAL GAMIFICATION & COIN SYNC ---
// This uses the exact same memory key ('shanu_coins') as your Play page
let currentCoins = parseInt(localStorage.getItem('shanu_coins')) || 0;

function updateHUD() {
    let currentLevel = Math.floor(currentCoins / 50) + 1;
    
    // Failsafes to find the correct text elements
    const coinEl = document.getElementById('player-coins') || document.getElementById('coinCounter');
    const lvlEl = document.getElementById('player-level');
    
    if(coinEl) coinEl.innerText = currentCoins;
    if(lvlEl) lvlEl.innerText = 'LVL ' + currentLevel;
}

// Make the reward system globally available for your Navbar links
window.rewardPlayer = function(amount) {
    currentCoins += amount;
    localStorage.setItem('shanu_coins', currentCoins);
    updateHUD();
};

// Initialize the HUD as soon as the page loads
updateHUD();

// Listen for cross-tab sync (if they earn coins on the Play tab, it updates here instantly)
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
        
        // Change the text from OPEN to CLOSE
        const label = document.querySelector('.wallet-label');
        if (label) {
            label.innerText = walletStage.classList.contains('is-open') ? "▲ CLOSE WALLET" : "▼ OPEN WALLET";
        }
    });
}


// --- 3. PROJECT MODAL LOGIC ---
const projectData = {
    proj1: {
        title: "National Pension System", role: "LEAD UX DESIGNER",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400",
        problem: "Redesigning civic finance for 6M+ citizens.",
        process: "Detailed breakdown of the onboarding experience redesign, focusing on restructuring information architecture and simplifying user flows.",
        skills: "UX Research, User Flows, Prototyping"
    },
    proj2: {
        title: "K-Oscars 2025 Event Systems", role: "CREATIVE DIRECTOR",
        image: "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?w=400",
        problem: "Brand and experience for India's biggest student awards.",
        process: "Visual asset creation including metallic 3D logos, event posters, and introductory video clips mapping to the corporate theme.",
        skills: "Brand Identity, 3D Typography, Event UX"
    },
    proj3: {
        title: "National Accessibility Initiative", role: "UX RESEARCHER",
        image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400",
        problem: "Creating an open playbook for inclusive government services.",
        process: "Organization of deep data points and restructuring of page routes to ensure maximum accessibility.",
        skills: "Accessibility Design, Data Structuring"
    },
    proj4: {
        title: "RDPR Public Info Portal", role: "UX LEAD",
        image: "https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?w=400",
        problem: "Rural-first information architecture for Panchayati Raj.",
        process: "Grassroots research and stakeholder identification aimed at making complex governance info accessible.",
        skills: "Grassroots Research, Wireframing"
    },
    proj5: {
        title: "Project Five Placeholder", role: "DESIGNER",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
        problem: "Problem statement goes here.",
        process: "Design process and ideation goes here.",
        skills: "Figma, Illustrator"
    },
    proj6: {
        title: "Project Six Placeholder", role: "STRATEGIST",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
        problem: "Problem statement goes here.",
        process: "Design process and ideation goes here.",
        skills: "Strategy, Testing"
    },
    proj7: {
        title: "Project Seven Placeholder", role: "UI/UX",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400",
        problem: "Problem statement goes here.",
        process: "Design process and ideation goes here.",
        skills: "Prototyping, Visual Design"
    },
    proj8: {
        title: "Project Eight Placeholder", role: "RESEARCHER",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
        problem: "Problem statement goes here.",
        process: "Design process and ideation goes here.",
        skills: "User Testing, Data Synthesis"
    }
};

window.openModal = function(projectId) {
    const data = projectData[projectId];
    
    // Reward player 1 coin for exploring a project!
    window.rewardPlayer(1);

    const modal = document.getElementById('projectModal');
    if (!modal) return; // Safety check if the modal HTML is missing

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalRole').innerText = data.role;
    document.getElementById('modalImage').src = data.image;
    
    document.getElementById('modalDetails').innerHTML = `
        <div class="detail-section"><h4>> PROBLEM STATEMENT</h4><p>${data.problem}</p></div>
        <div class="detail-section"><h4>> DESIGN PROCESS & IDEATION</h4><p>${data.process}</p></div>
        <div class="detail-section"><h4>> SKILLS USED</h4><p>${data.skills}</p></div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop the background from scrolling
};

window.closeModal = function(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('projectModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore background scrolling
};
