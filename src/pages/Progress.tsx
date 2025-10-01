import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Flame, Star, Calendar } from "lucide-react";
import { Progress as ProgressBar } from "@/components/ui/progress";

const Progress = () => {
  // Mock data - in real app, this would come from state/database
  const completedDays = 7;
  const totalDays = 28;
  const currentStreak = 5;
  const longestStreak = 7;
  const progressPercentage = (completedDays / totalDays) * 100;

  const badges = [
    { name: "First Step", description: "Completed Day 1", earned: true, icon: Star },
    { name: "Week Warrior", description: "Completed 7 days", earned: true, icon: Trophy },
    { name: "Productivity Pro", description: "Finished 5 productivity challenges", earned: false, icon: Target },
    { name: "Creative Genius", description: "Finished 5 creativity challenges", earned: false, icon: Star },
    { name: "Wellness Champion", description: "Finished 5 wellness challenges", earned: false, icon: Flame },
    { name: "Halfway Hero", description: "Completed 14 days", earned: false, icon: Trophy },
  ];

  const categories = [
    { name: "Productivity", completed: 3, total: 10, color: "bg-productivity" },
    { name: "Creativity", completed: 2, total: 9, color: "bg-creativity" },
    { name: "Wellness", completed: 2, total: 9, color: "bg-wellness" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Your Progress</h1>
            <p className="text-xl text-muted-foreground">
              Track your journey through the 28-day challenge
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardDescription>Total Progress</CardDescription>
                <CardTitle className="text-4xl">{completedDays}/{totalDays}</CardTitle>
              </CardHeader>
              <CardContent>
                <ProgressBar value={progressPercentage} className="h-2" />
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardDescription>Current Streak</CardDescription>
                <CardTitle className="text-4xl flex items-center">
                  <Flame className="h-8 w-8 text-creativity mr-2" />
                  {currentStreak}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">days in a row</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardDescription>Longest Streak</CardDescription>
                <CardTitle className="text-4xl flex items-center">
                  <Trophy className="h-8 w-8 text-wellness mr-2" />
                  {longestStreak}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">days achieved</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardDescription>Completion Rate</CardDescription>
                <CardTitle className="text-4xl">{Math.round(progressPercentage)}%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">of challenge</p>
              </CardContent>
            </Card>
          </div>

          {/* Category Progress */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Category Progress
              </CardTitle>
              <CardDescription>
                Your progress across the three challenge categories
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {category.completed} / {category.total}
                    </span>
                  </div>
                  <ProgressBar
                    value={(category.completed / category.total) * 100}
                    className="h-3"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Achievements & Badges
              </CardTitle>
              <CardDescription>
                Earn badges as you progress through the challenge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {badges.map((badge) => (
                  <div
                    key={badge.name}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      badge.earned
                        ? "bg-primary/5 border-primary/50"
                        : "bg-muted/30 border-border opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          badge.earned ? "bg-primary/10" : "bg-muted"
                        }`}
                      >
                        <badge.icon
                          className={`h-5 w-5 ${
                            badge.earned ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{badge.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {badge.description}
                        </p>
                      </div>
                      {badge.earned && (
                        <Badge variant="default" className="ml-2">
                          Earned
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Calendar View */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Challenge Calendar
              </CardTitle>
              <CardDescription>
                Your daily completion tracker
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className={`aspect-square flex items-center justify-center rounded-lg border-2 font-medium transition-all ${
                      day <= completedDays
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted/30 border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Progress;
