import React, { useEffect, useRef, useState } from 'react';
import './Dashboard.css';

type ChatMessage = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  source?: string;
};

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/chat/ask';

function Dashboard() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      text: 'Namaste. Ask me a farming question and I will try to help.',
    },
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async () => {
    const question = input.trim();
    if (!question || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: 'user',
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to get response from server.');
      }

      const assistantMessage: ChatMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        text: data?.result || 'No answer found.',
        source: data?.source,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const fallback: ChatMessage = {
        id: Date.now() + 2,
        role: 'assistant',
        text:
          error instanceof Error
            ? error.message
            : 'Something went wrong while connecting to the server.',
      };

      setMessages((prev) => [...prev, fallback]);
    } finally {
      setIsLoading(false);
    }
  };

  const onEnterSend: React.KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  };

  return (
   <div className="Dashboard">
    <aside className="Dashboard-sidebar">
      <h2 className="Dashboard-brand">Ajrasakha</h2>
      <button className="Dashboard-newChat" type="button">+ New chat</button>
      <p className="Dashboard-helperText">Ask crop care, fertilizer, irrigation, and weather-smart farming questions.</p>
    </aside>

    <main className="Dashboard-main">
      <header className="Dashboard-header">
        <h1>Ajrasakha Chatbot</h1>
      </header>

      <section className="Dashboard-messages" aria-live="polite">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`MessageRow ${message.role === 'user' ? 'MessageRow-user' : 'MessageRow-assistant'}`}
          >
            <div className="MessageBubble">
              <p>{message.text}</p>
              {message.source ? <span className="MessageSource">Source: {message.source}</span> : null}
            </div>
          </div>
        ))}

        {isLoading ? (
          <div className="MessageRow MessageRow-assistant">
            <div className="MessageBubble MessageBubble-loading">
              <p>Thinking...</p>
            </div>
          </div>
        ) : null}
        <div ref={endRef} />
      </section>

      <div className="Dashboard-controls">
        <textarea
          className="Dashboard-input"
          placeholder="Message Ajrasakha..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={onEnterSend}
          rows={1}
        />
        <button className="Dashboard-button" type="button" onClick={() => void sendMessage()} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </main>
  </div>
  );
}

export default Dashboard;

