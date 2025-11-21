import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero / Primary Logo */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>ITAFCOUTURE</span>
          </div>
          <p className={styles.tagline}>Digital Fashion Maison — Couture-Grade Patterns & Limited Edition Garments</p>
        </div>
      </section>

      {/* Monogram */}
      <section className={`${styles.section} ${styles.monogramSection}`}>
        <h2 className={styles.sectionTitle}>Monogram</h2>
        <div className={styles.monogramContainer}>
          <div className={styles.monogram}>
            <svg viewBox="0 0 200 200" className={styles.monogramSvg}>
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#C9A963', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#B8984E', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              {/* I */}
              <rect x="60" y="50" width="3" height="100" fill="url(#goldGradient)" />
              {/* C */}
              <path d="M 120 70 Q 105 50, 85 50 Q 70 50, 70 70 L 70 130 Q 70 150, 85 150 Q 105 150, 120 130"
                    stroke="url(#goldGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="square"/>
              {/* Outer frame */}
              <rect x="20" y="20" width="160" height="160" stroke="#C9A963" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
          <div className={styles.monogramVariants}>
            <div className={styles.monogramSmall}>
              <span className={styles.monogramText}>IC</span>
            </div>
            <div className={`${styles.monogramSmall} ${styles.monogramDark}`}>
              <span className={styles.monogramText}>IC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className={`${styles.section} ${styles.colorSection}`}>
        <h2 className={styles.sectionTitle}>Color Palette</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.pureWhite}`}></div>
            <div className={styles.colorInfo}>
              <h3>Pure White</h3>
              <p>#FFFFFF</p>
              <span className={styles.colorUsage}>Primary Background</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.inkBlack}`}></div>
            <div className={styles.colorInfo}>
              <h3>Ink Black</h3>
              <p>#0A0A0A</p>
              <span className={styles.colorUsage}>Primary Text</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.softGold}`}></div>
            <div className={styles.colorInfo}>
              <h3>Soft Gold</h3>
              <p>#C9A963</p>
              <span className={styles.colorUsage}>Accent · Luxury Detail</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.deepCharcoal}`}></div>
            <div className={styles.colorInfo}>
              <h3>Deep Charcoal</h3>
              <p>#2C2C2C</p>
              <span className={styles.colorUsage}>Secondary Text</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.warmGray}`}></div>
            <div className={styles.colorInfo}>
              <h3>Warm Gray</h3>
              <p>#8B8B8B</p>
              <span className={styles.colorUsage}>Supporting Text</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.technicalSilver}`}></div>
            <div className={styles.colorInfo}>
              <h3>Technical Silver</h3>
              <p>#E8E8E8</p>
              <span className={styles.colorUsage}>Borders · Dividers</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.offWhite}`}></div>
            <div className={styles.colorInfo}>
              <h3>Off White</h3>
              <p>#F8F8F8</p>
              <span className={styles.colorUsage}>Secondary Background</span>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className={`${styles.section} ${styles.typoSection}`}>
        <h2 className={styles.sectionTitle}>Typography System</h2>
        <div className={styles.typoGrid}>
          <div className={styles.typoCard}>
            <h3 className={styles.typoLabel}>Primary Serif — Cormorant Garamond</h3>
            <div className={styles.typoSample}>
              <p className={styles.serifDisplay}>Couture Excellence</p>
              <p className={styles.serifTitle}>Editorial Luxury Fashion</p>
              <p className={styles.serifBody}>The intersection of digital precision and haute couture craftsmanship defines our approach to modern fashion design.</p>
            </div>
            <div className={styles.typoWeights}>
              <span className={styles.weight300}>Light 300</span>
              <span className={styles.weight400}>Regular 400</span>
              <span className={styles.weight600}>Semibold 600</span>
            </div>
          </div>
          <div className={styles.typoCard}>
            <h3 className={styles.typoLabel}>Primary Sans — Inter</h3>
            <div className={styles.typoSample}>
              <p className={styles.sansDisplay}>TECHNICAL PRECISION</p>
              <p className={styles.sansTitle}>Modern Interface Design</p>
              <p className={styles.sansBody}>Clean, minimal typography for body copy, technical specifications, and digital interfaces. Perfect readability across all platforms.</p>
            </div>
            <div className={styles.typoWeights}>
              <span className={styles.weightSans200}>Extralight 200</span>
              <span className={styles.weightSans400}>Regular 400</span>
              <span className={styles.weightSans600}>Semibold 600</span>
            </div>
          </div>
        </div>
      </section>

      {/* Textures & Materials */}
      <section className={`${styles.section} ${styles.textureSection}`}>
        <h2 className={styles.sectionTitle}>Textures & Materials</h2>
        <div className={styles.textureGrid}>
          <div className={styles.textureCard}>
            <div className={`${styles.textureSwatch} ${styles.mattePaper}`}>
              <span className={styles.textureLabel}>Matte Paper</span>
            </div>
          </div>
          <div className={styles.textureCard}>
            <div className={`${styles.textureSwatch} ${styles.goldFoil}`}>
              <span className={styles.textureLabel}>Gold Foil Emboss</span>
            </div>
          </div>
          <div className={styles.textureCard}>
            <div className={`${styles.textureSwatch} ${styles.technicalGrid}`}>
              <span className={styles.textureLabel}>Technical Grid</span>
            </div>
          </div>
          <div className={styles.textureCard}>
            <div className={`${styles.textureSwatch} ${styles.patternLines}`}>
              <span className={styles.textureLabel}>Pattern Lines</span>
            </div>
          </div>
          <div className={styles.textureCard}>
            <div className={`${styles.textureSwatch} ${styles.stitching}`}>
              <span className={styles.textureLabel}>Couture Stitch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Patterns */}
      <section className={`${styles.section} ${styles.patternSection}`}>
        <h2 className={styles.sectionTitle}>Brand Patterns</h2>
        <div className={styles.patternGrid}>
          <div className={styles.patternCard}>
            <svg viewBox="0 0 400 300" className={styles.patternSvg}>
              {/* CAD-inspired pattern lines */}
              <line x1="50" y1="50" x2="350" y2="50" stroke="#C9A963" strokeWidth="0.5" />
              <line x1="50" y1="100" x2="350" y2="100" stroke="#E8E8E8" strokeWidth="0.3" />
              <line x1="50" y1="150" x2="350" y2="150" stroke="#C9A963" strokeWidth="0.5" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="#E8E8E8" strokeWidth="0.3" />
              <line x1="50" y1="250" x2="350" y2="250" stroke="#C9A963" strokeWidth="0.5" />

              <line x1="100" y1="30" x2="100" y2="270" stroke="#E8E8E8" strokeWidth="0.3" />
              <line x1="200" y1="30" x2="200" y2="270" stroke="#C9A963" strokeWidth="0.5" />
              <line x1="300" y1="30" x2="300" y2="270" stroke="#E8E8E8" strokeWidth="0.3" />

              {/* Technical markers */}
              <circle cx="200" cy="150" r="3" fill="#C9A963" />
              <circle cx="100" cy="100" r="2" fill="none" stroke="#C9A963" strokeWidth="0.5" />
              <circle cx="300" cy="200" r="2" fill="none" stroke="#C9A963" strokeWidth="0.5" />
            </svg>
            <p className={styles.patternDesc}>Technical Grid — CAD Pattern</p>
          </div>
          <div className={styles.patternCard}>
            <svg viewBox="0 0 400 300" className={styles.patternSvg}>
              {/* Seamline pattern */}
              <path d="M 50 150 Q 125 50, 200 150 T 350 150"
                    stroke="#C9A963"
                    strokeWidth="0.5"
                    fill="none"
                    strokeDasharray="2,2" />
              <path d="M 50 100 Q 125 30, 200 100 T 350 100"
                    stroke="#E8E8E8"
                    strokeWidth="0.3"
                    fill="none" />
              <path d="M 50 200 Q 125 120, 200 200 T 350 200"
                    stroke="#E8E8E8"
                    strokeWidth="0.3"
                    fill="none" />

              {/* Seam markers */}
              <rect x="198" y="148" width="4" height="4" fill="#C9A963" />
              <rect x="98" y="98" width="4" height="4" fill="#C9A963" />
              <rect x="298" y="198" width="4" height="4" fill="#C9A963" />
            </svg>
            <p className={styles.patternDesc}>Seamline Motif — Couture Detail</p>
          </div>
          <div className={styles.patternCard}>
            <svg viewBox="0 0 400 300" className={styles.patternSvg}>
              {/* Geometric minimal pattern */}
              <rect x="100" y="75" width="100" height="150"
                    stroke="#C9A963"
                    strokeWidth="0.5"
                    fill="none" />
              <rect x="120" y="95" width="60" height="110"
                    stroke="#E8E8E8"
                    strokeWidth="0.3"
                    fill="none" />
              <line x1="150" y1="75" x2="150" y2="225" stroke="#C9A963" strokeWidth="0.5" />

              <circle cx="250" cy="150" r="50"
                      stroke="#C9A963"
                      strokeWidth="0.5"
                      fill="none" />
              <circle cx="250" cy="150" r="35"
                      stroke="#E8E8E8"
                      strokeWidth="0.3"
                      fill="none" />
            </svg>
            <p className={styles.patternDesc}>Geometric Luxury — Minimal Forms</p>
          </div>
        </div>
      </section>

      {/* Imagery Direction */}
      <section className={`${styles.section} ${styles.imagerySection}`}>
        <h2 className={styles.sectionTitle}>Imagery Direction</h2>
        <div className={styles.imageryGrid}>
          <div className={styles.imageryCard}>
            <div className={`${styles.imageryBox} ${styles.editorial}`}>
              <div className={styles.imageryOverlay}>
                <p>Black & White Editorial</p>
                <span>High contrast, minimal composition</span>
              </div>
            </div>
          </div>
          <div className={styles.imageryCard}>
            <div className={`${styles.imageryBox} ${styles.technical}`}>
              <div className={styles.imageryOverlay}>
                <p>Technical Garment Detail</p>
                <span>Close-ups, construction focus</span>
              </div>
            </div>
          </div>
          <div className={styles.imageryCard}>
            <div className={`${styles.imageryBox} ${styles.minimal}`}>
              <div className={styles.imageryOverlay}>
                <p>Minimal Studio Setting</p>
                <span>Clean backgrounds, precision lighting</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageryGuidelines}>
          <div className={styles.guideline}>
            <h4>Photography Style</h4>
            <ul>
              <li>High-contrast black and white</li>
              <li>Minimal, clean compositions</li>
              <li>Focus on texture and construction details</li>
              <li>Soft, directional lighting</li>
            </ul>
          </div>
          <div className={styles.guideline}>
            <h4>Technical Photography</h4>
            <ul>
              <li>Flat lay garment details</li>
              <li>Close-up stitching and seams</li>
              <li>Pattern pieces and technical drawings</li>
              <li>White or light gray backgrounds</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand Applications */}
      <section className={`${styles.section} ${styles.applicationSection}`}>
        <h2 className={styles.sectionTitle}>Brand Applications</h2>
        <div className={styles.applicationGrid}>
          <div className={styles.mockup}>
            <div className={styles.businessCard}>
              <div className={styles.cardFront}>
                <span className={styles.cardLogo}>ITAFCOUTURE</span>
              </div>
            </div>
            <p>Business Card — Matte finish with gold foil</p>
          </div>
          <div className={styles.mockup}>
            <div className={styles.letterhead}>
              <span className={styles.letterheadLogo}>IC</span>
              <div className={styles.letterheadLines}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p>Letterhead — Technical grid pattern</p>
          </div>
          <div className={styles.mockup}>
            <div className={styles.tag}>
              <span className={styles.tagText}>ITAFCOUTURE</span>
              <span className={styles.tagLine}>Digital Couture</span>
            </div>
            <p>Garment Tag — Embossed detail</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.footerLogo}>ITAFCOUTURE</span>
          <p className={styles.footerTagline}>Where Digital Precision Meets Haute Couture</p>
          <div className={styles.footerDivider}></div>
          <p className={styles.copyright}>© 2025 ITAFCOUTURE — Luxury Digital Fashion Maison</p>
        </div>
      </section>
    </main>
  )
}
