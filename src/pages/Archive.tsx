import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { challenges } from "@/data/challenges";
import { useState } from "react";
import { Search, Clock, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesSearch =
      challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = !selectedCategory || challenge.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: "productivity", label: "Productivity", color: "bg-productivity" },
    { value: "creativity", label: "Creativity", color: "bg-creativity" },
    { value: "wellness", label: "Wellness", color: "bg-wellness" },
  ];

  const categoryColors = {
    productivity: "bg-productivity text-productivity-foreground",
    creativity: "bg-creativity text-creativity-foreground",
    wellness: "bg-wellness text-wellness-foreground",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Knowledge Hub</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all 28 AI tools and techniques. Search, filter, and discover.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search tools, tags, or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by:</span>
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="max-w-7xl mx-auto mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredChallenges.length} of {challenges.length} tools
          </p>
        </div>

        {/* Challenge Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge, index) => (
            <Card
              key={challenge.day}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${(index % 12) * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={categoryColors[challenge.category]}>
                    Day {challenge.day}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {challenge.durationMinutes}m
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                  {challenge.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {challenge.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {challenge.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {challenge.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{challenge.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <Link to={`/challenge?day=${challenge.day}`}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Challenge
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredChallenges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No tools found matching your search. Try different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
