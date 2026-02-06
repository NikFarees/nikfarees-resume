import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Nik Farees",
    description: "Software Engineer & Productivity Consultant",
    base: '/nikfarees-resume/',

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/nikfarees-resume/logo.svg' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Nik Farees - Resume' }],
        ['meta', { property: 'og:description', content: 'Software Engineer & Productivity Consultant' }],
    ],

    themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'Nik Farees',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/overview' },
            { text: 'Experience', link: '/experience/overview' },
            { text: 'Projects', link: '/projects/overview' },
            { text: 'Skills', link: '/skills/technical' },
            { text: 'Contact', link: '/contact' }
        ],

        sidebar: {
            '/about/': [
                {
                    text: 'About Me',
                    items: [
                        { text: 'Overview', link: '/about/overview' },
                        { text: 'Background', link: '/about/background' },
                        { text: 'Career Goals', link: '/about/goals' }
                    ]
                }
            ],
            '/experience/': [
                {
                    text: 'Work Experience',
                    items: [
                        { text: 'Overview', link: '/experience/overview' },
                        { text: 'Web Developer Intern', link: '/experience/web-developer-intern' },
                        { text: 'Lecturer Assistant', link: '/experience/lecturer-assistant' }
                    ]
                }
            ],
            '/projects/': [
                {
                    text: 'Projects',
                    items: [
                        { text: 'Overview', link: '/projects/overview' },
                        {
                            text: 'Internship Projects',
                            items: [
                                { text: 'eAuction Car System', link: '/projects/eauction-car-system' },
                                { text: 'Aircond Service System', link: '/projects/aircond-service-system' },
                                { text: 'Bookshop System', link: '/projects/bookshop-system' },
                                { text: 'Preschool Network Websites', link: '/projects/preschool-network-websites' },
                                { text: 'ESG Consultancy Website', link: '/projects/consultancy-website' }
                            ]
                        },
                        {
                            text: 'Final Year Project',
                            items: [
                                { text: 'DriveFlow System', link: '/projects/driveflow' }
                            ]
                        }
                    ]
                }
            ],
            '/skills/': [
                {
                    text: 'Skills',
                    items: [
                        { text: 'Technical Skills', link: '/skills/technical' },
                        { text: 'Soft Skills', link: '/skills/soft-skills' },
                        { text: 'Certifications', link: '/skills/certifications' }
                    ]
                }
            ],
            '/education/': [
                {
                    text: 'Education',
                    items: [
                        { text: 'Overview', link: '/education/overview' },
                        { text: 'Achievements', link: '/education/achievements' },
                        { text: 'Activities', link: '/education/activities' }
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/NikFarees' },
            { icon: 'linkedin', link: 'https://linkedin.com/in/nikfarees' }
        ],

        search: {
            provider: 'local'
        },

        footer: {
            message: 'Built with VitePress',
            copyright: '© 2026 Nik Farees. All rights reserved.'
        },

        outline: {
            level: [2, 3],
            label: 'On this page'
        }
    }
})
