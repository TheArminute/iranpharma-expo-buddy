import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { ChatMessage } from "@/components/ChatMessage";
import { TypingIndicator } from "@/components/TypingIndicator";
import { ChatInput } from "@/components/ChatInput";
import { useChat } from "@/hooks/useChat";

const Index = () => {
  const { messages, sendMessage, isTyping } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-gradient-bg" dir="rtl">
      <Header />
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-card rounded-xl shadow-soft border border-primary/10 overflow-hidden">
          {/* Chat Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-background/50 to-background">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isBot={message.isBot}
                timestamp={message.timestamp}
              />
            ))}
            
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="border-t border-primary/10 p-4 bg-background/50">
            <ChatInput 
              onSendMessage={sendMessage} 
              disabled={isTyping}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
