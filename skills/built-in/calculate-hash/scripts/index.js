/*
 * Copyright 2026 NexVora Lab's Ofc
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

async function digestMessage(message) {
  if (typeof message !== "string") {
    throw new Error("Input must be a string");
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(message.trim());

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  return {
    algorithm: "SHA-256",
    inputLength: message.length,
    result: hashHex
  };
}

window['ai_edge_gallery_get_result'] = async (data) => {
  try {
    const jsonData = JSON.parse(data || "{}");

    if (!jsonData.text) {
      throw new Error("Missing 'text' field");
    }

    const result = await digestMessage(jsonData.text);

    return JSON.stringify(result);

  } catch (e) {
    console.error("Hash Error:", e);

    return JSON.stringify({
      error: `Failed to calculate hash: ${e.message}`
    });
  }
};
