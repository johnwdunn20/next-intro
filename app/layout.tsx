import { ReactNode } from 'react'
import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';

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
        <Provider>
          <div className="main">
            <div className='gradient'></div>
          </div>

          <main className="app">
            <Nav/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout