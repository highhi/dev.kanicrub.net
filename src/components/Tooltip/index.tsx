export const Tooltip = ({
  children,
  position = 'top',
}: {
  children: React.ReactNode
  position: 'top' | 'bottom' | 'left' | 'right'
}) => {
  const arrowClasses = {
    bottom:
      'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-8 border-x-8 border-x-transparent border-t-gray-800',
    top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-8 border-x-8 border-x-transparent border-b-gray-800',
    left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-8 border-y-8 border-y-transparent border-l-gray-800',
    right:
      'left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-8 border-y-8 border-y-transparent border-r-gray-800',
  }

  return (
    <div className="inline-block relative">
      <div className="bg-gray-800 text-white text-sm rounded py-1 px-2">
        {children}
      </div>
      <div className={`absolute w-0 h-0 ${arrowClasses[position]}`} />
    </div>
  )
}
