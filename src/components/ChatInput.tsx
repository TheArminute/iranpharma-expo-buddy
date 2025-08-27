import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Lightbulb } from "lucide-react";
import { SuggestedPrompts } from "@/components/SuggestedPrompts";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const ChatInput = ({ onSendMessage, disabled = false, value, onChange }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="space-y-3">
      {/* Suggested Prompts Toggle */}
      <div className="flex justify-center">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowSuggestions(!showSuggestions)}
          className="text-muted-foreground hover:text-foreground transition-colors"
          disabled={disabled}
        >
          <Lightbulb className="w-4 h-4 ml-2" />
          <span className="text-sm">پرسش‌های پیشنهادی</span>
        </Button>
      </div>

      {/* Suggested Prompts Dropdown */}
      {showSuggestions && (
        <div className="bg-card border border-primary/10 rounded-lg p-4 shadow-soft">
          <SuggestedPrompts 
            onPromptClick={(prompt) => {
              onSendMessage(prompt);
              setShowSuggestions(false);
            }}
            disabled={disabled}
          />
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="سؤال خود را بپرسید..."
          disabled={disabled}
          className="flex-1 text-right bg-background border-primary/20 focus:border-primary"
          dir="rtl"
        />
        <Button
          type="submit"
          size="icon"
          disabled={disabled || !inputValue.trim()}
          className="bg-primary hover:bg-primary-glow shadow-soft"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};