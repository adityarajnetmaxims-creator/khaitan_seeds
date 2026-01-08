import { GoogleGenAI } from "npm:@google/genai@^1.34.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { categoryName, cropName, productName } = await req.json();

    if (!categoryName || !cropName || !productName) {
      return new Response(
        JSON.stringify({ error: "Missing required parameters" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const apiKey = Deno.env.get("GEMINI_API_KEY");
    
    if (!apiKey) {
      console.error("GEMINI_API_KEY not found in environment");
      return new Response(
        JSON.stringify({ 
          text: "Expert insights are currently unavailable. Please contact our support for detailed product information." 
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert agronomist from Himalaya Hybrid Seeds Company. 
      Provide a brief, high-value, professional description for a seed product.
      Category: ${categoryName}
      Crop: ${cropName}
      Product: ${productName}
      
      The description should highlight yield, disease resistance, fruit characteristics (length/weight/color), and best practices for Indian farmers. Keep it under 100 words. Format with simple Markdown.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return new Response(
      JSON.stringify({ text: response.text }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return new Response(
      JSON.stringify({ 
        text: "Expert insights are currently unavailable. Please contact our support for detailed product information." 
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
