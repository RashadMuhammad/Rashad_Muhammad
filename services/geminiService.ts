
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Personal Assistant for ${PERSONAL_INFO.name}'s professional portfolio.
Your goal is to answer questions about ${PERSONAL_INFO.name}'s skills, projects, and work experience in a professional, helpful, and concise manner.

Context:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Bio: ${PERSONAL_INFO.extendedBio}
- Projects: ${JSON.stringify(PROJECTS)}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Skills: ${JSON.stringify(SKILLS)}

Guidelines:
1. Be polite and professional.
2. If you don't know the answer, suggest contacting ${PERSONAL_INFO.name} via the contact form.
3. Keep responses relatively short (under 100 words).
4. Do not make up facts. Only use the provided context.
5. If someone asks for a resume, mention it's available upon request through the contact form.
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
        maxOutputTokens: 500,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently taking a coffee break. Please try again later!";
  }
};
