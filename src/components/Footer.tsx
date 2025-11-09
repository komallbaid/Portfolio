export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background/80 backdrop-blur-lg">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl text-primary-foreground">KB</span>
              </div>
              <span className="text-lg">Komal Baid</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer | Software Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    document
                      .getElementById(link.toLowerCase())
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="mailto:komalbaid2000@gmail.com"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Gmail
              </a>
              <a
                href="https://github.com/komallbaid"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/komallbaid"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Komal Baid. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}