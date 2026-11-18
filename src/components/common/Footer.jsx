import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ brand, theme = "dental" }) {
  return (
    <footer className={`site-footer ${theme}-footer`}>
      <div>
        <span className="footer-brand">{brand}</span>
        <p>Thoughtful care. Clear communication. Better experiences.</p>
      </div>
      <div className="footer-links">
        <Link to="/">Portfolio home</Link>
        <a href="#top">Back to top <ArrowUpRight size={15} /></a>
      </div>
      <small>© {new Date().getFullYear()} {brand}. Demonstration website concept.</small>
    </footer>
  );
}
