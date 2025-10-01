import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-productivity/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-creativity/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-wellness/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Start Your AI Journey Today</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Transform Your AI Skills in{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              28 Days
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated journey through productivity tools, creative techniques, and mental wellness practices.
            Keep it private until you're done.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-productivity/10 border border-productivity/20">
              <Target className="h-4 w-4 text-productivity" />
              <span className="text-sm font-medium">Productivity</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-creativity/10 border border-creativity/20">
              <Sparkles className="h-4 w-4 text-creativity" />
              <span className="text-sm font-medium">Creativity</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-wellness/10 border border-wellness/20">
              <Brain className="h-4 w-4 text-wellness" />
              <span className="text-sm font-medium">Wellness</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/challenge">
              <Button size="lg" className="text-lg px-8 h-14 bg-gradient-hero hover:opacity-90 transition-all">
                Start Day 1
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/archive">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Explore All Tools
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">28</div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-creativity">3</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-wellness">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
