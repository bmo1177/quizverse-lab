import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 animate-fade-in">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-background/80 to-background" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full animate-float">
            Your Personal Learning Assistant
          </span>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-8 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-800 bg-clip-text text-transparent">
            Master Any Subject with Smart Flashcards
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Create, study, and master your subjects with our intelligent flashcard system.
            Learn faster and retain more with our proven study methods.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="animate-fade-in bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              onClick={() => console.log('Get Started clicked')}
              style={{ animationDelay: "200ms" }}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="animate-fade-in border-purple-200 hover:bg-purple-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              onClick={() => console.log('Learn More clicked')}
              style={{ animationDelay: "400ms" }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}