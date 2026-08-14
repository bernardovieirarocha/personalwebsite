import { LanguageProvider } from "@/i18n";
import { Outlet } from "react-router-dom";

/**
 * Layout raiz. Envolve todas as rotas com os providers.
 * O roteamento em si vive em src/routes.tsx (exigido pelo vite-react-ssg,
 * que precisa da lista de rotas para pré-renderizar cada página).
 *
 * Não há Toaster, Sonner nem TooltipProvider aqui: nada no site dispara
 * toast ou renderiza Tooltip, e os três arrastavam sonner + radix-toast +
 * radix-tooltip para dentro do bundle sem servir a nada.
 */
const App = () => (
  <LanguageProvider>
    <Outlet />
  </LanguageProvider>
);

export default App;
