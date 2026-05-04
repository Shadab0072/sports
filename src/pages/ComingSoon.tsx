import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { ThemeProvider } from "@/components/ThemeProvider";

const ComingSoon = () => {
  const navigate = useNavigate();
  const { feature } = useParams();
  const title = feature ? feature.replace(/-/g, " ") : "This feature";

  return (
    <ThemeProvider>
      <div className="min-h-screen flex bg-background text-foreground">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />
          <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Sparkles size={36} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold capitalize mb-2">{title}</h1>
            <p className="text-muted-foreground max-w-md mb-6">
              This feature will be added soon. Stay tuned for updates!
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold flex items-center gap-2 hover:opacity-90"
            >
              <ArrowLeft size={16} /> Back to Dashboard
            </button>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ComingSoon;
