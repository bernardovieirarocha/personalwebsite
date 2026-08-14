import type { RouteRecord } from "vite-react-ssg";
import App from "./App";
import Index from "./pages/index";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

/**
 * Rotas do site.
 *
 * Esta lista é consumida em dois lugares:
 *  - no browser, pelo React Router;
 *  - no build, pelo vite-react-ssg, que gera um HTML estático para cada
 *    caminho listado em `SSG_ROUTES` (ver scripts/generate-sitemap.mjs).
 *
 * Ao adicionar uma rota nova, acrescente-a também em SSG_ROUTES.
 */
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "resume", element: <Resume /> },
      // "/404" é pré-renderizada para virar o dist/404.html que a Netlify serve.
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

/** Caminhos que viram HTML estático no build. Mantenha em sincronia com `routes`. */
export const SSG_ROUTES = ["/", "/resume"];
