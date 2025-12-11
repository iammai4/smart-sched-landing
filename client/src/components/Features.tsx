import { Card, CardContent } from "@/components/ui/card";
import { Mic, FolderSync, Trophy } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI-Supported Input",
    description:
      "Create tasks effortlessly using voice commands, file uploads, or image recognition. Let AI assist with the details while you focus on what matters.",
  },
  {
    icon: FolderSync,
    title: "Smart Workspaces",
    description:
      "Collaborate seamlessly with real-time synchronization across your team. Keep everyone aligned with shared schedules and instant updates.",
  },
  {
    icon: Trophy,
    title: "Gamification System",
    description:
      "Stay motivated with streaks, badges, and a rewards store. Turn productivity into a game and build lasting habits through intrinsic motivation.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Arial, sans-serif" }}
            data-testid="text-features-heading"
          >
            Features Built for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take control of your schedule
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-0 overflow-visible border-0 bg-card/80 backdrop-blur-sm hover-elevate transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-accent flex items-center justify-center mb-8 shadow-lg">
                  <feature.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "Arial, sans-serif" }}
                  data-testid={`text-feature-title-${index}`}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed text-lg"
                  data-testid={`text-feature-desc-${index}`}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
