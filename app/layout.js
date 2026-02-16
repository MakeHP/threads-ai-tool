export const metadata = {
  title: "Threads AI Tool",
  description: "AI投稿生成ツール"
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
