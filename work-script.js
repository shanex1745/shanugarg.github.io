// Wallet Animation Logic
const walletTrigger = document.getElementById('walletTrigger');
const walletStage = document.getElementById('walletStage');
const walletLabel = document.getElementById('walletLabel');

let isWalletOpen = false;

walletTrigger.addEventListener('click', () => {
    isWalletOpen = !isWalletOpen;
    if (isWalletOpen) {
        walletStage.classList.add('is-open');
        walletLabel.innerText = "▲ CLOSE WALLET";
    } else {
        walletStage.classList.remove('is-open');
        walletLabel.innerText = "▼ OPEN WALLET";
    }
});

// Giant Modal Logic
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalRole = document.getElementById('modalRole');
const modalImage = document.getElementById('modalImage');
const modalDetails = document.getElementById('modalDetails');

// The deep information for all 7 projects
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
    }
};

function openModal(projectId) {
    const data = projectData[projectId];
    
    // Inject the data into the HTML
    modalTitle.innerText = data.title;
    modalRole.innerText = data.role;
    modalImage.src = data.image;
    
    // Build the deep text sections
    modalDetails.innerHTML = `
        <div class="detail-section">
            <h4>> PROBLEM STATEMENT</h4>
            <p>${data.problem}</p>
        </div>
        <div class="detail-section">
            <h4>> DESIGN PROCESS & IDEATION</h4>
            <p>${data.process}</p>
        </div>
        <div class="detail-section">
            <h4>> SKILLS USED</h4>
            <p>${data.skills}</p>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
}

function closeModal(e) {
    if(e) e.preventDefault();
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Unlock background scrolling
}
