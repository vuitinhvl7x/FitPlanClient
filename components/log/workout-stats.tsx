export function WorkoutStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#1E1E1E] rounded-xl p-6">
        <div className="flex flex-col items-center">
          <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-2">WORKOUTS</h3>
          <p className="text-5xl font-bold">0</p>
        </div>
      </div>

      <div className="bg-[#1E1E1E] rounded-xl p-6">
        <div className="flex flex-col items-center">
          <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-2">MILESTONES</h3>
          <div className="flex gap-4 mt-2">
            <div className="relative">
              <div className="w-12 h-12 bg-[#2A2A2A] rounded-lg flex items-center justify-center border-2 border-[#FF3366]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF3366"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dumbbell"
                >
                  <path d="m6.5 6.5 11 11" />
                  <path d="m21 21-1-1" />
                  <path d="m3 3 1 1" />
                  <path d="m18 22 4-4" />
                  <path d="m2 6 4-4" />
                  <path d="m3 10 7-7" />
                  <path d="m14 21 7-7" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-[#2A2A2A] rounded-lg flex items-center justify-center border-2 border-[#FF3366]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF3366"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trophy"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-[#2A2A2A] rounded-lg flex items-center justify-center border-2 border-[#FF3366]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF3366"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-flame"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E] rounded-xl p-6">
        <div className="flex flex-col items-center">
          <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-2">WEEKLY GOAL</h3>
          <p className="text-4xl font-bold">
            0/3 <span className="text-2xl font-normal text-gray-400">days</span>
          </p>
        </div>
      </div>

      <div className="bg-[#1E1E1E] rounded-xl p-6">
        <div className="flex flex-col items-center">
          <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-2">CURRENT STREAK</h3>
          <p className="text-4xl font-bold">
            0 <span className="text-2xl font-normal text-gray-400">weeks</span>
          </p>
        </div>
      </div>
    </div>
  )
}
