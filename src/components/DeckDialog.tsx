import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface DeckFormData {
  title: string;
  description: string;
}

interface DeckDialogProps {
  initialData?: DeckFormData;
  onSave: (data: DeckFormData) => void;
  trigger: React.ReactNode;
}

export function DeckDialog({ initialData, onSave, trigger }: DeckDialogProps) {
  const [formData, setFormData] = useState<DeckFormData>(
    initialData || {
      title: "",
      description: "",
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Deck" : "Create New Deck"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter deck title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter deck description"
            />
          </div>
          <Button type="submit" className="w-full">
            {initialData ? "Save Changes" : "Create Deck"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}