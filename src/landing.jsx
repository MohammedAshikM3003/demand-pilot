import React from 'react';
import styles from './landing.module.css';

const Landing = () => {
  return (
    <div className={styles.landing}>
      {/* Particle Canvas Background */}
      <div className={styles.particleBg}></div>

      {/* Top Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <span className={styles.logo}>DemandPilot</span>
            <div className={styles.navLinks}>
              <a href="#platform" className={styles.navLink}>Platform</a>
              <a href="#solutions" className={styles.navLink}>Solutions</a>
              <a href="#pricing" className={styles.navLink}>Pricing</a>
              <a href="#docs" className={styles.navLink}>Docs</a>
            </div>
          </div>
          <div className={styles.navRight}>
            <button className={styles.signInBtn}>Sign In</button>
            <button className={styles.getStartedBtn}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Start Predicting.</h1>
          <p className={styles.heroSubtitle}>
            Eliminate stockouts and overstock waste with AI-powered demand forecasting that understands your supply chain rhythm.
          </p>
          {/* Hero Stats */}
          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <span className={`${styles.statNumber} ${styles.statPrimary}`}>94%</span>
              <span className={styles.statLabel}>Forecast Accuracy</span>
            </div>
            <div className={styles.statCard}>
              <span className={`${styles.statNumber} ${styles.statError}`}>-67%</span>
              <span className={styles.statLabel}>Stockout Reduction</span>
            </div>
            <div className={styles.statCard}>
              <span className={`${styles.statNumber} ${styles.statSecondary}`}>3.2x</span>
              <span className={styles.statLabel}>Average ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardFrame}>
            <div className={styles.windowControls}>
              <div className={`${styles.windowDot} ${styles.dotRed}`}></div>
              <div className={`${styles.windowDot} ${styles.dotYellow}`}></div>
              <div className={`${styles.windowDot} ${styles.dotGreen}`}></div>
            </div>
            <div className={styles.dashboardContent}>
              {/* Sidebar Mockup */}
              <div className={styles.sidebar}>
                <div className={styles.sidebarHeader}></div>
                <div className={styles.sidebarMenu}>
                  <div className={styles.sidebarItem}></div>
                  <div className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}></div>
                  <div className={styles.sidebarItem}></div>
                </div>
              </div>
              {/* Main Content Mockup */}
              <div className={styles.mainContent}>
                <div className={styles.metricCards}>
                  <div className={`${styles.metricCard} ${styles.cardError}`}>
                    <p className={styles.metricLabel}>Stockout Risk</p>
                    <p className={styles.metricValue}>12 SKUs</p>
                  </div>
                  <div className={`${styles.metricCard} ${styles.cardWarning}`}>
                    <p className={styles.metricLabel}>Low Inventory</p>
                    <p className={styles.metricValue}>45 SKUs</p>
                  </div>
                  <div className={`${styles.metricCard} ${styles.cardSuccess}`}>
                    <p className={styles.metricLabel}>Healthy Stock</p>
                    <p className={styles.metricValue}>892 SKUs</p>
                  </div>
                </div>
                <div className={styles.chartContainer}>
                  <div className={styles.chartBars}>
                    <div className={styles.chartBar} style={{ height: '40%' }}></div>
                    <div className={styles.chartBar} style={{ height: '60%' }}></div>
                    <div className={styles.chartBar} style={{ height: '85%' }}></div>
                    <div className={styles.chartBar} style={{ height: '70%' }}></div>
                    <div className={styles.chartBar} style={{ height: '50%' }}></div>
                    <div className={styles.chartBar} style={{ height: '40%' }}></div>
                  </div>
                  <div className={styles.chartLabels}>
                    <span className={styles.chartLabel}>MON</span>
                    <span className={styles.chartLabel}>TUE</span>
                    <span className={styles.chartLabel}>WED</span>
                    <span className={styles.chartLabel}>THU</span>
                    <span className={styles.chartLabel}>FRI</span>
                    <span className={styles.chartLabel}>SAT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.problemSection}>
        <div className={styles.problemContainer}>
          <div className={styles.problemLeft}>
            <h2 className={styles.sectionTitle}>Bad inventory decisions cost billions.</h2>
            <p className={styles.problemText}>Manual spreadsheets and legacy systems can't keep up with modern volatility.</p>
            <div className={styles.progressBars}>
              <div className={styles.progressItem}>
                <div className={styles.progressHeader}>
                  <span className={styles.progressLabel}>Stockout Losses</span>
                  <span className={styles.progressValue}>62% increase</span>
                </div>
                <div className={styles.progressTrack}>
                  <div className={`${styles.progressFill} ${styles.progressError}`} style={{ width: '62%' }}></div>
                </div>
              </div>
              <div className={styles.progressItem}>
                <div className={styles.progressHeader}>
                  <span className={styles.progressLabel}>Overstock Waste</span>
                  <span className={styles.progressValue}>$400B Annual</span>
                </div>
                <div className={styles.progressTrack}>
                  <div className={`${styles.progressFill} ${styles.progressWarning}`} style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.problemRight}>
            <div className={styles.lossCircle}>
              <span className={styles.lossAmount}>$1.8T</span>
              <span className={styles.lossLabel}>Total Annual Loss</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorksSection}>
        <div className={styles.howItWorksContainer}>
          <h2 className={styles.sectionTitleCenter}>The Path to Predictability.</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>
                <span className={styles.materialIcon}>upload_file</span>
              </div>
              <h3 className={styles.stepTitle}>Upload Data</h3>
              <p className={styles.stepDescription}>Securely connect your ERP, Shopify, or CSV history with one-click integration.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>
                <span className={styles.materialIcon}>psychology</span>
              </div>
              <h3 className={styles.stepTitle}>AI Models Analyze</h3>
              <p className={styles.stepDescription}>Our 40+ neural networks detect seasonality, trend shifts, and supply anomalies.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>
                <span className={styles.materialIcon}>insights</span>
              </div>
              <h3 className={styles.stepTitle}>Act on Insights</h3>
              <p className={styles.stepDescription}>Get automated reorder alerts and purchase order drafts ready for approval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Copilot Section */}
      <section className={styles.copilotSection}>
        <div className={styles.copilotContainer}>
          <div className={styles.copilotHeader}>
            <div className={styles.copilotAvatar}></div>
            <div>
              <h2 className={styles.copilotTitle}>Copilot Intelligence</h2>
              <p className={styles.copilotSubtitle}>Real-time supply chain analyst</p>
            </div>
          </div>
          <div className={styles.chatContainer}>
            {/* User Message */}
            <div className={styles.userMessage}>
              <div className={styles.messageBubbleUser}>
                <p>What are our primary stockout risks for the upcoming holiday peak in Region East?</p>
              </div>
            </div>
            {/* AI Message */}
            <div className={styles.aiMessage}>
              <div className={styles.messageBubbleAi}>
                <div className={styles.messageContent}>
                  <span className={styles.aiIcon}>auto_awesome</span>
                  <div>
                    <p className={styles.aiText}>Analyzing current transit times and historical sales velocity...</p>
                    <div className={styles.riskCards}>
                      <div className={styles.riskCard}>
                        <p className={styles.riskLevelHigh}>HIGH RISK</p>
                        <p className={styles.skuCode}>SKU: ALPHA-7</p>
                        <p className={styles.riskDetail}>Stockout expected: Dec 12</p>
                      </div>
                      <div className={styles.riskCard}>
                        <p className={styles.riskLevelMedium}>MEDIUM RISK</p>
                        <p className={styles.skuCode}>SKU: DELTA-2</p>
                        <p className={styles.riskDetail}>Projected 3-day buffer</p>
                      </div>
                    </div>
                    <button className={styles.actionButton}>
                      Generate purchase orders for these SKUs?
                      <span className={styles.arrowIcon}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={`${styles.materialIcon} ${styles.featureIcon}`}>dashboard</span>
              <h4 className={styles.featureTitle}>Real-Time Intelligence</h4>
              <p className={styles.featureDescription}>Continuous monitoring of stock levels across all your warehouse locations.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.materialIcon} ${styles.featureIcon}`}>timeline</span>
              <h4 className={styles.featureTitle}>Demand Forecasting</h4>
              <p className={styles.featureDescription}>Proprietary AI that predicts demand with up to 98% accuracy for core products.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.materialIcon} ${styles.featureIcon}`}>shopping_cart_checkout</span>
              <h4 className={styles.featureTitle}>Smart Reorder Engine</h4>
              <p className={styles.featureDescription}>Automated replenishment triggers based on lead times and safety stock.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.materialIcon} ${styles.featureIcon}`}>layers</span>
              <h4 className={styles.featureTitle}>SKU Level Granularity</h4>
              <p className={styles.featureDescription}>Deep dive into every single product variant to optimize every dollar spent.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.materialIcon} ${styles.featureIcon}`}>hub</span>
              <h4 className={styles.featureTitle}>Multichannel Sync</h4>
              <p className={styles.featureDescription}>Pull data from Amazon, Shopify, Walmart, and custom ERPs effortlessly.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.materialIcon} ${styles.featureIcon}`}>shield_with_heart</span>
              <h4 className={styles.featureTitle}>Anomaly Protection</h4>
              <p className={styles.featureDescription}>Identify supply chain disruptions before they impact your customer experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Countup Grid */}
      <section className={styles.metricsSection}>
        <div className={styles.metricsContainer}>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <p className={styles.metricNumber}>50M+</p>
              <p className={styles.metricName}>SKUs Tracked</p>
            </div>
            <div className={styles.metricItem}>
              <p className={styles.metricNumber}>$12B</p>
              <p className={styles.metricName}>Inventory Optimized</p>
            </div>
            <div className={styles.metricItem}>
              <p className={styles.metricNumber}>120%</p>
              <p className={styles.metricName}>YoY Growth</p>
            </div>
            <div className={styles.metricItem}>
              <p className={styles.metricNumber}>15ms</p>
              <p className={styles.metricName}>Analysis Latency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Your inventory is waiting to be optimized.</h2>
          <p className={styles.ctaSubtitle}>Join the 400+ leading brands who have stopped guessing and started growing.</p>
          <div className={styles.ctaForm}>
            <input type="email" placeholder="Enter your business email" className={styles.emailInput} />
            <button className={styles.ctaButton}>Get Early Access</button>
          </div>
          <p className={styles.ctaNote}>No credit card required. Free 14-day analysis trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            <span className={styles.footerLogo}>DemandPilot AI</span>
            <p className={styles.footerTagline}>The intelligent backbone for modern retail and manufacturing supply chains.</p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerLinks}>
              <a href="#privacy" className={styles.footerLink}>Privacy</a>
              <a href="#terms" className={styles.footerLink}>Terms</a>
              <a href="#security" className={styles.footerLink}>Security</a>
              <a href="#status" className={styles.footerLink}>Status</a>
            </div>
            <p className={styles.copyright}>© 2024 DemandPilot AI. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
