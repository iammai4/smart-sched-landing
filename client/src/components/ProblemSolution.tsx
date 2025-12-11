import { Brain, RefreshCw, Sparkles } from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Brain,
    title: "True Intelligent Automation",
    subtitle: "Closing the Scheduling Gap",
    description:
      "We merge Deadline, Duration, AND Difficulty via our proprietary algorithm into one model. This creates a truly 'optimized' schedule for your energy level, not just time — resulting in realistic & achievable plans unlike common auto-schedulers.",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Adaptive Learning",
    subtitle: "Closing the Static Gap",
    description:
      "We recognize the trust-gap & instead of auto-setting time-ranges, we implement a feedback-loop with Adaptive Re-calibration. By tracking how long tasks ACTUALLY take, our algorithm personalizes your schedule to match reality.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Built-in Motivation",
    subtitle: "Closing the Retention Gap",
    description:
      "Our full gamification system (Streaks, Badges, & Rewards store) is directly tied to your schedule compliance. This intrinsically rewarding experience solves the high-churn problem endemic to productivity apps by fostering long-term consistency.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
            Our Approach
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: "Arial, sans-serif" }}
            data-testid="text-problem-heading"
          >
            How Plan-it Addresses the Gap
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="text-problem-intro"
          >
            The Smart Scheduler closes scheduling gaps by blending two key emerging trends:{" "}
            <span className="font-semibold text-foreground">Algorithmic Adaptivity</span> and{" "}
            <span className="font-semibold text-foreground">Intrinsic Motivation</span>.
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div
              key={solution.number}
              className="group relative flex gap-8 p-8 rounded-2xl bg-card/50 hover-elevate transition-all duration-300"
              data-testid={`solution-item-${index}`}
            >
              <div className="flex-shrink-0 hidden md:block">
                <span
                  className="text-7xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {solution.number}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <solution.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold mb-1"
                      style={{ fontFamily: "Arial, sans-serif" }}
                      data-testid={`text-solution-title-${index}`}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-sm font-semibold text-accent">
                      {solution.subtitle}
                    </p>
                  </div>
                </div>
                <p
                  className="text-muted-foreground leading-relaxed text-lg pl-0 md:pl-16"
                  data-testid={`text-solution-desc-${index}`}
                >
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
