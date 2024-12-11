import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DeckCardProps {
  title: string;
  description: string;
  cardCount: number;
  className?: string;
}

export function DeckCard({ title, description, cardCount, className }: DeckCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden p-6 transition-all hover:shadow-lg animate-fade-in glass",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
          {cardCount} cards
        </span>
        <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}