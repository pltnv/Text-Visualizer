
  
<script setup lang="ts">
import { computed } from "vue";
import SummaryHeader from "@/components/SummaryHeader.vue";
import SummaryTerms from "@/components/SummaryTerms.vue";
import SummaryKeyIdeas from "@/components/SummaryKeyIdeas.vue";
import SummaryKeywords from "@/components/SummaryKeywords.vue";
import SummaryProblemsSolutions from "@/components/SummaryProblemsSolutions.vue";
import SummaryEntities from "@/components/SummaryEntities.vue";
import type { TextAnalysisResult } from "@/types";

const props = defineProps<{ summary: TextAnalysisResult }>();

const hasKeyIdeas = computed(
  () =>
    Array.isArray(props.summary.keyIdeas) && props.summary.keyIdeas.length > 0
);

const hasKeywords = computed(
  () =>
    Array.isArray(props.summary.keywords) && props.summary.keywords.length > 0
);

const hasTerms = computed(
  () => Array.isArray(props.summary.terms) && props.summary.terms.length > 0
);

const hasSentiment = computed(
  () =>
    typeof props.summary.sentiment === "string" &&
    props.summary.sentiment.length > 0
);

const hasProblemsOrSolutions = computed(() => {
  const ps = props.summary.problemsAndSolutions;
  if (!ps) return false;
  const p = Array.isArray(ps.problems) && ps.problems.length > 0;
  const s = Array.isArray(ps.solutions) && ps.solutions.length > 0;
  return p || s || true;
});

const hasEntities = computed(
  () =>
    Array.isArray(props.summary.entities) && props.summary.entities.length > 0
);
</script>
  

<template>
  <article :class="$style.card">
    <SummaryHeader
      v-if="summary"
      :mainIdea="summary.mainIdea"
      :sentiment="summary.sentiment"
      :thesis="summary.thesis"
    />

    <section :class="$style.body">
      <div :class="$style.left">
        <SummaryKeyIdeas v-if="hasKeyIdeas" :keyIdeas="summary.keyIdeas" />

        <SummaryKeywords v-if="hasKeywords" :keywords="summary.keywords" />

        <SummaryTerms v-if="hasTerms" :terms="summary.terms" />
      </div>

      <aside :class="$style.right">
        <SummaryProblemsSolutions
          v-if="hasProblemsOrSolutions"
          :problemsAndSolutions="summary.problemsAndSolutions"
        />

        <SummaryEntities v-if="hasEntities" :entities="summary.entities" />
      </aside>
    </section>
  </article>
</template>
  
  <style lang="scss" module>
:root {
  --bg: #fbfcfe;
  --card: #ffffff;
  --muted: #6b7280;
  --accent: #2563eb;
  --glass: rgba(255, 255, 255, 0.6);
  --radius: 14px;
  --shadow-1: 0 6px 18px rgba(22, 27, 36, 0.08);
  --shadow-2: 0 10px 30px rgba(22, 27, 36, 0.1);
  --gap: 20px;
  --glass-border: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.35)
  );
}

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

.card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow-1);
  transition: box-shadow 0.28s cubic-bezier(0.2, 0.9, 0.2, 1),
    transform 0.18s ease;
  border: 1px solid rgba(15, 23, 42, 0.03);
  max-width: 980px;
  margin: 12px auto;
  display: flex;
  flex-direction: column;
  gap: 18px;

  &:hover {
    box-shadow: var(--shadow-2);
    transform: translateY(-4px);
  }
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  min-width: 180px;
}

.body {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--gap);
  align-items: start;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 880px) {
  .body {
    grid-template-columns: 1fr;
  }

  .meta {
    align-items: flex-start;
  }

  .card {
    padding: 18px;
  }
}
</style>
  