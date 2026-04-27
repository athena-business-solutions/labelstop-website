import './App.css'

const navGroups = [
  { label: 'New Arrivals', items: ['NEW ARRIVALS'] },
  { label: 'Clothing', items: ['T-Shirts', 'Shorts', 'Jeans & Trousers', 'Jackets & Gilets', 'Hoodies & Sweatshirts'] },
  { label: 'Footwear', items: ['Trainers', 'Slides'] },
  { label: 'Accessories', items: ['Bags', 'Hats & Scarfs'] },
  { label: 'Sale', items: ['Sale'] },
  { label: 'Pre Orders', items: ['Pre Order Trainers', 'Pre Order Bags & Accessories', 'Pre Order Coats & Gilets', 'Pre Order Sliders'] },
]

const products = [
  {
    name: 'MNCLER GRENOBLE-BLACK',
    price: '£65.00',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'MNCLER TEE STRIPE-WHITE',
    price: '£65.00',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'AMRI TEE-BLACK',
    price: '£65.00',
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'AMRI TEE-WHITE',
    price: '£65.00',
    image: 'https://images.unsplash.com/photo-1618354691413-7c8a9c228a9f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'PRDA TEE-BLACK',
    price: '£65.00',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'PRDA TEE-WHITE',
    price: '£65.00',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'CD JERSEY-BLACK',
    price: '£75.00',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'CD JERSEY',
    price: '£75.00',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
  },
]

const collections = [
  { name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80' },
  { name: 'Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Sets', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Bags', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80' },
  { name: 'Slides', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80' },
  { name: 'Trainers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
]

const preorder = [
  { name: 'Pre order Trainers', image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1100&q=80' },
  { name: 'Pre Order Bags & Accessories', image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1100&q=80' },
]

const services = [
  ['FAST SHIPPING', 'Fast worldwide shipping with reliable tracking information.'],
  ['CUSTOMER SERVICE', 'We are available from Monday to Sunday to answer any of your questions.'],
  ['SECURE PAYMENT', 'Your payment information is processed securely.'],
  ['CONTACT US', 'Need to contact us? Just send us a WhatsApp message 07446551501'],
]

function App() {
  return (
    <div className="site-shell">
      <div className="announcement">
        <span>UK NEXT DAY DELIVERY AVAILABLE</span>
        <span>GREAT CHOICES, GREAT BRANDS</span>
      </div>

      <header className="header">
        <button className="menu-button" type="button" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a className="brand" href="#">LABEL STOP</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <a href="#">{group.label}</a>
              <div className="nav-panel">
                {group.items.map((item) => (
                  <a href="#" key={item}>{item}</a>
                ))}
              </div>
            </div>
          ))}
          <a href="#">Brands</a>
          <a href="#">View All</a>
        </nav>
        <div className="header-actions" aria-label="Store actions">
          <a href="#">Search</a>
          <a href="#">Log in</a>
          <a href="#">Cart</a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=85"
            alt="Designer streetwear display"
          />
          <div className="hero-copy">
            <h1>Label Stop</h1>
            <p>Your one stop shop for designer-inspired streetwear, trainers, bags and accessories.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#new-arrivals">SHOP NOW</a>
              <a className="button button-light" href="#reviews">REVIEWS</a>
            </div>
          </div>
        </section>

        <section id="new-arrivals" className="section">
          <div className="section-heading">
            <h2>NEW ARRIVALS</h2>
            <a href="#">View all</a>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <a className="product-image" href="#">
                  <img src={product.image} alt={product.name} />
                </a>
                <h3><a href="#">{product.name}</a></h3>
                <p className="price">{product.price}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <a className="button button-outline" href="#">VIEW ALL</a>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>COLLECTIONS</h2>
            <a href="#">View all</a>
          </div>
          <div className="collection-grid">
            {collections.map((collection) => (
              <a className="collection-card" href="#" key={collection.name}>
                <img src={collection.image} alt={collection.name} />
                <span>{collection.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>PRE ORDER LATEST DROPS</h2>
          </div>
          <div className="preorder-grid">
            {preorder.map((item) => (
              <a className="collection-card large" href="#" key={item.name}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="services" id="reviews">
          {services.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </section>

        <section className="newsletter">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p>Be the first to know about new drops and exclusive offers.</p>
          <form>
            <label htmlFor="email">Email</label>
            <div className="email-field">
              <input id="email" type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="footer-kicker">Fast Shipping | Exclusive pricing | Secure Payments</p>
          <h2>Welcome to LabelStop</h2>
          <p>Your one stop shop for all of your designer needs. We&apos;ve got the fits that turn heads and elevates your game. Stand out and redefine your style.</p>
        </div>
        <div>
          <h2>Customer Care</h2>
          <a href="#">Shipping</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">FAQ&apos;s</a>
        </div>
        <div>
          <h2>Subscribe & Save BIG!</h2>
          <div className="email-field footer-field">
            <input type="email" placeholder="Email" />
            <button type="button">Join</button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025, Label Stop</span>
          <span>Privacy policy</span>
          <span>Refund policy</span>
          <span>Terms of service</span>
        </div>


        <a>utsav</a>
      </footer>
    </div>
  )
}

export default App
