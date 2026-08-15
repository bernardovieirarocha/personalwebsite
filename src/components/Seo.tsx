import { Head } from "vite-react-ssg";
import { useTranslation } from "@/i18n";

export const SITE_URL = "https://bernardorocha.com";

type SeoProps = {
  /** Título da aba e do card social. Sem sufixo: ele é adicionado aqui. */
  title: string;
  description: string;
  /** Caminho da rota, começando com "/". Vira canonical e og:url. */
  path: string;
  /** Imagem do card social, relativa à raiz. */
  image?: string;
  type?: "website" | "profile" | "article";
  /**
   * Imagem que é candidata a LCP nesta rota. Vira <link rel="preload">.
   * Só a home tem uma (o avatar do hero); preloadar em toda rota faria o
   * /resume baixar uma imagem que ele nem mostra.
   */
  preloadImage?: string;
};

/**
 * Injeta título, description, canonical e tags Open Graph/Twitter por rota.
 * Durante o build o vite-react-ssg escreve isso direto no HTML estático,
 * então previews de link e crawlers enxergam o conteúdo certo sem executar JS.
 */
const Seo = ({
  title,
  description,
  path,
  image = "/og-image.png",
  type = "website",
  preloadImage,
}: SeoProps) => {
  const { language } = useTranslation();
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const imageUrl = `${SITE_URL}${image}`;

  return (
    <Head>
      <html lang={language === "pt" ? "pt-BR" : "en"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {preloadImage && <link rel="preload" as="image" href={preloadImage} />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Bernardo Rocha" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === "pt" ? "pt_BR" : "en_US"} />
      <meta property="og:locale:alternate" content={language === "pt" ? "en_US" : "pt_BR"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};

export default Seo;
