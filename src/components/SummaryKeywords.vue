<template>
  <div :class="$style.summaryKeywords">
    <h2 :class="$style.title">Ключевые слова</h2>
    <div :class="$style.chips">
      <span
        v-for="(k, i) in keywords"
        :key="`kw-${i}`"
        :class="$style.chip"
      >
        {{ k }}
      </span>
    </div>
  </div>
</template>
      
<script setup lang="ts">
const props = defineProps<{ keywords: string[] }>();
</script>
      
<style lang="scss" module>
.summaryKeywords {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.4)
  );
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.03);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(2, 6, 23, 0.06);
  }
}

.title {
  margin: 0 0 10px 0;
  font-size: 1.03rem;
  color: #0f172a;
  font-weight: 700;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, #f8fafc, #eef2ff);
  color: #0f172a;
  font-weight: 600;
  font-size: 0.88rem;
  border: 1px solid rgba(15, 23, 42, 0.04);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.06);
  }
}
</style>