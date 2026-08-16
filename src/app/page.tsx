import Header from "@/components/Header";
import Events from "@/components/Events";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Events />
        <Services />
        <Projects />
      </main>
      <Footer />
    </>
  );
}