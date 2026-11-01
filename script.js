// Projects Data
const projectsData = [
    {
        title: "L&T Finance — Fraud Risk Analytics",
        company: "L&T Finance",
        dates: "Dec 2023 – Present",
        role: "Head of Fraud Risk Analytics",
        description: "Set up the Fraud Risk Analytics team from scratch at one of India's largest NBFCs (~USD 11B retail book) and embedded ML and GenAI into fraud control and underwriting.",
        impact: [
            "+20% early fraud detection via ML Early-Warning System (co-designed with EY & BCG)",
            "Built LLM-powered analytics agent — plain-English queries on fraud & portfolio data",
            "LLM document-verification tool: cut processing from hours to minutes",
            "Ensemble scorecard framework: dealer, field-sales & geographic risk scoring",
            "GenAI adoption with DPDP Act-compliant controls (consent, masking, human review)"
        ],
        technologies: ["Python", "GCP", "LLMs / GenAI", "SAS", "Tableau", "ML/AI", "DPDP Act"]
    },
    {
        title: "Axis Bank — Universal Underwriting Programme",
        company: "Axis Bank",
        dates: "Dec 2022 – Dec 2023",
        role: "Head of Alternate Data — Data Sciences (BIU)",
        description: "Built a 12-person Alternate Data team from scratch and led the bank-wide programme feeding credit decisioning, KYC and fraud engines for 100M+ customers.",
        impact: [
            "+25% new-to-bank acquisition efficiency across thin-file & rural segments",
            "−20% risk exposure for new-to-credit and KYC-lite customers",
            "8 production data products: open banking, UPI payments, satellite farmland, telecom",
            "UPI model for cross-sell to 100M+ existing customers",
            "Data Centre of Excellence with executive-committee governance"
        ],
        technologies: ["Python", "GCP", "Account Aggregator API", "UPI Data", "Satellite Data", "Tableau", "GenAI"]
    },
    {
        title: "Dhani Loans — Risk & Policy Build-out",
        company: "Dhani Loans & Services",
        dates: "Apr 2019 – Dec 2022",
        role: "Assistant General Manager — Risk Management",
        description: "Recruited to build the Risk and Policy function from zero across secured and unsecured consumer lending; carried the business through COVID.",
        impact: [
            "Built Risk & Policy team from scratch to 15 people (Risk 9, Policy 6)",
            "~€20M portfolio sale; moratorium, restructuring & securitisation strategy",
            "SMS-based alternate-data score for KYC-lite onboarding & fraud screening",
            "+12% approval rate, −27% operational workload via STP upgrade",
            "Weekly KRI dashboards presented to CRO & CEO; RBI audit inputs"
        ],
        technologies: ["Python", "R", "SAS", "SQL", "SMS APIs", "Credit Bureau Integration"]
    },
    {
        title: "JPMorgan Chase — Fraud Risk Strategy",
        company: "JPMorgan Chase",
        dates: "May 2016 – Apr 2019",
        role: "Fraud Risk Strategy — Consumer & Business Banking (2nd Line of Defence)",
        description: "Second Line of Defence for US Consumer Banking fraud: debit & credit cards, cheque, EMM and wire. Rebuilt fraud forecasting and MI.",
        impact: [
            "−15% digital fraud exposure across US Consumer Banking",
            "$1M/year reporting cost reduction",
            "Fraud-attack-lifecycle forecasting method adopted across plastic & digital channels",
            "Visa partnership: redesigned low-dollar merchant-claims strategy — $1–1.5M/year recovery",
            "KRI & diagnostic metric framework for monthly CRO Risk Forum"
        ],
        technologies: ["Tableau", "Python", "SQL", "SAS", "Statistical Forecasting", "BCBS Fraud Reporting"]
    },
    {
        title: "Westpac — Fraud Framework & Campaign Analytics",
        company: "Tata Consultancy Services (Westpac, Australia)",
        dates: "May 2014 – May 2016",
        role: "Senior Business Analyst — Consultant",
        description: "Risk analytics and campaign management consulting: big-data fraud analytics on ~8 billion transactions.",
        impact: [
            "$10M annual fraud-loss reduction",
            "+30% fraud-detection KPI improvement",
            "+18% cross-sell revenue via logistic-regression targeting of top 20% prospects",
            "~$1M digital-adoption savings via paperless multi-channel campaigns"
        ],
        technologies: ["SAS", "SQL", "Python", "Logistic Regression", "Big Data Analytics"]
    }
];

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-title">${project.title}</div>
                <div class="project-role">${project.role}</div>
                <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 0.5rem;">${project.dates}</div>
            </div>
            <div class="project-body">
                <div class="project-description">${project.description}</div>
                <div class="project-impact">
                    <div class="project-impact-title">Key Achievements:</div>
                    <ul style="list-style: none; padding-left: 0; margin-top: 0.5rem;">
                        ${project.impact.map(item => `<li style="padding: 0.3rem 0; color: #333;">✓ ${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Update About Section
function updateAbout() {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.innerHTML = `
            <div class="container">
                <h2 class="m3-section-title">About Me</h2>
                <div class="about-content">
                    <p>Risk analytics leader with 14+ years across retail banking, fintech and consulting in India, the US and Australia. I build credit-risk and fraud teams end to end — scorecards, ML models, data platforms, governance and C-suite reporting — and bring Generative AI into everyday risk work, including LLM-powered agents that automate data analysis. I have built the team from scratch at each of my last three employers: Fraud Risk Analytics (L&T Finance, 7 people), Alternate Data (Axis Bank, 12 people) and Risk & Policy (Dhani Loans, 15 people).</p>
                    <p>Programmes I have led have delivered $10M+ in annual fraud-loss reduction, a 25% lift in new-customer acquisition efficiency and a 20% improvement in early fraud detection. Technically hands-on across Python, SAS (Base, EG, E-Miner, Viya), SQL, Teradata, GCP, Azure, AWS, Tableau, Power BI and Looker. Applied: BCBS 239, BCBS fraud reporting (JPMorgan). Working knowledge: Basel III/IV, GDPR, DORA, EBA guidelines, PSD2. Fluent English. Open to relocation to Ireland, Netherlands, Germany or Denmark.</p>
                    <div class="about-gif-row">
                        <img src="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
                             alt="AI and machine learning visualization"
                             class="about-gif" loading="lazy" onerror="this.style.display='none'"/>
                    </div>
                    <div class="about-highlights">
                        <div class="highlight">
                            <div class="highlight-icon">🎯</div>
                            <h3>Strategic Leadership</h3>
                            <p>Driving enterprise-scale risk and analytics capabilities with C-suite engagement</p>
                        </div>
                        <div class="highlight">
                            <div class="highlight-icon">🤖</div>
                            <h3>AI & ML Innovation</h3>
                            <p>Building intelligent fraud detection, credit scoring, and portfolio analytics</p>
                        </div>
                        <div class="highlight">
                            <div class="highlight-icon">📊</div>
                            <h3>Data Mastery</h3>
                            <p>Expert in cloud platforms (GCP, Azure, AWS) and BI tools (Tableau, Power BI)</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Update Contact Section
function updateContact() {
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactSection.innerHTML = `
            <div class="container">
                <h2 class="m3-section-title">Get In Touch</h2>
                <p>Open to relocation — Ireland / Netherlands / EU</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <h3>📧 Email</h3>
                        <a href="mailto:aceakant@gmail.com">aceakant@gmail.com</a>
                    </div>
                    <div class="contact-item">
                        <h3>📱 Phone</h3>
                        <a href="tel:+919769984956">+91 97699 84956</a>
                    </div>
                    <div class="contact-item">
                        <h3>💼 LinkedIn</h3>
                        <a href="https://linkedin.com/in/ajuhack" target="_blank">linkedin.com/in/ajuhack</a>
                    </div>
                </div>
            </div>
        `;
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ── Articles System ──────────────────────────────────────────────────────────
// AUTOMATION PIPELINE: The Content Creator Claude project can publish a new
// article by adding an entry to articles/data.json via the GitHub MCP tool
// (mcp__github__create_or_update_file), then pushing the file. GitHub Pages
// redeploys automatically within ~60 seconds. No other coordination needed.
//
// Article entry format:
// {
//   "id": "unique-slug",
//   "title": "Article Title",
//   "date": "YYYY-MM-DD",
//   "category": "Category Name",
//   "tags": ["Tag1", "Tag2"],
//   "summary": "One-paragraph teaser shown on the card.",
//   "readTime": "X min read",
//   "content": ["Paragraph 1", "## Heading", "Paragraph 2", ...]
// }
// ─────────────────────────────────────────────────────────────────────────────

function formatArticleDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function renderArticleContent(article) {
    return article.content.map(block => {
        if (block.startsWith('## ')) return `<h2>${block.slice(3)}</h2>`;
        if (block.startsWith('**') && block.endsWith('**')) return `<p><strong>${block.slice(2, -2)}</strong></p>`;
        return `<p>${block}</p>`;
    }).join('');
}

function openArticle(id, articles) {
    const article = articles.find(a => a.id === id);
    if (!article) return;
    const modal = document.getElementById('article-modal');
    const content = document.getElementById('article-modal-content');
    content.innerHTML = `
        <h1>${article.title}</h1>
        <div class="article-meta">
            <span class="article-category">${article.category}</span>
            <span class="article-date">${formatArticleDate(article.date)}</span>
            <span class="article-read-time">${article.readTime}</span>
        </div>
        ${article.image ? `<img src="${article.image}" alt="${article.title}" style="width:100%;border-radius:10px;margin:1.25rem 0;object-fit:cover;max-height:320px;">` : ''}
        <div class="article-body">${renderArticleContent(article)}</div>
        <div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid rgba(201,164,76,0.15);font-size:0.85rem;color:#8896ab;">
            — <strong style="color:#e2e8f0;">Ajay Kant</strong> &nbsp;·&nbsp; aceakant@gmail.com &nbsp;·&nbsp;
            <a href="https://linkedin.com/in/ajuhack" target="_blank" style="color:#c9a44c;">LinkedIn</a>
        </div>
    `;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeArticle() {
    document.getElementById('article-modal').hidden = true;
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeArticle(); });

function articleCardHTML(article, allArticles) {
    const articlesJson = JSON.stringify(allArticles).replace(/'/g, "&#39;");
    return `
        <div class="article-card" onclick="openArticle('${article.id}', ${articlesJson})">
            ${article.image ? `<div class="article-card-img" style="background-image:url('${article.image}')"></div>` : '<div class="article-card-accent"></div>'}
            <div class="article-card-body">
                <div class="article-meta">
                    <span class="article-category">${article.category}</span>
                    <span class="article-date">${formatArticleDate(article.date)}</span>
                    <span class="article-read-time">${article.readTime}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-summary">${article.summary}</p>
                <div class="article-tags">
                    ${article.tags.map(t => `<span class="article-tag">#${t}</span>`).join('')}
                </div>
                <span class="article-cta">Read article →</span>
            </div>
        </div>
    `;
}

async function loadArticles() {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;
    try {
        const res = await fetch('articles/data.json');
        const data = await res.json();
        const articles = data.articles.sort((a, b) => new Date(b.date) - new Date(a.date));
        grid.innerHTML = articles.map(a => articleCardHTML(a, articles)).join('');
    } catch (e) {
        grid.innerHTML = '<div class="articles-loading">Articles coming soon…</div>';
    }
}

async function loadTeaserArticles() {
    const container = document.getElementById('teaser-articles');
    if (!container) return;
    try {
        const res = await fetch('articles/data.json');
        const data = await res.json();
        const articles = data.articles.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);
        container.innerHTML = articles.map(a => articleCardHTML(a, data.articles.sort((x, y) => new Date(y.date) - new Date(x.date)))).join('');
    } catch (e) {
        container.innerHTML = '';
    }
}

// EU Value Strip Data
const euValueStats = [
    { number: '$10M', label: 'Annual Fraud-Loss Reduction' },
    { number: '+25%', label: 'Acquisition Efficiency Uplift' },
    { number: '3', label: 'Teams Built from Scratch' },
    { number: '−15%', label: 'Digital Fraud Exposure Cut' }
];

// EU Regulatory Framework Data
const regulatoryData = [
    {
        icon: '📊',
        title: 'BCBS 239',
        badge: 'Applied',
        desc: 'Built BCBS 239-aligned data pipelines and risk reporting at JPMorgan Chase — data lineage, accuracy, completeness and timeliness for board-level and regulatory reporting.',
        tags: ['Data Lineage', 'Risk Reporting', 'Data Quality', 'Governance']
    },
    {
        icon: '🔐',
        title: 'GDPR & EU AI Act',
        badge: 'Working Knowledge',
        desc: 'Built GenAI tools with GDPR-equivalent privacy controls (India\'s DPDP Act): consent-based data use, role-based access, data masking and human review before decisions — the same principles GDPR and the EU AI Act expect.',
        tags: ['Privacy by Design', 'Data Minimisation', 'AI Governance', 'Consent Mgmt']
    },
    {
        icon: '🏛️',
        title: 'Basel III / IV',
        badge: 'Working Knowledge',
        desc: 'Capital adequacy, credit risk RWA, ICAAP/ILAAP frameworks and stress testing under EBA guidelines — applied in credit-risk scorecard and portfolio management roles.',
        tags: ['Credit RWA', 'ICAAP', 'ILAAP', 'Stress Testing']
    },
    {
        icon: '⚡',
        title: 'DORA',
        badge: 'Working Knowledge',
        desc: 'Digital Operational Resilience Act — ICT risk management, third-party risk governance and incident reporting for EU financial entities.',
        tags: ['ICT Risk', 'Third-Party Risk', 'Incident Reporting']
    },
    {
        icon: '📋',
        title: 'EBA Guidelines',
        badge: 'Working Knowledge',
        desc: 'EBA GL on credit granting and monitoring — loan origination standards, creditworthiness assessment, forbearance and NPL management frameworks.',
        tags: ['Credit Granting', 'NPL Mgmt', 'Loan Origination', 'Forbearance']
    },
    {
        icon: '💳',
        title: 'PSD2 / Open Banking',
        badge: 'Working Knowledge',
        desc: 'Hands-on experience with the open-banking equivalent (India\'s Account Aggregator) — bank statements, tax returns, UPI payment data for credit decisioning and fraud detection.',
        tags: ['Open Banking', 'Account Aggregator', 'Alt Data', 'Fraud Detection']
    }
];

function renderEUValueStrip() {
    const section = document.getElementById('eu-strip');
    if (!section) return;
    section.innerHTML = `
        <div class="container">
            <div class="eu-value-grid">
                ${euValueStats.map(s => `
                    <div class="eu-value-item">
                        <div class="eu-value-number">${s.number}</div>
                        <div class="eu-value-label">${s.label}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderRegulatory() {
    const grid = document.getElementById('regulatory-grid');
    if (!grid) return;
    grid.innerHTML = regulatoryData.map(r => `
        <div class="regulatory-card">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.5rem;">
                <div class="regulatory-card-icon" style="margin-bottom:0;">${r.icon}</div>
                <span style="font-size:0.68rem;font-weight:700;padding:0.2rem 0.6rem;border-radius:9999px;background:${r.badge==='Applied'?'rgba(46,196,182,0.15)':'rgba(102,126,234,0.12)'};color:${r.badge==='Applied'?'#2ec4b6':'#667eea'};letter-spacing:0.04em;white-space:nowrap;">${r.badge}</span>
            </div>
            <div class="regulatory-card-title">${r.title}</div>
            <div class="regulatory-card-desc">${r.desc}</div>
            <div class="regulatory-card-tags">
                ${r.tags.map(t => `<span class="reg-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderOpportunity() {
    const content = document.getElementById('opportunity-content');
    if (!content) return;
    content.innerHTML = `
        <div class="opportunity-inner">
            <div class="availability-badge" style="margin: 0 auto 1.5rem; width: fit-content; color: #2ec4b6;">
                <span class="pulse-dot"></span>
                Available Now — Target Start: Q1 2025
            </div>
            <div class="opportunity-divider"></div>
            <h2 class="opportunity-title">Ready to Lead Risk, Fraud &amp; AI Analytics in Europe</h2>
            <p class="opportunity-subtitle">
                I build risk and fraud analytics teams from scratch — scorecards, ML models, GenAI agents, governance
                and C-suite reporting. Three teams built from scratch. $10M+ in measurable value delivered.
                Seeking a senior leadership role in banking, fintech, payments or consulting.
            </p>
            <div class="opportunity-locations">
                <span class="location-chip">🇮🇪 Ireland <small style="opacity:0.7;font-size:0.72em">Critical Skills</small></span>
                <span class="location-chip">🇳🇱 Netherlands <small style="opacity:0.7;font-size:0.72em">HSM Route</small></span>
                <span class="location-chip">🇩🇪 Germany <small style="opacity:0.7;font-size:0.72em">EU Blue Card</small></span>
                <span class="location-chip">🇩🇰 Denmark <small style="opacity:0.7;font-size:0.72em">Pay Limit / Fast-Track</small></span>
            </div>
            <p style="opacity:0.65;font-size:0.82rem;margin-bottom:1.75rem;">English (fluent) &nbsp;·&nbsp; Hindi (native) &nbsp;·&nbsp; Available for video interviews at any time</p>
            <div class="opportunity-btns">
                <a href="mailto:aceakant@gmail.com" class="btn-eu-primary">📧 aceakant@gmail.com</a>
                <a href="https://linkedin.com/in/ajuhack" target="_blank" class="btn-eu-secondary">💼 linkedin.com/in/ajuhack</a>
            </div>
        </div>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    updateAbout();
    updateContact();
    renderEUValueStrip();
    renderRegulatory();
    renderOpportunity();
    loadArticles();
    loadTeaserArticles();
});