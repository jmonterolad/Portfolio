// Gestión de Temas
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
}

// Datos de Traducción
const translations = {
    en: {
        // Nav
        "nav-home":        "Home",
        "nav-projects":    "WordPress",
        "nav-hubspot":     "HubSpot",
        "nav-code":        "Projects",
        "nav-skills":      "Skills",
        "nav-services":    "What I Build",
        "nav-contact":     "Contact",

        // Hero
        "hero-badge":        "Web Developer",
        "hero-title-prefix": "Hi, I'm",
        "hero-desc":         "Web developer with 6+ years of professional experience in digital agency environments. I implement client projects in WordPress and HubSpot, and build custom full-stack applications using React, FastAPI, and PostgreSQL.",
        "hero-cta-contact":  "Let's Talk",
        "hero-cta-projects": "See My Work",

        // WordPress Projects
        "projects-title":    "WordPress Projects",
        "projects-subtitle": "Client projects delivered in a professional agency environment.",
        "tag-full":          "Client Project",
        "btn-visit":         "VIEW WEBSITE",
        "btn-repo":          "VIEW REPO",
        "wp-p1-desc": "Redesign of the Trust Counsel website. Designed by the client and implemented by me in WordPress using the Divi builder. Also improved overall site performance and SEO.",
        "wp-p2-desc": "Website redesign for Monifai. The design was provided by the client and implemented in WordPress using Elementor Pro. Deployed pages for two countries under a single domain.",
        "wp-p3-desc": "Full website overhaul for El Encanto. Implemented in WordPress using the Belicia theme with multi-language support (Spanish / English).",

        // HubSpot Projects
        "hubspot-title":    "HubSpot Projects",
        "hubspot-subtitle": "CMS implementations on HubSpot with custom modules and third-party integrations.",
        "tag-hubspot":      "HubSpot CMS",

        "hs-p1-title": "Caposa Plants",
        "hs-p1-desc":  "HubSpot CMS implementation from a Figma design. Adapted the client's existing theme with custom module modifications built in HubL and JavaScript to match the provided design specs.",

        "hs-p2-title": "Robertoni",
        "hs-p2-desc":  "Built two custom HubSpot CMS modules from scratch using HubL, integrated into the client's drag-and-drop template based on their provided design.",

        "hs-p3-title": "The Links",
        "hs-p3-desc":  "HubSpot CMS implementation including a third-party booking system integration with a local El Salvador payment gateway, based on the client's provided design.",

        // Development Projects
        "code-title":    "Development Projects",
        "code-subtitle": "Personal projects built from scratch — no CMS, no templates.",
        "tag-code":      "Custom Code",
        "tag-featured":  "Featured",

        "code-p3-title": "Warhammer 40KSV Rankings",
        "code-p3-desc":  "A rankings portal for the Warhammer 40K El Salvador community. Built with Vue.js on the frontend and FastAPI on the backend, using a private Google Sheet as the live data source.",

        "code-p4-title": "Football Scout Analytics",
        "code-p4-desc":  "Full-stack scouting platform that analyzes 4,000+ real players from 5 major European leagues. Built a custom percentile-rank algorithm in Python to generate scouting scores, with an interactive dashboard featuring radar charts and transfer recommendations.",

        // Skills
        "skills-title":    "Technical Skills",
        "skills-subtitle": "Tools I use professionally and in my own projects.",
        "skill-html-desc":    "Semantic markup and responsive design with Tailwind CSS and modern layout techniques.",
        "skill-js-desc":      "Dynamic interactivity, async logic, and DOM manipulation for real user-facing features.",
        "skill-react-desc":   "Component-based UIs with hooks, state management, and integration with REST APIs.",
        "skill-vue-desc":     "Reactive interfaces and SPA development with Vue 3 and the Composition API.",
        "skill-py-desc":      "Data processing, REST APIs with FastAPI, scripting, and automation workflows.",
        "skill-fastapi-desc": "Building and deploying REST APIs with FastAPI, Pydantic validation, and async endpoints.",
        "skill-sql-desc":     "Database design, queries, and integration with PostgreSQL in production projects.",
        "skill-git-desc":     "Version control and team collaboration using Git and GitHub.",

        // What I Build
        "services-title":    "What I Build",
        "services-subtitle": "The three areas where I have real, hands-on experience.",
        "service1-title": "Web Applications",
        "service1-desc":  "Full-stack apps with React or Vue.js on the frontend and FastAPI + PostgreSQL on the backend. Data pipelines, interactive dashboards, and REST APIs.",
        "service2-title": "CMS Development",
        "service2-desc":  "Professional implementations on WordPress and HubSpot CMS. Custom modules with HubL, Divi and Elementor Pro, performance optimization, SEO, and third-party integrations.",
        "service3-title": "Integrations & Automation",
        "service3-desc":  "Connecting APIs, automating workflows, and processing data with Python. From Google Sheets integrations to third-party API consumption and payment gateways.",

        // Contact
        "contact-title":    "Let's Work Together",
        "contact-subtitle": "Open to remote opportunities and interesting projects. Drop me a line and let's talk.",
        "btn-email": "Send Email",

        // Footer
        "footer-note": "Developed with passion and code."
    },

    es: {
        // Nav
        "nav-home":        "Inicio",
        "nav-projects":    "WordPress",
        "nav-hubspot":     "HubSpot",
        "nav-code":        "Proyectos",
        "nav-skills":      "Habilidades",
        "nav-services":    "Qué Construyo",
        "nav-contact":     "Contacto",

        // Hero
        "hero-badge":        "Desarrollador Web",
        "hero-title-prefix": "Hola, soy",
        "hero-desc":         "Desarrollador web con más de 6 años de experiencia profesional en agencias digitales. Implemento proyectos para clientes en WordPress y HubSpot, y construyo aplicaciones full-stack con React, FastAPI y PostgreSQL.",
        "hero-cta-contact":  "Hablemos",
        "hero-cta-projects": "Ver mis proyectos",

        // WordPress Projects
        "projects-title":    "Proyectos WordPress",
        "projects-subtitle": "Proyectos entregados para clientes en un entorno de agencia profesional.",
        "tag-full":          "Proyecto de Cliente",
        "btn-visit":         "VER SITIO WEB",
        "btn-repo":          "VER REPOSITORIO",
        "wp-p1-desc": "Rediseño del sitio web de Trust Counsel. Diseñado por el cliente e implementado por mí en WordPress con el constructor Divi. También mejoré el rendimiento general del sitio y el SEO.",
        "wp-p2-desc": "Rediseño del sitio web para Monifai. El diseño fue provisto por el cliente e implementado en WordPress con Elementor Pro. Desplegué páginas para dos países bajo un único dominio.",
        "wp-p3-desc": "Renovación completa del sitio web de El Encanto. Implementado en WordPress con el tema Belicia, con soporte multilenguaje (español / inglés).",

        // HubSpot Projects
        "hubspot-title":    "Proyectos HubSpot",
        "hubspot-subtitle": "Implementaciones en HubSpot CMS con módulos personalizados e integraciones de terceros.",
        "tag-hubspot":      "HubSpot CMS",

        "hs-p1-title": "Caposa Plants",
        "hs-p1-desc":  "Implementación en HubSpot CMS a partir de un diseño en Figma. Adapté el tema existente del cliente con modificaciones a módulos personalizados construidos en HubL y JavaScript.",

        "hs-p2-title": "Robertoni",
        "hs-p2-desc":  "Creé dos módulos personalizados desde cero en HubSpot CMS usando HubL, integrados en la plantilla drag-and-drop del cliente según su diseño.",

        "hs-p3-title": "The Links",
        "hs-p3-desc":  "Implementación en HubSpot CMS con integración de un sistema de reservas de terceros y pasarela de pago local de El Salvador, según el diseño provisto por el cliente.",

        // Development Projects
        "code-title":    "Proyectos de Desarrollo",
        "code-subtitle": "Proyectos propios construidos desde cero — sin CMS, sin plantillas.",
        "tag-code":      "Código Propio",
        "tag-featured":  "Destacado",

        "code-p3-title": "Warhammer 40KSV Rankings",
        "code-p3-desc":  "Portal de rankings para la comunidad de Warhammer 40K de El Salvador. Frontend con Vue.js y backend con FastAPI, usando una Google Sheet privada como fuente de datos en vivo.",

        "code-p4-title": "Football Scout Analytics",
        "code-p4-desc":  "Plataforma de scouting full-stack que analiza más de 4,000 jugadores reales de 5 ligas europeas. Algoritmo propio en Python con percentil rank para generar scores, con dashboard interactivo de radar charts y recomendaciones de fichajes.",

        // Skills
        "skills-title":    "Habilidades Técnicas",
        "skills-subtitle": "Herramientas que uso de forma profesional y en mis proyectos propios.",
        "skill-html-desc":    "Maquetación semántica y diseño responsivo con Tailwind CSS y técnicas modernas de layout.",
        "skill-js-desc":      "Interactividad dinámica, lógica async y manipulación del DOM para funcionalidades reales.",
        "skill-react-desc":   "UIs basadas en componentes con hooks, manejo de estado e integración con APIs REST.",
        "skill-vue-desc":     "Interfaces reactivas y SPAs con Vue 3 y la Composition API.",
        "skill-py-desc":      "Procesamiento de datos, APIs REST con FastAPI, scripting y automatización.",
        "skill-fastapi-desc": "Construcción y despliegue de APIs REST con FastAPI, validación Pydantic y endpoints async.",
        "skill-sql-desc":     "Diseño de bases de datos, consultas e integración con PostgreSQL en proyectos reales.",
        "skill-git-desc":     "Control de versiones y colaboración en equipo con Git y GitHub.",

        // What I Build
        "services-title":    "Qué Construyo",
        "services-subtitle": "Las tres áreas donde tengo experiencia real y demostrable.",
        "service1-title": "Aplicaciones Web",
        "service1-desc":  "Apps full-stack con React o Vue.js en el frontend y FastAPI + PostgreSQL en el backend. Pipelines de datos, dashboards interactivos y APIs REST.",
        "service2-title": "Desarrollo CMS",
        "service2-desc":  "Implementaciones profesionales en WordPress y HubSpot CMS. Módulos personalizados con HubL, Divi y Elementor Pro, optimización de rendimiento, SEO e integraciones de terceros.",
        "service3-title": "Integraciones y Automatización",
        "service3-desc":  "Conexión de APIs, automatización de flujos y procesamiento de datos con Python. Desde integraciones con Google Sheets hasta pasarelas de pago y consumo de APIs de terceros.",

        // Contact
        "contact-title":    "Trabajemos Juntos",
        "contact-subtitle": "Disponible para oportunidades remotas y proyectos interesantes. Escríbeme y hablemos.",
        "btn-email": "Enviar Correo",

        // Footer
        "footer-note": "Desarrollado con pasión y código."
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang][key]) {
            elem.innerText = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll(`.${lang}-btn`).forEach(btn => btn.classList.add('active'));
}

// Inicialización
document.getElementById('year').textContent = new Date().getFullYear();
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => menu.classList.toggle('hidden'));
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});