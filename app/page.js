import Image from "next/image";
import Reveal from "./reveal";
import HeroTextRotator from "./hero-text-rotator";
import RotatingMedia from "./rotating-media";

const heroImages = [
  {
    src: "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?cs=srgb&dl=pexels-cottonbro-6804068.jpg&fm=jpg",
    alt: "Equipo de desarrollo colaborando"
  },
  {
    src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg",
    alt: "Equipo revisando un proyecto digital"
  },
  {
    src: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?cs=srgb&dl=pexels-christina-morillo-1181359.jpg&fm=jpg",
    alt: "Desarrolladores trabajando en escritorio"
  }
];

const ecommerceImages = [
  {
    src: "https://images.pexels.com/photos/36765664/pexels-photo-36765664.jpeg?cs=srgb&dl=pexels-silverkblack-36765664.jpg&fm=jpg",
    alt: "Negocio usando laptop para ventas y gestion"
  },
  {
    src: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?cs=srgb&dl=pexels-goumbik-577210.jpg&fm=jpg",
    alt: "Panel de analitica y reportes"
  }
];

const showcaseImages = [
  {
    src: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?cs=srgb&dl=pexels-goumbik-577210.jpg&fm=jpg",
    alt: "Panel de analitica y rendimiento"
  },
  {
    src: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?cs=srgb&dl=pexels-pixabay-265087.jpg&fm=jpg",
    alt: "Monitores con dashboard y metricas"
  }
];

const services = [
  {
    icon: "globe",
    kicker: "Presencia digital",
    title: "Paginas web empresariales",
    description: "Sitios profesionales para vender mejor y dar confianza."
  },
  {
    icon: "layers",
    kicker: "Operacion interna",
    title: "Software a la medida",
    description: "Inventario, facturacion, reportes y flujos internos."
  },
  {
    icon: "cart",
    kicker: "Ventas online",
    title: "Tiendas en linea",
    description: "Catalogo, pagos y pedidos para vender en linea."
  },
  {
    icon: "shield",
    kicker: "Acompanamiento",
    title: "Soporte continuo",
    description: "Ajustes, monitoreo y acompanamiento tecnico mensual."
  }
];

const benefits = [
  { icon: "target", text: "Soluciones ajustadas a tu operacion real" },
  { icon: "wallet", text: "Inversion clara para PYMES y emprendimientos" },
  { icon: "users", text: "Capacitacion practica para tu equipo" },
  { icon: "cloud", text: "Infraestructura moderna y escalable" },
  { icon: "support", text: "Acompanamiento tecnico antes y despues de entrega" }
];

const process = [
  {
    step: "01",
    icon: "search",
    kicker: "Descubrimiento",
    title: "Levantamiento",
    text: "Entendemos negocio, problema y objetivo."
  },
  {
    step: "02",
    icon: "file",
    kicker: "Definicion",
    title: "Propuesta",
    text: "Definimos alcance, tiempo y costo."
  },
  {
    step: "03",
    icon: "code",
    kicker: "Construccion",
    title: "Desarrollo",
    text: "Construimos interfaz, paneles y automatizaciones."
  },
  {
    step: "04",
    icon: "rocket",
    kicker: "Salida a produccion",
    title: "Lanzamiento",
    text: "Publicamos, capacitamos y damos soporte."
  }
];

const plans = [
  {
    icon: "spark",
    name: "Basica",
    price: "USD 800 - 1,200",
    items: ["Web empresarial", "Catalogo digital", "Facturacion basica"]
  },
  {
    icon: "growth",
    name: "Intermedia",
    price: "USD 1,200 - 2,000",
    items: ["Gestion de usuarios", "Reportes", "Flujos a medida"]
  },
  {
    icon: "crown",
    name: "Avanzada",
    price: "USD 2,000 - 4,000+",
    items: ["E-commerce", "CRM", "Pagos e integraciones"]
  }
];

const stats = [
  { icon: "wallet", value: "40 USD", label: "soporte mensual de referencia" },
  { icon: "spark", value: "4 fases", label: "para salir de idea a producto" },
  { icon: "target", value: "100%", label: "enfoque personalizado por cliente" }
];

const heroMessages = [
  "sitios que venden mejor.",
  "paginas rapidas y profesionales.",
  "experiencias claras para tus clientes.",
  "webs listas para crecer contigo."
];

