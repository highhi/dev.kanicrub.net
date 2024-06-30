import dynamic from 'next/dynamic'
import { FancyButton } from '../../../components/FancyButton'

const CoachMark = dynamic(() => import('./CoachMark'), { ssr: false })

export const CoachMarkWithButton = () => {
  return <>
    <div id="fancy-button">
      <FancyButton>Button-2</FancyButton>
    </div>
    { <CoachMark targetId="#fancy-button" /> }
  </>
}