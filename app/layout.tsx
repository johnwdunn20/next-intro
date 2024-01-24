import { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata = {
  title: "Fill in later",
  description: "Fill in later"
}

type LayoutProps = {
  children: ReactNode
}

const RootLayout = ({children}: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className='gradient'></div>
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout