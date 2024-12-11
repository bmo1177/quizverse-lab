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
        "group relative overflow-hidden p-8 transition-all hover:shadow-xl animate-fade-in cursor-pointer",
        "hover:scale-105 transition-transform duration-300",
        "bg-gradient-to-br from-purple-50 to-white border-purple-100",
        "transform hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6">
          {cardCount} cards
        </span>
        <h3 className="text-2xl font-bold tracking-tight mb-3 text-purple-900 group-hover:text-purple-700 transition-colors">{title}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}