import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import rivloLogo from "@/assets/logo-rivlo.webp";
import { redirectToStore } from "@/lib/store-redirect";

const sectionLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const pageLinks = [
  { label: "Best Step Counter App", href: "/best-step-counter-app" },
  { label: "Fitness Challenge App", href: "/fitness-challenge-app" },
  { label: "Fitness Leaderboard", href: "/leaderboard" },
  { label: "Step Goals & Milestones", href: "/milestones" },
  { label: "Rivlo vs Pacer", href: "/compare/rivlo-vs-pacer" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSectionClick = (href: string) => {
    setMobileOpen(false);
    if (isHome) {
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={rivloLogo} alt="Rivlo" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-foreground font-grotesk tracking-tight">Rivlo</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {/* Homepage sections – only show on home */}
            {isHome &&
              sectionLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}

            {/* Pages dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pages
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute top-full right-0 mt-2 w-56 rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-xl transition-all duration-200 origin-top ${
                  pagesOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {pageLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setPagesOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === link.href
                          ? "text-primary font-medium bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={redirectToStore}
              className="hidden sm:flex items-center px-5 py-2 rounded-full bg-gold text-gold-foreground text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold-sm)]"
            >
              Join Now
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-72 bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-out md:hidden overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-8 gap-1">
          {isHome && (
            <>
              <p className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider mb-2">
                Sections
              </p>
              {sectionLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(link.href);
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-foreground py-2.5 border-b border-border/30 transition-all duration-300"
                  style={{
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.3s ease ${0.1 + i * 0.04}s, transform 0.3s ease ${0.1 + i * 0.04}s`,
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="h-4" />
            </>
          )}

          <p
            className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider mb-2"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transition: `opacity 0.3s ease 0.3s`,
            }}
          >
            Pages
          </p>
          {pageLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-medium py-2.5 border-b border-border/30 transition-all duration-300 ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.3s ease ${0.32 + i * 0.04}s, transform 0.3s ease ${0.32 + i * 0.04}s`,
              }}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => {
              setMobileOpen(false);
              redirectToStore();
            }}
            className="mt-6 flex items-center justify-center px-5 py-3 rounded-full bg-gold text-gold-foreground text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.3s ease 0.55s, transform 0.3s ease 0.55s`,
            }}
          >
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
