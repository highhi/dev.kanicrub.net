import { EtherealBackground } from '../../components/EtherealBackground'

export default function UisLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <EtherealBackground>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </EtherealBackground>
  )
}