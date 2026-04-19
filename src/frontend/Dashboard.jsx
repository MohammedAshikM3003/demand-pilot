import { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import styles from './Dashboard.module.css'

const kpiCards = [
  {
    id: 'risk',
    icon: 'warning',
    label: 'Total SKUs at Risk',
    value: '1,284',
    delta: '12%',
    deltaDirection: 'up',
    badge: 'High Priority',
    tone: 'critical',
  },
  {
    id: 'stores',
    icon: 'store',
    label: 'High-Risk Stores',
    value: '42',
    subValue: 'of 1,200 total',
    badge: 'Attention',
    tone: 'warning',
  },
  {
    id: 'stockout',
    icon: 'running_with_errors',
    label: 'Predicted Stockout',
    value: '48h',
    subValue: 'Next Window',
    badge: 'Predictive',
    tone: 'critical',
  },
  {
    id: 'overstock',
    icon: 'inventory',
    label: 'Overstock Value',
    value: '$2.4M',
    delta: '4%',
    deltaDirection: 'down',
    badge: 'Optimized',
    tone: 'good',
  },
]

const urgentActions = [
  {
    sku: '8829-XL-BLK',
    title: 'UltraSlim Pro Laptop',
    status: 'CRITICAL',
    hub: 'SFO-01 Hub',
    action: 'Reorder 450 Units',
    impact: '+$124k Impact',
    deadline: 'Today, 5PM',
    button: 'APPROVE',
    icon: 'add_shopping_cart',
    tone: 'critical',
  },
  {
    sku: '4410-M-BLU',
    title: 'SmartHome Display 10"',
    status: 'WARNING',
    hub: 'NYC-04 Flagship',
    action: 'Transfer from CHI-02',
    impact: '+$48k Impact',
    deadline: 'Tomorrow',
    button: 'RESOLVE',
    icon: 'local_shipping',
    tone: 'warning',
  },
  {
    sku: '1192-S-GRY',
    title: 'AirFlow Headphones',
    status: 'CRITICAL',
    hub: 'LDN-02 Central',
    action: 'Express Air Freight',
    impact: '+$82k Impact',
    deadline: '2h Remaining',
    button: 'APPROVE',
    icon: 'priority_high',
    tone: 'critical',
  },
]

const territoryStats = [
  { name: 'North America', healthy: 70, lowStock: 20, stockout: 10, stable: 70 },
  { name: 'EMEA Region', healthy: 45, lowStock: 35, stockout: 20, stable: 45 },
  { name: 'APAC Markets', healthy: 88, lowStock: 8, stockout: 4, stable: 88 },
]

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const ids = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
    ]

    const links = ids.map((href) => {
      const existing = document.querySelector(`link[href="${href}"]`)
      if (existing) return null
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
      return link
    })

    return () => {
      links.forEach((link) => {
        if (link?.parentNode) {
          link.parentNode.removeChild(link)
        }
      })
    }
  }, [])

  return (
    <div className={styles.page}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <button
              aria-label="Open sidebar"
              className={styles.menuToggle}
              onClick={() => setSidebarOpen(true)}
              type="button"
            >
              <span className={`${styles.icon} material-symbols-outlined`}>menu</span>
            </button>

            <div className={styles.searchBox}>
              <span className={`${styles.icon} material-symbols-outlined`}>search</span>
              <input placeholder="Search Inventory, Stores, or Regions..." type="text" />
            </div>
            <nav className={styles.regionTabs}>
              <a className={styles.activeTab} href="#">Global View</a>
              <a href="#">Region North</a>
              <a href="#">Region South</a>
            </nav>
          </div>

          <div className={styles.topbarRight}>
            <button className={styles.iconButton}>
              <span className={`${styles.icon} material-symbols-outlined`}>notifications</span>
            </button>
            <button className={styles.iconButton}>
              <span className={`${styles.icon} material-symbols-outlined`}>help_outline</span>
            </button>
            <button className={styles.secondaryButton}>Export Data</button>
            <button className={styles.primaryButton}>Create Report</button>
            <img
              alt="User Profile"
              className={styles.avatar}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHjaTKOCm8379DFP4U-lPUGxyibKrU5duFG7LpetE8ft_UgO0Xn2wpi1tER7yFQnX26HFjjzez1ao9-6eVwD04UVVrjNBGQmYRXXdZX1YJdoHzsYkJunKCu9oeOzdjW8awmpIxc0rHF7caeM1FJhlEF9xw702pekEVKj2vJLUHDaIUmHVq-UGyqvNoyJOLYAfNMfCGguVssUYd0y-1EslSsF8OLdGFNkNllGy6wX-1I7ieZdjXohJL5VOcx1Czx8F_uIu7DDySE8s"
            />
          </div>
        </header>

        <section className={styles.content}>
          <div className={styles.headlineRow}>
            <div className={styles.headlineText}>
              <h1>Dashboard</h1>
              <p>Real-time supply chain intelligence and predictive risk monitoring.</p>
            </div>

            <div className={styles.filters}>
              {['Region', 'Store Type', 'Category'].map((label) => (
                <label key={label} className={styles.filterControl}>
                  <span>{label}</span>
                  <select>
                    <option>All {label === 'Region' ? 'Global Regions' : 'Locations'}</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </label>
              ))}
              <label className={styles.filterControl}>
                <span>Timeframe</span>
                <button className={styles.calendarButton} type="button">
                  Last 30 Days
                  <span className={`${styles.icon} material-symbols-outlined`}>calendar_today</span>
                </button>
              </label>
            </div>
          </div>

          <div className={styles.kpiGrid}>
            {kpiCards.map((card) => (
              <article key={card.id} className={`${styles.kpiCard} ${styles[`kpi${card.tone}`]}`}>
                <div className={styles.kpiTop}>
                  <span className={`${styles.icon} material-symbols-outlined ${styles.kpiIcon}`}>{card.icon}</span>
                  <span className={`${styles.badge} ${styles[`badge${card.tone}`]}`}>{card.badge}</span>
                </div>
                <p className={styles.kpiLabel}>{card.label}</p>
                <div className={styles.kpiBottom}>
                  <h3>{card.value}</h3>
                  {card.delta && (
                    <span className={card.deltaDirection === 'up' ? styles.deltaUp : styles.deltaDown}>
                      <span className={`${styles.icon} material-symbols-outlined`}>
                        {card.deltaDirection === 'up' ? 'arrow_upward' : 'arrow_downward'}
                      </span>
                      {card.delta}
                    </span>
                  )}
                  {!card.delta && card.subValue && <span className={styles.subValue}>{card.subValue}</span>}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.middleGrid}>
            <section className={styles.chartPanel}>
              <div className={styles.panelHeader}>
                <div>
                  <h3>Demand Forecast vs Actual Performance</h3>
                  <p>Aggregated across top 50 high-velocity SKUs</p>
                </div>
                <div className={styles.legend}>
                  <span><i className={styles.legendForecast} />Forecast</span>
                  <span><i className={styles.legendActual} />Actual</span>
                </div>
              </div>

              <div className={styles.mockChart}>
                <svg viewBox="0 0 800 300" preserveAspectRatio="none">
                  <g stroke="#e6edf6" strokeWidth="1.2">
                    <line x1="0" y1="60" x2="800" y2="60" />
                    <line x1="0" y1="120" x2="800" y2="120" />
                    <line x1="0" y1="180" x2="800" y2="180" />
                    <line x1="0" y1="240" x2="800" y2="240" />
                  </g>
                  <path d="M0 150 Q100 120 200 160 T400 140 T600 180 T800 130 L800 160 T600 210 T400 170 T200 190 T0 180 Z" fill="rgba(78, 222, 163, 0.08)" />
                  <path d="M0 170 L100 160 L200 175 L300 165 L400 155 L500 170 L600 185" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
                  <path d="M0 165 L100 145 L200 160 L300 150 L400 140 L500 155 L600 170 L700 140 L786 122" fill="none" stroke="#4edea3" strokeWidth="3" />
                  <circle cx="700" cy="140" fill="#4edea3" r="4" />
                  <circle cx="786" cy="122" fill="#d8f7ea" r="10" />
                  <circle cx="786" cy="122" fill="#ffffff" r="7" stroke="#4edea3" strokeWidth="2.5" />
                  <circle cx="786" cy="122" fill="#4edea3" r="4" />
                </svg>
                <div className={styles.axis}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon*', 'Tue*'].map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>

              <div className={styles.aiBanner}>
                <div className={styles.aiIconWrap}>
                  <span className={`${styles.icon} material-symbols-outlined`}>psychology</span>
                </div>
                <div>
                  <h4>Demand surge expected due to promotion (+2.4x baseline)</h4>
                  <p>AI recommends increasing safety stock by 15% for the Electronics category in EMEA region.</p>
                </div>
                <button>Apply Strategy</button>
              </div>
            </section>

            <section className={styles.urgentPanel}>
              <div className={styles.panelHeader}>
                <h3>Urgent Reorders</h3>
                <span className={`${styles.badge} ${styles.badgecritical}`}>12 Actions</span>
              </div>

              <div className={styles.urgentList}>
                {urgentActions.map((item) => (
                  <article key={item.sku} className={styles.urgentItem}>
                    <div className={styles.urgentTop}>
                      <div>
                        <p>SKU: {item.sku}</p>
                        <h4>{item.title}</h4>
                      </div>
                      <div className={styles.urgentStatus}>
                        <span className={item.tone === 'critical' ? styles.badgecritical : styles.badgewarning}>{item.status}</span>
                        <small>{item.hub}</small>
                      </div>
                    </div>

                    <div className={styles.urgentAction}>
                      <span className={`${styles.icon} material-symbols-outlined`}>{item.icon}</span>
                      <strong>{item.action}</strong>
                      <em>{item.impact}</em>
                    </div>

                    <div className={styles.urgentFooter}>
                      <span>{item.deadline}</span>
                      <button>{item.button}</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className={styles.bottomGrid}>
            <section className={styles.healthPanel}>
              <div className={styles.panelHeader}>
                <h3>Inventory Health by Territory</h3>
                <button className={styles.download}>Download CSV</button>
              </div>

              <div className={styles.territoryList}>
                {territoryStats.map((territory) => (
                  <div key={territory.name} className={styles.territoryRow}>
                    <strong>{territory.name}</strong>
                    <div className={styles.bar}>
                      <span style={{ width: `${territory.healthy}%` }} className={styles.barHealthy} />
                      <span style={{ width: `${territory.lowStock}%` }} className={styles.barLow} />
                      <span style={{ width: `${territory.stockout}%` }} className={styles.barOut} />
                    </div>
                    <span>{territory.stable}% Stable</span>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.simPanel}>
              <div className={styles.simIcon}>
                <span className={`${styles.icon} material-symbols-outlined`}>auto_awesome</span>
              </div>
              <h3>Advanced Inventory Simulations</h3>
              <p>
                Run multi-variate What-If scenarios to test supply chain resilience against shipping delays or demand spikes.
              </p>
              <button>
                Launch Simulation
                <span className={`${styles.icon} material-symbols-outlined`}>rocket_launch</span>
              </button>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
