import Image from "next/image";
import { HeroBackground } from "@/components/background/HeroBackground";
import { ContactForm } from "@/components/landing/ContactForm";
import { Header } from "@/components/landing/Header";

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library";
const productDescription =
  "EXPERIENCE SMARTER TEACHING AND SEAMLESS COLLABORATION WITH MIEUX INTERACTIVE FLAT PANELS. DESIGNED FOR MODERN CLASSROOMS AND MEETING SPACES, IT DELIVERS CRISP VISUALS, SMOOTH MULTI-TOUCH INTERACTION, AND POWERFUL PERFORMANCE—MAKING PRESENTATIONS ENGAGING AND LEARNING TRULY INTERACTIVE.";
const products = [
  <>
    INTERACTIVE
    <br />
    FLAT PANEL
  </>,
  <>
    LED
    <br />
    VIDEO WALL
  </>,
  <>
    DIGITAL
    <br />
    STANDEE
  </>,
  <>
    DIGITAL
    <br />
    KIOSK
  </>,
];
const advantages = [
  <>
    INNOVATIVE DISPLAY <strong>TECHNOLOGY</strong>
  </>,
  <>
    SUPERIOR VISUAL <strong>QUALITY</strong>
  </>,
  <>
    SOLUTIONS FOR EVERY <strong>INDUSTRY</strong>
  </>,
  <>
    EXPERT <strong>INSTALLATION &amp; TRAINING</strong>
  </>,
  <>
    DEDICATED PAN-INDIA <strong>SUPPORT</strong>
  </>,
];

