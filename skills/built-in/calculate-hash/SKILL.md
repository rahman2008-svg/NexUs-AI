name: calculate-hash
description: >
  Calculates a cryptographic hash for a given input text using a JavaScript-based hashing engine.
  Triggered when user asks for hash generation or verification.

version: 1.0
author: NexVora Lab's Ofc
category: cryptography / utility

---

# 🔐 Calculate Hash Tool

## 🎯 Purpose

This tool generates a hash from input text using the `run_js` execution engine.

It is used for:
- Data integrity checks
- Fingerprinting text
- Simple cryptographic demonstrations

---

## 🔥 Trigger Conditions

Activate this tool when the user says:

- "Calculate hash of..."
- "What is the hash of..."
- "Generate hash for text..."
- "Hash this string..."

---

## ⚙️ Execution Rule

When triggered, you MUST call the `run_js` tool with the following structure:

### 📦 Required Parameters

```json
{
  "text": "string"
}
