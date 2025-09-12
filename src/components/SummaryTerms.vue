<template>
  <div :class="$style.summaryTerms">
    <span v-text="'Термины'" :class="$style.label" />
    <div :class="$style.list">
      <button
        v-for="(term, index) in terms"
        :key="`term-${index}`"
        :class="$style.pill"
      >
        {{ term }}
      </button>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const props = defineProps<{ terms: string[] }>();
</script>
  
<style lang="scss" module>
.summaryTerms {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-weight: 600;
  color: var(--text-secondary, #6b7280);
  font-size: 0.875rem;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
}

.pill {
  background: linear-gradient(
    180deg,
    rgba(37, 99, 235, 0.06),
    rgba(37, 99, 235, 0.02)
  );
  border: 1px solid rgba(37, 99, 235, 0.08);
  color: var(--accent);
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.82rem;
  cursor: default;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.08);
  }
}
</style>