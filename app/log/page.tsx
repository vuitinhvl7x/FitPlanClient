import { LogHeader } from "@/components/log/log-header"
import { WeightChart } from "@/components/log/weight-chart"
import { WorkoutStats } from "@/components/log/workout-stats"
import { CaloriesBurned } from "@/components/log/calories-burned"
import { NextTraining } from "@/components/log/next-training"
import { WorkoutCalendar } from "@/components/log/workout-calendar"
import { Recommendations } from "@/components/log/recommendations"
import { FooterNavigation } from "@/components/footer-navigation"

export default function LogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <LogHeader />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-[60px]">
        <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
          {/* Workout Stats */}
          <WorkoutStats />

          {/* Recommendations */}
          <Recommendations />

          {/* Weight Tracking */}
          <WeightChart />

          {/* Calories Burned */}
          <CaloriesBurned />

          {/* Next Training */}
          <NextTraining />

          {/* Workout Calendar */}
          <WorkoutCalendar />
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  )
}
