import { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import styles from './RecommendationPanel.module.css'

const summaryCards = [
  {
    label: 'Total Risk Exposure',
    value: '₹18.4L',
    note: '12% increase from last week',
    tone: 'critical',
    icon: 'trending_down',
  },
  {
    label: 'Pending Actions',
    value: '04',
    note: 'Critical within 48h',
    tone: 'warning',
    icon: 'pending_actions',
  },
  {
    label: 'System Health',
    value: '98.4%',
    note: 'Predictive accuracy within 30 days',
    tone: 'good',
    icon: 'monitor_heart',
  },
]

const recommendations = [
  {
    sku: 'SKU-8842',
    location: 'Downtown Retail Hub',
    risk: 'High Risk',
    riskTone: 'critical',
    verb: 'Order',
    quantity: '150 units',
    suffix: 'within 48 hours',
    detail: 'Stockout risk detected due to upcoming Diwali promotion surge.',
    impact: '₹2.3L loss prevention',
    dueIn: '14h',
  },
  {
    sku: 'SKU-9021',
    location: 'Bandra West Outlet',
    risk: 'Medium Risk',
    riskTone: 'warning',
    verb: 'Replenish',
    quantity: '45 units',
    suffix: 'immediately',
    detail: 'Inventory lead time variance of +4 days detected in supply chain.',
    impact: '₹84K protected',
    dueIn: '2d 4h',
  },
  {
    sku: 'SKU-4412',
    location: 'Gurgaon Logistics Hub',
    risk: 'High Risk',
    riskTone: 'critical',
    verb: 'Transfer',
    quantity: '300 units',
    suffix: 'from Zone B',
    detail: 'Inter-store rebalancing recommended to avoid new procurement costs.',
    impact: '₹1.1L saved',
    dueIn: '6h',
  },
  {
    sku: 'SKU-1120',
    location: 'Chennai Flagship',
    risk: 'Low Risk',
    riskTone: 'good',
    verb: 'Place bulk order',
    quantity: '800 units',
    suffix: '',
    detail: 'Bulk purchase discount expires in 5 days. High sell-through probability.',
    impact: '₹45K savings',
    dueIn: '5d',
  },
  {
    sku: 'SKU-5567',
    location: 'Online Storefront',
    risk: 'High Risk',
    riskTone: 'critical',
    verb: 'Expedite',
    quantity: '1,200 units',
    suffix: 'via Air',
    detail: 'Unexpected viral social trend driving massive traffic to this SKU.',
    impact: '₹12.5L recovery',
    dueIn: '3h',
  },
  {
    sku: 'SKU-3321',
    location: 'Bangalore Airport Mall',
    risk: 'Medium Risk',
    riskTone: 'warning',
    verb: 'Adjust safety stock to',
    quantity: '25 units',
    suffix: '',
    detail: 'Steady depletion rate indicates need for higher floor levels.',
    impact: '₹18K continuous',
    dueIn: '18h',
  },
]

function RecommendationPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
    ]

    const createdLinks = fontLinks.map((href) => {
      const existing = document.querySelector(`link[href="${href}"]`)
      if (existing) return null

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
      return link
    })

    return () => {
      createdLinks.forEach((link) => {
        if (link?.parentNode) {
          link.parentNode.removeChild(link)
        }
      })
    }
  }, [])

  return (
    <div className={styles.page}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <button aria-label="Open sidebar" className={styles.menuToggle} onClick={() => setSidebarOpen(true)} type="button">
              <span className={`${styles.icon} material-symbols-outlined`}>menu</span>
            </button>

            <div className={styles.searchBox}>
              <span className={`${styles.icon} material-symbols-outlined`}>search</span>
              <input placeholder="Search architecture..." type="text" />
            </div>

            <nav className={styles.topLinks}>
              <a href="#">Dashboard</a>
              <a className={styles.activeLink} href="#">Inventory</a>
              <a href="#">Forecast</a>
            </nav>
          </div>

          <div className={styles.topbarRight}>
            <button className={styles.iconButton} type="button">
              <span className={`${styles.icon} material-symbols-outlined`}>notifications</span>
            </button>
            <button className={styles.iconButton} type="button">
              <span className={`${styles.icon} material-symbols-outlined`}>help_outline</span>
            </button>
            <button className={styles.primaryButton} type="button">Create Reorder</button>
            <img
              alt="User profile"
              className={styles.avatar}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHscGLcjcmFW_-2CHoeQhuex7FjukKXtWx4lZk-5LiO6zCVsutFIk7RpRjEdwcvGU1382TqOboBs0l_-omQuB6qXjPrGaunhuHMxtenAB6aHDvDUqSYL7a9Fxq_dbxWcsIeJi_w_sSnF2EcvB08MGy-mSimrne-LSfLcD8K1TmuHqF9eVwJHTnzP6HYCUPqhz0t8zwxPY8bgOR-sJlH8D2pA3oRVG_LV3syeN4833TPICng72kR_voBL_abGkZ2w3wBBMzGghJkeM"
            />
          </div>
        </header>

        <section className={styles.content}>
          <div className={styles.hero}>
            <div>
              <p className={styles.kicker}>Operational Intelligence</p>
              <h1>AI Reorder Recommendations</h1>
              <p className={styles.heroCopy}>Top prioritized actions to optimize stock and prevent revenue loss across your retail ecosystem.</p>
            </div>
          </div>

          <section className={styles.summaryGrid}>
            {summaryCards.map((card) => (
              <article key={card.label} className={`${styles.summaryCard} ${styles[`summary${card.tone}`]}`}>
                <div className={styles.summaryHeader}>
                  <span className={styles.summaryLabel}>{card.label}</span>
                  <span className={`${styles.icon} material-symbols-outlined`}>{card.icon}</span>
                </div>
                <div className={styles.summaryValue}>{card.value}</div>
                <p>{card.note}</p>
              </article>
            ))}
          </section>

          <section className={styles.recommendationList}>
            {recommendations.map((item, index) => (
              <article
                key={item.sku}
                className={`${styles.recommendationCard} ${index === recommendations.length - 1 ? styles.recommendationMuted : ''}`}
              >
                <div className={styles.recommendationIdentity}>
                  <div className={styles.recommendationCodes}>
                    <span className={styles.sku}>{item.sku}</span>
                    <span className={`${styles.riskBadge} ${styles[`risk${item.riskTone}`]}`}>{item.risk}</span>
                  </div>
                  <p>{item.location}</p>
                </div>

                <div className={styles.recommendationMain}>
                  <h2>
                    {item.verb} <span>{item.quantity}</span>{item.suffix ? ` ${item.suffix}` : ''}
                  </h2>
                  <div className={styles.detailRow}>
                    <span className={`${styles.icon} material-symbols-outlined`}>info</span>
                    <p>{item.detail}</p>
                  </div>
                </div>

                <div className={styles.recommendationMeta}>
                  <div>
                    <span>Impact</span>
                    <strong>{item.impact}</strong>
                  </div>
                  <div>
                    <span>Due In</span>
                    <strong className={styles.dueIn}>{item.dueIn}</strong>
                  </div>
                  <button className={styles.chevronButton} type="button" aria-label={`Open recommendation for ${item.sku}`}>
                    <span className={`${styles.icon} material-symbols-outlined`}>chevron_right</span>
                  </button>
                </div>
              </article>
            ))}
          </section>

          <div className={styles.footerAction}>
            <button className={styles.loadMoreButton} type="button">
              <span className={`${styles.icon} material-symbols-outlined`}>keyboard_double_arrow_down</span>
              Load More Recommendations
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default RecommendationPanel