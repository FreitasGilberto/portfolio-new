export const portfolio = {
    name: "Gilberto Freitas",
    role: "Frontend Developer",
    headline: "Over 5 years creating web products",
    location: "Buenos Aires, Argentina",
    avatar: "/avatar.png",

    contact: {
        emailTo: "freitascode@gmail.com",
        intro: "Contact me!",
    },

    links: {
        cv: "/cv.pdf",
        linkedin: "https://www.linkedin.com/in/gilberto-freitas/",
        github: "https://github.com/FreitasGilberto",
        substack: "https://substack.com/@gilbertofreitas"
    },

    socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/gilberto-freitas/" },
        { label: "GitHub", href: "https://github.com/FreitasGilberto" },
        { label: "Substack", href: "https://substack.com/@gilbertofreitas" },
    ],

    resume: {

        summaryPills: [
            "Vue",
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "Testing Library",
            "Cypress",
            "Azure DevOps (CI/CD)",
            "AWS",
            "Git",
            "Agile/Scrum",
            "Web Performance",
            "Cross-browser",
            "Figma",
        ],

        experience: [
            {
                company: "Raona (Client: YPF)",
                period: "07/2024 - Present",
                role: "Frontend Developer",
                bullets: [
                    "Develop and maintain enterprise-level web applications using Vue and TypeScript.",
                    "Build reusable UI components and scalable frontend architectures.",
                    "Work within Agile/Scrum methodologies (sprint planning, refinements, retrospectives).",
                    "Implement CI/CD pipelines using Azure DevOps.",
                    "Write unit and integration tests using Testing Library and Cypress.",
                    "Collaborate with cross-functional teams (developers, QA, product).",
                ],
                tags: [
                    "Vue",
                    "TypeScript",
                    "Azure DevOps",
                    "CI/CD",
                    "Testing Library",
                    "Cypress",
                    "Agile",
                    "Scrum",
                    "Git",
                ],
            },
            {
                company: "Coderslab",
                period: "05/2024 - 07/2024",
                role: "Frontend Developer",
                bullets: [
                    "Develop frontend features using React.js.",
                    "Deploy and manage applications using Amazon Web Services (AWS).",
                    "Collaborate with distributed teams on contract-based client projects.",
                ],
                tags: ["React", "AWS", "JavaScript", "Git", "REST APIs"],
            },
            {
                company: "Lenovo",
                period: "08/2023 - 05/2024",
                role: "Frontend Developer",
                bullets: [
                    "Develop responsive and accessible user interfaces using HTML5, CSS3, and JavaScript (ES6+).",
                    "Ensure cross-browser compatibility and consistent behavior across devices.",
                    "Optimize web performance (load times, asset optimization, caching strategies).",
                    "Perform testing, debugging, and bug fixing to ensure high-quality deliverables.",
                    "Collaborate with designers and developers using Git-based workflows.",
                ],
                tags: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Responsive Design",
                    "Accessibility",
                    "Web Performance",
                    "Caching",
                    "Cross-browser",
                    "Git",
                ],
            },
            {
                company: "Zirio DAO",
                period: "06/2023 - 08/2023",
                role: "Frontend Developer",
                bullets: [
                    "Build frontend applications using React, Next.js, and TypeScript.",
                    "Translate Figma designs and wireframes into functional web interfaces.",
                    "Maintain and update production websites.",
                    "Integrate frontend applications with Solidity smart contracts.",
                    "Manage tasks using Trello and version control with GitHub.",
                ],
                tags: ["React", "Next.js", "TypeScript", "CSS", "Figma", "Solidity", "GitHub", "Trello"],
            },
            {
                company: "Upwork",
                period: "04/2022 - 05/2023",
                role: "Frontend Developer",
                bullets: [
                    "Develop responsive and accessible user interfaces using HTML5, CSS3, and JavaScript (ES6+).",
                    "Perform software quality assurance through testing processes.",
                    "Execute database queries and data manipulation using MySQL and MongoDB.",
                    "Report and track bugs and issues using JIRA.",
                ],
                tags: ["JavaScript", "Testing", "MySQL", "MongoDB", "JIRA", "Git"],
            },
        ]
    },
} as const;