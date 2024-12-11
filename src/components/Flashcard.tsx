import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FlashcardProps {
  front: string;
  back: string;
  className?: string;
}

export function Flashcard({ front, back, className }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn(
        "flip-card w-full h-[300px] cursor-pointer",
        isFlipped && "flipped",
        className
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <Card className="flip-card-front glass p-8 flex items-center justify-center hover:shadow-xl transition-shadow">
          <p className="text-2xl font-medium text-purple-900">{front}</p>
        </Card>
        <Card className="flip-card-back glass p-8 flex items-center justify-center hover:shadow-xl transition-shadow">
          <p className="text-2xl font-medium text-purple-900">{back}</p>
        </Card>
      </div>
    </div>
  );
}