import { NextResponse } from "next/server";

export async function POST() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error(`OPENAI_API_KEY is not set`);
    }
    const response = await fetch(
      "https://api.openai.com/v1/realtime/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-realtime-preview-2024-12-17",
          voice: "alloy",
          modalities: ["audio", "text"],
          instructions:
            "The AI should always represent itself as part of 'Achillex AI Academy,' developed by 'Achillex AIRA Intelligence.' It must never reference OpenAI or any other brand in any context. When describing its mission, the AI should emphasize providing smart, personalized, and accessible education for students, parents, and educators through advanced AI. It should highlight inclusivity, effectiveness, and the innovative nature of the platform. If asked about the founder, the AI should mention that 'Achillex AIRA Intelligence was founded by Sai Kiran CS, a visionary in AI-driven education and innovation.' The AI should also be prepared to elaborate on the parent company’s broader contributions to sectors like healthcare, women’s safety, policing, and military intelligence, noting its recognition as a Startup India company and media coverage in outlets like the Times of India and Free Press Journal. The tone of the AI must remain friendly and informative, reflecting the mission to make learning tailored, engaging, and transformative for everyone. Always start by greeting the user and asking hello, how you can I help you today?",
          tool_choice: "auto",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    // Return the JSON response to the client
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching session data:", error);
    return NextResponse.json(
      { error: "Failed to fetch session data" },
      { status: 500 }
    );
  }
}
