import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Travel from "@/components/Travel";
import QuotesSection from "@/components/QuotesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      <div className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Travel />
          <QuotesSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

