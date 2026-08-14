import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { useTranslation } from "@/i18n";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t.seo.notFound.title} description={t.seo.notFound.description} path="/404" />
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center max-w-md">
          <p className="font-mono text-primary text-sm mb-4">404</p>
          <h1 className="mb-4 text-title font-bold">{t.notFound.title}</h1>
          <p className="mb-8 text-muted-foreground">{t.notFound.description}</p>
          <Link
            to="/"
            className="font-mono text-sm px-4 py-2 rounded-md border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t.notFound.backHome}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
