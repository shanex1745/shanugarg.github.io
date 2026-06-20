// Wallet / Inventory Toggle Logic
const walletTrigger = document.getElementById('walletTrigger');
const walletStage = document.getElementById('walletStage');
const walletLabel = document.getElementById('walletLabel');

let isWalletOpen = false;

walletTrigger.addEventListener('click', () => {
    isWalletOpen = !isWalletOpen;
    if (isWalletOpen) {
        walletStage.classList.add('is-open');
        walletTrigger.classList.add('is-open');
        walletLabel.innerText = "▲ CLOSE INVENTORY";
    } else {
        walletStage.classList.remove('is-open');
        walletTrigger.classList.remove('is-open');
        walletLabel.innerText = "▼ OPEN INVENTORY";
    }
});

// Modal Logic
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalRole = document.getElementById('modalRole');
const modalBody = document.getElementById('modalBody');

// Content Data
const projectData = {
    nps: {
        title: "National Pension System",
        role: "LEAD UX DESIGNER",
        body: "Redesigning civic finance for 6M+ citizens. Detailed breakdown of the onboarding experience redesign, focusing on restructuring information architecture and simplifying user flows."
    },
    koscars: {
        title: "K-Oscars 2025 Event Systems",
        role: "CREATIVE DIRECTOR",
        body: "Brand and experience for India's biggest student awards. Visual asset creation including metallic 3D logos, 9:16 event posters, and introductory video clips for the corporate event ceremony."
    },
    nai: {
        title: "National Accessibility Initiative",
        role: "UX RESEARCHER",
        body: "Open playbook for inclusive government services. Organization of deep data points and restructuring of page routes to create an inclusive playbook for public services."
    },
    rdpr: {
        title: "RDPR Public Info Portal",
        role: "UX LEAD",
        body: "Rural-first information architecture for Panchayati Raj. Grassroots research and stakeholder identification aimed at making complex governance information accessible to the public."
    }
};

function openModal(projectId) {
    const data = projectData[projectId];
    modalTitle.innerText = data.title;
    modalRole.innerText = data.role;
    modalBody.innerText = data.body;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal(e) {
    if(e) e.preventDefault();
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}
