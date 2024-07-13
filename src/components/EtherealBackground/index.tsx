import { ReactNode } from 'react'

export const EtherealBackground = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="relative">{children}</div>
    </div>
  )
}
