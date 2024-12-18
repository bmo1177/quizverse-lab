import { Hero } from "@/components/Hero";
import { DeckCard } from "@/components/DeckCard";
import { Flashcard } from "@/components/Flashcard";
import { DeckDialog } from "@/components/DeckDialog";
import { FlashcardDialog } from "@/components/FlashcardDialog";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Deck {
  id: string;
  title: string;
  description: string;
  cardCount: number;
}

interface FlashcardType {
  id: string;
  front: string;
  back: string;
}

const Index = () => {
  const [decks, setDecks] = useState<Deck[]>([
    {
      id: "1",
      title: "Basic Mathematics",
      description: "Essential math concepts and formulas for everyday use",
      cardCount: 50,
    },
    {
      id: "2",
      title: "World History",
      description: "Key events and figures throughout human history",
      cardCount: 75,
    },
    {
      id: "3",
      title: "Spanish Vocabulary",
      description: "Common Spanish words and phrases for beginners",
      cardCount: 100,
    },
  ]);

  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([
    {
      id: "1",
      front: "What is the capital of France?",
      back: "Paris",
    },
  ]);

  const handleCreateDeck = (data: { title: string; description: string }) => {
    const newDeck: Deck = {
      id: Date.now().toString(),
      ...data,
      cardCount: 0,
    };
    setDecks([...decks, newDeck]);
    toast.success("Deck created successfully!");
  };

  const handleEditDeck = (data: { title: string; description: string }) => {
    if (!selectedDeck) return;
    const updatedDecks = decks.map((deck) =>
      deck.id === selectedDeck.id ? { ...deck, ...data } : deck
    );
    setDecks(updatedDecks);
    setSelectedDeck(null);
    toast.success("Deck updated successfully!");
  };

  const handleDeleteDeck = (id: string) => {
    setDecks(decks.filter((deck) => deck.id !== id));
    toast.success("Deck deleted successfully!");
  };

  const handleCreateFlashcard = (data: { front: string; back: string }) => {
    const newFlashcard: FlashcardType = {
      id: Date.now().toString(),
      ...data,
    };
    setFlashcards([...flashcards, newFlashcard]);
    toast.success("Flashcard created successfully!");
  };

  const handleEditFlashcard = (id: string, data: { front: string; back: string }) => {
    const updatedFlashcards = flashcards.map((card) =>
      card.id === id ? { ...card, ...data } : card
    );
    setFlashcards(updatedFlashcards);
    toast.success("Flashcard updated successfully!");
  };

  const handleDeleteFlashcard = (id: string) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
    toast.success("Flashcard deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-white">
      <Hero />
      
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-purple-900">Featured Decks</h2>
            <DeckDialog
              trigger={
                <Button className="gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Create Deck
                </Button>
              }
              onSave={handleCreateDeck}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decks.map((deck) => (
              <div key={deck.id} className="relative group">
                <DeckCard
                  {...deck}
                  onClick={() => setSelectedDeck(deck)}
                />
                <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <DeckDialog
                    trigger={<Button variant="secondary" size="sm">Edit</Button>}
                    initialData={deck}
                    onSave={handleEditDeck}
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteDeck(deck.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-purple-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-purple-900">Try It Out</h2>
              <FlashcardDialog
                trigger={
                  <Button className="gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Add Flashcard
                  </Button>
                }
                onSave={handleCreateFlashcard}
              />
            </div>
            <div className="space-y-8">
              {flashcards.map((flashcard) => (
                <div key={flashcard.id} className="relative group">
                  <Flashcard
                    front={flashcard.front}
                    back={flashcard.back}
                    className="animate-fade-in shadow-xl"
                  />
                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FlashcardDialog
                      trigger={<Button variant="secondary" size="sm">Edit</Button>}
                      initialData={flashcard}
                      onSave={(data) => handleEditFlashcard(flashcard.id, data)}
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteFlashcard(flashcard.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;