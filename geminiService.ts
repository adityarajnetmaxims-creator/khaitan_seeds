
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProductInsight = async (categoryName: string, cropName: string, productName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert agronomist from Himalaya Hybrid Seeds Company. 
      Provide a brief, high-value, professional description for a seed product.
      Category: ${categoryName}
      Crop: ${cropName}
      Product: ${productName}
      
      The description should highlight yield, disease resistance, fruit characteristics (length/weight/color), and best practices for Indian farmers. Keep it under 100 words. Format with simple Markdown.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Expert insights are currently unavailable. Please contact our support for detailed product information.";
  }
};
