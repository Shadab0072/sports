import { LayoutGrid, Users, BarChart3, Plus, Trophy } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navIcons = [
  { icon: LayoutGrid, slug: "dashboard", label: "Dashboard" },
  { icon: Users, slug: "teams", label: "Teams" },
  { icon: BarChart3, slug: "stats", label: "Statistics" },
];

const sports = [
  { e: "⚽", slug: "football" },
  { e: "🏈", slug: "american-football" },
  { e: "🏏", slug: "cricket" },
  { e: "🥊", slug: "boxing" },
  { e: "🎾", slug: "tennis" },
  { e: "🏀", slug: "basketball" },
  { e: "⚾", slug: "baseball" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <aside className="hidden md:flex w-16 flex-col items-center bg-sidebar border-r border-border py-4 gap-6">
      {navIcons.map(({ icon: Icon, slug, label }) => (
        <button
          key={slug}
          aria-label={label}
          onClick={() => navigate(`/coming-soon/${slug}`)}
          className="text-sidebar-foreground hover:text-primary transition-colors"
        >
          <Icon size={20} />
        </button>
      ))}
      <div className="relative w-full flex justify-center">
        {isHome && <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-primary rounded-r" />}
        <button onClick={() => navigate("/")} aria-label="Trophies" className="text-primary">
          <Trophy size={20} />
        </button>
      </div>
      {sports.map((s) => (
        <button
          key={s.slug}
          onClick={() => navigate(`/coming-soon/${s.slug}`)}
          className="text-sidebar-foreground hover:text-primary text-lg transition-transform hover:scale-110"
          aria-label={s.slug}
        >
          {s.e}
        </button>
      ))}
      <button
        onClick={() => navigate("/coming-soon/add")}
        className="mt-auto bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:opacity-90"
        aria-label="Add"
      >
        <Plus size={20} />
      </button>
    </aside>
  );
};

export default Sidebar;
