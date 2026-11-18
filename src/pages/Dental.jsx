import { ArrowRight, Check, Clock3, Heart, MapPin, Menu, Phone, ShieldCheck, Smile, Star, Sparkles, CalendarDays } from "lucide-react";
import DentalNavbar from "../components/dental/DentalNavbar";
import SectionHeading from "../components/common/SectionHeading";
import Footer from "../components/common/Footer";

const treatments = [
  ["01", "General dentistry", "Thoughtful check-ups, cleaning and everyday dental care.", "↗"],
  ["02", "Cosmetic dentistry", "Personalised options to help you feel confident in your smile.", "↗"],
  ["03", "Teeth straightening", "Explore modern options designed around your lifestyle.", "↗"],
  ["04", "Dental implants", "A considered approach to replacing missing teeth.", "↗"]
];

export default function Dental() {
  return (
    <div className="dental-site">
      <DentalNavbar />
      <main>
        <section className="dental-hero container">
          <div className="dental-hero-copy"><span className="eyebrow"><span className="eyebrow-dot" /> A MORE PERSONAL KIND OF DENTISTRY</span><h1>Feel good about<br />your <em>smile.</em></h1><p>Modern dentistry, genuine people and a calmer experience from your very first visit.</p><div className="hero-actions"><a className="btn btn-teal" href="#contact">Book your visit <ArrowRight size={17} /></a><a className="text-link" href="#care">Explore treatments <ArrowRight size={16} /></a></div><div className="dental-trust"><div className="avatar-stack"><span>J</span><span>A</span><span>M</span></div><div><div className="stars">★★★★★</div><small>Care that puts people first</small></div></div></div>
          <div className="dental-hero-visual"><img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1100&q=85" alt="Bright modern dental clinic treatment room" /><div className="hero-image-tag"><span className="tag-icon"><Sparkles size={19} /></span><div><strong>A brighter kind of care</strong><small>Comfort comes first</small></div></div><div className="hero-side-note">YOUR SMILE, YOUR WAY — EST. 2012</div></div>
        </section>
        <section className="dental-proof"><div className="container proof-grid"><div><strong>01</strong><span>Personalised<br />treatment plans</span></div><div><strong>02</strong><span>Clear advice,<br />no pressure</span></div><div><strong>03</strong><span>Modern, welcoming<br />environment</span></div><div><strong>04</strong><span>Care for every<br />stage of life</span></div></div></section>
        <section className="dental-services section-pad container" id="care"><SectionHeading eyebrow="CARE THAT FITS YOU" title={<>The right care.<br /><em>For every smile.</em></>} description="From your regular check-up to a complete smile refresh, we'll help you understand your options and feel confident about your care." /><div className="treatment-list">{treatments.map(([num, title, desc, arrow]) => <a className="treatment-row" href="#contact" key={num}><span className="treatment-num">{num}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="treatment-arrow">{arrow}</span></a>)}</div></section>
        <section className="dental-about" id="about"><div className="container dental-about-grid"><div className="about-image"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85" alt="Welcoming modern dental clinic interior" /><div className="about-stamp"><Heart size={20} /><span>PEOPLE<br />BEFORE<br />PROCEDURES</span></div></div><div className="about-copy"><span className="eyebrow">A DIFFERENT DENTAL EXPERIENCE</span><h2>It's not just about teeth. <em>It's about you.</em></h2><p>We believe great dental care starts with listening. Our team takes the time to understand your concerns, explain your choices and make every visit feel a little easier.</p><ul><li><Check /> Friendly, judgement-free conversations</li><li><Check /> Treatment options explained clearly</li><li><Check /> A calm and welcoming environment</li></ul><a href="#contact" className="text-link">Get to know us <ArrowRight size={16} /></a></div></div></section>
        <section className="dental-review section-pad" id="reviews"><div className="container review-inner"><SectionHeading eyebrow="KIND WORDS" title="A little reassurance goes a long way." description="The best part of our work is hearing that patients feel comfortable, informed and cared for." /><div className="review-card"><div className="review-stars">★★★★★</div><blockquote>“The team made me feel comfortable from the moment I walked in. Everything was explained clearly and the whole experience was so much easier than I expected.”</blockquote><div className="review-person"><span className="review-avatar">S</span><div><strong>Sarah M.</strong><small>Patient feedback · Illustrative sample</small></div></div></div></div></section>
        <section className="dental-cta" id="contact"><div className="container dental-cta-inner"><div><span className="eyebrow">YOUR NEXT STEP STARTS HERE</span><h2>Ready for a more confident <em>smile?</em></h2><p>Tell us what you need. We'll help you take it one step at a time.</p></div><div className="cta-actions"><a className="btn btn-white" href="mailto:hello@example.com?subject=Appointment%20enquiry">Request an appointment <ArrowRight size={17} /></a><a href="tel:+10000000000" className="cta-phone"><Phone size={16} /> Call our friendly team</a></div></div></section>
        <section className="dental-contact-strip container"><div><MapPin /><span><strong>Find us</strong><small>123 Wellness Avenue, Your City</small></span></div><div><Clock3 /><span><strong>Opening hours</strong><small>Mon–Fri, 8:30am–5:30pm</small></span></div><div><ShieldCheck /><span><strong>Here to help</strong><small>Ask us about payment options</small></span></div></section>
      </main>
      <Footer brand="everwell dental" theme="dental" />
    </div>
  );
}
