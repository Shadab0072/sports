import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import LiveMatches from "@/components/LiveMatches";
import HeroBanner from "@/components/HeroBanner";
import LatestMatches from "@/components/LatestMatches";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex bg-background text-foreground">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />
          <div className="flex flex-col lg:flex-row flex-1 min-h-0">
            <LiveMatches />
            <main className="flex-1 p-4 md:p-6 overflow-y-auto">
              <HeroBanner />
              <LatestMatches />
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
