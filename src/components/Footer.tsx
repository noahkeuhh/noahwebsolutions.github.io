const Footer = () => (
  <footer className="section-padding !py-8 border-t border-border">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display font-bold text-lg">
        noah<span className="text-primary">.</span>
      </span>
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} Noah Bartels. Alle rechten voorbehouden.
      </p>
    </div>
  </footer>
);

export default Footer;
