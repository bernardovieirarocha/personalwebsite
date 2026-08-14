import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useTranslation } from "@/i18n";

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t.seo.home.title}
        description={t.seo.home.description}
        path="/"
        type="profile"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
