interface Props {
  step: number
}

export default function Stepper({ step }: Props) {
  const activeStyle = 'text-blue-600 dark:text-blue-500'

  return (
    <ol className='my-8 flex justify-center gap-2'>
      <li>
        <span className={step === 1 ? activeStyle : ''}>1. 영상 정보 입력</span>
        <span> &#62;&#62;</span>
      </li>
      <li>
        <span className={step === 2 ? activeStyle : ''}>
          2. 자르기 및 옵션 설정
        </span>
        <span> &#62;&#62;</span>
      </li>
      <li className={step === 3 ? activeStyle : ''}>3. 생성 및 다운로드</li>
    </ol>
  )
}
