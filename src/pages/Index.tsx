import { Hero } from "@/components/Hero";
import { DeckCard } from "@/components/DeckCard";
import { Flashcard } from "@/components/Flashcard";

const Index = () => {
  const sampleDecks = [
    {
      title: "Basic Mathematics",
      description: "Essential math concepts and formulas for everyday use",
      cardCount: 50,
    },
    {
      title: "World History",
      description: "Key events and figures throughout human history",
      cardCount: 75,
    },
    {
      title: "Spanish Vocabulary",
      description: "Common Spanish words and phrases for beginners",
      cardCount: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-white">
      <Hero />
      
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-purple-900 text-center">Featured Decks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleDecks.map((deck, index) => (
              <DeckCard
                key={index}
                {...deck}
                className="animate-fade-in"
                onClick={() => console.log(`Clicked deck: ${deck.title}`)}
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-purple-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-12 text-purple-900 text-center">Try It Out</h2>
            <div className="max-w-lg mx-auto">
              <Flashcard
                front="What is the capital of France?"
                back="Paris"
                className="animate-fade-in shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;