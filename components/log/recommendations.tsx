export function Recommendations() {
  return (
    <div className="bg-[#1E1E1E] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-400">Recommendations</h2>
        <button className="text-[#00CED1] flex items-center">
          More
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
            className="lucide lucide-chevron-right ml-1"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center h-40 text-gray-500 text-center">
        <p className="text-xl">Recommendations for your workouts will be displayed here</p>
      </div>
    </div>
  )
}
