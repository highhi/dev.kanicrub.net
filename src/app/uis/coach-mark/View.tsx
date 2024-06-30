import { FancyButton } from '../../../components/FancyButton'
import { CoachMarkWithButton } from './CoachMarkWithButton'
import type { CoachMark } from '../../../libs/coach-mark'
import { use, useEffect, useState } from 'react'

export const View = ({ coachMark }: { coachMark: CoachMark }) => {
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    coachMark.go(1)
    setPopup(true)
  }, [])

  const onClick = () => {
    coachMark.dispose()
    setPopup(false)
  }

  return (
    <main className="max-w-[680px] m-auto bg-white p-6 min-h-[600px]">
      <header className="flex items-center">
        <div className="flex-1">
          <div id="button-1" className="inline-block">
            <FancyButton>Button-1</FancyButton>
          </div>
        </div>
        <div id="button-2" className="relative">
          <FancyButton>Button-2</FancyButton>
          {popup && (
            <div className="absolute z-50 top-20 left-0 bg-white">
              <p className="text-black">Click Here!</p>
              <button onClick={onClick} type="button" className="text-black">
                次へ
              </button>
            </div>
          )}
        </div>
        {/* <CoachMarkWithButton /> */}
      </header>
    </main>
  )
}
