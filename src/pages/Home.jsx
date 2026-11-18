// import { ArrowUpRight, CheckCircle2, MonitorSmartphone, Palette, Target } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <main className="showcase-home">
//       <nav className="showcase-nav container"><Link to="/" className="showcase-logo">AM<span>.</span> <small>WEB EXPERIENCE STUDIO</small></Link><span>SELECTED CONCEPTS · 2026</span></nav>
//       <section className="showcase-hero container">
//         <div className="showcase-copy"><span className="eyebrow">DESIGN THAT WORKS HARDER</span><h1>Good design.<br /><em>Real business</em><br />thinking.</h1><p>Two website concepts built around what matters most: helping customers understand the value, trust the business and take the next step.</p><div className="showcase-points"><span><CheckCircle2 /> Conversion-led layouts</span><span><MonitorSmartphone /> Responsive on every screen</span><span><Palette /> Distinct brand identities</span></div></div>
//         <div className="showcase-art"><div className="art-card art-dental"><div className="art-label">01 / HEALTHCARE</div><div className="art-dental-title">A healthier<br /><i>kind of smile.</i></div><div className="art-circle">+</div><span>EVERWELL DENTAL</span></div><div className="art-card art-plumb"><div className="art-label">02 / HOME SERVICES</div><div className="art-plumb-title">Fixed right.<br /><i>First time.</i></div><div className="art-lines">WATERWISE / PLUMBING</div></div></div>
//       </section>
//       <section className="concepts container">
//         <div className="concept-heading"><span className="eyebrow">THE CONCEPTS</span><h2>Two industries.<br />Two different journeys.</h2></div>
//         <Link to="/dental" className="concept-card concept-dental"><div className="concept-meta"><span>01 — DENTAL CLINIC</span><ArrowUpRight /></div><div className="concept-image dental-image"><div className="mini-dental"><span>everwell dental</span><strong>Feel good<br />about your<br /><i>smile.</i></strong><small>PERSONAL CARE, BEAUTIFULLY DONE.</small></div></div><div className="concept-bottom"><div><h3>Everwell Dental</h3><p>Premium, calm and confidence-building.</p></div><span className="round-arrow"><ArrowUpRight /></span></div></Link>
//         <Link to="/plumbing" className="concept-card concept-plumb"><div className="concept-meta"><span>02 — PLUMBING SERVICES</span><ArrowUpRight /></div><div className="concept-image plumbing-image"><div className="mini-plumb"><span>WATERWISE / PLUMBING</span><strong>Problems<br />solved.<br /><i>Properly.</i></strong><small>FAST RESPONSE. QUALITY WORK.</small></div></div><div className="concept-bottom"><div><h3>Waterwise Plumbing</h3><p>Direct, dependable and action-focused.</p></div><span className="round-arrow"><ArrowUpRight /></span></div></Link>
//       </section>
//       <footer className="showcase-footer container"><span>DESIGNED & BUILT WITH REACT</span><span>RESPONSIVE BY DEFAULT · 2026</span></footer>
//     </main>
//   );
// }

import { ArrowUpRight, CheckCircle2, MonitorSmartphone, Palette, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="showcase-home">
      <nav className="showcase-nav container"><Link to="/" className="showcase-logo">AM<span>.</span> <small>WEB EXPERIENCE STUDIO</small></Link><span>SELECTED CONCEPTS · 2026</span></nav>
      <section className="showcase-hero container">
        <div className="showcase-copy"><span className="eyebrow">DESIGN THAT WORKS HARDER</span><h1>Good design.<br /><em>Real business</em><br />thinking.</h1><p>Two website concepts built around what matters most: helping customers understand the value, trust the business and take the next step.</p><div className="showcase-points"><span><CheckCircle2 /> Conversion-led layouts</span><span><MonitorSmartphone /> Responsive on every screen</span><span><Palette /> Distinct brand identities</span></div></div>
        <div className="showcase-art"><div className="art-card art-dental"><div className="art-label">01 / HEALTHCARE</div><div className="art-dental-title">A healthier<br /><i>kind of smile.</i></div><div className="art-circle">+</div><span>EVERWELL DENTAL</span></div><div className="art-card art-plumb"><div className="art-label">02 / HOME SERVICES</div><div className="art-plumb-title">Fixed right.<br /><i>First time.</i></div><div className="art-lines">WATERWISE / PLUMBING</div></div></div>
      </section>
      <section className="concepts container">
        <div className="concept-heading"><span className="eyebrow">THE CONCEPTS</span><h2>Two industries.<br />Two different journeys.</h2></div>
        <Link to="/dental" className="concept-card concept-dental"><div className="concept-meta"><span>01 — DENTAL CLINIC</span><ArrowUpRight /></div><div className="concept-image dental-image"><div className="mini-dental"><span>everwell dental</span><strong>Feel good<br />about your<br /><i>smile.</i></strong><small>PERSONAL CARE, BEAUTIFULLY DONE.</small></div></div><div className="concept-bottom"><div><h3>Everwell Dental</h3><p>Premium, calm and confidence-building.</p></div><span className="round-arrow"><ArrowUpRight /></span></div></Link>
        <Link to="/plumbing" className="concept-card concept-plumb"><div className="concept-meta"><span>02 — PLUMBING SERVICES</span><ArrowUpRight /></div><div className="concept-image plumbing-image"><div className="mini-plumb"><span>WATERWISE / PLUMBING</span><strong>Problems<br />solved.<br /><i>Properly.</i></strong><small>FAST RESPONSE. QUALITY WORK.</small></div></div><div className="concept-bottom"><div><h3>Waterwise Plumbing</h3><p>Direct, dependable and action-focused.</p></div><span className="round-arrow"><ArrowUpRight /></span></div></Link>
      </section>
      <section className="contact-section container" id="contact">
        <div className="contact-copy">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let’s build a website<br /><em>that works for you.</em></h2>
          <p>I’m Amarjeet Kumar, a Software Developer creating modern, responsive websites with a focus on user experience and business goals. If you’re interested in working together, let’s connect.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-linkedin" href="https://www.linkedin.com/in/amarjeet-kumar-093030258/" target="_blank" rel="noreferrer"><Linkedin size={18} /> Connect on LinkedIn <ArrowUpRight size={17} /></a>
          {/* Replace the email below with your real email address. */}
          <a className="contact-email" href="mailto:amarfashionb@gmail.com"><Mail size={18} /> amarfashionb@gmail.com</a>
          <span className="contact-note">Open to freelance projects and business website enquiries.</span>
        </div>
      </section>
      <footer className="showcase-footer container"><span>DESIGNED & BUILT BY AMARJEET KUMAR</span><a href="#contact">LET’S TALK <ArrowUpRight size={13} /></a></footer>
    </main>
  );
}
