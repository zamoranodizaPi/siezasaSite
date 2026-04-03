import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Cable,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Factory,
  Gauge,
  HardHat,
  Mail,
  MapPin,
  Moon,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  SunMedium,
  TowerControl,
  Wrench,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionBackgrounds = {
  hero: [
    {
      image: "/hero/hero-towers.jpg",
      label: { en: "Power Lines", es: "Torres eléctricas" },
      title: { en: "Transmission infrastructure and industrial power corridors", es: "Infraestructura de transmisión y corredores eléctricos" },
    },
    {
      image: "/hero/hero-substation.jpg",
      label: { en: "Substations", es: "Subestaciones" },
      title: { en: "Substations and critical power distribution", es: "Subestaciones y distribución crítica" },
    },
  ],
  about: [
    {
      image: "/hero/renewable-wind-sunset.jpg",
      label: { en: "Field Engineering", es: "Ingeniería en campo" },
      title: { en: "Engineering teams focused on industrial continuity", es: "Equipos enfocados en continuidad industrial" },
    },
    {
      image: "/hero/renewable-solar-sunset.jpg",
      label: { en: "Maintenance", es: "Mantenimiento" },
      title: { en: "Technical response where the operation cannot stop", es: "Respuesta técnica donde la operación no se detiene" },
    },
  ],
  capabilities: [
    {
      image: "/hero/capabilities-panel.jpg",
      label: { en: "Control Panels", es: "Tableros de control" },
      title: { en: "Industrial panels built for distribution and protection", es: "Tableros para distribución, control y protección" },
    },
    {
      image: "/hero/capabilities-switchgear.jpg",
      label: { en: "Automation", es: "Automatización" },
      title: { en: "Integration, wiring, and advanced control architecture", es: "Integración, cableado y control avanzado" },
    },
  ],
  sectors: [
    {
      image: "/hero/renewable-wind-sunset.jpg",
      label: { en: "Industrial Sites", es: "Sitios industriales" },
      title: { en: "Mining, energy, and high-demand industrial facilities", es: "Minería, energía e instalaciones de alta exigencia" },
    },
    {
      image: "/hero/efficiency-power-sunset.jpg",
      label: { en: "Critical Facilities", es: "Instalaciones críticas" },
      title: { en: "Electrical infrastructure for demanding operating environments", es: "Infraestructura eléctrica para operación exigente" },
    },
  ],
  strength: [
    {
      image: "/hero/renewable-solar-sunset.jpg",
      label: { en: "Testing", es: "Pruebas" },
      title: { en: "Testing and diagnostics for real field conditions", es: "Pruebas y diagnóstico en condiciones reales" },
    },
    {
      image: "/hero/efficiency-power-sunset.jpg",
      label: { en: "Analytics", es: "Analítica" },
      title: { en: "Electrical insight backed by technical analysis", es: "Visibilidad eléctrica respaldada por análisis técnico" },
    },
  ],
  projects: [
    {
      image: "/hero/efficiency-power-sunset.jpg",
      label: { en: "Execution", es: "Ejecución" },
      title: { en: "Installed systems and delivered field solutions", es: "Sistemas instalados y soluciones entregadas" },
    },
    {
      image: "/hero/hero-substation.jpg",
      label: { en: "Power Systems", es: "Sistemas de potencia" },
      title: { en: "Project experience aligned with critical infrastructure", es: "Experiencia alineada con infraestructura crítica" },
    },
  ],
  contact: [
    {
      image: "/hero/renewable-wind-sunset.jpg",
      label: { en: "Coordination", es: "Coordinación" },
      title: { en: "Commercial follow-up and technical coordination", es: "Seguimiento comercial y coordinación técnica" },
    },
    {
      image: "/hero/renewable-solar-sunset.jpg",
      label: { en: "Support", es: "Soporte" },
      title: { en: "Direct contact for industrial electrical requirements", es: "Contacto directo para requerimientos eléctricos" },
    },
  ],
  gallery: [
    {
      image: "/hero/renewable-solar-sunset.jpg",
      label: { en: "Visual Portfolio", es: "Portafolio visual" },
      title: { en: "Visual references for field work and industrial systems", es: "Referencias visuales de campo y sistemas industriales" },
    },
    {
      image: "/hero/renewable-wind-sunset.jpg",
      label: { en: "Service Evidence", es: "Evidencia de servicios" },
      title: { en: "Portfolio-ready imagery while local assets are pending", es: "Imágenes de muestra mientras llegan activos reales" },
    },
  ],
};

