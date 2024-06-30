'use client'

import { UiLayout } from '../../../components/UiLayout'
import { View } from './View'
import { CoachMark } from '../../../libs/coach-mark'
import { useEffect, useState } from 'react'

export default function Page() {
  const coachMark = new CoachMark({
    steps: [{ id: '#button-2' }, { id: '#button-1' }],
  })

  useEffect(() => {
    return () => {
      coachMark.dispose()
    }
  }, [])

  return (
    <UiLayout title="Coach Mark">
      <View coachMark={coachMark} />
    </UiLayout>
  )
}
