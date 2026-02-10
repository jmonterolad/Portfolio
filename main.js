// Gestión de Temas
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
}

// Datos de Traducción
const translations = {
    en: {
        "nav-home": "Home",
        "nav-projects": "WordPress",
        "nav-code": "Code",
        "nav-skills": "Skills",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "hero-badge": "Web Developer",
        "hero-title-prefix": "Hi, I'm",
        "hero-desc": "Specialist in creating high-impact digital experiences. I help my clients build modern websites that not only look great but load fast and are optimized for conversion.",
        "hero-cta-contact": "Let's Talk Today!",
        "projects-title": "WordPress Projects",
        "projects-subtitle": "Websites implemented using WordPress core and professional builders.",
        "wp-p1-desc": "Redesign of the Trust Counsel website. Designed by Trust Counsel and implemented by me in WordPress using the Divi builder. Also improved overall site performance and helped with SEO.",
        "wp-p2-desc": "Website redesign for Monifai. The design was created by Monifai and I implemented it in WordPress using Elementor Pro. Implemented pages for two countries under a single domain.",
        "wp-p3-desc": "Full website change for El Encanto. The design was created by El Encanto and I implemented it in WordPress using the Belicia theme. Implemented multi-language support from Spanish to English.",
        "tag-full": "Full Implementation",
        "btn-visit": "VIEW WEBSITE",
        "btn-repo": "VIEW REPO",
        "code-title": "Development Projects",
        "code-subtitle": "Projects developed from scratch using custom code without CMS platforms.",
        "tag-code": "Custom Code",
        "code-p1-title": "Rick & Morty Explorer",
        "code-p1-desc": "A web application consuming the Rick & Morty API where you can search for all characters and view detailed info, such as the number of episodes they appear in. Built with Vue.js.",
        "code-p2-title": "Flutter Stopwatch",
        "code-p2-desc": "A high-performance stopwatch application developed using Flutter. Focused on precision, clean state management, and a minimalist user interface.",
        "code-p3-title": "Tabletop Brackets",
        "code-p3-desc": "A bracket app for board game communities. Supports single-elimination tournaments or points-based leagues. Built with React.js, FastAPI, and Firebase.",
        "skills-title": "Programming Skills",
        "skills-subtitle": "Technical tools I use to build custom solutions.",
        "skill-html-desc": "Semantic markup and responsive design using modern frameworks like Tailwind CSS.",
        "skill-js-desc": "Dynamic interactivity and DOM manipulation to improve user experience.",
        "skill-git-desc": "Version control and collaboration using Git and GitHub for clean project management.",
        "skill-py-desc": "Task automation, data analysis, and developing efficient scripts.",
        "skill-php-desc": "Theme development, custom plugin creation, and server-side logic for WordPress.",
        "services-title": "How Can I Help You?",
        "services-subtitle": "WordPress solutions focused on results for your digital business.",
        "service1-title": "WordPress 0 to 100",
        "service1-desc": "Complete installation and configuration of professional websites, SEO-ready and fully self-manageable.",
        "service2-title": "Redesign & Optimization",
        "service2-desc": "Is your current site not convincing or slow? I update templates and optimize technical performance for Google.",
        "contact-title": "Have a Project on Your Hands?",
        "contact-subtitle": "I'm available to help you build or improve your digital presence. Drop me a line and let's discuss the details.",
        "btn-email": "Send Email",
        "footer-note": "Developed with passion and code."
    },
    es: {
        "nav-home": "Inicio",
        "nav-projects": "WordPress",
        "nav-code": "Código",
        "nav-skills": "Habilidades",
        "nav-services": "Servicios",
        "nav-contact": "Contacto",
        "hero-badge": "Desarrollador Web",
        "hero-title-prefix": "Hola, soy",
        "hero-desc": "Especialista en la creación de experiencias digitales de alto impacto. Ayudo a mis clientes a construir sitios web modernos que no solo se ven bien, sino que cargan rápido y están optimizados para vender.",
        "hero-cta-contact": "¡Hablemos hoy!",
        "projects-title": "Proyectos WordPress",
        "projects-subtitle": "Sitios web implementados utilizando WordPress y constructores profesionales.",
        "wp-p1-desc": "Rediseño del sitio web de Trust Counsel. Diseñado por Trust Counsel e implementado por mí en WordPress usando el constructor Divi. También mejoré el rendimiento de todo el sitio web y ayudé con el SEO.",
        "wp-p2-desc": "Rediseño del sitio web para Monifai. El diseño fue creado por Monifai y yo lo implementé en WordPress usando Elementor Pro. Implementé páginas para dos países con un mismo dominio.",
        "wp-p3-desc": "Cambio completo del sitio web para El Encanto. El diseño fue creado por El Encanto y yo lo implementé en WordPress usando el tema Belicia. Implementé el soporte multi lenguaje de Español a Inglés.",
        "tag-full": "Implementación Total",
        "btn-visit": "VER SITIO WEB",
        "btn-repo": "VER REPOSITORIO",
        "code-title": "Proyectos de Desarrollo",
        "code-subtitle": "Proyectos desarrollados desde cero utilizando código personalizado sin CMS.",
        "tag-code": "Código a Medida",
        "code-p1-title": "Rick & Morty Explorer",
        "code-p1-desc": "Aplicación web que consume la API de Rick & Morty donde puedes buscar a todos los personajes y ver su información detallada, como en cuántos episodios aparecen. Creada con Vue.js.",
        "code-p2-title": "Cronómetro Flutter",
        "code-p2-desc": "Aplicación de cronómetro de alto rendimiento desarrollada con Flutter. Enfocada en la precisión y gestión de estado limpia.",
        "code-p3-title": "Brackets para Juegos",
        "code-p3-desc": "App de brackets para una comunidad de juegos de mesa. Permite crear torneos de eliminación directa o ligas por puntos. Construida con React.js, FastAPI y Firebase.",
        "skills-title": "Habilidades de Programación",
        "skills-subtitle": "Herramientas técnicas que utilizo para construir soluciones personalizadas.",
        "skill-html-desc": "Maquetación semántica y diseño responsivo utilizando frameworks modernos como Tailwind CSS.",
        "skill-js-desc": "Interactividad dinámica y manipulación del DOM para mejorar la experiencia de usuario.",
        "skill-git-desc": "Control de versiones y colaboración utilizando Git y GitHub para una gestión de proyectos limpia.",
        "skill-py-desc": "Automatización de tareas, análisis de datos y desarrollo de scripts eficientes.",
        "skill-php-desc": "Desarrollo de temas, creación de plugins personalizados y lógica de servidor para WordPress.",
        "services-title": "¿En qué puedo ayudarte?",
        "services-subtitle": "Soluciones de WordPress enfocadas en resultados para tu negocio digital.",
        "service1-title": "WordPress de 0 a 100",
        "service1-desc": "Instalación y configuración completa de sitios web profesionales, listos para SEO y totalmente autogestionables.",
        "service2-title": "Rediseño y Optimización",
        "service2-desc": "¿Tu sitio actual no convence o es lento? Actualizo plantillas y optimizo el rendimiento técnico para Google.",
        "contact-title": "¿Tienes un Proyecto entre Manos?",
        "contact-subtitle": "Estoy disponible para ayudarte a construir o mejorar tu presencia digital. Escríbeme y hablemos de los detalles.",
        "btn-email": "Enviar Correo",
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