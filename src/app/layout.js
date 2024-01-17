import './globals.css'
import {Oswald} from 'next/font/google'

export const metadata = {
  title: 'Lucas Perez',
  description: 'Portfolio - Lucas Perez, Full Stack Developer',
}

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-oswald'
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  )
}
