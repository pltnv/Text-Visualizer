<script setup lang="ts">
import { ref } from "vue";
import { InputBlockProps, InputBlockEmits } from "@/types";

const emit = defineEmits<InputBlockProps>();

const props = withDefaults(defineProps<InputBlockProps>(), {
  isLoading: false,
});

const textInput = ref("");

function send() {
  emit("send", textInput.value);
}
</script>


<template>
  <div :class="$style.inputBlock">
    <div :class="$style.textareaContainer">
      <Textarea
        v-model="textInput"
        variant="filled"
        rows="3"
        cols="60"
        style="resize: none"
      />

      <div :class="$style.footer">
        <Button @click="send" icon="pi pi-send" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" module>
.inputBlock {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.textareaContainer {
  width: 100%;
  padding: 4px;
  background-color: #27272a;
  border-radius: 6px;
}

.footer {
  display: flex;
  justify-content: flex-end;
}
</style>