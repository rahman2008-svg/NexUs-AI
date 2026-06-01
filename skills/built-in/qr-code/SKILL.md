--
name: qr-code
description: Generate a QR code for a given URL or text input.
---

# 📱 QR Code Generator Skill

This skill generates a QR code from a provided URL or text string.

---

## ⚙️ Instructions

You MUST call the `run_js` tool with the following exact parameters:

---

### 📥 data (JSON string)

```json
{
  "url": "string (required) — the URL or text to encode into QR code"
}
