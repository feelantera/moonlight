import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Moonlight Next.js Example',
  description: 'Generated by create next app and moonrepo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