function Grid() {
  return (
    <div className="grid-lines" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}
function Crosses({
  bottom = false,
  count = 5,
}: {
  bottom?: boolean;
  count?: number;
}) {
  return (
    <div
      className={`crosses ${bottom ? "crosses-bottom" : ""}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>+</span>
      ))}
    </div>
  );
}
function Label({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label mono">
      <span className="label-dot" />
      <span>{number}</span>
      <span>{children}</span>
    </p>
  );
}
function Reviews({ light = false }: { light?: boolean }) {
  return (
    <div className={`reviews ${light ? "reviews-light" : ""}`}>
      <Image
        src="/images/reviewers.png"
          width={106}
          height={33}
        alt="Mieux customer reviewers"
      />
      <p className="mono">
        <span>
          <span className="review-stars" aria-label="5 stars">
            ★★★★★
          </span>{" "}
          4.9/5
        </span>
        <br />
        <span>
          BASED ON 230 <strong>VERIFIED REVIEWS</strong>
        </span>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <Header />
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <HeroBackground />
            <div className="hero-content">
              <Reviews light />
              <h1 id="hero-title">
                <span>SMART DISPLAY</span>
                <span>SOLUTIONS</span>
              </h1>
              <p className="hero-subtitle">FOR YOUR BUSINESS</p>
              <p className="hero-description">
                At Mieux Display, we create advanced display solutions that
                enhance learning,
                <br className="desktop-break" /> collaboration, and
                engagement—building a smarter next generation across every
                <br className="desktop-break" /> sector.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  SCHEDULE A FREE ASSESSMENT
                </a>
                <a className="button button-light" href="#products">
                  EXPLORE OUR PRODUCT RANGE
                </a>
              </div>
            </div>
          </section>

          <div className="dark-section">
            <section
              className="about grid-section"
              id="about"
              aria-labelledby="about-title"
            >
              <Grid />
              <Crosses />
              <aside className="video-card">
                <Crosses count={2} />
                <div className="video-card-meta mono">
                  <span>HOW MIEUX WORKS</span>
                  <span>◉ 1:30</span>
                </div>
                <h3>DISPLAY SOLUTIONS FOR YOUR NEEDS</h3>
                <div className="video-preview">
                  <a
                    className="video-link"
                    href="https://www.youtube.com/@mieuxdisplayprivatelimited"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch Mieux display demonstrations on YouTube (opens a new tab)"
                  >
                    <Image
                      src="/images/how-mieux-works.png"
                      width={228}
                      height={131}
                      alt="Mieux display demonstration at an exhibition"
                      sizes="(max-width: 700px) 85vw, 24vw"
                    />
                    <span className="video-link-note">WATCH ON YOUTUBE ↗</span>
                  </a>
                  <Crosses bottom count={2} />
                </div>
                <p className="mono video-description">
                  LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND
                  TYPESETTING INDUSTRY.{" "}
                  <strong>
                    LOREM IPSUM HAS BEEN THE INDUSTRY’S STANDARD DUMMY TEXT EVER
                    SINCE 1966.
                  </strong>
                </p>
              </aside>
              <div className="about-copy">
                <Label number="01">WHO WE ARE</Label>
                <h2 id="about-title">
                  AT MIEUX DISPLAY, WE
                  <br />
                  CREATE ADVANCED
                  <br />
                  DISPLAY SOLUTIONS
                  <br />
                  THAT ENHANCE
                  <br />
                  LEARNING,
                  <br />
                  COLLABORATION,
                  <br />
                  AND ENGAGEMENT—
                  <br />
                  BUILDING A SMARTER
                  <br />
                  NEXT GENERATION
                  <br />
                  ACROSS EVERY
                  <br />
                  SECTOR.
                </h2>
                <div className="brand-signature">
                  <span aria-hidden="true" />
                  <p className="mono">
                    MIEUX
                    <br />
                    <span>YOUR DISPLAY PARTNER</span>
                  </p>
                </div>
              </div>
            </section>

            <section
              className="products grid-section"
              id="products"
              aria-labelledby="products-title"
            >
              <Grid />
              <Crosses />
              <div className="products-heading">
                <div>
                  <Label number="02">PRODUCTS</Label>
                  <h2 id="products-title">
                    <span>
                      DELIVERING SMARTER
                      <br />
                      DISPLAYS FOR
                    </span>
                    <br />
                    MORE CONNECTED
                    <br />
                    EXPERIENCES
                  </h2>
                </div>
                <div className="products-intro">
                  <p>{lorem}</p>
                  <a href="#contact" className="button button-primary">
                    ENQUIRE
                  </a>
                </div>
              </div>
              <div className="product-list">
                {products.map((name, index) => (
                  <article className="product-row" key={index}>
                    <Crosses />
                    <span className="product-index">/0{index + 1}</span>
                    <h3>{name}</h3>
                    <div className="product-swatch" aria-hidden="true" />
                    <div className="product-details mono">
                      <p>{productDescription}</p>
                      <p className="product-industries">
                        # EDUCATION | # CORPORATE
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="products-bottom">
                <Crosses />
              </div>
            </section>
          </div>

          <section
            className="advantages grid-section"
            id="why-mieux"
            aria-labelledby="advantages-title"
          >
            <Grid />
            <div className="advantages-title">
              <Label number="03">WHY US?</Label>
              <h2 id="advantages-title">
                <span>
                  WHY
                  <br />
                  COMPANIES
                </span>
                <br />
                CHOOSE
                <br />
                MIEUX <sup>®</sup>
              </h2>
            </div>
            <div className="advantages-list">
              <h3>
                OUR ADVANTAGES <span>INCLUDE:</span>
              </h3>
              <ol>
                {advantages.map((text, index) => (
                  <li className="mono" key={index}>
                    <span className="advantage-number">0{index + 1}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            className="feature grid-section"
            aria-labelledby="feature-title"
          >
            <Grid />
            <div className="feature-stats">
              {["3×", "99%", "+28%"].map((value) => (
                <div key={value}>
                  <strong>{value}</strong>
                  <span className="mono">
                    FASTER
                    <br />
                    APPROVALS
                  </span>
                </div>
              ))}
            </div>
            <div className="feature-copy">
              <Label number="04">LOREM IPSUM</Label>
              <h2 id="feature-title">
                LOREM IPSUM IS
                <br />
                SIMPLY DUMMY TEXT
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                <br className="desktop-break" /> typesetting industry. Lorem
                Ipsum has been the industry’.
              </p>
            </div>
            <div className="feature-glow" aria-hidden="true" />
            <Image
              className="led-wall"
              src="/images/led-wall.png"
              width={2104}
              height={2104}
              alt="Front and rear views of the Mieux modular LED display"
              sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1440px) 37vw, 526px"
            />
          </section>

          <section
            className="case-study grid-section"
            id="case-study"
            aria-labelledby="case-title"
          >
            <Grid />
            <div className="case-copy">
              <div className="case-intro">
                <Label number="05">RESULTS</Label>
                <h2 id="case-title">CASE STUDY</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  <br className="desktop-break" /> industry. Lorem Ipsum has
                  been the industry’.
                </p>
              </div>
              <dl className="case-facts mono">
                <div>
                  <dt>DATE</dt>
                  <dd>OCT 2027</dd>
                </div>
                <div>
                  <dt>INDUSTRY</dt>
                  <dd>CORPORATE</dd>
                </div>
                <div>
                  <dt>CHALLENGE</dt>
                  <dd>
                    OUTDATED DISPLAY SYSTEMS LIMITED COLLABORATION, ENGAGEMENT,
                    AND SEAMLESS CONTENT SHARING.
                  </dd>
                </div>
              </dl>
              <h3>
                MIEUX&apos;S SMART DISPLAY SOLUTIONS ENHANCED VISUAL CLARITY,
                SIMPLIFIED COLLABORATION, AND CREATED MORE INTERACTIVE
                EXPERIENCES.
              </h3>
            </div>
            <div className="case-art">
              <Image
                className="case-image"
                src="/images/case-study.png"
                fill
                alt="A team collaborating around a Mieux interactive display in a meeting space"
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>
            <Crosses />
          </section>

          <section
            className="showcase grid-section"
            aria-labelledby="showcase-title"
          >
            <Grid />
            <Crosses />
            <Label number="06">FEATURED</Label>
            <h2 id="showcase-title">
              LOREM IPSUM IS
              <br />
              SIMPLY DUMMY TEXT
            </h2>
            <div className="showcase-glow" aria-hidden="true" />
            <Image
              className="showcase-panel"
              src="/images/interactive-panel.png"
              width={431}
              height={289}
              alt="Mieux interactive flat panel showing a digital whiteboard"
              sizes="(max-width: 700px) 90vw, 60vw"
            />
            <Crosses bottom />
          </section>

          <section
            className="impact grid-section"
            aria-labelledby="impact-title"
          >
            <Grid />
            <div className="impact-intro">
              <Label number="07">OUR IMPACT</Label>
              <h2 id="impact-title">
                <span>
                  POWERFUL
                  <br />
                  TECHNOLOGY.
                  <br />
                  EXCEPTIONAL
                </span>
                <br />
                SUPPORT.
              </h2>
              <Reviews />
            </div>
            {[0, 1, 2].map((index) => (
              <div className="impact-column" key={index}>
                <p className="impact-strip mono">
                  NATIONWIDE PRESENCE <span aria-hidden="true">+</span>
                </p>
                <p className="impact-description">
                  50+ offices across India,
                  <br className="desktop-break" /> ensuring reliable service
                  <br className="desktop-break" /> and support nationwide.
                </p>
                <div className="impact-stat">
                  <strong>/50+</strong>
                  <span className="mono">
                    OFFICES ACROSS
                    <br />
                    INDIA
                  </span>
                </div>
              </div>
            ))}
            <Crosses bottom />
          </section>

          <section
            className="contact grid-section"
            id="contact"
            aria-labelledby="contact-title"
          >
            <Grid />
            <div className="contact-copy">
              <Label number="07">GET IN TOUCH</Label>
              <h2 id="contact-title">
                LET&apos;S FIND THE
                <br />
                RIGHT DISPLAY
                <br />
                SOLUTION FOR
                <br />
                YOU
              </h2>
              <p className="mono">
                SHARE YOUR REQUIREMENTS WITH US, AND OUR TEAM WILL HELP YOU
                DISCOVER THE PERFECT DISPLAY SOLUTION FOR YOUR NEEDS.
              </p>
            </div>
            <Image
              className="contact-specialist"
              src="/images/display-specialist.png"
              width={358}
              height={451}
              alt="A Mieux display specialist wearing a headset, ready to help"
              sizes="(max-width: 700px) 60vw, 36vw"
            />
            <ContactForm />
          </section>
        </main>

        <div className="footer-spacer grid-section" aria-hidden="true">
          <Grid />
        </div>
        <footer className="footer grid-section">
          <Grid />
          <Crosses />
          <div className="footer-wordmark" aria-hidden="true">
            Mieux
          </div>
          <nav aria-label="Social media" className="social-links mono">
            <a
              href="https://x.com/mieuxdisplaypv1"
              target="_blank"
              rel="noopener noreferrer"
            >
              //X ↗
            </a>
            <a
              href="https://www.facebook.com/p/Mieux-Display-100067572878458/"
              target="_blank"
              rel="noopener noreferrer"
            >
              //FACEBOOK ↗
            </a>
            <a
              href="https://www.linkedin.com/search/results/companies/?keywords=Mieux%20Display"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find Mieux Display on LinkedIn (opens a new tab)"
            >
              //LINKEDIN ↗
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbBtwws4yltPUnof8x2u"
              target="_blank"
              rel="noopener noreferrer"
            >
              //WHATSAPP ↗
            </a>
          </nav>
          <div className="footer-bottom mono">
            <p>© 2026 BY MIEUX DISPLAY.</p>
            <nav aria-label="Footer navigation">
              <a href="#about">//ABOUT US</a>
              <a href="#products">//OUR PRODUCTS</a>
            </nav>
          </div>
          <Crosses bottom />
        </footer>
      </div>
    </>
  );
}
