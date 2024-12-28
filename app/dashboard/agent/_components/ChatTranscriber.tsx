import { Conversation } from "@/lib/conversations";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatTranscriberProps {
  conversation: Conversation[];
}

export function ChatTranscriber({ conversation }: ChatTranscriberProps) {
  return (
    <div className="p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Conversation History</h2>
      <ScrollArea className="flex-grow pr-4 pb-5 mb-20">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 p-3 rounded-lg ${
              msg.role === "assistant"
                ? "bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 text-white" // AI Response
                : "bg-gray-100 text-black" // User Response
            }`}
          >
            <p className="font-semibold mb-1">
              {msg.role === "assistant" ? "AI" : "You"}
            </p>
            <p>{msg.role === "assistant" ? msg.text : "Your input..."}</p>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
