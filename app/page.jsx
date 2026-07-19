import { site } from "../lib/site";

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <a className="wordmark" href="#top">
            ROSS DONUTS
          </a>
          <div className="nav-links">
            <a href="#menu">Menu</a>
            <a href="#story">Our Shop</a>
            <a href="#visit">Visit</a>
            <a className="nav-call" href={site.phoneHref}>
              Call the Shop
            </a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <h1>{site.tagline}</h1>
            <p>{site.subtext}</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={site.directionsUrl}>
                Get Directions
              </a>
              <a className="btn btn-ghost" href={site.phoneHref}>
                Call Ross Donuts
              </a>
            </div>
            <p className="hero-hours">{site.hoursLine}</p>
          </div>

          {/*
            When there's a photo of the owner behind the counter, it should
            replace this one - that's the best possible hero shot.
          */}
          <div className="donut-stage">
            <img
              className="hero-photo"
              src="/images/case-tray.jpg"
              alt="An iced coffee next to a tray of freshly decorated donuts at Ross Donuts"
            />
          </div>
        </div>
      </header>

      <div className="strip">
        <span className="wrap">
          {site.address.street}, {site.address.city},{" "}
          {site.address.stateCode} &nbsp;·&nbsp; {site.hoursLine}
        </span>
      </div>

      <section className="menu" id="menu">
        <div className="wrap">
          <div className="section-head">
            <h2>Something for every morning</h2>
            <p>
              Made in-house each morning. Come early for the best pick, because
              when it sells out, it&apos;s gone.
            </p>
          </div>
          <div className="menu-cols">
            {site.menu.map((cat) => (
              <div className="menu-cat" key={cat.title}>
                <h3>{cat.title}</h3>
                <p>{cat.text}</p>
              </div>
            ))}
          </div>
          <p className="menu-note">
            Feeding a crowd? Call ahead at{" "}
            <a href={site.phoneHref}>{site.phone}</a> and we&apos;ll have your
            dozens ready.
          </p>
        </div>
      </section>

      <section className="story" id="story">
        <div className="wrap">
          <h2>A good neighborhood donut shop</h2>
          <p>
            Ross Donuts is the kind of neighborhood shop where mornings begin
            with fresh donuts, hot breakfast, and someone who remembers your
            name. Whether you are stopping in before work, bringing home a
            dozen, or treating the family, you will be welcomed like a regular.
          </p>
        </div>
      </section>

      {site.photos.length > 0 && (
        <section className="photos" id="photos">
          <div className="wrap">
            <div className="section-head">
              <h2>Fresh from the case</h2>
            </div>
            <div className="gallery-grid">
              {site.photos.map((photo) => (
                <img key={photo.src} src={photo.src} alt={photo.alt} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="reviews">
        <div className="wrap">
          <p className="rating-big">
            <span className="stars" aria-hidden="true">
              ★★★★★
            </span>{" "}
            {site.rating.line}
          </p>
          <p className="rating-sub">{site.rating.sub}</p>
          <div className="review-row">
            {site.reviews.map((quote) => (
              <blockquote key={quote}>&ldquo;{quote}&rdquo;</blockquote>
            ))}
          </div>
          <p className="rating-link">
            <a href={site.rating.reviewsUrl}>Read our reviews on Google</a>
          </p>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="wrap visit-grid">
          <div className="visit-info">
            <h2>Come see us</h2>
            <address>
              <strong>{site.name}</strong>
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </address>
            <p className="visit-hours">
              <strong>Open daily</strong>
              <br />
              5:00 AM to 12:00 PM
            </p>
            <a className="btn btn-primary btn-big" href={site.directionsUrl}>
              Get Directions
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="Map to Ross Donuts, 1417 Austin Ave, Brownwood TX"
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-grid">
          <div>
            <p className="wordmark foot-mark">ROSS DONUTS</p>
            <p className="foot-meta">
              {site.address.street}, {site.address.city},{" "}
              {site.address.stateCode} {site.address.zip} ·{" "}
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </div>
          <p className="foot-meta">
            Open daily, {site.hoursShort}. See you in the morning.
          </p>
        </div>
      </footer>

      <div className="mobile-bar" role="navigation" aria-label="Quick actions">
        <a href={site.phoneHref}>Call</a>
        <a href={site.directionsUrl}>Directions</a>
      </div>
    </>
  );
}
