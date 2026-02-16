import OpenAI from "openai"

export const runtime = "nodejs"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  try {
    const { topic } = await req.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "あなたは優秀なSNSマーケターです。HP受注につながるThreads投稿を140文字以内、改行多め、最後は問いかけで作成してください。"
        },
        {
          role: "user",
          content: topic
        }
      ]
    })

    return Response.json({
      content: completion.choices[0].message.content
    })
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
