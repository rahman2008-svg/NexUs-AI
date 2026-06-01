name: restaurant-roulette
description: Display a roulette wheel that randomly selects restaurants based on user location and cuisine preference.

metadata:
  require-secret: true
  require-secret-description: Obtain your API key from https://ai.google.dev/gemini-api/docs/api-key
  homepage: https://github.com/google-ai-edge/gallery/tree/main/skills/featured/restaurant-roulette
---

# 🍽️ Restaurant Roulette Skill

A fun interactive roulette wheel that helps users discover restaurants based on **location** and **cuisine type**.

This skill enhances decision-making by letting users spin a wheel instead of manually choosing.

---

## 🎯 How It Works

The system fetches up to **10 restaurants** matching:
- 📍 User location  
- 🍜 Selected cuisine type  

Then displays them in a **spinning roulette wheel UI**.

---

## 🧪 Example Prompts

You can trigger this skill using natural language:

- “Suggest Mexican food in San Jose”
- “Find a random Italian restaurant near Sunnyvale”
- “Where should I get Sushi in San Francisco today?”
- “Show a restaurant roulette for Indian food in Palo Alto”

---

## ⚙️ Instructions

When triggered, you MUST:

1. Call the `run_js` tool  
2. Pass a JSON string containing:

   - `location` → City or area name  
   - `cuisine` → Type of food  

---

### 📦 Example Payload

```json
{
  "location": "San Jose",
  "cuisine": "Mexican"
}
