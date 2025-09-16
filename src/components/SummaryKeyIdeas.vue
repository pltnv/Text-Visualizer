<script setup lang="ts">
const props = defineProps<{ keyIdeas: string[] }>();
</script>

<template>
  <div :class="$style.summaryKeyIdea">
    <h2 :class="$style.title">Ключевые идеи</h2>

    <ol :class="$style.ideasList">
      <li
        v-for="(idea, i) in keyIdeas"
        :key="`idea-${i}`"
        :class="$style.ideaItem"
      >
        <span :class="$style.ideaNumber">{{ i + 1 }}</span>
        <span :class="$style.ideaText">{{ idea }}</span>
      </li>
    </ol>
  </div>
</template>
    

    
<style lang="scss" module>
.summaryKeyIdea {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.95),
    rgba(248, 250, 252, 0.95)
  );
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 35px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);
    border-color: rgba(203, 213, 225, 0.6);
  }
}

.title {
  margin: 0 0 16px 0;
  font-size: 1.1rem;
  color: #1e293b;
  font-weight: 700;
  letter-spacing: -0.01em;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(226, 232, 240, 0.6);
  position: relative;
}

.ideasList {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.ideaItem {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(226, 232, 240, 0.6);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, #3b82f6, #6366f1);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    background: rgba(248, 250, 252, 0.9);
    border-color: rgba(203, 213, 225, 0.8);
    transform: translateX(4px);

    &::before {
      opacity: 1;
    }

    .ideaNumber {
      background: linear-gradient(135deg, #3b82f6, #6366f1);
      color: white;
      transform: scale(1.05);
    }
  }
}

.ideaNumber {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  color: #475569;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.ideaText {
  color: #334155;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.5;
  flex: 1;
  padding-top: 4px;
}

// Адаптивность
@media (max-width: 768px) {
  .summaryKeyIdea {
    padding: 16px;
    border-radius: 14px;
  }

  .ideaItem {
    padding: 14px;
    gap: 10px;
  }

  .ideaNumber {
    min-width: 28px;
    height: 28px;
    font-size: 0.85rem;
  }

  .ideaText {
    font-size: 0.9rem;
  }
}
</style>