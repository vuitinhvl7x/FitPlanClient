export function LogHeader() {
  return (
    <header className="h-[60px] bg-[#1A1A1A] border-b border-[#333333] flex items-center justify-between px-6">
      <div className="text-xl font-bold text-white">FITPLAN</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-[#2A2A2A] px-3 py-1.5 rounded-md cursor-pointer">
          <span>Your Gym</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bell cursor-pointer hover:text-[#FF3366] transition-colors"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1A1A1A] font-bold cursor-pointer">
            U
          </div>
        </div>
      </div>
    </header>
  )
}
