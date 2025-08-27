import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Clock, Users, Phone } from "lucide-react";

interface SuggestedPromptsProps {
  onPromptClick: (prompt: string) => void;
  disabled?: boolean;
}

const prompts = [
  {
    icon: MapPin,
    text: "غرفه‌های موجود در نمایشگاه را نشان بده",
    prompt: "لیست غرفه‌های موجود در نمایشگاه را با اطلاعات کامل به من نشان دهید."
  },
  {
    icon: Clock,
    text: "ساعات کاری نمایشگاه چیست؟",
    prompt: "ساعات کاری و زمان‌بندی نمایشگاه چگونه است؟"
  },
  {
    icon: Users,
    text: "شرکت‌های حاضر در نمایشگاه",
    prompt: "کدام شرکت‌ها در نمایشگاه حضور دارند و چه محصولاتی ارائه می‌دهند؟"
  },
  {
    icon: MessageSquare,
    text: "رویدادهای ویژه و سمینارها",
    prompt: "چه رویدادها و سمینارهای ویژه‌ای در نمایشگاه برگزار می‌شود؟"
  },
  {
    icon: Phone,
    text: "اطلاعات تماس و راهنمایی",
    prompt: "برای دریافت اطلاعات بیشتر و راهنمایی با چه کسی تماس بگیرم؟"
  }
];

export const SuggestedPrompts = ({ onPromptClick, disabled = false }: SuggestedPromptsProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground text-center">
        پرسش‌های پیشنهادی
      </h3>
      <div className="grid gap-2">
        {prompts.map((prompt, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="justify-start h-auto py-3 px-4 text-right hover:shadow-soft transition-all duration-200"
            onClick={() => onPromptClick(prompt.prompt)}
            disabled={disabled}
          >
            <prompt.icon className="w-4 h-4 ml-2 flex-shrink-0" />
            <span className="text-sm leading-relaxed">{prompt.text}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};