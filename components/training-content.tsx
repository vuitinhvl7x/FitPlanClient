"use client"

import { useState } from "react"
import { ExerciseCard } from "./exercise-card"

// Exercise data
const exercises = [
  {
    id: 1,
    name: "Barbell Bench Press",
    sets: 4,
    reps: 8,
    weight: 80,
    image: "/placeholder.svg?height=80&width=80",
    muscle: "Chest",
  },
  {
    id: 2,
    name: "Incline Dumbbell Press",
    sets: 3,
    reps: 10,
    weight: 24,
    image: "/placeholder.svg?height=80&width=80",
    muscle: "Upper Chest",
  },
  {
    id: 3,
    name: "Cable Chest Fly",
    sets: 3,
    reps: 12,
    weight: 15,
    image: "/placeholder.svg?height=80&width=80",
    muscle: "Chest",
  },
  {
    id: 4,
    name: "Tricep Pushdown",
    sets: 4,
    reps: 12,
    weight: 25,
    image: "/placeholder.svg?height=80&width=80",
    muscle: "Triceps",
  },
  {
    id: 5,
    name: "Overhead Tricep Extension",
    sets: 3,
    reps: 12,
    weight: 20,
    image: "/placeholder.svg?height=80&width=80",
    muscle: "Triceps",
  },
  {
    id: 6,
    name: "Dips",
    sets: 3,
    reps: 10,
    weight: 0,
    image: "/placeholder.svg?height=80&width=80",
    muscle: "Chest/Triceps",
  },
  {
    id: 7,
    name: "Close-Grip Bench Press",
    sets: 3,
    reps: 8,
    weight: 60,
    image: "/placeholder.svg?height=80&width=80",
    muscle: "Triceps/Chest",
  },
]

export function TrainingContent() {
  const [exerciseList, setExerciseList] = useState(exercises)

  return (
    <div className="flex-1 overflow-y-auto p-6">
      {/* Toolbar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#2A2A2A] px-3 py-1.5 rounded-md text-sm flex items-center gap-1">
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
            className="lucide lucide-clock"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>1h</span>
        </div>
        <div className="bg-[#2A2A2A] px-3 py-1.5 rounded-md text-sm flex items-center gap-1">
          <span>Recovered Muscles</span>
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
        <div className="bg-[#2A2A2A] px-3 py-1.5 rounded-md text-sm flex items-center gap-1">
          <span>Equipment</span>
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
        <div className="ml-auto">
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
            className="lucide lucide-search cursor-pointer hover:text-[#FF3366] transition-colors"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>

      {/* Exercises Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{exerciseList.length} Exercises</h2>
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

      {/* Exercise List */}
      <div className="space-y-3 mb-8">
        {exerciseList.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>

      {/* Start Workout Button */}
      <div className="flex justify-center">
        <button className="bg-[#FF3366] text-white font-semibold py-3 px-8 rounded-xl w-[200px] hover:bg-opacity-90 transition-colors animate-pulse">
          Start Workout
        </button>
      </div>
    </div>
  )
}