const content = {
  en: {
    brandTag: "Electrical Engineering",
    nav: ["About", "Capabilities", "Sectors", "Why SIEZA", "Projects", "Gallery", "Contact"],
    quote: "Request a Quote",
    badge: "Integrated Engineering Solutions for Critical Industry",
    heroTitle: "Industrial Electrical Infrastructure Built for Reliability",
    heroText:
      "Integrated solutions in electrical panels, maintenance, spare parts, and installations for industry.",
    contactUs: "Contact Us",
    viewExperience: "View Experience",
    highlights: [
      ["Electrical Panels", "Manufacturing and integration for industrial distribution, control, and protection."],
      ["Field Services", "Maintenance, diagnostics, and electrical support in real operating environments."],
      ["Industrial Reliability", "Solutions designed to protect uptime, safety, and production continuity."],
    ],
    aboutLabel: "About SIEZA",
    aboutTitle: "A Mexican electrical engineering company focused on critical industrial infrastructure.",
    aboutText:
      "Sistemas Eléctricos Zaragoza S.A. de C.V. delivers industrial electrical solutions with a field-first mindset. From electrical panels and installations to maintenance, diagnostics, spare parts, and engineering support, SIEZA is built to serve operations where reliability matters.",
    aboutPoints: [
      "100% Mexican company serving industrial clients",
      "Technical expertise in panels, power systems, and field execution",
      "Reliable support for critical electrical infrastructure",
    ],
    capabilitiesLabel: "Capabilities",
    capabilitiesTitle: "Core capabilities built for uptime, safety, and industrial performance.",
    capabilities: [
      {
        title: "Electrical Panel Manufacturing",
        text: "Design and fabrication of industrial panels that centralize control, distribution, and protection while improving operational reliability.",
      },
      {
        title: "Industrial Electrical Installations",
        text: "Execution of electrical installations that solve integration challenges and enable safe, efficient plant expansion and operation.",
      },
      {
        title: "Field Maintenance & Support",
        text: "On-site maintenance and technical response that reduce downtime, restore critical systems, and protect production continuity.",
      },
      {
        title: "Electrical Testing & Diagnostics",
        text: "Testing and fault analysis that identify risk early, validate system condition, and improve electrical safety and performance.",
      },
      {
        title: "Engineering & Studies",
        text: "Technical studies and engineering definition that improve decision-making, electrical integrity, and execution quality.",
      },
      {
        title: "Spare Parts & Industrial Supply",
        text: "Critical components and industrial support that shorten response time and keep essential electrical assets available.",
      },
    ],
    sectorsLabel: "Industrial Sectors",
    sectorsTitle: "Industrial sectors where electrical performance directly affects continuity and safety.",
    sectors: [
      {
        title: "Manufacturing Plants",
        text: "Electrical systems, panels, and field support for continuous industrial production.",
      },
      {
        title: "Energy Sector",
        text: "Substations, power infrastructure, and electrical execution for demanding energy environments.",
      },
      {
        title: "Infrastructure & Facilities",
        text: "Reliable electrical solutions for industrial facilities, services, and operational assets.",
      },
    ],
    strengthLabel: "Why SIEZA",
    strengthTitle: "Serious execution for industrial clients that cannot afford electrical uncertainty.",
    strengthText:
      "SIEZA combines engineering discipline, field expertise, and practical industrial support to solve electrical problems with business impact.",
    metrics: [
      ["Reliable", "Execution focused on continuity and dependable delivery"],
      ["Industrial-grade", "Solutions built for real plant conditions"],
      ["Field expertise", "Hands-on response where the work actually happens"],
      ["End-to-end", "Panels, installation, maintenance, and support"],
    ],
    whyPoints: [
      "Reliable execution in critical industrial systems",
      "Industrial-grade solutions with practical field value",
      "Technical expertise across engineering, maintenance, and supply",
      "End-to-end service from panel manufacturing to on-site support",
    ],
    projectsLabel: "Projects",
    projectsTitle: "Project experience aligned to real industrial electrical demands.",
    projects: [
      {
        type: "Electrical Panels",
        title: "Industrial Control and Distribution Panels",
        text: "Manufacturing and delivery of electrical panels built for safer operation, cleaner integration, and reliable industrial control.",
      },
      {
        type: "Industrial Installations",
        title: "Plant Electrical Installation Packages",
        text: "Field execution of electrical installations that support plant upgrades, expansions, and operational continuity.",
      },
      {
        type: "Maintenance Work",
        title: "Maintenance, Diagnostics, and Recovery Support",
        text: "On-site work focused on restoring performance, reducing fault exposure, and sustaining uptime in critical systems.",
      },
    ],
    galleryLabel: "Service Gallery",
    galleryTitle: "Upload project evidence, field work, and service execution imagery.",
    galleryText:
      "Drag and drop photos from substations, panels, field services, testing, or automation work to build a visual portfolio directly inside the site.",
    galleryDrop: "Drop images here",
    galleryBrowse: "or select files",
    galleryHint: "PNG, JPG, WEBP. Local preview only in this browser session.",
    galleryEmpty: "No images uploaded yet.",
    ctaLabel: "Start the Conversation",
    ctaTitle: "Power your operations with reliable electrical engineering",
    ctaText:
      "Contact SIEZA for electrical panels, industrial installations, maintenance, engineering support, and industrial electrical solutions built for continuity.",
    footerTitle: "High-quality electrical solutions for industrial infrastructure.",
    footerContact: "Contact",
    footerFocus: "Core Focus",
    footerFocusItems: [
      "Electrical panels and industrial power systems",
      "Field maintenance, installations, and engineering support",
      "Spare parts and industrial electrical continuity",
    ],
  },
  es: {
    brandTag: "Ingeniería Eléctrica",
    nav: ["Nosotros", "Capacidades", "Sectores", "Por qué SIEZA", "Proyectos", "Galería", "Contacto"],
    quote: "Solicitar cotización",
    badge: "Soluciones integrales de ingeniería para la industria crítica",
    heroTitle: "Infraestructura eléctrica industrial construida para la confiabilidad",
    heroText:
      "Soluciones integrales en tableros eléctricos, mantenimiento, refacciones e instalaciones para la industria.",
    contactUs: "Contáctanos",
    viewExperience: "Ver experiencia",
    highlights: [
      ["Tableros eléctricos", "Fabricación e integración para distribución, control y protección industrial."],
      ["Servicios en campo", "Mantenimiento, diagnóstico y soporte eléctrico en entornos operativos reales."],
      ["Confiabilidad industrial", "Soluciones pensadas para proteger continuidad, seguridad y producción."],
    ],
    aboutLabel: "Sobre SIEZA",
    aboutTitle: "Empresa mexicana de ingeniería eléctrica enfocada en infraestructura industrial crítica.",
    aboutText:
      "Sistemas Eléctricos Zaragoza S.A. de C.V. entrega soluciones eléctricas industriales con una visión orientada al campo. Desde tableros eléctricos e instalaciones hasta mantenimiento, diagnóstico, refacciones y soporte técnico, SIEZA está hecha para atender operaciones donde la confiabilidad sí importa.",
    aboutPoints: [
      "Empresa 100% mexicana orientada al sector industrial",
      "Experiencia técnica en tableros, sistemas eléctricos y ejecución en campo",
      "Soporte confiable para infraestructura eléctrica crítica",
    ],
    capabilitiesLabel: "Capacidades",
    capabilitiesTitle: "Capacidades clave construidas para continuidad, seguridad y desempeño industrial.",
    capabilities: [
      {
        title: "Fabricación de tableros eléctricos",
        text: "Diseño y fabricación de tableros industriales que concentran control, distribución y protección para mejorar confiabilidad operativa.",
      },
      {
        title: "Instalaciones eléctricas industriales",
        text: "Ejecución de instalaciones eléctricas que resuelven integración, permiten expansión segura y soportan la operación eficiente.",
      },
      {
        title: "Mantenimiento y soporte en campo",
        text: "Mantenimiento en sitio y respuesta técnica que reducen paro, recuperan sistemas críticos y protegen continuidad productiva.",
      },
      {
        title: "Pruebas y diagnóstico eléctrico",
        text: "Pruebas y análisis de fallas que detectan riesgo temprano, validan condición del sistema y mejoran seguridad y desempeño.",
      },
      {
        title: "Ingeniería y estudios",
        text: "Estudios técnicos e ingeniería de definición que mejoran decisiones, integridad eléctrica y calidad de ejecución.",
      },
      {
        title: "Refacciones y suministro industrial",
        text: "Componentes críticos y soporte industrial que acortan tiempos de respuesta y mantienen disponibles los activos esenciales.",
      },
    ],
    sectorsLabel: "Sectores industriales",
    sectorsTitle: "Sectores donde el desempeño eléctrico impacta directamente la continuidad y la seguridad.",
    sectors: [
      {
        title: "Plantas manufactureras",
        text: "Sistemas eléctricos, tableros y soporte de campo para producción industrial continua.",
      },
      {
        title: "Sector energía",
        text: "Subestaciones, infraestructura de potencia y ejecución eléctrica para entornos energéticos exigentes.",
      },
      {
        title: "Infraestructura e instalaciones",
        text: "Soluciones eléctricas confiables para instalaciones industriales, servicios y activos operativos.",
      },
    ],
    strengthLabel: "Por qué SIEZA",
    strengthTitle: "Ejecución seria para clientes industriales que no pueden permitirse incertidumbre eléctrica.",
    strengthText:
      "SIEZA combina disciplina de ingeniería, experiencia de campo y soporte industrial práctico para resolver problemas eléctricos con impacto real al negocio.",
    metrics: [
      ["Confiable", "Ejecución enfocada en continuidad y entrega segura"],
      ["Industrial", "Soluciones pensadas para condiciones reales de planta"],
      ["Experiencia", "Respuesta técnica donde realmente ocurre el trabajo"],
      ["Integral", "Tableros, instalación, mantenimiento y soporte"],
    ],
    whyPoints: [
      "Ejecución confiable en sistemas industriales críticos",
      "Soluciones de nivel industrial con valor práctico en campo",
      "Experiencia técnica en ingeniería, mantenimiento y suministro",
      "Servicio integral desde tableros hasta soporte en sitio",
    ],
    projectsLabel: "Proyectos",
    projectsTitle: "Experiencia de proyecto alineada a demandas eléctricas industriales reales.",
    projects: [
      {
        type: "Tableros eléctricos",
        title: "Tableros de control y distribución industrial",
        text: "Fabricación y entrega de tableros eléctricos construidos para una operación más segura, limpia y confiable.",
      },
      {
        type: "Instalaciones industriales",
        title: "Paquetes de instalación eléctrica en planta",
        text: "Ejecución de instalaciones eléctricas que soportan ampliaciones, mejoras y continuidad operativa.",
      },
      {
        type: "Mantenimiento",
        title: "Mantenimiento, diagnóstico y soporte de recuperación",
        text: "Trabajo en sitio orientado a recuperar desempeño, reducir exposición a fallas y sostener continuidad en sistemas críticos.",
      },
    ],
    galleryLabel: "Galería de servicios",
    galleryTitle: "Sube evidencias de proyectos, trabajos en campo y servicios ejecutados.",
    galleryText:
      "Arrastra y suelta fotos de subestaciones, tableros, servicios de campo, pruebas o automatización para construir un portafolio visual directamente dentro del sitio.",
    galleryDrop: "Suelta las imágenes aquí",
    galleryBrowse: "o selecciona archivos",
    galleryHint: "PNG, JPG, WEBP. Vista previa local solo en esta sesión del navegador.",
    galleryEmpty: "Aún no hay imágenes cargadas.",
    ctaLabel: "Inicia la conversación",
    ctaTitle: "Impulsa tu operación con ingeniería eléctrica confiable",
    ctaText:
      "Contacta a SIEZA para tableros eléctricos, instalaciones industriales, mantenimiento, soporte de ingeniería y soluciones eléctricas construidas para la continuidad.",
    footerTitle: "Soluciones eléctricas de alta calidad para infraestructura industrial.",
    footerContact: "Contacto",
    footerFocus: "Enfoque principal",
    footerFocusItems: [
      "Tableros eléctricos y sistemas de potencia industrial",
      "Mantenimiento de campo, instalaciones y soporte de ingeniería",
      "Refacciones y continuidad eléctrica industrial",
    ],
  },
};

