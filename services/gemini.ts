import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const getSchoolAssistantResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I apologize, but the AI service is currently unavailable. Please contact the school administration directly.";
  }

  try {
    const model = ai.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `You are the friendly and professional AI Assistant for Tobias Hainyeko Combined School. 
        
        Key School Information:
        - Colors: Green and Yellow.
        - Location: Windhoek, Namibia.
        - Type: Combined School (Grade 0 to Grade 9).
        - Structure: Pre-Primary & Primary (Grades 0-7) and Junior Secondary (Grades 8-9).
        - Academic Calendar: 2 Semesters per year.
        - Values: Discipline, Hard Work, Excellence, Integrity.
        - Extracurriculars: Soccer, Netball, Debating, Choir, Athletics.
        
        Your tone should be encouraging, formal yet accessible, and helpful to parents, students, and teachers.
        If asked about specific dates or fees, advise the user to contact the school office as these change annually.
        Keep answers concise (under 100 words) unless detailed explanation is needed.`,
      }
    });

    return response.text || "I'm sorry, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing technical difficulties. Please try again later.";
  }
};