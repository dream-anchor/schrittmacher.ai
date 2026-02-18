import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 schrittmacher.ai · Dream & Anchor Handelsgesellschaft mbH · Grünwald</p>
        <div className="flex items-center gap-4">
          <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
          <a href="https://linkedin.com/in/antoinesick" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
