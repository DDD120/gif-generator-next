import type { Metadata } from 'next'
import './globals.css'
import ThemeSwitcher from '@/components/common/ThemeSwitcher'
import Providers from '@/components/providers/providers'

export const metadata: Metadata = {
  title: '움짤 생성기',
  description: 'GIF Generater',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className='dark:text-white'>
        <Providers>
          <div className='flex flex-col items-center justify-center py-4'>
            <header>
              <h1 className='mt-20 text-3xl font-extrabold'>움짤 생성기</h1>
              <div className='absolute top-4 right-4 flex gap-2 h-10'>
                <ThemeSwitcher />
              </div>
            </header>
            <main className='mt-8 max-w-[640px] w-[90%] flex flex-col justify-center items-center'>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
