import { helvetica } from "./ui/fonts"
import "./globals.css"
import Navigation from "./navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable}`}>
        <div className="min-h-screen p-8">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
