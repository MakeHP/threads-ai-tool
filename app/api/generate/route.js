import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  const { topic } = await req.json()

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "あなたは優秀なSNSマーケターです。HP受注につながるThreads投稿を作ってください。140文字以内。改行多め。最後は軽い問いかけ。"
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
}
