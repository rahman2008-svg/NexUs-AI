name: interactive-map
description: >
  Displays an interactive map view for a given location using the run_js tool.
  Triggered when the user requests to view, open, or explore a place on a map.

version: 1.0
author: NexVora Lab's Ofc
category: mapping / visualization

---

# 🗺 Interactive Map Tool

## 🎯 Purpose

This tool renders an interactive map for any requested location using a JavaScript-based map renderer.

It helps users:
- Explore places visually
- Navigate locations
- Understand geography context

---

## 🔥 Trigger Conditions

Activate this tool when the user says:

- "Show [place] on map"
- "Open [location] in interactive map"
- "Find [place] on map"
- "View location of [place]"

---

## ⚙️ Execution Rule

When triggered, you MUST call the `run_js` tool with the following structure:

### 📦 Parameters

```json
{
  "location": "string"
}
