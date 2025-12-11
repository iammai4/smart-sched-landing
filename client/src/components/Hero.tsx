import logoPath from "@assets/PLAN-IT_1765394831392.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-visible backdrop-opacity-10 bg-no-repeat bg-cover bg-[url('/public/bg.png')]">
      <div className="absolute inset-0 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 text-[#FDCA40]">
        <div className="flex flex-col w-full gap-2">
          <img
            src={logoPath}
            alt="Plan-it Logo"
            className="h-48 md:h-72 mx-auto drop-shadow-xl"
            data-testid="img-logo"
          />
          
          <h1
            className="text-4xl md:text-5xl text-shadow-md lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tight leading-tight"
            style={{ fontFamily: "Arial, sans-serif" }}
            data-testid="text-tagline"
          >
            Plan-it — where your life{" "}
            <span className="">falls into orbit</span>.
          </h1>
        </div>
        
        <p
          className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
          data-testid="text-description"
        >
          Say goodbye to scheduling chaos. Plan-it is your intelligent scheduling companion 
          that transforms overwhelming to-do lists into achievable, personalized plans — 
          powered by AI that truly understands your rhythm.
        </p>
      </div>
    </section>
  );
}
