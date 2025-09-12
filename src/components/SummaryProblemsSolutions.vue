<template>
  <div :class="$style.summaryProblemsSolutions">
    <div :class="$style.header">
      <h3 :class="$style.problemsTitle">Проблемы</h3>
      <h3 :class="$style.solutionsTitle">Решения</h3>
    </div>

    <div :class="$style.problemsBody">
      <ul :class="$style.problemList">
        <li
          v-for="(problem, i) in problemsAndSolutions?.problems || []"
          :key="`ps-${i}`"
        >
          {{ problem }}
        </li>
        
        <li v-if="!problemsAndSolutions?.problems?.length">
          — проблем не найдено
        </li>
      </ul>

      <ul :class="$style.solutionList">
        <li
          v-for="(solution, i) in problemsAndSolutions?.solutions || []"
          :key="`solution-${i}`"
        >
          {{ solution }}
        </li>

        <li v-if="!problemsAndSolutions?.solutions?.length">
          — решений не найдено
        </li>
      </ul>
    </div>
  </div>
</template>
        
  <script setup lang="ts">
interface Props {
  problemsAndSolutions: {
    problems: string[];
    solutions: string[];
  };
}

const props = defineProps<Props>();
</script>
        
  <style lang="scss" module>
.summaryProblemsSolutions {
  background: linear-gradient(
    180deg,
    rgba(248, 250, 252, 0.9),
    rgba(255, 255, 255, 0.8)
  );
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.03);
}

.header {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.problemsTitle,
.solutionsTitle {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: -0.2px;
}

.problemsTitle {
  color: #b91c1c;
}

.solutionsTitle {
  color: #047857;
}

.problemsBody {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.problemList,
.solutionList {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.problemList li,
.solutionList li {
  padding: 8px 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.92rem;
}

.problemList li {
  background: linear-gradient(180deg, #fff5f5, #fff1f2);
  border-left: 4px solid rgba(220, 38, 38, 0.12);
  color: #7f1d1d;
}

.solutionList li {
  background: linear-gradient(180deg, #f0fdf4, #ecfdf5);
  border-left: 4px solid rgba(4, 120, 87, 0.12);
  color: #065f46;
}
</style>