<script setup lang="ts">
import InputBlock from "@/components/InputBlock.vue";
import { GEMINI_API_KEY, PROMPT, TEXT } from "@/consts";
import { useGeminiAi } from "@/composables/useGeminiAi";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

function kek(inputText: string) {
  console.log(inputText, 111);
}
</script>


<template>
  <div :class="$style.main">
    <InputBlock @send="kek" />
  </div>
</template>


<style lang="scss" module>
.main {
}
</style>