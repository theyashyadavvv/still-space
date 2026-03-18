import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const demoQuestions = [
  { q: "What services do you offer?", a: "We specialize in high-end Architectural, Interior, and Landscape Design across India." },
  { q: "How do I start a project?", a: "Every project starts with a conversation. You can contact us via phone at +91 92208 37777 or email at arsvdesignstudio@gmail.com." },
  { q: "What is your design philosophy?", a: "Our approach integrates vibrant warmth with structural elegance—blending modern Indian ethos with unparalleled luxury." }
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'bot' | 'user', text: string}[]>([
    { sender: 'bot', text: "Hello! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAsk = (question: string, answer: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: question }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: answer }]);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: "Thank you for reaching out! One of our design specialists from ARSV Design Studiio will get back to you shortly to chat about your vision." }]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } }}
              className="absolute bottom-20 right-0 w-[90vw] sm:w-96 bg-background border border-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              style={{ height: '500px', maxHeight: '75vh' }}
            >
              {/* Header */}
              <div className="bg-foreground text-background p-4 flex justify-between items-center z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center font-serif font-medium text-lg text-white shadow-inner">A</div>
                  <div>
                    <h3 className="font-medium text-sm tracking-wide">ARSV Assistant</h3>
                    <p className="text-xs opacity-70 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      Online
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-background/70 hover:text-background p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/10 relative">
                {messages.map((msg, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={idx} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-accent text-white rounded-2xl rounded-tr-sm' : 'bg-background border border-border/50 rounded-2xl rounded-tl-sm'}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                <div ref={endRef} />
              </div>

              {/* Demo Questions Menu */}
              {messages.length < 3 && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="p-4 bg-background border-t border-border/50 flex flex-col gap-2 relative z-10"
                >
                  <p className="text-xs font-medium text-muted-foreground mb-1">Frequently Asked:</p>
                  {demoQuestions.map((qa, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleAsk(qa.q, qa.a)}
                      className="text-left text-xs bg-muted/30 border border-border p-3 rounded-xl hover:border-accent hover:text-accent transition-all hover:bg-accent/5 duration-300 shadow-sm"
                    >
                      {qa.q}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-3 border-t border-border bg-background flex gap-2 relative z-10 items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..." 
                  className="flex-1 bg-muted/50 rounded-full px-5 py-3 text-sm outline-none focus:ring-1 focus:ring-accent/50 transition-all border border-transparent focus:border-accent/30"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim()}
                  className="bg-foreground text-background w-11 h-11 rounded-full flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-50 disabled:hover:bg-foreground flex-shrink-0 shadow-sm"
                >
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all ${isOpen ? 'bg-foreground text-background scale-90' : 'bg-gradient-to-tr from-accent to-[#FF7A00] text-white hover:shadow-accent/30 hover:scale-105'}`}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
          )}
        </motion.button>
      </div>
    </>
  );
};
