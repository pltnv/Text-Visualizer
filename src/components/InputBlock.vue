<template>
  <div :class="$style.inputBlock">
    <div :class="$style.wrapper">
      <Textarea
        v-model="message"
        placeholder="Введите текст"
        rows="3"
        cols="60"
        :class="$style.textarea"
      />
      <Button
        icon="pi pi-send"
        :class="$style.sendButton"
        :disabled="!message"
        severity="secondary"
        text
        @click="send"
      />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import { InputBlockProps, InputBlockEmits } from "@/types";
import Textarea from "primevue/textarea";
import Button from "primevue/button";

const emit = defineEmits<InputBlockEmits>();

const props = withDefaults(defineProps<InputBlockProps>(), {
  isLoading: false,
});

const message = ref<string>("");

function sendMessage(): void {
  if (message.value.trim()) {
    emit("send", message.value.trim());
    message.value = "";
  }
}

const textInput = ref("");

function send() {
  emit("send", textInput.value);
}
</script>
  
    
<style lang="scss" module>
.inputBlock {
  width: 100%;
  background: #1a1a1a;
  border-radius: 12px;
}

.wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #2a2a2a;
  border-radius: 8px;
  padding: 0.5rem;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: #6366f1;
  }
}

.textarea {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #e5e5e5;
  font-size: 0.95rem;
  padding: 0.5rem;
  resize: none;

  &::placeholder {
    color: #888;
  }

  &:focus {
    box-shadow: none;
  }
}

.sendButton {
  color: #888;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:not(:disabled) {
    color: #6366f1;

    &:hover {
      background: rgba(99, 102, 241, 0.1);
      color: #7c3aed;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

:deep(.p-inputtext) {
  background: transparent !important;
  border: none !important;
  color: #e5e5e5 !important;

  &::placeholder {
    color: #888 !important;
  }
}

:deep(.p-button) {
  border: none !important;
  background: transparent !important;
}
</style>