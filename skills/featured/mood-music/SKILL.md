name: mood-music
description: Generate or suggest music based on user mood by analyzing text, images, or audio and using supported genres from the Loudly API.

metadata:
  require-secret: true
  require-secret-description: Get your API key from https://www.loudly.com/developers/apps after registering an account
  homepage: https://github.com/google-ai-edge/gallery/tree/main/skills/featured/mood-music
---

# 🎧 Mood Music Skill

This skill generates or suggests music based on the user’s **mood, vibe, or media input (text, image, or audio)**.

It uses the **Loudly API** to create music based on supported genres.

---

## ⚙️ Core Workflow (Strict Two-Step Process)

### Step 1: Fetch Available Genres

You MUST first call the `run_js` tool:

- Script: `get_genres.html`
- Payload: `{}`

📌 This returns:
- List of available music genres
- Genre descriptions
- Supported audio styles

👉 You MUST ONLY use these genres for generation.

---

### Step 2: Analyze & Generate Music

After receiving genres:

- Match user mood to the closest valid genre
- Then call `run_js` with `index.html`

---

## 🎯 Input Handling Rules

### 📝 Text Input
- Convert mood (happy, sad, energetic, calm) into a valid genre
- Select appropriate energy level

---

### 🖼️ Image / 🎧 Audio Input
- Analyze visual/audio mood
- Extract vibe (emotion, tone, atmosphere)
- Map ONLY to valid genres from Step 1

---

## 🎼 Generation Payload (index.html)

Your request MUST include the following structure:

```json
{
  "genre": "string (required - must match available genre)",
  "genre_blend": "string (optional secondary genre)",
  "duration": 120,
  "energy": "low | high | original",
  "bpm": 120
}
