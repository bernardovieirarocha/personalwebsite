import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n";
import { Outlet } from "react-router-dom";

/**
 * Layout raiz. Envolve todas as rotas com os providers.
 * O roteamento em si vive em src/routes.tsx (exigido pelo vite-react-ssg,
 * que precisa da lista de rotas para pré-renderizar cada página).
 */
const App = () => (
  <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Outlet />
    </TooltipProvider>
  </LanguageProvider>
);

export default App;
