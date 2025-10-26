<script setup lang="ts">
const props = defineProps<{ entities: string[] }>();
</script>

<template>
  <div :class="$style.summaryEntities">
    <h4 :class="$style.title">Сущности</h4>
    <div :class="$style.entityList">
      <span v-for="(entity, i) in entities" :key="`ent-${i}`">{{
        entity
      }}</span>
    </div>
  </div>
</template>
    
<style lang="scss" module>
.summaryEntities {
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(15, 23, 42, 0.03);
}

.title {
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  color: #374151;
  font-weight: 700;
}

.entityList {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    background: rgba(99, 102, 241, 0.07);
    padding: 6px 10px;
    border-radius: 8px;
    color: #111827;
    font-weight: 600;
    font-size: 0.86rem;
  }
}
</style>