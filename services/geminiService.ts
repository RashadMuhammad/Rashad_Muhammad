
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types.ts";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS } from "../constants.tsx";

const ai = new GoogleGenAI({ apiKey: 'bsrtgerg' });

const SYSTEM_INSTRUCTION = `
You are the AI Personal Assistant for ${PERSONAL_INFO.name}'s professional portfolio.
Your goal is to answer questions about ${PERSONAL_INFO.name}'s skills, projects, and work experience in a professional, helpful, and concise manner.
`;

export const getGeminiResponse = async (history: Message[], userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently unavailable. Please try again later!";
  }
};
