import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    name: "Productivity",
    icon: Target,
    color: "productivity",
    description: "Streamline workflows, automate tasks, and maximize efficiency",
    examples: ["Task Prioritization", "Email Summaries", "Code Review", "Data Analysis"],
    gradient: "from-productivity/10 to-productivity/5",
  },
  {
    name: "Creativity",
    icon: Lightbulb,
    color: "creativity",
    description: "Break creative blocks, generate ideas, and explore new possibilities",
    examples: ["Writing Prompts", "Design Concepts", "Story Outlines", "Brand Voice"],
    gradient: "from-creativity/10 to-creativity/5",
  },
  {
    name: "Wellness",
    icon: Heart,
    color: "wellness",
    description: "Build mindfulness, manage stress, and cultivate balance",
    examples: ["Guided Meditation", "Energy Tracking", "Stress Management", "Life Balance"],
    gradient: "from-wellness/10 to-wellness/5",
  },
];

export const CategoryPreview = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Three Paths to Mastery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each day focuses on one of three core categories, building a well-rounded AI skillset
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={category.name}
              className={`group hover:shadow-2xl transition-all duration-300 border-2 bg-gradient-to-br ${category.gradient} hover:scale-105 animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl bg-${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`h-7 w-7 text-${category.color}-foreground`} />
                </div>
                <CardTitle className="text-2xl">{category.name}</CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    Example Tools:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example) => (
                      <Badge
                        key={example}
                        variant="secondary"
                        className="hover:bg-secondary/80 transition-colors"
                      >
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
