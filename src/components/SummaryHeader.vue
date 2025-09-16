<script setup lang="ts">
import { computed, useCssModule } from "vue";
import type { Sentiment } from "@/types";

interface HeaderProps {
  mainIdea: string;
  sentiment: Sentiment;
  thesis: string;
}

const props = withDefaults(defineProps<HeaderProps>(), {
  mainIdea: "",
  sentiment: "neutral",
});

const $style = useCssModule();

const sentimentClass = computed(() => {
  const classMap: Record<string, string> = {
    positive: `${$style.sentimentPositive}`,
    negative: `${$style.sentimentNegative}`,
    mixed: `${$style.sentimentMixed}`,
    neutral: `${$style.sentimentNeutral}`,
  };

  return classMap[props.sentiment || "neutral"];
});

const sentimentLabel = computed((): string => {
  const labels: Record<Sentiment, string> = {
    positive: "Позитивная",
    negative: "Негативная",
    mixed: "Смешанная",
    neutral: "Нейтральная",
  };

  return labels[props.sentiment || "neutral"] || "Нейтральная";
});
</script>
  
<template>
  <div :class="$style.summaryHeader">
    <div :class="$style.headerContent">
      <div :class="$style.titleBlock">
        <h1 v-text="mainIdea" :class="$style.title" />
        <p v-if="thesis" :class="$style.thesis">{{ thesis }}</p>
      </div>

      <div v-if="sentiment" :class="$style.sentiment">
        <div :class="$style.label">Тональность</div>
        <div :class="[$style.badge, sentimentClass]">
          {{ sentimentLabel }}
        </div>
      </div>
    </div>
  </div>
</template>
  

<style lang="scss" module>
$primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$shadow-color: rgba(102, 126, 234, 0.3);
$shadow-hover-color: rgba(102, 126, 234, 0.4);
$border-radius: 16px;
$padding: 24px;

.summaryHeader {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.headerContent {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.titleBlock {
  flex: 1;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.thesis {
  font-size: 1.125rem;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
  font-weight: 500;
}

.sentiment {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.label {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.sentimentPositive {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.sentimentNegative {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
}

.sentimentMixed {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

.sentimentNeutral {
  background: linear-gradient(135deg, #6b7280, #4b5563);
  color: white;
}
</style>