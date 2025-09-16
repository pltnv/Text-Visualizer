import { ref } from "vue";
import { GoogleGenAI } from "@google/genai";
import { TextAnalysisResult } from "@/types";

export interface UseGeminiParams {
  apiKey: string;
  prompt: string;
}

export function useGeminiAi(params: UseGeminiParams) {
  const isLoading = ref(false);
  const { apiKey, prompt } = params;

  let ai;
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.error(err);
  }

  async function processData(inputText: string): Promise<TextAnalysisResult> {
    isLoading.value = true;
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-001",
        contents: `${prompt}: ${inputText}`,
      });

      if (!response.text) {
        throw new Error("Empty response from AI model");
      }

      return response.text;
    } catch (err) {
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    processData,
  };
}
