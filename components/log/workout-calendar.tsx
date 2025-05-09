"use client"

import { useState } from "react"

// Workout days for the month
const workoutDays = [1, 4, 8, 11, 15, 18, 22, 25, 28, 29, 30]

// Days from previous/next month
const prevMonthDays = [31]
const nextMonthDays = [1, 2, 3, 4]

export function WorkoutCalendar() {
  const [currentMonth, setCurrentMonth] = useState("April 2025")

  // Generate calendar days
  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div className="bg-[#1E1E1E] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-400">Workout schedule</h2>
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

      <div className="flex items-center justify-between mb-6">
        <button className="text-[#00CED1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <h3 className="text-2xl font-bold">{currentMonth}</h3>
        <button className="text-[#00CED1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        <div className="text-gray-400">Mon</div>
        <div className="text-gray-400">Tue</div>
        <div className="text-gray-400">Wed</div>
        <div className="text-gray-400">Thu</div>
        <div className="text-gray-400">Fri</div>
        <div className="text-gray-400">Sat</div>
        <div className="text-gray-400">Sun</div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {/* Previous month days */}
        {prevMonthDays.map((day) => (
          <div key={`prev-${day}`} className="py-2 text-gray-600">
            {day}
          </div>
        ))}

        {/* Current month days */}
        {days.map((day) => {
          const isWorkoutDay = workoutDays.includes(day)
          const isToday = day === 28

          return (
            <div key={day} className="relative py-2">
              <div className={`${isToday ? "text-[#00CED1] font-bold" : ""}`}>{day}</div>
              {isWorkoutDay && (
                <div className="mt-1 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#666666"
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
              )}
            </div>
          )
        })}

        {/* Next month days */}
        {nextMonthDays.map((day) => (
          <div key={`next-${day}`} className="py-2 text-gray-600">
            {day}
            {day === 1 ||
              (day === 2 && (
                <div className="mt-1 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#666666"
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
              ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <div className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#666666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
