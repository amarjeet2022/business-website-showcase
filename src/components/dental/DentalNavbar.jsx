import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function DentalNavbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="dental-nav-wrap" id="top">
      <nav className="dental-nav container">
        <Link to="/dental" className="dental-logo" onClick={close}>
          <span className="logo-mark">+</span>
          <span>everwell<span className="logo-light"> dental</span><small>CARE THAT MAKES YOU SMILE</small></span>
        </Link>
        <button className="mobile-menu-toggle dental-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={`dental-nav-links ${open ? "is-open" : ""}`}>
          <a href="#care" onClick={close}>Treatments</a>
          <a href="#about" onClick={close}>Our approach</a>
          <a href="#reviews" onClick={close}>Patient stories</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a className="nav-appointment" href="#contact" onClick={close}><Phone size={16} /> Book a visit</a>
        </div>
      </nav>
    </header>
  );
}
