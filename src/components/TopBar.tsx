import { useState } from "react";
import { Menu, Search, Bell, Mail, Heart, ChevronDown, Sun, Moon, X, LayoutGrid, Users, BarChart3, Trophy } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Live Match", slug: "" },
  { label: "Scorecard", slug: "scorecard" },
  { label: "Commentary", slug: "commentary" },
  { label: "Players", slug: "players" },
  { label: "My Matches", slug: "my-matches" },
];

const TopBar = () => {
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleNav = (slug: string) => {
    setMobileOpen(false);
    if (!slug) navigate("/");
    else navigate(`/coming-soon/${slug}`);
  };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/coming-soon/search-${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="bg-topbar border-b border-border flex items-center px-4 h-16 gap-3 relative">
      <button
        onClick={() => setMobileOpen((o) => !o)}
        className="bg-primary text-primary-foreground w-10 h-10 rounded-md flex items-center justify-center lg:hidden"
        aria-label="Menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className="hidden lg:flex items-center gap-6 ml-2">
        {navItems.map((n, i) => {
          const active = (i === 0 && pathname === "/") || (n.slug && pathname === `/coming-soon/${n.slug}`);
          return (
            <button
              key={n.label}
              onClick={() => handleNav(n.slug)}
              className={`text-sm font-medium relative py-5 ${
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active && <span className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />}
              {n.label}
            </button>
          );
        })}
      </nav>

      <form onSubmit={onSearch} className="flex-1 max-w-md mx-auto relative hidden sm:block">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Matches, Players, Stats ..."
          className="w-full bg-secondary text-foreground placeholder:text-muted-foreground rounded-full pl-10 pr-12 py-2 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center" aria-label="Search">
          <Search size={14} />
        </button>
      </form>

      <div className="flex items-center gap-3 ml-auto text-muted-foreground">
        <button onClick={toggle} className="hover:text-foreground" aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button onClick={() => navigate("/coming-soon/notifications")} className="hover:text-foreground" aria-label="Notifications"><Bell size={18} /></button>
        <button onClick={() => navigate("/coming-soon/messages")} className="hover:text-foreground hidden sm:inline" aria-label="Messages"><Mail size={18} /></button>
        <button onClick={() => navigate("/coming-soon/favorites")} className="hover:text-foreground hidden sm:inline" aria-label="Favorites"><Heart size={18} /></button>
        <button onClick={() => navigate("/coming-soon/profile")} className="flex items-center gap-2 pl-3 border-l border-border hover:text-foreground">
          <img src="https://i.pravatar.cc/40?img=47" alt="User" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-foreground text-sm font-medium hidden md:inline">Jane Doe</span>
          <ChevronDown size={14} />
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-topbar border-b border-border lg:hidden z-40 shadow-lg">
          <div className="flex flex-col p-2">
            {navItems.map((n, i) => {
              const active = (i === 0 && pathname === "/") || (n.slug && pathname === `/coming-soon/${n.slug}`);
              return (
                <button
                  key={n.label}
                  onClick={() => handleNav(n.slug)}
                  className={`text-left px-4 py-3 rounded-md text-sm font-medium ${
                    active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {n.label}
                </button>
              );
            })}
            <div className="border-t border-border my-2" />
            <div className="grid grid-cols-4 gap-2 p-2 md:hidden">
              {[
                { Icon: LayoutGrid, slug: "dashboard" },
                { Icon: Users, slug: "teams" },
                { Icon: BarChart3, slug: "stats" },
                { Icon: Trophy, slug: "" },
              ].map(({ Icon, slug }) => (
                <button key={slug || "home"} onClick={() => handleNav(slug)} className="flex items-center justify-center p-3 rounded-md bg-secondary text-foreground">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopBar;
