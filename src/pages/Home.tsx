import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CategoryPreview } from "@/components/CategoryPreview";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BenefitsSection />
      <CategoryPreview />
      
      {/* Final CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 text-center text-white shadow-2xl">
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Ready to Transform Your AI Skills?
                </h2>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                  Join the challenge today and discover what 28 days of focused learning can achieve.
                  Your journey to AI mastery starts now.
                </p>
                <div className="pt-4">
                  <Link to="/challenge">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="text-lg px-8 h-14 hover:scale-105 transition-transform"
                    >
                      Begin Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 28-Day AI Knowledge Challenge. Keep it private until it's done.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
