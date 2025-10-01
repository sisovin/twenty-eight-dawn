import { Target, Lightbulb, Heart, Zap, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "Boost Productivity",
    description: "Master AI tools that streamline your workflow and eliminate repetitive tasks.",
    gradient: "bg-gradient-productivity",
  },
  {
    icon: Lightbulb,
    title: "Unlock Creativity",
    description: "Discover AI techniques that amplify your creative potential and break through blocks.",
    gradient: "bg-gradient-creativity",
  },
  {
    icon: Heart,
    title: "Enhance Wellness",
    description: "Integrate AI-powered mindfulness and mental health practices into your routine.",
    gradient: "bg-gradient-wellness",
  },
  {
    icon: Zap,
    title: "Learn Daily",
    description: "15-30 minute sessions that fit into your schedule without overwhelming you.",
    gradient: "bg-gradient-hero",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your journey with badges, reflections, and completion metrics.",
    gradient: "bg-gradient-productivity",
  },
  {
    icon: Shield,
    title: "Stay Private",
    description: "Your learning journey is yours alone. Keep it private until you're ready to share.",
    gradient: "bg-gradient-wellness",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Take the Challenge?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your relationship with AI through structured, daily practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-xl ${benefit.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
