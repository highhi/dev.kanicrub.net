import { ReactNode } from 'react'

export const EtherealBackground = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-gray-800 to-transparent opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="relative">{children}</div>
    </div>
  )
}
