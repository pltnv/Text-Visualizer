<template>
  <div :class="$style.summaryKeyIdea">
    <h2 :class="$style.title">Ключевые идеи</h2>
    
    <ol :class="$style.ideasList">
      <li v-for="(idea, i) in keyIdeas" :key="`idea-${i}`">
        <span class="visually-hidden">Идея {{ i + 1 }}:</span>{{ idea }}
      </li>
    </ol>
  </div>
</template>
    
<script setup lang="ts">
const props = defineProps<{ keyIdeas: string[] }>();
</script>
    
<style lang="scss" module>
.summaryKeyIdea {
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

.ideasList {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: idea;
  display: grid;
  gap: 8px;

  li {
    position: relative;
    padding: 10px 12px;
    background: rgba(37, 99, 235, 0.03);
    border-radius: 8px;
    color: #0b1220;
    font-weight: 600;
    font-size: 0.96rem;
    display: block;
    transition: background 0.18s ease;

    &::before {
      counter-increment: idea;
      content: counter(idea);
      display: inline-grid;
      place-items: center;
      width: 28px;
      height: 28px;
      border-radius: 8px;
      margin-right: 10px;
      background: linear-gradient(180deg, #e6f0ff, #dbeafe);
      color: #1e3a8a;
      font-weight: 800;
      float: left;
    }
  }
}

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
</style>