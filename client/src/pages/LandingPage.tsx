import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProblemSolution from "@/components/ProblemSolution";
import TeamContact from "@/components/TeamContact";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ProblemSolution />
      <TeamContact />
      <Footer />
    </div>
  );
}
