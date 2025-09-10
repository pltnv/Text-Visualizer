<script setup lang="ts">
import InputBlock from "@/components/InputBlock.vue";

function kek(inputText: string) {
  console.log(inputText, 111);
}
</script>


<template>
  <div :class="$style.main">
    <InputBlock @send="kek" />
  </div>
</template>


<style lang="scss" module>
.main {
}
</style>