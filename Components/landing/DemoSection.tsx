import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MessageCircle, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    // Add the demo script functionality
    const script = document.createElement('script');
    script.innerHTML = `
      async function sendDemoMessage() {
          const input = document.getElementById('demo-input');
          const chat = document.getElementById('demo-chat');
          const message = input.value.trim();

          if (!message) {
              alert('Please enter a message');
              return;
          }

          // Disable input while processing
          input.disabled = true;
          const sendButton = input.nextElementSibling;
          const originalButtonText = sendButton.textContent;
          sendButton.disabled = true;
          sendButton.textContent = 'Sending...';

          // Show user message
          const userDiv = document.createElement('div');
          userDiv.className = 'demo-message user mb-4 text-right';
          userDiv.innerHTML = \`<div class="inline-block bg-amber-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-xs"><strong>You:</strong> \${escapeHtml(message)}</div>\`;
          chat.appendChild(userDiv);
          input.value = '';

          // Show loading message
          const aiDiv = document.createElement('div');
          aiDiv.className = 'demo-message ai mb-4';
          aiDiv.innerHTML = \`<div class="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm max-w-xs"><strong>CIVIL AI:</strong> <span class="typing-indicator">Thinking...</span></div>\`;
          chat.appendChild(aiDiv);
          chat.scrollTop = chat.scrollHeight;

          try {
              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 30000);

              const response = await fetch("https://mkoileomrisqxsbmltfw.supabase.co/functions/v1/Kimi", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json",
                      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rb2lsZW9tcmlzcXhzYm1sdGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MTQ2NTUsImV4cCI6MjA2ODA5MDY1NX0.UTP-lPlka6PcBFynySWsQjNkqNWerPcDlfiftkAxpME"
                  },
                  body: JSON.stringify({ query: message }),
                  signal: controller.signal
              });

              clearTimeout(timeoutId);

              if (!response.ok) {
                  throw new Error(\`HTTP \${response.status}\`);
              }
              
              const data = await response.json();
              let aiResponse = '';
              if (data.answer && typeof data.answer === 'string') {
                  aiResponse = data.answer.trim();
              } else {
                  aiResponse = 'I apologize, but I received an unexpected response. Please try again.';
              }

              aiDiv.innerHTML = \`<div class="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm max-w-sm"><strong>CIVIL AI:</strong> \${escapeHtml(aiResponse)}</div>\`;

          } catch (error) {
              let errorMessage = "I'm currently running in demo mode. This is a sample response to show how CIVIL AI would interact with your legal questions. For the full experience, please visit our hosted platform.";
              aiDiv.innerHTML = \`<div class="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm max-w-sm"><strong>CIVIL AI:</strong> \${errorMessage}</div>\`;
          } finally {
              input.disabled = false;
              sendButton.disabled = false;
              sendButton.textContent = originalButtonText;
              input.focus();
              chat.scrollTop = chat.scrollHeight;
          }
      }

      function escapeHtml(text) {
          if (typeof text !== 'string') return '';
          const div = document.createElement('div');
          div.textContent = text;
          return div.innerHTML;
      }

      // Add styles
      if (!document.getElementById('typing-indicator-styles')) {
          const style = document.createElement('style');
          style.id = 'typing-indicator-styles';
          style.textContent = \`
              .typing-indicator { display: inline-block; opacity: 0.7; }
              .typing-indicator::after { content: '...'; animation: typing 1.5s infinite; }
              @keyframes typing {
                  0%, 20% { content: '.'; }
                  40% { content: '..'; }
                  60%, 100% { content: '...'; }
              }
          \`;
          document.head.appendChild(style);
      }

      // Enter to send
      document.addEventListener('DOMContentLoaded', function() {
          const input = document.getElementById('demo-input');
          if (input) {
              input.addEventListener('keypress', function(e) {
                  if (e.key === 'Enter') {
                      e.preventDefault();
                      sendDemoMessage();
                  }
              });
          }
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const sampleQuestions = [
    "Can I break my lease early?",
    "Is this contract legal?",
    "What are my tenant rights?",
    "Can I sue for unpaid wages?"
  ];

  return (
    <section id="demo" ref={ref} className="py-20 lg:py-32 px-4 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-200 mb-4">
            🚀 Try It Now
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Experience Civil
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              AI in Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ask any legal question and see how Civil AI provides instant, 
            accessible legal information in plain language.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-none shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  Civil AI Demo
                  <div className="ml-auto w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Chat Area */}
                <div 
                  id="demo-chat" 
                  className="h-80 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white"
                >
                  <div className="demo-message ai mb-4">
                    <div className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm max-w-sm">
                      <strong>CIVIL AI:</strong> Hello! I'm your AI legal companion. Ask me any legal question and I'll provide helpful information in plain language. What would you like to know?
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-100 p-4 bg-white">
                  <div className="flex gap-3">
                    <Input
                      id="demo-input"
                      placeholder="Ask your legal question..."
                      className="flex-1 border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          window.sendDemoMessage();
                        }
                      }}
                    />
                    <Button
                      onClick={() => window.sendDemoMessage()}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sample Questions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-amber-500" />
                Try These Questions
              </h3>
              <p className="text-gray-600 mb-6">
                Click any sample question below or type your own legal question in the chat.
              </p>
            </div>

            <div className="space-y-3">
              {sampleQuestions.map((question, index) => (
                <motion.button
                  key={question}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  onClick={() => {
                    const input = document.getElementById('demo-input');
                    if (input) {
                      input.value = question;
                      input.focus();
                    }
                  }}
                  className="w-full text-left p-4 bg-white border border-amber-200 rounded-xl hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 group-hover:text-amber-700 transition-colors duration-300">
                      "{question}"
                    </span>
                    <Send className="w-4 h-4 text-amber-400 group-hover:text-amber-600 transition-colors duration-300" />
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
              <p className="text-sm text-amber-800">
                <strong>⚠️ Demo Notice:</strong> This is a demonstration of Civil AI. 
                Responses are AI-generated legal information, not legal advice. 
                Always consult a licensed lawyer for binding advice.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
