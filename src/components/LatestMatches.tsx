import { useState } from "react";
import { Clock, MapPin, Heart, ChevronRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const allMatches = [
  { id: 1, sport: "Football", region: "Spain", home: "Barcelona", away: "Real Mardid", time: "5:00 PM", place: "Spain", featured: true, hLogo: "🔴", aLogo: "⚪" },
  { id: 2, sport: "Football", region: "London", home: "NY Yorks", away: "NY Yorks", time: "5:00 PM", place: "London", hLogo: "⚫", aLogo: "🔴" },
  { id: 3, sport: "Cricket", region: "London", home: "NY Yorks", away: "NY Yorks", time: "5:00 PM", place: "London", hLogo: "🔵", aLogo: "🔵" },
  { id: 4, sport: "Football", region: "London", home: "NY Yorks", away: "NY Yorks", time: "5:00 PM", place: "London", hLogo: "🟠", aLogo: "🔵" },
];

const sports = ["Football", "Cricket", "Basketball", "Tennis"];
const regions = ["Anywhere", "Spain", "London", "England"];

const Dropdown = ({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="border border-border rounded-full px-3 py-1 flex items-center gap-1 text-foreground hover:border-primary"
      >
        {value} <ChevronDown size={12} />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 bg-panel border border-border rounded-lg shadow-lg z-20 min-w-[120px] py-1">
          {options.map((o) => (
            <button
              key={o}
              onClick={() => { onChange(o); setOpen(false); }}
              className={`block w-full text-left px-3 py-1.5 text-xs hover:bg-secondary ${value === o ? "text-primary" : "text-foreground"}`}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const LatestMatches = () => {
  const navigate = useNavigate();
  const [sport, setSport] = useState("Football");
  const [region, setRegion] = useState("Anywhere");
  const [favorites, setFavorites] = useState<Record<number, boolean>>({ 1: true });

  const filtered = allMatches.filter(
    (m) => (sport === "Football" || m.sport === sport) && (region === "Anywhere" || m.region === region)
  );

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-lg font-bold text-foreground">Latest Matches</h2>
        <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
          <span>Filter :</span>
          <Dropdown value={sport} options={sports} onChange={setSport} />
          <Dropdown value={region} options={regions} onChange={setRegion} />
          <button onClick={() => navigate("/coming-soon/all-matches")} className="text-foreground hover:text-primary">View All</button>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-6">No matches found for the selected filters.</p>
        )}
        {filtered.map((m) => (
          <div
            key={m.id}
            className={`flex items-center px-3 sm:px-4 py-3 rounded-xl border transition gap-2 ${
              m.featured
                ? "bg-hero text-hero-foreground border-transparent"
                : "bg-panel border-border text-foreground hover:border-primary/40"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">{m.hLogo}</span>
              <span className="text-xs sm:text-sm font-medium truncate">{m.home}</span>
            </div>
            <div className="px-2 text-xs opacity-70">vs</div>
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">{m.aLogo}</span>
              <span className="text-xs sm:text-sm font-medium truncate">{m.away}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-sm w-24">
              <Clock size={14} /> {m.time}
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-sm w-24">
              <MapPin size={14} /> {m.place}
            </div>
            <button
              onClick={() => setFavorites((f) => ({ ...f, [m.id]: !f[m.id] }))}
              className={favorites[m.id] ? "text-heart" : "opacity-60 hover:opacity-100"}
              aria-label="Favorite"
            >
              <Heart size={18} fill={favorites[m.id] ? "currentColor" : "none"} />
            </button>
            <button
              onClick={() => navigate(`/coming-soon/match-${m.id}`)}
              className={`hidden sm:flex items-center gap-1 text-sm font-medium ml-2 ${m.featured ? "text-hero-foreground" : "text-foreground hover:text-primary"}`}
            >
              View Details <ChevronRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestMatches;
