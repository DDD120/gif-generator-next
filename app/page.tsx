import Stepper from '@/components/common/Stepper'

interface Props {
  searchParams: {
    step: string
  }
}

export default function Home({ searchParams }: Props) {
  const step = searchParams.step ? Number(searchParams.step) : 1

  return (
    <div>
      <Stepper step={step} />
    </div>
  )
}
