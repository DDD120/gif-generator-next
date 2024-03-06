'use client'

import { createScreenshots } from '@/app/actions'
import { useStore } from '@/store'
import { Button, Input } from '@nextui-org/react'
import { nanoid } from 'nanoid'

export default function Step1() {
  const [store, setStore] = useStore()

  const onSubmit = async (formData: FormData) => {
    const requestUrl = formData.get('requestUrl') as string
    const startTime = formData.get('startTime') as string
    const id = nanoid()

    setStore({
      ...store,
      requestUrl,
      startTime,
      id,
    })

    createScreenshots({ requestUrl, startTime, id })
  }

  return (
    <form action={onSubmit} className='flex flex-col gap-6'>
      <Input name='requestUrl' type='text' label='영상 링크' isRequired />
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <Input
          type='text'
          name='startTime'
          label='시작 시각'
          placeholder='HH:MM:SS'
          isRequired
        />
        <Input
          type='text'
          name='endTime'
          label='종료 시각'
          placeholder='HH:MM:SS'
          description='시작 시각과 종료 시각 사이는 최대 3초입니다.'
          isRequired
        />
      </div>
      <Button type='submit' color='primary'>
        완료
      </Button>
    </form>
  )
}
