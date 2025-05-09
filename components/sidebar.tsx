import Image from "next/image"

// Target muscles data
const targetMuscles = [
  {
    id: 1,
    name: "Quadriceps",
    percentage: 100,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Chest",
    percentage: 100,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Back",
    percentage: 85,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Shoulders",
    percentage: 70,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function Sidebar() {
  return (
    <div className="w-[30%] min-w-[300px] max-w-[400px] bg-[#1A1A1A] border-l border-[#333333] p-6 overflow-y-auto">
      {/* Target Muscles Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Target Muscles</h2>
        <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center cursor-pointer hover:bg-[#333333] transition-colors">
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
            className="lucide lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
      </div>

      {/* Target Muscles Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {targetMuscles.map((muscle) => (
          <div key={muscle.id} className="bg-[#2A2A2A] rounded-lg p-3 flex flex-col items-center">
            <div className="relative h-[60px] w-[60px] mb-2">
              <Image src={muscle.image || "/placeholder.svg"} alt={muscle.name} fill className="object-cover" />
            </div>
            <div className="text-center">
              <p className="text-sm">{muscle.name}</p>
              <p className="text-[#FF3366] font-semibold text-sm">{muscle.percentage}%</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="bg-[#2A2A2A] rounded-lg p-4">
        <p className="text-[#FFD700] italic text-sm mb-4">38% stronger in 3 months</p>

        {/* Simple Stats Chart */}
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Strength Progress</span>
              <span>+38%</span>
            </div>
            <div className="h-2 bg-[#333333] rounded-full overflow-hidden">
              <div className="h-full bg-[#FF3366] rounded-full" style={{ width: "38%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Workout Consistency</span>
              <span>85%</span>
            </div>
            <div className="h-2 bg-[#333333] rounded-full overflow-hidden">
              <div className="h-full bg-[#FFD700] rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Recovery Rate</span>
              <span>72%</span>
            </div>
            <div className="h-2 bg-[#333333] rounded-full overflow-hidden">
              <div className="h-full bg-[#4CAF50] rounded-full" style={{ width: "72%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
