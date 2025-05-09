"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceDot } from "recharts"

const weightData = [
  { date: "10/07/24", weight: 74.1 },
  { date: "10/14/24", weight: 74.4 },
  { date: "10/21/24", weight: 74.7 },
  { date: "10/28/24", weight: 75.0 },
  { date: "11/07/24", weight: 75.3 },
  { date: "11/14/24", weight: 75.6 },
  { date: "11/21/24", weight: 75.9 },
]

export function WeightChart() {
  const [currentWeight, setCurrentWeight] = useState(75)

  return (
    <div className="bg-[#1E1E1E] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-400">My weight</h2>
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

      <div className="mb-6">
        <h3 className="text-2xl font-normal">
          Current weight: <span className="font-bold">{currentWeight} kg</span>
        </h3>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weightData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#666666" }} dy={10} />
            <YAxis
              domain={[74, 76]}
              ticks={[74.1, 74.4, 74.7, 75.0, 75.3, 75.6, 75.9]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666666" }}
              width={40}
            />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#00CED1"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8, fill: "#00CED1", stroke: "#FFFFFF" }}
            />
            <ReferenceDot x="11/07/24" y={75} r={15} fill="#00CED1" stroke="none" />
            <ReferenceDot x="11/07/24" y={75} r={8} fill="#FFFFFF" stroke="none" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
