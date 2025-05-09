"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface Exercise {
  id: number
  name: string
  sets: number
  reps: number
  weight: number
  image: string
  muscle?: string
}

interface ExerciseCardProps {
  exercise: Exercise
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/exercises/${exercise.id}`}>
      <div
        className="bg-[#333333] rounded-xl p-3 flex items-center transition-all duration-200 hover:bg-[#3A3A3A] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-[80px] w-[80px] relative rounded-lg overflow-hidden mr-4 flex-shrink-0">
          <Image src={exercise.image || "/placeholder.svg"} alt={exercise.name} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{exercise.name}</h3>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-opacity ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
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
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            {exercise.sets} sets • {exercise.reps} reps • {exercise.weight} kg
          </p>
          {exercise.muscle && (
            <span className="text-xs bg-[#FF3366] bg-opacity-20 text-[#FF3366] px-2 py-0.5 rounded-full mt-1 inline-block">
              {exercise.muscle}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
