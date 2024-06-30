import { FancyButton } from '../../../components/FancyButton'
import { CoachMarkWithButton } from './CoachMarkWithButton'
import type { CoachMark } from '../../../libs/coach-mark'
import { use, useEffect } from 'react'


export const View = ({ coachMark }: { coachMark: CoachMark }) => {
  useEffect(() => {
    coachMark.go(1)
  }, [])

  return (
    <main className="max-w-[680px] m-auto bg-white p-6 min-h-[600px]">
      <header className="flex items-center">
        <div className='flex-1'>
          <FancyButton>Button-1</FancyButton>
        </div>
        <div id="button-2">
          <FancyButton>Button-2</FancyButton>
        </div>
        {/* <CoachMarkWithButton /> */}
      </header>
    </main>
  )
}