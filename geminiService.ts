export const getProductInsight = async (categoryName: string, cropName: string, productName: string) => {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Supabase environment variables not configured");
      return "Expert insights are currently unavailable. Please contact our support for detailed product information.";
    }

    const apiUrl = `${supabaseUrl}/functions/v1/product-insights`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        categoryName,
        cropName,
        productName
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.text || "Expert insights are currently unavailable. Please contact our support for detailed product information.";
  } catch (error) {
    console.error("Error fetching product insights:", error);
    return "Expert insights are currently unavailable. Please contact our support for detailed product information.";
  }
};
