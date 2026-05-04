import { Clock, MapPin, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import player from "@/assets/player.png";

const HeroBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-hero text-hero-foreground rounded-2xl overflow-hidden min-h-[16rem] md:h-72 flex flex-col md:flex-row">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center text-[14rem] md:text-[20rem] leading-none select-none pointer-events-none">
        🛡️
      </div>
      <div className="relative w-1/3 hidden md:block">
        <img src={player} alt="Featured player" width={800} height={800} className="absolute bottom-0 left-0 h-full w-auto object-contain object-bottom" />
      </div>
      <div className="relative flex-1 flex flex-col justify-center p-5 md:p-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wide">BARCELONA</h1>
        <div className="flex items-center gap-2 my-2">
          <div className="h-px w-12 bg-hero-foreground/40" />
          <div className="h-px w-12 bg-hero-foreground/40" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wide">REAL MARDID</h2>
        <div className="flex items-center gap-3 mt-4 text-sm">
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">🔴</span>
          <span className="opacity-80">vs</span>
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">⚪</span>
        </div>
        <div className="flex items-center gap-5 mt-3 text-sm">
          <span className="flex items-center gap-1.5"><Clock size={14} /> 5:00 PM</span>
          <span className="flex items-center gap-1.5"><MapPin size={14} /> Spain</span>
        </div>
      </div>
      <div className="relative flex md:flex-col justify-between md:justify-center items-center md:items-end p-5 md:p-8 md:w-64 gap-3">
        <div>
          <p className="text-lg md:text-2xl font-bold leading-tight md:text-right">Up To $50</p>
          <p className="text-lg md:text-2xl font-bold leading-tight md:text-right">Free Matched</p>
        </div>
        <button
          onClick={() => navigate("/coming-soon/join-now")}
          className="md:mt-4 bg-white text-foreground rounded-full px-5 py-2 text-sm font-semibold flex items-center gap-2 hover:bg-white/90"
        >
          Join Now <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
