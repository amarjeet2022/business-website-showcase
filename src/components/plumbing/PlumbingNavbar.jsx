import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

export default function PlumbingNavbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="plumb-header" id="top">
      <div className="plumb-topline"><div className="container topline-inner"><span>LOCAL EXPERTS. RELIABLE FIXES.</span><span>Available for urgent call-outs · Sample business concept</span></div></div>
      <nav className="plumb-nav container">
        <Link to="/plumbing" className="plumb-logo" onClick={close}><span className="plumb-symbol">W</span><span>WATER<span>WISE</span><small>PLUMBING & DRAINAGE</small></span></Link>
        <button className="mobile-menu-toggle plumb-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        <div className={`plumb-links ${open ? "is-open" : ""}`}>
          <a href="#services" onClick={close}>Services</a><a href="#why-us" onClick={close}>Why Waterwise</a><a href="#work" onClick={close}>Our work</a><a href="#reviews" onClick={close}>Reviews</a>
          <a className="plumb-call" href="tel:+10000000000" onClick={close}><Phone size={16} /> Call now</a>
        </div>
      </nav>
    </header>
  );
}
