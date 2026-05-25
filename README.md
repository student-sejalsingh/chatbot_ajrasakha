
#🌾 Ajrasakha Chatbot

Ajrasakha Chatbot is a farmer-friendly AI-powered agricultural assistant designed to help farmers and agricultural workers get reliable farming guidance instantly in their own language. The platform combines verified agricultural knowledge with advanced AI models to ensure farmers always receive useful, accessible, and timely responses.

The system follows a smart three-tier response architecture:

Golden Dataset → Expert-verified question-answer pairs
Package of Practices (PoP) → Standard agricultural guidelines and recommendations
AI Language Models → AI-generated agricultural guidance when verified data is unavailable

This layered approach ensures high-quality responses while continuously improving the system through expert validation.

🚀 Vision & Goal

The goal of Ajrasakha is to make agricultural knowledge accessible to every farmer regardless of:

Language barriers
Technical literacy
Internet familiarity
Expert availability

We aim to build a scalable agricultural intelligence platform where farmers can:

Ask questions naturally in their regional language
Receive trusted and timely farming advice
Access agricultural knowledge 24/7
Use voice-based interaction instead of typing
Benefit from continuously improving AI-assisted farming support

Over time, the system grows smarter as reviewed AI responses are added back into the verified knowledge base.

✨ Key Features
🌐 Multi-Language Support

Farmers can ask questions in their native regional language using the Sarvam AI API for translation and multilingual communication.

🎤 Voice Input Support

Supports speech-to-text functionality, allowing farmers to ask questions through voice instead of typing.

📚 Three-Tier Smart Retrieval System

The chatbot intelligently prioritizes responses:

Verified expert answers from the Golden Dataset
Agricultural best practices from PoP
AI-generated responses using LLMs


⚡ Real-Time Chat Experience

Provides instant responses through a modern conversational interface powered by LibreChat.

💾 Conversation History

All farmer conversations are stored so users can revisit previous guidance anytime.

🤖 AI-Assisted Agricultural Guidance

Uses advanced language models to generate helpful responses when verified answers are unavailable.

🔄 Continuous Learning System

AI-generated responses are forwarded to the Ajrasakha Reviewer System for expert validation and future inclusion in the Golden Dataset.

🏗️ System Architecture
Farmer Query
     │
     ▼
Language Detection & Translation (Sarvam AI)
     │
     ▼
Golden Dataset Search
     │
 ┌───┴────┐
 │ Found? │
 └───┬────┘
     │ Yes
     ▼
Verified Response to Farmer

     │ No
     ▼
Package of Practices (PoP) Search
     │
 ┌───┴────┐
 │ Found? │
 └───┬────┘
     │ Yes
     ▼
PoP Response to Farmer

     │ No
     ▼
LLM Response Generation
(DeepSeek-R1 / Qwen3 / GPT-OSS)
     │
     ├──► Response Sent to Farmer
     │
     └──► Sent to Reviewer System for Validation
🛠️ Technologies Used
Frontend
React
TypeScript
LibreChat UI
Backend
Node.js
Express.js
AI & LLMs
DeepSeek-R1
Qwen3
GPT-OSS
Ollama
Database
MongoDB Atlas
Vector Search for semantic retrieval
APIs & Services
Sarvam AI API (Translation + Speech-to-Text)
Firebase Authentication
Infrastructure
MCP (Model Context Protocol) Servers


🔍 How It Works
Step 1 — Farmer Asks a Question

The farmer interacts with the chatbot using text or voice in their preferred regional language.

Step 2 — Language Processing

The system detects and translates the input using Sarvam AI services.

Step 3 — Golden Dataset Search

The chatbot searches expert-verified agricultural Q&A pairs using semantic vector search.

Step 4 — PoP Search

If no verified answer exists, the system checks the Package of Practices database.

Step 5 — AI Response Generation

If no match is found in either source, AI language models generate a helpful agricultural response.

Step 6 — Expert Validation Pipeline

The AI-generated response is forwarded to the Ajrasakha Reviewer System for expert review and future dataset improvement.

🌱 Benefits for Farmers
Instant agricultural guidance
Native language interaction
Voice-based accessibility
24/7 support
Trusted expert-backed information
Easy-to-use chat experience
Continuous improvement through expert review
Faster decision-making during critical farming situations


📈 Future Goals
Image-based crop disease detection
Weather-aware farming recommendations
Personalized crop advisory system
Offline accessibility for rural areas
Integration with government agricultural schemes
Farmer analytics dashboard
AI-powered crop planning assistant
Smart irrigation and fertilizer recommendations


🔐 Authentication & Security
Secure farmer authentication using Firebase
Protected chat sessions
Structured agricultural data access through MCP servers


🤝 Contribution

Contributions, ideas, and feedback are always welcome.

If you'd like to improve Ajrasakha:

Fork the repository
Create a feature branch
Commit your changes
Submit a pull request

📌 Project Status

🚧 Currently under active development and research.

The system is continuously evolving to improve retrieval quality, multilingual understanding, and AI-assisted agricultural guidance.

❤️ Motivation Behind Ajrasakha

Farmers often struggle to access reliable agricultural guidance due to language barriers, limited expert availability, and lack of digital accessibility. Ajrasakha is built to bridge this gap by combining verified agricultural knowledge with modern AI systems in a simple and accessible way.

The vision is not just to build a chatbot, but to create a digital farming companion that empowers farmers with timely, trustworthy, and understandable guidance.

📬 Contact

If you'd like to collaborate, contribute, or discuss ideas related to AI for agriculture, feel free to connect.
