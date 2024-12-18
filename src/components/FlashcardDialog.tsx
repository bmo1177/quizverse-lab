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

interface FlashcardFormData {
  front: string;
  back: string;
}

interface FlashcardDialogProps {
  initialData?: FlashcardFormData;
  onSave: (data: FlashcardFormData) => void;
  trigger: React.ReactNode;
}

export function FlashcardDialog({ initialData, onSave, trigger }: FlashcardDialogProps) {
  const [formData, setFormData] = useState<FlashcardFormData>(
    initialData || {
      front: "",
      back: "",
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
          <DialogTitle>{initialData ? "Edit Flashcard" : "Create New Flashcard"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="front">Front</Label>
            <Textarea
              id="front"
              value={formData.front}
              onChange={(e) => setFormData({ ...formData, front: e.target.value })}
              placeholder="Enter front content"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="back">Back</Label>
            <Textarea
              id="back"
              value={formData.back}
              onChange={(e) => setFormData({ ...formData, back: e.target.value })}
              placeholder="Enter back content"
            />
          </div>
          <Button type="submit" className="w-full">
            {initialData ? "Save Changes" : "Create Flashcard"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}