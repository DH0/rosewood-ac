
import { GoogleGenAI, Type } from "@google/genai";
import { ConcertSummary } from "../types";

export const getConcertSummary = async (rawText: string): Promise<ConcertSummary> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert event promoter for an elite academic academy. Analyze this WeChat advertisement text and extract structured information for a high-end concert poster. The text contains both English and Chinese. Ensure the tone is prestigious and sophisticated.

Content:
${rawText}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { 
              type: Type.STRING, 
              description: "The main name of the event in English (e.g., Annual PhD Gala Concert)." 
            },
            date: { 
              type: Type.STRING, 
              description: "Formatted date and time (e.g., Saturday, 7:00 PM)." 
            },
            location: { 
              type: Type.STRING, 
              description: "Venue name." 
            },
            highlights: { 
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3-4 key program items or benefits."
            },
            description: { 
              type: Type.STRING, 
              description: "A one-sentence sophisticated summary of the event purpose." 
            }
          },
          required: ["title", "date", "location", "highlights", "description"]
        }
      }
    });

    const text = response.text || "{}";
    return JSON.parse(text) as ConcertSummary;
  } catch (error) {
    console.error("Gemini processing error:", error);
    // Return a sensible fallback if the AI fails
    return {
      title: "Rosewood Academy Gala Concert",
      date: "Next Saturday at 7:00 PM",
      location: "Main Auditorium, Heritage Hall",
      highlights: [
        "Traditional Chinese Zither by Dr. Zhang",
        "Classical Strings Quartet",
        "Global PhD Networking Reception"
      ],
      description: "A prestigious evening merging classical traditions with global academic excellence."
    };
  }
};
