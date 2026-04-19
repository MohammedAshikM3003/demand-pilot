import { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import styles from './Uploads.module.css'

const previewRows = [
  { sku: 'APP-001', store: 'Main Warehouse', date: '2023-09-01', sales: '1,240', inventory: '4,500' },
  { sku: 'SAM-204', store: 'Downtown Retail', date: '2023-09-01', sales: '842', inventory: '1,120' },
  { sku: 'GGL-092', store: 'East Coast Hub', date: '2023-09-02', sales: '3,120', inventory: '8,900' },
  { sku: 'XIA-112', store: 'Main Warehouse', date: '2023-09-02', sales: '560', inventory: '2,300' },
  { sku: 'MSF-042', store: 'Online Store', date: '2023-09-03', sales: '12,450', inventory: '15,000' },
]

const validationFields = ['SKU', 'Date', 'Sales', 'Inventory']

function Uploads() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const links = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
    ].map((href) => {
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

            <p className={styles.brand}>DemandPilot</p>

            <nav className={styles.topnavLinks}>
              <button type="button">Dashboard</button>
              <button type="button">Inventory</button>
              <button className={styles.topnavActive} type="button">Uploads</button>
              <button type="button">Analytics</button>
            </nav>
          </div>

          <div className={styles.topbarRight}>
            <button aria-label="Notifications" className={styles.iconButton} type="button">
              <span className={`${styles.icon} material-symbols-outlined`}>notifications</span>
            </button>
            <button aria-label="Help" className={styles.iconButton} type="button">
              <span className={`${styles.icon} material-symbols-outlined`}>help_outline</span>
            </button>
            <img
              alt="User profile"
              className={styles.avatar}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOPRnhs7JNgWdtowx2cEagjMieu2YJrFxltuLK5-edBIyri_MnThMCHZKhVn2n5uI5axFsEgM47xIdQn9g-nLIjQ6VTy4bN4RwEIxcJUtLqhwXNBOaS8w2y2M57en8bF5hx4ZzrtFl9nXSwmY2DLtvZU1-UsrySStDv6XntubiTTnNBfztzRtYLO28ef9WPiznOsrPkZu5I7k4Y4r8tOhmRFEOnFcH-YxM0h-UM9mXYD8tCpwfZ_rOqUzx3iQgrH2yzXt1uDNcG_c"
            />
          </div>
        </header>

        <section className={styles.content}>
          <div className={styles.headBlock}>
            <span className={styles.kicker}>Inventory Management</span>
            <h1>Upload Inventory Data</h1>
            <p>Upload your Excel or CSV file to generate demand forecasts and inventory insights using our precision intelligence engine.</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.mainCol}>
              <article className={styles.card}>
                <div className={styles.uploadDrop}>
                  <div className={styles.uploadIconWrap}>
                    <span className={`${styles.icon} material-symbols-outlined`}>cloud_upload</span>
                  </div>
                  <h3>Drag and drop your file here or browse files</h3>
                  <p>Supports .csv, .xls, .xlsx (Max 50MB)</p>
                  <button className={styles.primaryBtn} type="button">Browse Files</button>
                </div>

                <div className={styles.uploadSuccess}>
                  <div className={styles.uploadSuccessLeft}>
                    <div className={styles.checkWrap}>
                      <span className={`${styles.icon} material-symbols-outlined`}>check_circle</span>
                    </div>
                    <div>
                      <strong>inventory_q3_data.csv</strong>
                      <small>File uploaded successfully . 1.2 MB</small>
                    </div>
                  </div>
                  <button aria-label="Delete file" className={styles.deleteButton} type="button">
                    <span className={`${styles.icon} material-symbols-outlined`}>delete</span>
                  </button>
                </div>
              </article>

              <article className={styles.card}>
                <div className={styles.cardHeadRow}>
                  <h3>Data Preview</h3>
                  <span className={styles.goodBadge}><i />Data looks good</span>
                </div>

                <div className={styles.tableWrap}>
                  <table>
                    <thead>
                      <tr>
                        <th>SKU</th>
                        <th>Store</th>
                        <th>Date</th>
                        <th>Sales</th>
                        <th>Inventory</th>
                      </tr>
                    </thead>
                    <tbody>
                      {previewRows.map((row) => (
                        <tr key={`${row.sku}-${row.date}`}>
                          <td className={styles.skuCell}>{row.sku}</td>
                          <td>{row.store}</td>
                          <td className={styles.mutedCell}>{row.date}</td>
                          <td className={styles.monoCell}>{row.sales}</td>
                          <td className={styles.monoCell}>{row.inventory}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            </div>

            <aside className={styles.sideCol}>
              <article className={`${styles.card} ${styles.stickyCard}`}>
                <h3 className={styles.validationTitle}>
                  <span className={`${styles.icon} material-symbols-outlined`}>verified</span>
                  Validation Results
                </h3>

                <div className={styles.validationList}>
                  {validationFields.map((field) => (
                    <div key={field} className={styles.validationRow}>
                      <div className={styles.validationLeft}>
                        <span className={`${styles.icon} material-symbols-outlined ${styles.detectedIcon}`}>check_circle</span>
                        <span>{field}</span>
                      </div>
                      <span className={styles.detectedBadge}>Detected</span>
                    </div>
                  ))}
                </div>

                <div className={styles.infoBox}>
                  <span className={`${styles.icon} material-symbols-outlined`}>info</span>
                  <p>All required columns have been identified. Our engine will now normalize the time-series data and prepare your demand forecast models.</p>
                </div>
              </article>
            </aside>
          </div>

          <div className={styles.footerActions}>
            <button className={styles.cancelBtn} type="button">Cancel</button>
            <button className={styles.primaryBtn} type="button">
              Process Data
              <span className={`${styles.icon} material-symbols-outlined`}>arrow_forward</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Uploads
