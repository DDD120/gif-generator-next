import { atom, useRecoilState } from 'recoil'

const storeDefaultValue = {
  step: 1,
  requestUrl: '',
  id: '',
  startTime: '',
  duration: 0,
}

const store = atom({
  key: 'store',
  default: storeDefaultValue,
})

export const useStore = () => useRecoilState(store)
