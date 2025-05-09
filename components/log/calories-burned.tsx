"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const caloriesData = [
  { day: "Mon", calories: 320 },
  { day: "Tue", calories: 450 },
  { day: "Wed", calories: 280 },
  { day: "Thu", calories: 390 },
  { day: "Fri", calories: 480 },
  { day: "Sat", calories: 200 },
  { day: "Sun", calories: 150 },
]

export function CaloriesBurned() {
  return (
    <div className="bg-[#1E1E1E] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-400">Calories burned, kcal</h2>
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

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={caloriesData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#666666" }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#666666" }} width={40} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#2A2A2A",
                border: "none",
                borderRadius: "8px",
                color: "white",
              }}
              cursor={{ fill: "rgba(255, 51, 102, 0.1)" }}
            />
            <Bar dataKey="calories" fill="#FF3366" radius={[4, 4, 0, 0]} barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
