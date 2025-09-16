 <script setup lang="ts">
import { ref } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  RadialLinearScale,
} from "chart.js";
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from "vue-chartjs";
import type { Chart, ChartType } from "@/types";
import { CHART_DEFAULT_OPTIONS } from "@/consts/charts.const";

const props = defineProps<{
  charts: Chart[];
}>();

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  RadialLinearScale
);

function getChartComponent(type: ChartType) {
  switch (type) {
    case "bar":
      return Bar;
    case "line":
      return Line;
    case "pie":
      return Pie;
    case "doughnut":
      return Doughnut;
    case "radar":
      return Radar;
    case "polarArea":
      return PolarArea;
    default:
      return Bar;
  }
}
</script>

<template>
  <article :class="$style.charts">
    <div v-if="!charts.length" :class="$style.empty">
      Нет числовых данных для отображения
    </div>

    <div v-else :class="$style.grid">
      <article
        v-for="(chartData, index) in charts"
        :key="index"
        :class="$style.chartCard"
      >
        <header :class="$style.header">
          <h3 :class="$style.title">{{ chartData.title }}</h3>

          <p v-if="chartData.description" :class="$style.desc">
            {{ chartData.description }}
          </p>
        </header>

        <div :class="$style.chartWrapper">
          <component
            :is="getChartComponent(chartData.type)"
            :data="chartData.data"
            :options="CHART_DEFAULT_OPTIONS"
          />
        </div>
      </article>
    </div>
  </article>
</template>
   
<style lang="scss" module>
.charts {
}

.sectionTitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #0f172a;
}

.empty {
  color: #6b7280;
  font-style: italic;
}

.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.chartCard {
  background: #fff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 320px;
}

.chartWrapper {
  height: 100%;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
}

.desc {
  font-size: 0.9rem;
  color: #6b7280;
}

.chartCard canvas {
  flex: 1;
}
</style>