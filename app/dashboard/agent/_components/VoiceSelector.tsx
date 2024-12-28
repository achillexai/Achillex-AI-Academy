import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

interface VoiceSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function VoiceSelector({ value, onValueChange }: VoiceSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Select AI Voice</h2>
      <div className="space-y-2">
        <Label htmlFor="voiceSelect">Voice</Label>
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger id="voiceSelect">
            <SelectValue placeholder="Choose a voice" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alloy">Alloy - Neutral and Versatile</SelectItem>
            <SelectItem value="echo">
              Echo - Synthetic and Futuristic
            </SelectItem>
            <SelectItem value="ash">Ash - British and Refined</SelectItem>
            <SelectItem value="ballad">
              Ballad - Deep and Authoritative
            </SelectItem>
            <SelectItem value="coral">Coral - Warm and Friendly</SelectItem>
            <SelectItem value="sage">Sage - Calm and Affirming</SelectItem>
            <SelectItem value="shimmer">Shimmer - Savvy and Relaxed</SelectItem>
            <SelectItem value="verse">
              Verse - Composed and Confident
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DialogClose asChild>
        <Button className="w-full">Confirm Selection</Button>
      </DialogClose>
    </div>
  );
}
