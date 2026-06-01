/*
  * Copyright 2026 NexUs AI
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

window['nexus_ai_restaurant_roulette'] = async (dataStr, secret) => {
  try {
    /* -----------------------------
       1. Parse input safely
    ----------------------------- */
    const input = JSON.parse(dataStr || '{}');

    const location = input.location || 'Mountain View, CA';
    const cuisine = input.cuisine || 'Sushi';

    /* -----------------------------
       2. API Key Handling
    ----------------------------- */
    const GEMINI_API_KEY = secret || 'YOUR_GEMINI_API_KEY';

    if (GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
      console.warn('⚠️ Missing Gemini API Key. API call may fail.');
    }

    /* -----------------------------
       3. Prompt for AI
    ----------------------------- */
    const prompt = `
      List 10 real, highly-rated ${cuisine} restaurants near ${location}.
      Keep results within 15 miles radius.
      Return only names in JSON array format.
    `;

    const endpoint =
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    let places = [];

    /* -----------------------------
       4. Call Gemini API
    ----------------------------- */
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'ARRAY',
              items: { type: 'STRING' }
            }
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawText) {
        throw new Error('Empty response from Gemini API');
      }

      places = JSON.parse(rawText);

      // 🎡 Shuffle results for roulette randomness
      places.sort(() => Math.random() - 0.5);

    } catch (apiError) {
      console.warn('⚠️ Gemini API failed:', apiError);

      // fallback safe UI data
      const msg = (apiError.message || 'API_ERROR').slice(0, 20);

      places = [
        'Error',
        msg,
        'Check',
        'Console'
      ];
    }

    /* -----------------------------
       5. Encode Data for WebView
    ----------------------------- */
    const encoded = btoa(
      unescape(encodeURIComponent(places.join('|')))
    );

    const baseUrl = 'webview.html';

    const fullUrl =
      `${baseUrl}?c=${encodeURIComponent(cuisine)}&l=${encodeURIComponent(location)}&data=${encoded}&v=${Date.now()}`;

    /* -----------------------------
       6. Return WebView Response
    ----------------------------- */
    return JSON.stringify({
      webview: { url: fullUrl },
      result: 'Restaurant roulette ready 🎡 Tap the card to spin and discover a place!'
    });

  } catch (error) {
    console.error('Restaurant Roulette Error:', error);

    return JSON.stringify({
      error: `Failed to load roulette: ${error.message}`
    });
  }
};
