<script setup lang="ts">
import { ref, nextTick } from "vue";
import { useGeminiAi } from "@/composables/useGeminiAi";
import { PROMPT, TEXT } from "@/consts";
import InputBlock from "@/components/InputBlock.vue";
import Charts from "@/components/Charts.vue";
import Summary from "@/components/Summary.vue";
import InputText from "@/components/InputBlock.vue";
import Loader from "@/components/Loader.vue";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

let data = ref("");

const { isLoading, processData } = useGeminiAi({
  apiKey,
  prompt: PROMPT,
});

async function getData(inputText: string) {
  // data = await processData(inputText);
}

const text = {
  mainIdea: "Рост продаж компании и поиск путей снижения себестоимости",
  keyIdeas: [
    "Высокие продажи",
    "Проблема себестоимости",
    "Решение через автоматизацию",
  ],
  keywords: ["продажи", "рост", "автоматизация", "себестоимость"],
  thesis:
    "Компания показывает рост продаж и планирует снизить издержки за счёт автоматизации.",
  terms: ["продажи", "автоматизация"],
  sentiment: "positive",
  problemsAndSolutions: {
    problems: ["Высокая себестоимость"],
    solutions: ["Внедрение автоматизации"],
  },
  charts: [
    {
      title: "Продажи по месяцам",
      type: "bar",
      data: {
        labels: ["Янв", "Фев", "Мар", "Апр"],
        datasets: [
          {
            label: "Продажи по месяцам",
            data: [120, 90, 150, 80],
            backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
            borderColor: "#fff",
            borderWidth: 1,
          },
        ],
        description: "Сравнение продаж за первый квартал",
      },
    },
    {
      type: "pie",
      title: "Доля рынка",
      data: {
        labels: ["Компания A", "Компания B", "Компания C"],
        datasets: [
          {
            label: "Доля рынка",
            data: [40, 35, 25],
            backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
            borderColor: "#fff",
            borderWidth: 1,
          },
        ],
      },
      description: "Сравнение по компаниям",
    },
  ],
};
</script>


<template>
  <div>
    <InputBlock @send="getData" :isLoading="isLoading" />

    <Transition name="fade" appear>
      <Loader v-if="isLoading" />
    </Transition>

    <transition name="slide-up" appear>
      <Summary v-if="data" :summary="text" />
    </transition>

    <transition v-if="data" name="slide-up" appear :delay="100">
      <Charts :charts="text.charts" />
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


