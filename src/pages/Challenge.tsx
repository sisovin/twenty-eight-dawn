import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { challenges } from "@/data/challenges";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, CheckCircle2, Circle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const Challenge = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [reflections, setReflections] = useState<Record<number, string>>({});

  const challenge = challenges.find((c) => c.day === currentDay);
  
  if (!challenge) return null;

  const categoryColors = {
    productivity: "bg-productivity text-productivity-foreground",
    creativity: "bg-creativity text-creativity-foreground",
    wellness: "bg-wellness text-wellness-foreground",
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    if (completed.has(currentDay)) {
      newCompleted.delete(currentDay);
    } else {
      newCompleted.add(currentDay);
    }
    setCompleted(newCompleted);
  };

  const handleNext = () => {
    if (currentDay < 28) setCurrentDay(currentDay + 1);
  };

  const handlePrevious = () => {
    if (currentDay > 1) setCurrentDay(currentDay - 1);
  };

  const isCompleted = completed.has(currentDay);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Day Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentDay === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Day {currentDay} of 28</div>
              <div className="text-2xl font-bold">
                {Math.round((completed.size / 28) * 100)}% Complete
              </div>
            </div>

            <Button
              variant="outline"
              onClick={handleNext}
              disabled={currentDay === 28}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Main Challenge Card */}
          <Card className="border-2 shadow-xl animate-fade-in">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className={categoryColors[challenge.category]}>
                      {challenge.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {challenge.durationMinutes} minutes
                    </div>
                  </div>
                  <CardTitle className="text-3xl">{challenge.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {challenge.description}
                  </CardDescription>
                </div>
                <Button
                  variant={isCompleted ? "default" : "outline"}
                  size="icon"
                  onClick={handleComplete}
                  className="ml-4"
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {challenge.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-foreground leading-relaxed">{challenge.content}</p>
              </div>

              {/* Tips */}
              <div className="bg-muted/50 rounded-xl p-6 space-y-3">
                <h4 className="font-semibold text-lg">💡 Pro Tips</h4>
                <ul className="space-y-2">
                  {challenge.tips.map((tip, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reflection */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">📝 Your Reflection</h4>
                <Textarea
                  placeholder="What did you learn? How will you apply this? Any insights to remember?"
                  value={reflections[currentDay] || ""}
                  onChange={(e) =>
                    setReflections({ ...reflections, [currentDay]: e.target.value })
                  }
                  className="min-h-32 resize-none"
                />
              </div>

              {/* Action Button */}
              {!isCompleted && (
                <Button
                  onClick={handleComplete}
                  size="lg"
                  className="w-full text-lg h-12"
                >
                  Mark as Complete
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Day Progress Bar */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Challenge Progress</span>
              <span>{completed.size} / 28 days</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-hero transition-all duration-500"
                style={{ width: `${(completed.size / 28) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
