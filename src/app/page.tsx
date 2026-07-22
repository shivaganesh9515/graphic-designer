import Header from "@/components/Header";
import EventsSection from "@/components/EventsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen py-4 md:py-8 bg-brand-yellow font-secondary text-brand-black overflow-x-hidden">
      {/* Main Container Frame */}
      <div className="w-full max-w-3xl bg-brand-cream shadow-[0px_0px_50px_rgba(0,0,0,0.3)] relative mx-auto flex flex-col">
        <Header />

        <main className="flex-grow">
          <EventsSection />
          <ServicesSection />
          <ProjectsSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
