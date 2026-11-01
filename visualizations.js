// M3-aligned Chart.js global defaults
Chart.defaults.font.family = "'Roboto', 'Segoe UI', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#49454f';
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.legend.labels.padding = 16;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyleWidth = 10;
Chart.defaults.elements.arc.borderWidth = 0;
Chart.defaults.animation.duration = 900;
Chart.defaults.animation.easing = 'easeInOutQuart';

const M3_PALETTE = {
    primary:   '#667eea',
    secondary: '#764ba2',
    tertiary:  '#9c6fce',
    accent1:   '#4a90d9',
    accent2:   '#2ec4b6',
    warn:      '#f4a261',
    danger:    '#e63946',
    series: ['#667eea', '#764ba2', '#9c6fce', '#4a90d9', '#2ec4b6', '#f4a261', '#e63946']
};

// Inline center-text plugin for doughnut charts
const centerTextPlugin = {
    id: 'centerText',
    afterDraw(chart) {
        if (chart.config.type !== 'doughnut') return;
        const { ctx, chartArea: { width, height, top } } = chart;
        ctx.save();
        ctx.font = 'bold 13px Roboto, sans-serif';
        ctx.fillStyle = '#1c1b1f';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const centerY = top + height / 2;
        ctx.fillText('Domain', width / 2, centerY - 10);
        ctx.fillText('Expertise', width / 2, centerY + 10);
        ctx.restore();
    }
};
Chart.register(centerTextPlugin);

// --- Chart 1: Radar — Core Competencies ---
function initRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Fraud Detection', 'Credit Modelling', 'GenAI & LLMs', 'Team Leadership', 'Data Platforms', 'Regulatory & Governance'],
            datasets: [{
                label: 'Proficiency',
                data: [95, 92, 85, 92, 88, 82],
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: M3_PALETTE.primary,
                pointBackgroundColor: M3_PALETTE.primary,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: M3_PALETTE.primary,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                r: {
                    min: 0, max: 100,
                    ticks: { stepSize: 20, backdropColor: 'transparent', color: '#79747e', font: { size: 10 } },
                    grid: { color: 'rgba(118,75,162,0.15)' },
                    angleLines: { color: 'rgba(118,75,162,0.15)' },
                    pointLabels: { font: { size: 11, weight: '500' }, color: '#1c1b1f' }
                }
            }
        }
    });
}

// --- Chart 2: Horizontal Bar — Technical Proficiency ---
function initSkillsBarChart() {
    const ctx = document.getElementById('skillsBarChart');
    if (!ctx) return;
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Python', 'SAS (Base/EG/Viya)', 'SQL / Teradata', 'Tableau', 'GCP', 'LLMs / GenAI', 'Power BI / Looker', 'Azure', 'AWS', 'R'],
            datasets: [{
                label: 'Proficiency (%)',
                data: [95, 93, 92, 90, 85, 82, 80, 78, 65, 68],
                backgroundColor: M3_PALETTE.series,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label(ctx) {
                            const v = ctx.parsed.x;
                            const label = v >= 90 ? 'Expert' : v >= 80 ? 'Advanced' : 'Proficient';
                            return ` ${v}% — ${label}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    max: 100,
                    grid: { color: 'rgba(0,0,0,0.06)' },
                    ticks: { callback: v => v + '%' }
                },
                y: { grid: { display: false } }
            }
        }
    });
}

// --- Chart 3: Doughnut — Domain Expertise ---
function initDomainDoughnut() {
    const ctx = document.getElementById('domainDoughnutChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Fraud Detection', 'Credit Risk & Modelling', 'GenAI & LLMs', 'Portfolio Analytics', 'Data Platforms & Governance', 'Regulatory'],
            datasets: [{
                data: [28, 26, 16, 15, 10, 5],
                backgroundColor: M3_PALETTE.series,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            plugins: {
                legend: { position: 'right', labels: { font: { size: 11 } } }
            }
        }
    });
}

// --- Chart 4: Polar Area — Platform Coverage ---
function initPlatformPolar() {
    const ctx = document.getElementById('platformPolarChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['SAS Platform', 'Tableau', 'GCP', 'Power BI', 'Azure', 'AWS'],
            datasets: [{
                data: [90, 88, 82, 80, 78, 55],
                backgroundColor: M3_PALETTE.series.map(c => c + 'bf')
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    ticks: { display: false },
                    grid: { color: 'rgba(118,75,162,0.15)', circular: true },
                    angleLines: { color: 'rgba(118,75,162,0.15)' }
                }
            },
            plugins: { legend: { labels: { font: { size: 11 } } } }
        }
    });
}

// --- Chart 5: Grouped Bar — Quantified Impact per Role ---
function initImpactBar() {
    const ctx = document.getElementById('impactBarChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['L&T Finance', 'Axis Bank', 'Dhani Loans', 'JPMorgan Chase', 'Westpac'],
            datasets: [
                {
                    label: 'Fraud Detection Improvement (%)',
                    data: [20, null, null, 15, 30],
                    backgroundColor: M3_PALETTE.primary,
                    borderRadius: 6,
                    borderSkipped: false
                },
                {
                    label: 'Acquisition / Revenue Uplift (%)',
                    data: [null, 25, null, null, 18],
                    backgroundColor: M3_PALETTE.secondary,
                    borderRadius: 6,
                    borderSkipped: false
                },
                {
                    label: 'Cost / Loss Savings ($M)',
                    data: [null, null, null, 1.0, 10],
                    backgroundColor: M3_PALETTE.accent2,
                    borderRadius: 6,
                    borderSkipped: false
                },
                {
                    label: 'Delinquency Reduction (%)',
                    data: [null, 20, null, null, null],
                    backgroundColor: M3_PALETTE.warn,
                    borderRadius: 6,
                    borderSkipped: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label(ctx) {
                            if (ctx.parsed.y === null) return null;
                            return ` ${ctx.dataset.label}: ${ctx.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: { grid: { color: 'rgba(0,0,0,0.06)' }, beginAtZero: true }
            }
        }
    });
}

