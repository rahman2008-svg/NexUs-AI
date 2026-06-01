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

window['nexus_ai_virtual_piano_result'] = async (dataStr) => {
  try {
    
    // 🎹 Load local piano UI with cache-busting
    const fullUrl = `ui.html?v=${Date.now()}`;

    // 📦 Return structured response for NexUs AI runtime
    return JSON.stringify({
      webview: {
        url: fullUrl
      },
      result: "Success. Tap the preview card to open and play the virtual piano 🎹"
    });

  } catch (error) {
    console.error("Virtual Piano Error:", error);

    return JSON.stringify({
      error: `Failed to load virtual piano: ${error.message}`
    });
  }
};
