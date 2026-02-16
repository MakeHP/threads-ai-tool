"use client"
import { useState } from "react"

export default function Home() {
  const [topic, setTopic] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const generatePost = async () => {
    setLoading(true)
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic })
    })
    const data = await res.json()
    setResult(data.content)
    setLoading(false)
  }

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h1>Threads投稿生成ツール</h1>

      <textarea
        placeholder="例：HPが集客できない理由"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ width: "100%", height: 80 }}
      />

      <button onClick={generatePost} style={{ marginTop: 10 }}>
        {loading ? "生成中..." : "投稿生成"}
      </button>

      {result && (
        <>
          <h3>生成結果</h3>
          <textarea
            value={result}
            readOnly
            style={{ width: "100%", height: 150 }}
          />
          <button
            onClick={() => navigator.clipboard.writeText(result)}
          >
            コピー
          </button>
        </>
      )}
    </div>
  )
}
