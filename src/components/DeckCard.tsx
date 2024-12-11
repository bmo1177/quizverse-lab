import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface DeckCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  cardCount: number;
  className?: string;
}

export function DeckCard({ title, description, cardCount, className, ...props }: DeckCardProps) {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden p-6 transition-all hover:shadow-lg animate-fade-in cursor-pointer",
        "hover:scale-105 transition-transform duration-300",
        "bg-gradient-to-br from-purple-50 to-white border-purple-100",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
          {cardCount} cards
        </span>
        <h3 className="text-xl font-semibold tracking-tight mb-2 text-purple-900">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}