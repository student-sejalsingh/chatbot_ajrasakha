

# 🌾 Ajrasakha Chatbot

Ajrasakha Chatbot is a farmer-friendly AI-powered agricultural assistant designed to help farmers and agricultural workers get reliable farming guidance instantly in their own language.

The platform combines verified agricultural knowledge with advanced AI models to ensure farmers always receive useful, accessible, and timely responses.

---

# 🚀 Vision & Goal

The goal of Ajrasakha is to make agricultural knowledge accessible to every farmer regardless of:

- Language barriers
- Technical literacy
- Internet familiarity
- Expert availability

We aim to build a scalable agricultural intelligence platform where farmers can:

- Ask questions naturally in their regional language
- Receive trusted and timely farming advice
- Access agricultural knowledge 24/7
- Use voice-based interaction instead of typing
- Benefit from continuously improving AI-assisted farming support

Over time, the system grows smarter as reviewed AI responses are added back into the verified knowledge base.

---

# ✨ Key Features

## 🌐 Multi-Language Support
Farmers can ask questions in their native regional language using the Sarvam AI API for translation and multilingual communication.

## 🎤 Voice Input Support
Supports speech-to-text functionality, allowing farmers to ask questions through voice instead of typing.

## 📚 Three-Tier Smart Retrieval System
The chatbot intelligently prioritizes responses:

1. Verified expert answers from the Golden Dataset  
2. Agricultural best practices from the Package of Practices (PoP)  
3. AI-generated responses using LLMs  

## ⚡ Real-Time Chat Experience
Provides instant responses through a modern conversational interface powered by LibreChat.

## 💾 Conversation History
All farmer conversations are stored so users can revisit previous guidance anytime.

## 🤖 AI-Assisted Agricultural Guidance
Uses advanced language models to generate helpful responses when verified answers are unavailable.

## 🔄 Continuous Learning System
AI-generated responses are forwarded to the Ajrasakha Reviewer System for expert validation and future inclusion in the Golden Dataset.

---

# 🏗️ System Architecture

```text
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