const capabilityIcons = [Bolt, Cable, Wrench, Gauge, TowerControl, Factory];
const sectorImages = [
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80",
];
const footerIcons = [TowerControl, Factory, Sparkles];
const aboutIcons = [BadgeCheck, HardHat, ShieldCheck];
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Blv.%20Enrique%20Carrola%20Antuna%201542%2C%20Col.%2020%20de%20Noviembre%20II%2C%20Durango%20C.P.%2034234";
const galleryStorageKey = "sieza-gallery-images";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("es");
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [sceneIndex, setSceneIndex] = useState(0);
  const t = content[language];
  const galleryOnly = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("view") === "gallery";
  const activeSectionScenes = sectionBackgrounds[activeSection] || sectionBackgrounds.hero;
  const activeScene = activeSectionScenes[sceneIndex % activeSectionScenes.length];
  const isDark = theme === "dark";

  useEffect(() => {
    if (galleryOnly) {
      setActiveSection("gallery");
      return undefined;
    }

    const sectionIds = ["hero", "about", "capabilities", "sectors", "strength", "projects", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-18% 0px -18% 0px",
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [galleryOnly]);

  useEffect(() => {
    setSceneIndex(0);
  }, [activeSection]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedImages = window.localStorage.getItem(galleryStorageKey);
    if (!storedImages) return;

    try {
      const parsedImages = JSON.parse(storedImages);
      if (Array.isArray(parsedImages)) {
        setGalleryImages(parsedImages);
      }
    } catch {
      window.localStorage.removeItem(galleryStorageKey);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(galleryStorageKey, JSON.stringify(galleryImages));
  }, [galleryImages]);

  useEffect(() => {
    setGalleryIndex((current) => {
      if (!galleryImages.length) return 0;
      return current >= galleryImages.length ? 0 : current;
    });
  }, [galleryImages]);

  const readFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });

  const addFiles = async (files) => {
    const validFiles = Array.from(files || []).filter((file) => file.type.startsWith("image/"));
    if (!validFiles.length) return;

    const next = (
      await Promise.all(
        validFiles.map(async (file) => ({
          id: `${file.name}-${file.size}-${file.lastModified}`,
          name: file.name,
          url: await readFileAsDataUrl(file),
        })),
      )
    ).filter(Boolean);

    if (!next.length) return;
    setGalleryImages((current) => [...next, ...current.filter((item) => !next.some((n) => n.id === item.id))]);
    setGalleryIndex(0);
  };

  const showPreviousGalleryImage = () => {
    setGalleryIndex((current) => {
      if (!galleryImages.length) return 0;
      return current === 0 ? galleryImages.length - 1 : current - 1;
    });
  };

  const showNextGalleryImage = () => {
    setGalleryIndex((current) => {
      if (!galleryImages.length) return 0;
      return (current + 1) % galleryImages.length;
    });
  };

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${isDark ? "text-white" : "text-slate-950"}`}>
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          key={`${activeSection}-${sceneIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, ${
              isDark
                ? "rgba(4,7,11,0.34) 0%, rgba(4,7,11,0.72) 56%, rgba(4,7,11,0.96) 100%"
                : "rgba(244,248,252,0.18) 0%, rgba(244,248,252,0.58) 50%, rgba(244,248,252,0.92) 100%"
            }), url('${activeScene.image}')`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,144,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,128,0,0.14),transparent_26%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
      </div>

      <div className="relative z-10">
      <header className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl ${isDark ? "border-white/10 bg-[#04070b]/72" : "border-slate-900/10 bg-[rgba(247,250,252,0.72)]"}`}>
        <div className="mx-auto max-w-[92rem] px-6 py-4 lg:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a href={galleryOnly ? "/" : "#hero"} className="flex items-center gap-4">
              <img
                src={isDark ? "/branding/logo_dark.png" : "/branding/logo_light.png"}
                alt="SIEZA"
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-slate-400">{t.brandTag}</p>
                <div className="mt-1 text-lg font-semibold tracking-[0.24em] text-white">SIEZA</div>
              </div>
            </a>

            {!galleryOnly && (
              <nav className="hidden items-center gap-8 md:flex">
              {t.nav.map((label, index) => (
                  <a
                    key={label}
                    href={index === 5 ? "?view=gallery" : ["#about", "#capabilities", "#sectors", "#strength", "#projects", "#gallery", "#contact"][index]}
                    target={index === 5 ? "_blank" : undefined}
                    rel={index === 5 ? "noreferrer" : undefined}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {label}
                  </a>
              ))}
              </nav>
            )}
          </div>

          <div className={`mt-3 flex items-center justify-end gap-2 border-t pt-3 ${isDark ? "border-white/8" : "border-slate-900/10"}`}>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-0.5 text-[10px]">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-2.5 py-1 transition ${language === "en" ? "bg-white text-slate-950" : "text-slate-300"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`rounded-full px-2.5 py-1 transition ${language === "es" ? "bg-white text-slate-950" : "text-slate-300"}`}
              >
                ES
              </button>
            </div>
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10"
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href={galleryOnly ? "/" : "#contact"}
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-200 transition hover:bg-sky-400/16"
            >
              {galleryOnly ? "Home" : t.quote}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        {galleryOnly ? (
          <section id="gallery" className="mx-auto max-w-[92rem] px-6 pb-24 pt-44 lg:px-8 xl:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between gap-4"
            >
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{t.galleryLabel}</h1>
              <label className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/6 p-3 text-white transition hover:border-sky-300/40 hover:bg-sky-400/12">
                <Plus className="h-5 w-5" />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(event) => addFiles(event.target.files)}
                />
              </label>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-12"
            >
              {galleryImages.length ? (
                <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.04]">
                  <div className="relative aspect-[16/9] w-full">
                    {galleryImages.map((image, index) => (
                      <img
                        key={image.id}
                        src={image.url}
                        alt=""
                        className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                          index === galleryIndex ? "opacity-100" : "pointer-events-none opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                  {galleryImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousGalleryImage}
                        className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/55"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextGalleryImage}
                        className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/55"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                  {galleryImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/12 bg-black/35 px-3 py-2 backdrop-blur-md">
                      {galleryImages.map((image, index) => (
                        <button
                          key={`${image.id}-dot`}
                          type="button"
                          onClick={() => setGalleryIndex(index)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            index === galleryIndex ? "bg-white" : "bg-white/35 hover:bg-white/60"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 text-center text-sm text-slate-400">
                  {t.galleryEmpty}
                </div>
              )}
            </motion.div>
          </section>
        ) : (
          <>
        <section
          id="hero"
          className="relative flex min-h-screen items-end overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.14),transparent_20%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,6,10,0.5),rgba(3,6,10,0.08),rgba(3,6,10,0.62))]" />
          <div className="relative mx-auto grid max-w-[92rem] gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 xl:px-10">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
                <ShieldCheck className="h-4 w-4 text-sky-300" />
                {t.badge}
              </div>

              <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-tight text-white md:text-6xl xl:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl">{t.heroText}</p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:translate-y-[-1px] ${
                    isDark
                      ? "bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950"
                      : "border border-sky-300/30 bg-sky-400/10 text-sky-800 hover:bg-sky-400/16"
                  }`}
                >
                  {t.contactUs}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t.viewExperience}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="grid gap-4 self-end"
            >
              {t.highlights.map(([title, text]) => (
                <div key={title} className="rounded-[1.8rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
              <motion.div
                key={`${language}-${sceneIndex}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="rounded-[1.8rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md"
              >
                <p className="text-sm font-semibold text-white">{activeScene.label[language]}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{activeScene.title[language]}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-8 xl:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">{t.aboutLabel}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.aboutTitle}</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{t.aboutText}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="grid gap-4"
            >
              {t.aboutPoints.map((point, index) => {
                const Icon = aboutIcons[index];
                return (
                  <div key={point} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <Icon className="h-5 w-5 text-orange-300" />
                      </div>
                      <p className="text-base leading-7 text-slate-300">{point}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-8 xl:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">{t.capabilitiesLabel}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.capabilitiesTitle}</h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.capabilities.map((item, index) => {
              const Icon = capabilityIcons[index];
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,28,0.92),rgba(7,10,14,0.98))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.32)]"
                >
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Icon className="h-6 w-6 text-orange-300" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="sectors" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-8 xl:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">{t.sectorsLabel}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.sectorsTitle}</h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.sectors.map((sector, index) => (
              <motion.article
                key={sector.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10"
              >
                <div
                  className="h-[30rem] bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(4,8,14,0.10) 0%, rgba(4,8,14,0.68) 60%, rgba(4,8,14,0.96) 100%), url('${sectorImages[index]}')`,
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-7 on-image-text">
                  <h3 className="text-2xl font-semibold text-white">{sector.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">{sector.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="strength" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-8 xl:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">{t.strengthLabel}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.strengthTitle}</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{t.strengthText}</p>
              <div className="mt-8 space-y-4">
                {t.whyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-sky-300" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {t.metrics.map(([value, label]) => (
                <div key={label} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7">
                  <div className="text-4xl font-semibold text-white">{value}</div>
                  <div className="mt-3 text-sm leading-6 text-slate-300">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-8 xl:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">{t.projectsLabel}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.projectsTitle}</h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,28,0.94),rgba(7,9,13,0.98))] p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">{project.type}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-8 xl:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(7,14,22,0.96),rgba(5,7,10,0.98))] p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.14),transparent_22%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">{t.ctaLabel}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">{t.ctaTitle}</h2>
                <p className="mt-5 text-base leading-8 text-slate-300">{t.ctaText}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:juan.alvarez@siezasa.com"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:translate-y-[-1px] ${
                    isDark
                      ? "bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950"
                      : "border border-sky-300/30 bg-sky-400/10 text-sky-800 hover:bg-sky-400/16"
                  }`}
                >
                  {t.contactUs}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
          </>
        )}
      </main>

      <footer className={`border-t ${isDark ? "border-white/10 bg-black/30" : "border-slate-900/10 bg-[rgba(248,251,253,0.55)]"}`}>
        <div className="mx-auto grid max-w-[92rem] gap-8 px-6 py-14 lg:grid-cols-[1fr_0.9fr] lg:px-8 xl:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">SIEZA</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">{t.footerTitle}</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">{t.footerContact}</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-sky-300" />
                  juan.alvarez@siezasa.com
                </p>
                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-sky-300" />
                  +52 735 108 0882
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-sky-300" />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    Blv. Enrique Carrola Antuna 1542, Col. 20 de Noviembre II, Durango C.P. 34234
                  </a>
                </p>
                <p className="flex items-start gap-3">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-sky-300" />
                  <a
                    href="https://www.facebook.com/p/Siezasa-100063526303993/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    Facebook
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">{t.footerFocus}</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                {t.footerFocusItems.map((item, index) => {
                  const Icon = footerIcons[index];
                  return (
                    <p key={item} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-4 w-4 text-orange-300" />
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {!galleryOnly && (
        <a
          href="#hero"
          className={`fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-sky-300/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200 shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-sky-400/16 ${isDark ? "bg-[#071019]/88" : "bg-[rgba(248,251,253,0.88)] text-sky-700"}`}
        >
          <ChevronUp className="h-4 w-4" />
          Top
        </a>
      )}
      </div>
    </div>
  );
}