// --- Timeline DOM renderer ---
const experienceData = [
    {
        period: '2023 – Now',
        company: 'L&T Finance',
        role: 'Head of Risk Analytics (Retail Risk & RCU)',
        location: 'Mumbai, India',
        icon: 'fa-chart-line',
        metric: '20% fraud detection uplift'
    },
    {
        period: '2022 – 2023',
        company: 'Axis Bank',
        role: 'Head of Alternate Data — Data Sciences (BIU)',
        location: 'Mumbai, India',
        icon: 'fa-database',
        metric: '+25% acquisition efficiency'
    },
    {
        period: '2019 – 2022',
        company: 'Dhani Loans & Services',
        role: 'AGM — Risk Management',
        location: 'New Delhi, India',
        icon: 'fa-shield-alt',
        metric: 'Founded 15-person risk org'
    },
    {
        period: '2016 – 2019',
        company: 'JPMorgan Chase',
        role: 'Fraud Risk Strategy — Consumer & Business Banking',
        location: 'Mumbai, India',
        icon: 'fa-university',
        metric: '$1M+ Visa partnership value'
    },
    {
        period: '2014 – 2016',
        company: 'Westpac (via TCS)',
        role: 'Senior Business Analyst — Consultant',
        location: 'India / Australia',
        icon: 'fa-globe',
        metric: '$10M annual fraud loss reduction'
    }
];

function renderTimeline() {
    const track = document.getElementById('timeline-track');
    if (!track) return;
    track.innerHTML = experienceData.map((entry, i) => `
        <div class="timeline-item">
            <div class="timeline-card ${i % 2 === 0 ? 'timeline-card--left' : 'timeline-card--right'}">
                <div class="timeline-period">${entry.period}</div>
                <div class="timeline-company">${entry.company}</div>
                <div class="timeline-role">${entry.role}</div>
                <div class="timeline-location"><i class="fas fa-map-marker-alt"></i> ${entry.location}</div>
                <span class="timeline-metric-badge">${entry.metric}</span>
            </div>
            <div class="timeline-connector">
                <div class="timeline-dot"><i class="fas ${entry.icon}"></i></div>
            </div>
            <div class="timeline-spacer"></div>
        </div>
    `).join('');

    // Fix: even items flip card/spacer sides
    track.querySelectorAll('.timeline-item').forEach((item, i) => {
        if (i % 2 !== 0) {
            const card = item.querySelector('.timeline-card');
            const spacer = item.querySelector('.timeline-spacer');
            item.insertBefore(spacer, card);
        }
    });
}

// --- Lazy-init charts via IntersectionObserver ---
function observeAndInit(elementId, initFn) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initFn();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });
    observer.observe(el);
}

document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    observeAndInit('radarChart',          initRadarChart);
    observeAndInit('skillsBarChart',      initSkillsBarChart);
    observeAndInit('domainDoughnutChart', initDomainDoughnut);
    observeAndInit('platformPolarChart',  initPlatformPolar);
    observeAndInit('impactBarChart',      initImpactBar);
});