function Icon({ name, className = "" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  const paths = {
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    layers: (
      <>
        <path d="m12 4 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </>
    ),
    cart: (
      <>
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
        <path d="M3 5h2l2.2 9h10.4l2-7H6.2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.4 2.7 8.1 7 10 4.3-1.9 7-5.6 7-10V6l-7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.7" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 4v2" />
        <path d="M20 12h-2" />
        <path d="M12 20v-2" />
        <path d="M4 12h2" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v1H6.5A2.5 2.5 0 0 0 4 10.5v-3Z" />
        <path d="M4 10.5A2.5 2.5 0 0 1 6.5 8H20v8a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 15.5v-5Z" />
        <circle cx="16" cy="13" r="1" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-1.2A3.8 3.8 0 0 0 12.2 16H8.8A3.8 3.8 0 0 0 5 19.8V21" />
        <circle cx="10.5" cy="10" r="3" />
        <path d="M19 21v-1a3.2 3.2 0 0 0-2.4-3.1" />
        <path d="M15.8 7.1a3 3 0 0 1 0 5.8" />
      </>
    ),
    cloud: (
      <>
        <path d="M7.5 18a4.5 4.5 0 1 1 .8-8.9 5.5 5.5 0 0 1 10.2 2.4A3.5 3.5 0 1 1 18 18Z" />
      </>
    ),
    support: (
      <>
        <path d="M5 12a7 7 0 1 1 14 0" />
        <path d="M5.5 15H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1.5" />
        <path d="M18.5 15H20a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1.5" />
        <path d="M9.5 18.5A3.8 3.8 0 0 0 12 19h2" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.2-4.2" />
      </>
    ),
    file: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </>
    ),
    rocket: (
      <>
        <path d="M5 19c2.5-.5 4.5-2 6-4.5l2.5-2.5A9.2 9.2 0 0 0 19 5l-1.8.3a9.2 9.2 0 0 0-7 5.5L7.7 13.3C5.2 14.8 3.7 16.8 3 19Z" />
        <path d="M13 11 17 7" />
        <path d="M6 18c-.3-1.4.1-2.8 1.1-3.8" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      </>
    ),
    growth: (
      <>
        <path d="M4 18h16" />
        <path d="M7 15V9" />
        <path d="M12 15V6" />
        <path d="M17 15v-4" />
      </>
    ),
    crown: (
      <>
        <path d="m4 18 1.8-9 5 4 3.2-6 3.2 6 5-4 1.8 9Z" />
        <path d="M4 18h18" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    message: (
      <>
        <path d="M6 18.5A8.5 8.5 0 1 1 18 17l1 4-4-1a8.5 8.5 0 0 1-9 0Z" />
      </>
    )
  };

  return <svg {...commonProps}>{paths[name] ?? paths.spark}</svg>;
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-media">
          <RotatingMedia items={heroImages} sizes="100vw" priority />
        </div>
        <div className="hero-overlay" />
        <header className="topbar container">
          <div className="brand-lockup">
            <Image
              src="/assets/logo-innoweb.png"
              alt="INNOWEB"
              width={52}
              height={52}
              className="brand-icon"
            />
            <div>
              <p className="brand-name">INNOWEB</p>
              <p className="brand-copy">Soluciones digitales a tu medida</p>
            </div>
          </div>

          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#planes">Planes</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Desarrollo web</span>
            <h1 className="hero-title">Paginas web para hacer crecer tu negocio.</h1>
            <p className="hero-text">
              Soluciones claras para vender mas, ordenar procesos y crecer con soporte real.
            </p>
            <div className="hero-rotating-proof" aria-label="Mensajes clave de INNOWEB">
              <span className="hero-proof-label">INNOWEB crea</span>
              <span className="hero-proof-value">
                <HeroTextRotator items={heroMessages} />
              </span>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">
                <Icon name="mail" className="button-icon" />
                Solicitar propuesta
              </a>
              <a className="button button-secondary" href="#planes">
                <Icon name="arrow" className="button-icon" />
                Ver rangos de inversion
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <span className="stat-icon-wrap">
                    <Icon name={stat.icon} className="stat-icon" />
                  </span>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-scroll-hint" aria-hidden="true">
              <span className="hero-scroll-line" />
              <span className="hero-scroll-text">Desliza para explorar</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
              <p className="mini-label">INNOWEB</p>
              <h2>Digitalizacion simple, util y hecha para tu operacion.</h2>
              <ul className="check-list">
                <li>Paginas web empresariales</li>
                <li>Inventario, facturacion y reportes</li>
                <li>E-commerce e integraciones</li>
                <li>Capacitacion y soporte continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="section section-light services-section">
        <Reveal className="container section-head" distance={24}>
          <span className="eyebrow eyebrow-dark">Servicios</span>
          <h2>Construimos segun necesidad real de negocio.</h2>
          <p>No usamos plantillas genericas. Definimos solucion, alcance y objetivo.</p>
        </Reveal>

        <div className="container services-grid">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              as="article"
              className="service-card"
              delay={index * 90}
              distance={30}
            >
              <div className="service-topline">
                <span className="service-icon-wrap">
                  <Icon name={service.icon} className="service-icon" />
                </span>
                <div className="service-copy">
                  <span className="service-kicker">{service.kicker}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
              </div>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-band">
          <Reveal className="split-visual" distance={36}>
            <RotatingMedia items={ecommerceImages} sizes="(max-width: 1024px) 100vw, 50vw" />
          </Reveal>

          <Reveal className="story-copy" delay={100} distance={36}>
            <span className="eyebrow">Por que INNOWEB</span>
            <h2>Menos improvisacion. Mas control.</h2>
            <p className="story-lead">
              Ordena ventas, operacion y seguimiento con una solucion hecha para tu negocio.
            </p>
            <div className="benefits-list">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="benefit-row">
                  <span className="benefit-icon-wrap">
                    <Icon name={benefit.icon} className="benefit-icon" />
                  </span>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="proceso" className="section section-light process-section">
        <Reveal className="container section-head" distance={24}>
          <span className="eyebrow eyebrow-dark">Proceso</span>
          <h2>Proceso claro de inicio a lanzamiento.</h2>
          <p>Analizamos, proponemos, desarrollamos y acompanamos.</p>
        </Reveal>

        <div className="container process-grid">
          {process.map((item, index) => (
            <Reveal
              key={item.step}
              as="article"
              className="process-item"
              delay={index * 90}
              distance={30}
            >
              <div className="process-topline">
                <div className="process-meta">
                  <span className="process-step">{item.step}</span>
                  <span className="process-kicker">{item.kicker}</span>
                </div>
                <span className="process-icon-wrap">
                  <Icon name={item.icon} className="process-icon" />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="planes" className="section pricing-section">
        <div className="container pricing-layout">
          <Reveal className="pricing-copy" distance={28}>
            <div className="section-brand">
              <Image
                src="/assets/logo-innoweb.png"
                alt="INNOWEB"
                width={56}
                height={56}
                className="section-brand-icon"
              />
              <div>
                <p className="section-brand-name">INNOWEB</p>
                <p className="section-brand-copy">Soluciones digitales a tu medida</p>
              </div>
            </div>
            <span className="eyebrow">Rangos de referencia</span>
            <h2>Planes segun alcance real.</h2>
            <p>Costo final segun modulos, integraciones y nivel de personalizacion.</p>
            <div className="support-note">
              <strong>Soporte:</strong> referencia de <span>USD 40 / mes</span> para ajustes,
              respaldo y acompanamiento remoto.
            </div>
          </Reveal>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <Reveal
                key={plan.name}
                as="article"
                className="price-card"
                delay={index * 110}
                distance={30}
              >
                <div className="price-topline">
                  <span className="price-icon-wrap">
                    <Icon name={plan.icon} className="price-icon" />
                  </span>
                  <p className="price-name">{plan.name}</p>
                </div>
                <h3>{plan.price}</h3>
                <div className="price-divider" />
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>
                      <Icon name="spark" className="price-list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container showcase-grid">
          <Reveal className="showcase-image" distance={36}>
            <RotatingMedia items={showcaseImages} sizes="(max-width: 1024px) 100vw, 50vw" />
          </Reveal>

          <Reveal className="showcase-copy" delay={100} distance={36}>
            <span className="eyebrow eyebrow-dark">Enfoque</span>
            <h2>Digitalizacion aterrizada a negocio real.</h2>
            <p>
              Sitio web, sistema interno o tienda en linea: mismo criterio, resolver problema
              real con una solucion simple y escalable.
            </p>
            <a className="button button-primary" href="#contacto">
              <Icon name="message" className="button-icon" />
              Hablemos de tu proyecto
            </a>
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <Reveal className="container contact-band" distance={28}>
          <div>
            <div className="section-brand section-brand-contact">
              <Image
                src="/assets/logo-innoweb.png"
                alt="INNOWEB"
                width={64}
                height={64}
                className="section-brand-icon"
              />
              <div>
                <p className="section-brand-name">INNOWEB</p>
                <p className="section-brand-copy">Software y paginas web a la medida</p>
              </div>
            </div>
            <span className="eyebrow">Contacto</span>
            <h2>Listo para cotizar tu proyecto.</h2>
            <p>
              Cuentanos si necesitas web, inventario, facturacion, ecommerce o sistema interno.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:contacto@innoweb.dev">
              <Icon name="mail" className="button-icon" />
              contacto@innoweb.dev
            </a>
            <a className="button button-secondary" href="https://wa.me/50500000000">
              <Icon name="message" className="button-icon" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
