<script setup lang="ts">
import { ref, onMounted } from "vue";
import { GoogleGenAI } from "@google/genai";
import Main from "@/views/Main.vue";

import { GEMINI_API_KEY, PROMPT, TEXT } from "@/consts";

// const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash-001",
//     contents: `${PROMPT}${TEXT}`,
//   });
//   console.log(response.text);
// }

onMounted(async () => {
  // await main();
});
</script>

<template>
  <Main />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
