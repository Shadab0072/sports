import { ChevronLeft, ChevronRight } from "lucide-react";

const teams = [
  { name: "Liverpool", d: 6, l: 2, ga: 21, gd: 16, pts: 33, logo: "🔴" },
  { name: "Man United", d: 3, l: 3, ga: 24, gd: 9, pts: 33, logo: "🟠" },
  { name: "Leicester City", d: 2, l: 5, ga: 21, gd: 10, pts: 32, logo: "🔵" },
  { name: "Villareal", d: 8, l: 2, ga: 10, gd: 16, pts: 32, logo: "🟡" },
  { name: "Villareal", d: 8, l: 2, ga: 10, gd: 16, pts: 32, logo: "🟡" },
];

const MatchCard = () => (
  <div className="border border-border rounded-lg p-3">
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center gap-1 flex-1">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">CHE</div>
        <span className="text-xs text-foreground">Chelsea</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] text-muted-foreground">Premier League</span>
        <span className="text-lg font-bold text-foreground">1 : 2</span>
        <span className="text-[10px] text-primary">● 49:30</span>
      </div>
      <div className="flex flex-col items-center gap-1 flex-1">
        <div className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center text-xs font-bold">LEI</div>
        <span className="text-xs text-foreground">Leicester C</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 mt-3">
      {["1.8", "2.1", "1.3"].map((o) => (
        <button key={o} className="text-xs border border-border rounded py-1 text-foreground hover:bg-secondary">
          {o}
        </button>
      ))}
    </div>
  </div>
);

const LeagueTable = ({ name, country, flag }: { name: string; country: string; flag: string }) => (
  <div className="mt-4">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <span className="text-lg">{flag}</span>
        <span className="font-semibold text-foreground text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{country}</span>
      </div>
      <ChevronRight size={16} className="text-muted-foreground" />
    </div>
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="grid grid-cols-6 gap-1 text-[10px] text-muted-foreground px-3 py-2 border-b border-border">
        <span className="col-span-2">Team</span>
        <span className="text-center">D</span>
        <span className="text-center">L</span>
        <span className="text-center">Ga</span>
        <span className="text-center">Gd</span>
        <span className="text-center">Pts</span>
      </div>
      {teams.map((t, i) => (
        <div key={i} className="grid grid-cols-6 gap-1 text-xs px-3 py-2 items-center hover:bg-secondary">
          <span className="col-span-2 flex items-center gap-1.5 text-foreground">
            <span>{t.logo}</span>
            <span className="truncate">{t.name}</span>
          </span>
          <span className="text-center text-foreground">{t.d}</span>
          <span className="text-center text-foreground">{t.l}</span>
          <span className="text-center text-foreground">{t.ga}</span>
          <span className="text-center text-foreground">{t.gd}</span>
          <span className="text-center text-foreground font-semibold">{t.pts}</span>
        </div>
      ))}
    </div>
  </div>
);

const LiveMatches = () => {
  return (
    <aside className="w-full lg:w-80 bg-panel border-r border-border p-4 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-foreground">Live Matches</h2>
        <div className="flex gap-1">
          <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground"><ChevronLeft size={14} /></button>
          <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-primary"><ChevronRight size={14} /></button>
        </div>
      </div>
      <MatchCard />
      <LeagueTable name="Premier League" country="England" flag="🏴󠁧󠁢󠁥󠁮󠁧󠁿" />
      <LeagueTable name="La Liga" country="Spain" flag="🇪🇸" />

      <div className="mt-6 flex items-center justify-between mb-3">
        <h2 className="font-bold text-foreground">Trending Now</h2>
        <div className="flex gap-1">
          <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground"><ChevronLeft size={14} /></button>
          <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-primary"><ChevronRight size={14} /></button>
        </div>
      </div>
      <MatchCard />
    </aside>
  );
};

export default LiveMatches;
