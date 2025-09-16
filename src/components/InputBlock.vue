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
  if (message.value.trim() && !props.isLoading) {
    emit("send", message.value.trim());
    message.value = "";
  }
}
</script>

<template>
  <div :class="$style.inputBlock">
    <div :class="$style.wrapper">
      <Textarea
        v-model="message"
        placeholder="Введите сообщение..."
        rows="3"
        cols="60"
        :class="$style.textarea"
        :disabled="isLoading"
      />
      <Button
        icon="pi pi-send"
        :class="[$style.sendButton, { [$style.loading]: isLoading }]"
        :disabled="!message || isLoading"
        severity="secondary"
        text
        @click="sendMessage"
      >
        <i
          v-if="isLoading"
          class="pi pi-spin pi-spinner"
          :class="$style.spinner"
        ></i>
      </Button>
    </div>
  </div>
</template>


<style lang="scss" module>
.inputBlock {
  width: 100%;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.wrapper {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:focus-within {
    border-color: #e2e8f0;
    box-shadow: 0 0 0 3px rgba(241, 245, 249, 0.5);
  }
}

.textarea {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #1f2937;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.75rem;
  resize: none;
  font-family: inherit;
  min-height: 80px;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }

  &:focus {
    box-shadow: none;
    background: rgba(249, 250, 251, 0.8);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.sendButton {
  color: #9ca3af;
  padding: 0.875rem;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border: 1px solid rgba(226, 232, 240, 0.8) !important;

  &:not(:disabled) {
    color: #ffffff;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border-color: #059669 !important;
    box-shadow: 0 2px 10px rgba(16, 185, 129, 0.3),
      0 1px 2px rgba(16, 185, 129, 0.2);

    &:hover {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4),
        0 2px 4px rgba(16, 185, 129, 0.3);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 1px 5px rgba(16, 185, 129, 0.3),
        0 0 1px rgba(16, 185, 129, 0.2);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #f3f4f6;
    border-color: #e5e7eb !important;
  }
}

.loading {
  background: #f3f4f6 !important;
  border-color: #e5e7eb !important;
  box-shadow: none !important;
  transform: none !important;
}

.spinner {
  font-size: 1.2rem;
  color: #6b7280;
}

// Глобальные стили для PrimeVue компонентов
:deep(.p-inputtext) {
  background: transparent !important;
  border: none !important;
  color: #1f2937 !important;
  font-size: 1rem !important;
  padding: 0.75rem !important;

  &::placeholder {
    color: #9ca3af !important;
  }

  &:focus {
    box-shadow: none !important;
    background: rgba(249, 250, 251, 0.8) !important;
  }
}

:deep(.p-button) {
  border: none !important;
  background: transparent !important;
  transition: all 0.3s ease !important;
}

:deep(.p-button-label) {
  font-weight: 500 !important;
}

:deep(.p-button:focus) {
  box-shadow: none !important;
  outline: none !important;
}

:deep(.p-inputtext:focus) {
  box-shadow: none !important;
  outline: none !important;
}
</style>