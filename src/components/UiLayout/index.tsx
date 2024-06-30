export const UiLayout = ({ title, children }: { title: React.ReactNode; children?: React.ReactNode }) => {
  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-[48px] mb-8">{title}</h1> 
      {children}
    </div>
  )
}