import Stepper from '@/components/common/Stepper'
import Step1 from '@/components/step1'

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
      <Step1 />
    </div>
  )
}
