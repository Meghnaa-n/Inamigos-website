import './style.css';

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#" class="nav-logo">
        <img src="/Screenshot_2026-06-23_at_09.38.01.png" alt="InAmigos Foundation logo" class="nav-logo-img" style="display:none" />
        <h1>In<span>Amigos</span> Foundation</h1>
      </a>
      <div class="nav-links" id="navLinks">
        <a href="#hero">Home</a>
        <a href="#about">About Us</a>
        <a href="#volunteer">Volunteers</a>
        <a href="#gallery">Gallery</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#donate" class="nav-cta">Donate</a>
      <div class="mobile-toggle" id="mobileToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="hero-badge">Section 8 Registered Non-Profit | ISO 9001:2015 Certified</span>
      <h1>Creating <span>Positive Change</span> Together</h1>
      <p class="hero-tagline">Uniting Minds for Change</p>
      <div class="hero-buttons">
        <a href="#volunteer" class="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          Become a Volunteer
        </a>
        <a href="#donate" class="btn btn-secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.86 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
          </svg>
          Donate Now
        </a>
      </div>
    </div>
    <div class="hero-scroll">
      <span></span>
    </div>
  </section>

  <!-- About Section -->
  <section class="section about" id="about">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Who We Are</span>
        <h2>About InAmigos Foundation</h2>
        <p>A registered non-profit organisation dedicated to creating lasting social impact across India</p>
      </div>
      <div class="about-content">
        <div class="about-image slide-left">
          <img src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800" alt="InAmigos Foundation team helping community" />
        </div>
        <div class="about-text slide-right">
          <h3>Building a Better Tomorrow</h3>
          <p>InAmigos Foundation is a Registered Non-Profit Organization under the Companies Act 2013, Licensed by the Central Government, founded on September 23, 2020 by Govind Shukla.</p>
          <p>All legal documents are accessible via the Ministry of Corporate Affairs website. We maintain transparent records and are committed to accountability in everything we do.</p>
          <div class="about-highlights">
            <div class="highlight-item">
              <div class="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <span>80G & 12A Certified — Approved by the Commissioner of Income Tax</span>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <span>NGO DARPAN Registered with NITI Aayog (Govt. Body)</span>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <span>CSR-1 Registered</span>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <span>IAF ISO 9001:2015 Certified (International Accreditation Forum)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Impact Section -->
  <section class="section impact" id="impact">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Our Reach</span>
        <h2>Social Impact</h2>
        <p>Numbers that reflect our commitment to creating meaningful change</p>
      </div>
      <div class="impact-grid">
        <div class="impact-card scale-in">
          <div class="impact-number" data-target="200">0</div>
          <div class="impact-label">Active Volunteers</div>
        </div>
        <div class="impact-card scale-in">
          <div class="impact-number" data-target="28">0</div>
          <div class="impact-label">States Presence</div>
        </div>
        <div class="impact-card scale-in">
          <div class="impact-number" data-target="50000">0</div>
          <div class="impact-label">Beneficiaries Reached</div>
        </div>
        <div class="impact-card scale-in">
          <div class="impact-number" data-target="6">0</div>
          <div class="impact-label">Major Initiatives</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Events Section -->
  <section class="section section-light" id="events">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">What's Happening</span>
        <h2>Events</h2>
        <p>Join us in our upcoming and recent events that drive awareness and community action</p>
      </div>
      <div class="events-grid">

        <div class="event-card fade-in">
          <div class="event-image">
            <img src="https://images.pexels.com/photos/1464227/pexels-photo-1464227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="World Water Day 2025" />
            <span class="event-category">Community</span>
          </div>
          <div class="event-content">
            <div class="event-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              22 March 2025
            </div>
            <h4>World Water Day 2025</h4>
            <p>This event highlights the importance of water conservation and collective action to ensure clean water for all.</p>
            <a href="#contact" class="event-read-more">read more</a>
          </div>
        </div>

        <div class="event-card fade-in">
          <div class="event-image">
            <img src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600" alt="International Day of Happiness 2025" />
            <span class="event-category">Community</span>
          </div>
          <div class="event-content">
            <div class="event-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              20 March 2025
            </div>
            <h4>International Day of Happiness 2025</h4>
            <p>Join us in spreading joy, positivity, and well-being through engaging activities and inspiring discussions.</p>
            <a href="#contact" class="event-read-more">read more</a>
          </div>
        </div>

        <div class="event-card fade-in">
          <div class="event-image">
            <img src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600" alt="International Day of Women and Girls in Science 2025" />
            <span class="event-category education">Education</span>
          </div>
          <div class="event-content">
            <div class="event-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              11 February 2025
            </div>
            <h4>International Day of Women and Girls in Science 2025</h4>
            <p>Join us on February 11, 2025, to celebrate the International Day of Women and Girls in Science.</p>
            <a href="#contact" class="event-read-more">read more</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Why It Matters Section -->
  <section class="section section-gray" id="matters">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Our Purpose</span>
        <h2>Why Our Work Matters</h2>
        <p>Every initiative creates ripples of positive change in society</p>
      </div>
      <div class="matters-content">
        <div class="matter-card fade-in">
          <div class="matter-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h4>Empowering Communities</h4>
          <p>Our projects directly impact lives by providing essential resources, education, and opportunities. From feeding the hungry to educating children, we address fundamental human needs that enable communities to thrive.</p>
        </div>
        <div class="matter-card fade-in">
          <div class="matter-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-600)" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <h4>Creating Sustainable Change</h4>
          <p>We focus on long-term solutions rather than temporary fixes. Through skill development and education, we equip individuals with tools to break the cycle of poverty and build independent, dignified lives.</p>
        </div>
        <div class="matter-card fade-in">
          <div class="matter-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-500)" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <h4>Building a Better Future</h4>
          <p>Environmental conservation and animal welfare ensure a healthier planet for future generations. Our holistic approach considers the interconnectedness of human welfare, animal welfare, and environmental health.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Volunteer Section -->
  <section class="section volunteer" id="volunteer">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Join Us</span>
        <h2>Be the Change</h2>
        <p>Your contribution can make a real difference in someone's life</p>
      </div>
      <div class="volunteer-content">
        <div class="volunteer-image slide-left">
          <img src="https://inamigosfoundation.org.in/public/storage/gallery/1738238744.jpg" alt="Volunteers working together" />
        </div>
        <div class="volunteer-text slide-right">
          <h3>Why Volunteer With Us?</h3>
          <p>Volunteering with InAmigos Foundation is more than giving back — it's about becoming part of a movement that transforms lives. Our volunteers come from diverse backgrounds united by a common purpose: to create positive change.</p>
          <div class="volunteer-benefits">
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>Make a tangible impact in communities across India</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>Gain valuable skills and real-world experience</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>Connect with like-minded individuals passionate about change</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>Receive certificates and recognition for your contribution</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>Be part of a certified, transparent organisation</span>
            </div>
          </div>
          <a href="#contact" class="btn btn-primary">
            Join Our Mission
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="section gallery" id="gallery">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Moments</span>
        <h2>Our Journey in Pictures</h2>
        <p>Capturing the smiles, the efforts, and the impact we create together</p>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item fade-in">
          <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051382.jpg"  />
          <div class="gallery-overlay"><span class="gallery-caption"></span></div>
        </div>
        <div class="gallery-item fade-in">
          <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg"  />
          <div class="gallery-overlay"><span class="gallery-caption"></span></div>
        </div>
        <div class="gallery-item fade-in">
          <img src="https://inamigosfoundation.org.in/public/storage/gallery/1738054458.jpg"  />
          <div class="gallery-overlay"><span class="gallery-caption"></span></div>
        </div>
        <div class="gallery-item fade-in">
          <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg"  />
          <div class="gallery-overlay"><span class="gallery-caption"></span></div>
        </div>
        <div class="gallery-item fade-in">
          <img src="https://inamigosfoundation.org.in/public/storage/gallery/1690908403.jpg"  />
          <div class="gallery-overlay"><span class="gallery-caption"></span></div>
        </div>
        <div class="gallery-item fade-in">
          <img src="https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg?auto=compress&cs=tinysrgb&w=400"  />
          <div class="gallery-overlay"><span class="gallery-caption"></span></div>
        </div>
        <div class="gallery-item fade-in">
          <img src="https://inamigosfoundation.org.in/public/storage/gallery/1690908359.jpg"  />
          <div class="gallery-overlay"><span class="gallery-caption"></span></div>
        </div>
        <div class="gallery-item fade-in">
          <img src="https://inamigosfoundation.org.in/public/storage/gallery/1690908380.jpg"  />
          <div class="gallery-overlay"><span class="gallery-caption"></span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Donate Section -->
  <section class="section donate-section" id="donate">
    <div class="container">
      <div class="donate-wrapper">
        <div class="donate-info slide-left">
          <h2>Thanks For Your Support!</h2>
          <p><strong>InAmigos Foundation is a Registered Non-Profit Organization under the Companies Act 2013, Licensed by the Central Government.</strong></p>
          <ul class="donate-credentials">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span><strong>80G & 12A Certified:</strong> Approved by the Commissioner of Income Tax after thorough compliance and proof of impactful work.</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>NGO DARPAN Registered with NITI Aayog (Govt. Body)</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>CSR-1 Registered</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>IAF ISO 9001:2015 Certified (International Accreditation Forum)</span>
            </li>
          </ul>
          <p class="donate-legal">All legal documents are accessible via the Ministry of Corporate Affairs website. We maintain transparent records.</p>
          <div class="donate-contact">
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@inamigosfoundation.org.in
            </p>
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 6267309902
            </p>
          </div>
        </div>

        <div class="donate-form-card slide-right">
          <h3>Payment Details</h3>
          <div class="donate-divider"></div>
          <form id="donateForm">
            <div class="donate-form-group">
              <label for="donateAmount">Amount <span class="required">*</span></label>
              <div class="amount-input-wrapper">
                <span class="currency-symbol">&#8377;</span>
                <input type="number" id="donateAmount" name="amount" placeholder="Enter Amount" min="1" required />
              </div>
              <div class="amount-presets">
                <button type="button" class="preset-btn" data-amount="100">&#8377;100</button>
                <button type="button" class="preset-btn" data-amount="500">&#8377;500</button>
                <button type="button" class="preset-btn" data-amount="1000">&#8377;1000</button>
                <button type="button" class="preset-btn" data-amount="5000">&#8377;5000</button>
              </div>
            </div>
            <div class="donate-form-group">
              <label for="donateEmail">Email <span class="required">*</span></label>
              <input type="email" id="donateEmail" name="email" placeholder="your@email.com" required />
            </div>
            <div class="donate-form-group">
              <label for="donatePhone">Phone <span class="required">*</span></label>
              <div class="phone-input-wrapper">
                <span class="phone-code">IN +91</span>
                <input type="tel" id="donatePhone" name="phone" placeholder="10-digit number" maxlength="10" required />
              </div>
            </div>
            <div class="payment-methods">
              <span class="pm-badge">UPI</span>
              <span class="pm-badge">VISA</span>
              <span class="pm-badge">Mastercard</span>
              <span class="pm-badge">RuPay</span>
            </div>
            <button type="submit" class="btn-donate" id="donateBtnSubmit">
              Donate &#8377;<span id="donateAmountDisplay">0.00</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="section contact" id="contact">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Get in Touch</span>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Reach out to learn more or get involved.</p>
      </div>
      <div class="contact-content">
        <div class="contact-info slide-left">
          <h3>Let's Connect</h3>
          <p>Whether you want to volunteer, donate, partner with us, or simply learn more about our work, we're here to answer your questions.</p>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@inamigosfoundation.org.in</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 6267309902</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4>Website</h4>
                <p>inamigosfoundation.org.in</p>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form slide-right">
          <form id="contactForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="How can we help?" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" class="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>In<span>Amigos</span> Foundation</h3>
        <p>Uniting Minds for Change. We are committed to creating positive social impact through education, food distribution, women empowerment, environmental sustainability, animal welfare, and skill development.</p>
        <div class="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener" class="social-link" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#impact">Our Impact</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#volunteer">Volunteers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="mailto:info@inamigosfoundation.org.in">info@inamigosfoundation.org.in</a></li>
          <li><a href="tel:+916267309902">+91 6267309902</a></li>
          <li><a href="#donate">Donate Now</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 InAmigos Foundation. All rights reserved.</p>
      <p>Made with <span>&#10084;</span> for a better world</p>
    </div>
  </footer>
