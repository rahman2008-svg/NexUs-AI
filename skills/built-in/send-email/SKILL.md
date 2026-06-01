--
name: send-email
description: Send an email to a specified recipient with subject and message body.
---

# 📧 Send Email Skill

This skill allows the system to send an email to a user-defined recipient with a subject and message body.

---

## ⚙️ Instructions

You MUST call the `run_intent` tool with the following exact parameters:

### 🔹 intent
- `send_email`

### 🔹 parameters
A JSON string containing the following fields:

```json
{
  "extra_email": "recipient email address (string)",
  "extra_subject": "email subject (string)",
  "extra_text": "email body content (string)"
}
