export function NextTraining() {
  return (
    <div className="bg-[#1E1E1E] rounded-xl p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-400">Next training</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center bg-[#2A2A2A] rounded-xl p-4">
          <div className="w-16 h-16 rounded-full border-4 border-[#FF3366] flex items-center justify-center mr-4">
            <span className="text-[#FF3366] text-xl font-bold">0%</span>
          </div>
          <div>
            <p className="text-gray-400 text-sm">1 workout day</p>
            <p className="text-xl font-semibold">chest+triceps</p>
          </div>
          <div className="ml-auto">
            <div className="w-3 h-3 rounded-full bg-[#00CED1]"></div>
          </div>
        </div>

        <div className="flex items-center bg-[#2A2A2A] rounded-xl p-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF3366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div>
            <p className="text-gray-400 text-sm">2 workout day</p>
            <p className="text-xl font-semibold">back+biceps</p>
          </div>
        </div>

        <div className="flex items-center bg-[#2A2A2A] rounded-xl p-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF3366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div>
            <p className="text-gray-400 text-sm">3 workout day</p>
            <p className="text-xl font-semibold">chest+triceps</p>
          </div>
        </div>
      </div>
    </div>
  )
}
