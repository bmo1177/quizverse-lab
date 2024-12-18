import { Hero } from "@/components/Hero";
import { DeckCard } from "@/components/DeckCard";
import { Flashcard } from "@/components/Flashcard";
import { DeckDialog } from "@/components/DeckDialog";
import { FlashcardDialog } from "@/components/FlashcardDialog";
import { Button } from "@/components/ui/button";
import { PlusCircle, Import } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

interface Deck {
  id: string;
  title: string;
  description: string;
  flashcards: FlashcardType[];
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
      flashcards: [
        {
          id: "1",
          front: "What is 2 + 2?",
          back: "4",
        },
      ],
    },
  ]);

  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCreateDeck = (data: { title: string; description: string }) => {
    const newDeck: Deck = {
      id: Date.now().toString(),
      ...data,
      flashcards: [],
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

  const handleCreateFlashcard = (deckId: string, data: { front: string; back: string }) => {
    const newFlashcard: FlashcardType = {
      id: Date.now().toString(),
      ...data,
    };
    const updatedDecks = decks.map((deck) =>
      deck.id === deckId
        ? { ...deck, flashcards: [...deck.flashcards, newFlashcard] }
        : deck
    );
    setDecks(updatedDecks);
    toast.success("Flashcard created successfully!");
  };

  const handleEditFlashcard = (deckId: string, cardId: string, data: { front: string; back: string }) => {
    const updatedDecks = decks.map((deck) =>
      deck.id === deckId
        ? {
            ...deck,
            flashcards: deck.flashcards.map((card) =>
              card.id === cardId ? { ...card, ...data } : card
            ),
          }
        : deck
    );
    setDecks(updatedDecks);
    toast.success("Flashcard updated successfully!");
  };

  const handleDeleteFlashcard = (deckId: string, cardId: string) => {
    const updatedDecks = decks.map((deck) =>
      deck.id === deckId
        ? {
            ...deck,
            flashcards: deck.flashcards.filter((card) => card.id !== cardId),
          }
        : deck
    );
    setDecks(updatedDecks);
    toast.success("Flashcard deleted successfully!");
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importedDecks = JSON.parse(content) as Deck[];
        setDecks([...decks, ...importedDecks]);
        toast.success("Decks imported successfully!");
      } catch (error) {
        toast.error("Failed to import decks. Please check the file format.");
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-white">
      <Hero />
      
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-purple-900">Featured Decks</h2>
            <div className="flex gap-4">
              <DeckDialog
                trigger={
                  <Button className="gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Create Deck
                  </Button>
                }
                onSave={handleCreateDeck}
              />
              <div className="relative">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  ref={fileInputRef}
                  className="hidden"
                  id="import-file"
                />
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Import className="h-4 w-4" />
                  Import Decks
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decks.map((deck) => (
              <div key={deck.id} className="relative group">
                <DeckCard
                  {...deck}
                  cardCount={deck.flashcards.length}
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
                {selectedDeck?.id === deck.id && (
                  <div className="mt-8 space-y-8">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-purple-900">Flashcards</h3>
                      <FlashcardDialog
                        trigger={
                          <Button className="gap-2">
                            <PlusCircle className="h-4 w-4" />
                            Add Flashcard
                          </Button>
                        }
                        onSave={(data) => handleCreateFlashcard(deck.id, data)}
                      />
                    </div>
                    <div className="space-y-6">
                      {deck.flashcards.map((flashcard) => (
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
                              onSave={(data) => handleEditFlashcard(deck.id, flashcard.id, data)}
                            />
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteFlashcard(deck.id, flashcard.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;