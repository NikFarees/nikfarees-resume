---
layout: default
title: Nik Farees Resume
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nik Farees - Software Engineer & Consultant</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation & Header -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-brand">Nik Farees</div>
            <div class="nav-center">
                <input type="text" class="search-box" id="searchBox" placeholder="Search skills, projects, experience...">
            </div>
            <div class="nav-right">
                <button class="theme-toggle" id="themeToggle" title="Toggle dark/light mode">
                    <span class="theme-icon">🌙</span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-content">
            <div class="nav-section">
                <h3>Navigation</h3>
                <ul>
                    <li><a href="#about" class="nav-link">About Me</a></li>
                    <li><a href="#experience" class="nav-link">Experience</a></li>
                    <li><a href="#projects" class="nav-link">Projects</a></li>
                    <li><a href="#skills" class="nav-link">Skills</a></li>
                    <li><a href="#education" class="nav-link">Education</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </div>
            
            <div class="nav-section">
                <h3>Roles</h3>
                <ul>
                    <li><a href="#ceo" class="nav-link">CEO & Consultant</a></li>
                    <li><a href="#developer" class="nav-link">Developer</a></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Hero Section -->
        <section class="hero" id="about">
            <h1>Nik Farees</h1>
            <p class="tagline">Software Engineer • Productivity Consultant • Developer</p>
            <p class="hero-description">Productivity consultant and system builder with experience in Lean / Kaizen consulting, training development, and full-stack web platforms. Passionate about automation, education systems, and scalable digital solutions.</p>
            <div class="hero-links">
                <a href="https://linkedin.com/in/nikfarees" target="_blank" class="btn-primary">LinkedIn</a>
                <a href="https://github.com/nikfarees" target="_blank" class="btn-secondary">GitHub</a>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="content-section" id="experience">
            <h2>Experience</h2>
            
            <div class="experience-card" id="ceo">
                <div class="card-header">
                    <h3>CEO – Captain Productivity Solutions</h3>
                    <span class="date-badge">2022 – Present</span>
                </div>
                <ul class="card-content">
                    <li>Lean / Kaizen consulting for organizations</li>
                    <li>Productivity assessments & audits</li>
                    <li>Training, certification, and facilitation</li>
                </ul>
            </div>

            <div class="experience-card" id="developer">
                <div class="card-header">
                    <h3>Developer – School2U Platform</h3>
                    <span class="date-badge">2023 – Present</span>
                </div>
                <ul class="card-content">
                    <li>Multi-vendor education marketplace</li>
                    <li>WooCommerce + Laravel integration</li>
                    <li>Vendor automation workflows</li>
                </ul>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="content-section" id="projects">
            <h2>Projects</h2>
            <div class="projects-grid">
                <div class="project-card" data-tags="school wordpress woocommerce">
                    <div class="project-header">
                        <h3>School2U Booklist Platform</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Created an online bookshop system for schools using WordPress WooCommerce with customized features for bulk order management and inventory tracking.</p>
                    <div class="project-tags">
                        <span class="tag">WordPress</span>
                        <span class="tag">WooCommerce</span>
                        <span class="tag">PHP</span>
                    </div>
                </div>

                <div class="project-card" data-tags="esg analytics dashboard">
                    <div class="project-header">
                        <h3>ESG Analytics Dashboard</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Developed a comprehensive analytics dashboard for ESG (Environmental, Social, Governance) metrics and reporting.</p>
                    <div class="project-tags">
                        <span class="tag">Analytics</span>
                        <span class="tag">Dashboard</span>
                        <span class="tag">Data Visualization</span>
                    </div>
                </div>

                <div class="project-card" data-tags="automation vendor laravel">
                    <div class="project-header">
                        <h3>Vendor Automation Systems</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Built automated workflows for vendor management and order processing, reducing manual operations and improving efficiency.</p>
                    <div class="project-tags">
                        <span class="tag">Laravel</span>
                        <span class="tag">Automation</span>
                        <span class="tag">MySQL</span>
                    </div>
                </div>

                <div class="project-card" data-tags="kidenroll preschool wordpress">
                    <div class="project-header">
                        <h3>Kidenroll – Preschool Website Network</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Developed and managed a network of preschool websites using WordPress with Cloudflare DNS management and strong SEO optimization.</p>
                    <div class="project-tags">
                        <span class="tag">WordPress</span>
                        <span class="tag">Cloudflare</span>
                        <span class="tag">SEO</span>
                    </div>
                </div>

                <div class="project-card" data-tags="aitra consultancy wordpress">
                    <div class="project-header">
                        <h3>Aitra Space - Consultancy Website</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Developed and managed a professional consultancy website using WordPress with client coordination and content management.</p>
                    <div class="project-tags">
                        <span class="tag">WordPress</span>
                        <span class="tag">Web Design</span>
                        <span class="tag">CMS</span>
                    </div>
                </div>

                <div class="project-card" data-tags="driveflow school management php">
                    <div class="project-header">
                        <h3>DriveFlow - School Management System</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Built a full-stack web application for driving school management with automated license booking and digital operations.</p>
                    <div class="project-tags">
                        <span class="tag">PHP</span>
                        <span class="tag">MySQL</span>
                        <span class="tag">Bootstrap</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="content-section" id="skills">
            <h2>Skills</h2>
            
            <div class="skills-container">
                <div class="skill-group">
                    <h3>Technical Skills</h3>
                    <div class="skills-list">
                        <span class="skill-tag">PHP / Laravel</span>
                        <span class="skill-tag">WordPress / WooCommerce</span>
                        <span class="skill-tag">SQL / MySQL</span>
                        <span class="skill-tag">Git / Docker</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">HTML / CSS</span>
                        <span class="skill-tag">React.js</span>
                        <span class="skill-tag">Next.js</span>
                    </div>
                </div>

                <div class="skill-group">
                    <h3>Consulting & Training</h3>
                    <div class="skills-list">
                        <span class="skill-tag">Lean / Kaizen</span>
                        <span class="skill-tag">Productivity Assessment</span>
                        <span class="skill-tag">Training Design</span>
                        <span class="skill-tag">Non-Formal Education</span>
                        <span class="skill-tag">System Design</span>
                        <span class="skill-tag">Process Automation</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education Section -->
        <section class="content-section" id="education">
            <h2>Education</h2>
            <div class="education-card">
                <h3>Bachelor of Science in Software Engineering</h3>
                <p>University Kuala Lumpur (UniKL)</p>
                <span class="date-badge">Sep 2022 - Feb 2026</span>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="content-section" id="contact">
            <h2>Get In Touch</h2>
            <div class="contact-info">
                <p><strong>Email:</strong> <a href="mailto:nfarees.faizal@gmail.com">nfarees.faizal@gmail.com</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nikfarees" target="_blank">linkedin.com/in/nikfarees</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/nikfarees" target="_blank">github.com/nikfarees</a></p>
            </div>
        </section>
    </main>

    <script>
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);

        themeToggle.addEventListener('click', () => {
            const theme = html.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            themeToggle.querySelector('.theme-icon').textContent = theme === 'light' ? '🌙' : '☀️';
        }

        // Search Functionality
        const searchBox = document.getElementById('searchBox');
        const projectCards = document.querySelectorAll('.project-card');
        const skillTags = document.querySelectorAll('.skill-tag');

        searchBox.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            
            projectCards.forEach(card => {
                const tags = card.getAttribute('data-tags') || '';
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.project-description').textContent.toLowerCase();
                
                const matches = tags.includes(query) || title.includes(query) || description.includes(query);
                card.style.display = matches || query === '' ? 'block' : 'none';
            });
        });

        // Like Button Functionality
        function toggleLike(button) {
            const icon = button.querySelector('.like-icon');
            const count = button.querySelector('.like-count');
            const currentCount = parseInt(count.textContent);
            
            if (icon.textContent === '♡') {
                icon.textContent = '♥';
                button.classList.add('liked');
                count.textContent = currentCount + 1;
                localStorage.setItem(`like-${button.closest('.project-card').querySelector('h3').textContent}`, true);
            } else {
                icon.textContent = '♡';
                button.classList.remove('liked');
                count.textContent = currentCount - 1;
                localStorage.removeItem(`like-${button.closest('.project-card').querySelector('h3').textContent}`);
            }
        }

        // Load likes from localStorage on page load
        window.addEventListener('DOMContentLoaded', () => {
            projectCards.forEach(card => {
                const projectName = card.querySelector('h3').textContent;
                const likeBtn = card.querySelector('.like-btn');
                if (localStorage.getItem(`like-${projectName}`)) {
                    likeBtn.querySelector('.like-icon').textContent = '♥';
                    likeBtn.classList.add('liked');
                }
            });
        });

        // Smooth scroll navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });
    </script>
</body>
</html>