`;

const initApp = () => {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('impact-card')) {
          const numberEl = entry.target.querySelector('.impact-number');
          if (numberEl && !numberEl.classList.contains('counted')) {
            animateCounter(numberEl);
            numberEl.classList.add('counted');
          }
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .scale-in, .slide-left, .slide-right, .impact-card').forEach(el => {
    observer.observe(el);
  });

  // Staggered delays
  document.querySelectorAll('.project-card').forEach((card, i) => { card.style.transitionDelay = `${i * 0.1}s`; });
  document.querySelectorAll('.gallery-item').forEach((item, i) => { item.style.transitionDelay = `${i * 0.05}s`; });
  document.querySelectorAll('.impact-card').forEach((card, i) => { card.style.transitionDelay = `${i * 0.15}s`; });
  document.querySelectorAll('.event-card').forEach((card, i) => { card.style.transitionDelay = `${i * 0.1}s`; });

  // Counter animation
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const step = target / (2000 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = formatNumber(target);
        clearInterval(timer);
      } else {
        element.textContent = formatNumber(Math.floor(current));
      }
    }, 16);
  }

  function formatNumber(num) {
    if (num >= 1000) return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K+';
    return num + '+';
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  mobileToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        navLinks?.classList.remove('active');
        mobileToggle?.classList.remove('active');
      }
    });
  });

  // Contact form
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = 'Message Sent!';
    btn.style.background = 'var(--secondary-600)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  });

  // Donate form — amount presets
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const amount = btn.getAttribute('data-amount');
      document.getElementById('donateAmount').value = amount;
      updateDonateDisplay(amount);
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.getElementById('donateAmount')?.addEventListener('input', (e) => {
    updateDonateDisplay(e.target.value);
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  });

  function updateDonateDisplay(value) {
    const display = document.getElementById('donateAmountDisplay');
    if (display) {
      const num = parseFloat(value) || 0;
      display.textContent = num.toFixed(2);
    }
  }

  document.getElementById('donateForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('donateAmount').value;
    const email = document.getElementById('donateEmail').value;
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }
    const btn = document.getElementById('donateBtnSubmit');
    btn.textContent = 'Processing...';
    btn.disabled = true;
    setTimeout(() => {
      alert(`Thank you for your generous donation of ₹${parseFloat(amount).toFixed(2)}! We will send a confirmation to ${email}.`);
      e.target.reset();
      document.getElementById('donateAmountDisplay').textContent = '0.00';
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.textContent = 'Donate ₹0.00';
      btn.disabled = false;
    }, 1500);
  });
};

document.addEventListener('DOMContentLoaded', initApp);
