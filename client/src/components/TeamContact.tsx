import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

// todo: remove mock functionality - replace with real team data
const teamMembers = [
  {
    name: "Mai Bunnol",
    role: "Project Manager",
    email: "venildamay.bunnol@edu.sait.ca",
    github: "iammai4",
    isLead: true,
  },
  {
    name: "Amal Musse",
    role: "",
    email: "Amal.Musse@edu.sait.ca",
    github: "MusseTech",
    isLead: false,
  },
  {
    name: "Daniel Maliczewski",
    role: "",
    email: "Daniel.Maliczewski@edu.sait.ca",
    github: "Dmpoke66",
    isLead: false,
  },
  {
    name: "Daniel Muhirwa",
    role: "",
    email: "Daniel.Muhirwa@edu.sait.ca",
    github: "Daniel-M01",
    isLead: false,
  },
  {
    name: "Ronray Nathan Apil",
    role: "",
    email: "RonrayNathan.Apil@edu.sait.ca",
    github: "ronrayapil",
    isLead: false,
  },
  {
    name: "Sean Izaac Bauzon",
    role: "",
    email: "SeanIzaac.Bauzon@edu.sait.ca",
    github: "SeanBauzon",
    isLead: false,
  },
];

export default function TeamContact() {
  return (
    <section className="py-24 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
            The Crew
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Arial, sans-serif" }}
            data-testid="text-team-heading"
          >
            Meet the Team
          </h2>
          <p
            className="text-lg text-muted-foreground"
            data-testid="text-team-subtitle"
          >
            The minds behind Plan-it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`p-0 overflow-visible hover-elevate transition-all duration-300 ${
                member.isLead ? "ring-2 ring-accent shadow-lg shadow-accent/20" : ""
              }`}
              data-testid={`card-team-member-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 ring-2 ring-border">
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3
                        className="font-bold text-lg"
                        style={{ fontFamily: "Arial, sans-serif" }}
                        data-testid={`text-member-name-${index}`}
                      >
                        {member.name}
                      </h3>
                      {member.isLead && (
                        <Badge className="bg-accent text-accent-foreground text-xs font-semibold">
                          PM
                        </Badge>
                      )}
                    </div>
                    <p
                      className="text-sm text-muted-foreground mb-4"
                      data-testid={`text-member-role-${index}`}
                    >
                      {member.role}
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        data-testid={`link-email-${index}`}
                      >
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <a
                        href={`https://github.com/${member.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        data-testid={`link-github-${index}`}
                      >
                        <SiGithub className="h-4 w-4 flex-shrink-0" />
                        <span>@{member.github}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
