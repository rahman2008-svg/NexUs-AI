--
name: query-wikipedia
description: Fetch a concise Wikipedia summary for a given topic using language-aware search.
---

# 📚 Query Wikipedia Skill

This skill retrieves a short, accurate summary from Wikipedia for a given topic or entity.

---

## ⚙️ Instructions

You MUST call the `run_js` tool with `index.html` and pass a JSON string in the `data` field.

---

## 📥 Input Format

### Required Fields

```json
{
  "topic": "string",
  "lang": "string (2-letter language code)"
}
