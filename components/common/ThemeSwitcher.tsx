'use client'

import { Button } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const onClick = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  if (!mounted) return null

  return (
    <div>
      <Button isIconOnly onClick={onClick} aria-label='dark mode'>
        {theme === 'dark' ? (
          <Image src='/light.svg' alt='라이트' width={20} height={20} />
        ) : (
          <Image src='/dark.svg' alt='다크' width={20} height={20} />
        )}
      </Button>
    </div>
  )
}
