import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 animate-fade-in">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/90 to-background" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full animate-float">
            Your Personal Learning Assistant
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Master Any Subject with Smart Flashcards
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Create, study, and master your subjects with our intelligent flashcard system.
            Learn faster and retain more with our scientifically-proven study methods.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}