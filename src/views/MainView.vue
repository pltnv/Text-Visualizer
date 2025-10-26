<script setup lang="ts">
import { ref } from "vue";
import { useGeminiAi } from "@/composables/useGeminiAi";
import { PROMPT } from "@/consts";
import type { TextAnalysisResult } from "@/types";
import InputBlock from "@/components/InputBlock.vue";
import Charts from "@/components/Charts.vue";
import Summary from "@/components/Summary.vue";
import Loader from "@/components/Loader.vue";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

const data = ref<TextAnalysisResult | null>(null);

const { isLoading, processData } = useGeminiAi({
  apiKey,
  prompt: PROMPT,
});

async function getData(inputText: string) {
  const result = await processData(inputText);
  
  if (result) {
    data.value = result;
  }
}
</script>


<template>
  <div>
    <InputBlock @send="getData" :isLoading="isLoading" />

    <Transition name="fade" appear>
      <Loader v-if="isLoading" />
    </Transition>

    <transition name="slide-up" appear>
      <Summary v-if="data" :summary="data" />
    </transition>

    <transition v-if="data" name="slide-up" appear :delay="100">
      <Charts :charts="data.charts" />
    </transition>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.content > *:nth-child(1) {
  animation-delay: 0ms;
}

.content > *:nth-child(2) {
  animation-delay: 200ms;
}
</style>


