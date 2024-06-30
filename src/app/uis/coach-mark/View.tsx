import { FancyButton } from '../../../components/FancyButton'
import { CoachMarkWithButton } from './CoachMarkWithButton'
import type { CoachMark } from '../../../libs/coach-mark'
import { use, useEffect, useState } from 'react'
import { Tooltip } from '../../../components/Tooltip'

export const View = ({ coachMark }: { coachMark: CoachMark }) => {
  const [button1Popup, setButton1Popup] = useState(false)
  const [button2Popup, setButton2Popup] = useState(false)

  useEffect(() => {
    coachMark.go(1)
    setButton1Popup(true)
  }, [])

  const onClickButton1Popup = () => {
    coachMark.go(2)
    setButton1Popup(false)
    setButton2Popup(true)
  }

  const onClickButton2Popup = () => {
    coachMark.dispose()
    setButton2Popup(false)
  }

  return (
    <main className="max-w-[680px] m-auto bg-white p-6 min-h-[600px]">
      <header className="flex items-center">
        <div className="flex-1">
          <div id="button-1" className="inline-block relative">
            <FancyButton>Button-1</FancyButton>
            {button1Popup && (
              <div className="absolute z-50 top-20 left-0">
                <div onClick={onClickButton1Popup} className="cursor-pointer">
                  <Tooltip position="top">Click Here!</Tooltip>
                </div>
              </div>
            )}
          </div>
        </div>
        <div id="button-2" className="relative">
          <FancyButton>Button-2</FancyButton>
          {button2Popup && (
            <div className="absolute z-50 top-20 left-0">
              <div onClick={onClickButton2Popup} className="cursor-pointer">
                <Tooltip position="top">Dispose!</Tooltip>
              </div>
            </div>
          )}
        </div>
        {/* <CoachMarkWithButton /> */}
      </header>
    </main>
  )
}
