---
layout: default
title: Nik Farees Resume
---

<!DOCTYPE html>
<html lang="en" data-theme="light">
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
                <h3>Documentation</h3>
                <ul>
                    <li><a href="/docs" class="nav-link">📚 Full Resume</a></li>
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

        <!-- About Section -->
        <section class="content-section" id="about-details">
            <h2>About Me</h2>
            <p>I'm a Software Engineering student at University Kuala Lumpur (UniKL MIIT) with strong backend and frontend development skills. Currently completing internship at Latitude Innovation as a Web Developer.</p>
            <p><strong>GPA:</strong> 3.81 | <strong>Location:</strong> Kuala Lumpur, Malaysia | <strong>Available:</strong> March 2026</p>
        </section>

        <!-- Experience Section -->
        <section class="content-section" id="experience">
            <h2>Experience</h2>
            
            <div class="experience-card">
                <div class="card-header">
                    <h3>🧑‍💼 Web Developer Intern</h3>
                    <span class="date-badge">Sep 2025 – Feb 2026</span>
                </div>
                <p><strong>Latitude Innovation Sdn. Bhd.</strong></p>
                <ul class="card-content">
                    <li>Full-stack development with Laravel, Next.js, Filament</li>
                    <li>System integration, testing, and deployment</li>
                    <li>Database design and API development</li>
                    <li>Cloudflare configuration and SMTP setup</li>
                </ul>
            </div>

            <div class="experience-card">
                <div class="card-header">
                    <h3>👨‍🏫 Lecturer Assistant</h3>
                    <span class="date-badge">Oct 2023 – Mar 2024</span>
                </div>
                <p><strong>University Kuala Lumpur (MIIT)</strong></p>
                <ul class="card-content">
                    <li>Assisted in conducting programming classes</li>
                    <li>Supported students with coursework and concepts</li>
                    <li>Prepared course materials and graded assignments</li>
                </ul>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="content-section" id="projects">
            <h2>Projects</h2>
            <div class="projects-grid">
                <div class="project-card" data-tags="auction laravel websocket">
                    <div class="project-header">
                        <h3>🏆 Gmart Online Auction</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Malaysia's biggest online auction platform with real-time bidding using WebSocket, Laravel backend, and Next.js frontend.</p>
                    <div class="project-tags">
                        <span class="tag">Laravel</span>
                        <span class="tag">Next.js</span>
                        <span class="tag">WebSocket</span>
                    </div>
                </div>

                <div class="project-card" data-tags="school2u wordpress woocommerce">
                    <div class="project-header">
                        <h3>📚 School2U Bookshop</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Online bookshop system for schools using WordPress WooCommerce with bulk order management and inventory tracking.</p>
                    <div class="project-tags">
                        <span class="tag">WordPress</span>
                        <span class="tag">WooCommerce</span>
                        <span class="tag">PHP</span>
                    </div>
                </div>

                <div class="project-card" data-tags="driveflow php mysql management">
                    <div class="project-header">
                        <h3>🚗 DriveFlow Management System</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Full-stack driving school management system with automated license booking, scheduling, and payment processing.</p>
                    <div class="project-tags">
                        <span class="tag">PHP</span>
                        <span class="tag">MySQL</span>
                        <span class="tag">Bootstrap</span>
                    </div>
                </div>

                <div class="project-card" data-tags="kidzenroll preschool wordpress">
                    <div class="project-header">
                        <h3>👶 Kidzenroll Network</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Network of preschool websites using WordPress with Cloudflare DNS management and SEO optimization.</p>
                    <div class="project-tags">
                        <span class="tag">WordPress</span>
                        <span class="tag">Cloudflare</span>
                        <span class="tag">SEO</span>
                    </div>
                </div>

                <div class="project-card" data-tags="atita consultancy wordpress">
                    <div class="project-header">
                        <h3>💼 Atita Space Website</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Professional consultancy website built with WordPress including email integration and Google Search Console setup.</p>
                    <div class="project-tags">
                        <span class="tag">WordPress</span>
                        <span class="tag">Web Design</span>
                        <span class="tag">SMTP</span>
                    </div>
                </div>

                <div class="project-card" data-tags="swathub documentation vitepress">
                    <div class="project-header">
                        <h3>📖 SwatHub Documentation</h3>
                        <button class="like-btn" onclick="toggleLike(this)" title="Like this project">
                            <span class="like-icon">♡</span>
                            <span class="like-count">0</span>
                        </button>
                    </div>
                    <p class="project-description">Comprehensive technical documentation site using VitePress with role-based guides for Super Admin and other user roles.</p>
                    <div class="project-tags">
                        <span class="tag">VitePress</span>
                        <span class="tag">Markdown</span>
                        <span class="tag">Documentation</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="content-section" id="skills">
            <h2>Skills</h2>
            
            <div class="skills-container">
                <div class="skill-group">
                    <h3>💻 Technical Skills</h3>
                    <div class="skills-list">
                        <span class="skill-tag">PHP / Laravel</span>
                        <span class="skill-tag">JavaScript / Next.js</span>
                        <span class="skill-tag">React.js</span>
                        <span class="skill-tag">WordPress / WooCommerce</span>
                        <span class="skill-tag">MySQL / SQLite</span>
                        <span class="skill-tag">HTML / CSS</span>
                        <span class="skill-tag">Git / Docker</span>
                        <span class="skill-tag">Filament Admin</span>
                    </div>
                </div>

                <div class="skill-group">
                    <h3>🎓 Other Skills</h3>
                    <div class="skills-list">
                        <span class="skill-tag">System Design</span>
                        <span class="skill-tag">Database Design</span>
                        <span class="skill-tag">API Development</span>
                        <span class="skill-tag">Technical Documentation</span>
                        <span class="skill-tag">Problem Solving</span>
                        <span class="skill-tag">Team Collaboration</span>
                        <span class="skill-tag">Communication</span>
                        <span class="skill-tag">Lean/Kaizen</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education Section -->
        <section class="content-section" id="education">
            <h2>Education & Achievements</h2>
            <div class="education-card">
                <h3>🎓 Bachelor of IT (Hons) in Software Engineering</h3>
                <p><strong>University Kuala Lumpur (UniKL MIIT)</strong></p>
                <p><strong>Sep 2022 – Feb 2026 | GPA: 3.81</strong></p>
                <p>✓ Dean's List (All 6 Semesters) | ✓ Best Student Award | ✓ Black Belt Taekwondo</p>
            </div>
            <div class="education-card">
                <h3>📜 Certifications</h3>
                <ul class="card-content">
                    <li>Microsoft Certified - Azure AI Fundamentals (2024)</li>
                    <li>CompTIA Cloud+ ce Certification (2024)</li>
                    <li>Google Project Management Professional Certificate (2024)</li>
                    <li>Top Coders 2024 - Python Programming</li>
                </ul>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="content-section" id="contact">
            <h2>Get In Touch</h2>
            <div class="contact-info">
                <p><strong>📧 Email:</strong> <a href="mailto:nfarees.faizal@gmail.com">nfarees.faizal@gmail.com</a></p>
                <p><strong>📱 Phone:</strong> <a href="tel:+601175112905">+60 117 511 2905</a></p>
                <p><strong>💼 LinkedIn:</strong> <a href="https://linkedin.com/in/nikfarees" target="_blank">linkedin.com/in/nikfarees</a></p>
                <p><strong>🐙 GitHub:</strong> <a href="https://github.com/NikFarees" target="_blank">github.com/NikFarees</a></p>
                <p><strong>📍 Location:</strong> Kuala Lumpur, Malaysia</p>
            </div>
            <div style="margin-top: 2rem; padding: 1.5rem; background: var(--bg-secondary); border-radius: 8px; text-align: center;">
                <p style="margin: 0.5rem 0;"><strong>🎯 Status:</strong> Available for full-time opportunities starting March 2026</p>
                <p style="margin: 0.5rem 0; font-size: 0.95rem; color: var(--text-secondary);">Open to Remote, Hybrid, or On-site roles</p>
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
