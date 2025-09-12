<script setup lang="ts">
import InputBlock from "@/components/InputBlock.vue";
import Charts from "@/components/Charts.vue";
import Summary from "@/components/Summary.vue";
import { PROMPT, TEXT } from "@/consts";
import { useGeminiAi } from "@/composables/useGeminiAi";
import InputText from "@/components/InputBlock.vue";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

function kek(inputText: string) {
  console.log(inputText, 111);
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
  <div :class="$style.main">
    <InputBlock @send="kek" />
    <Summary :summary="text" />
    <Charts :charts="text.charts" />
  </div>
</template>


<style lang="scss" module>
.main {
}
</style>