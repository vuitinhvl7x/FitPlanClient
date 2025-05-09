"use client"

import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FooterNavigation } from "@/components/footer-navigation"

// Strength card component
function StrengthCard({ title, value, unit = "mSTRENGTH" }) {
  return (
    <div className="bg-[#2A2A2A] rounded-xl p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-baseline mt-1">
            <span className="text-5xl font-bold text-gray-400">{value}</span>
            <span className="text-sm text-gray-500 ml-1">{unit}</span>
          </div>
        </div>
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
      </div>
    </div>
  )
}

// Benchmark lift card component
function BenchmarkLiftCard({ title, value, unit }) {
  return (
    <div className="bg-[#2A2A2A] rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-5xl font-bold text-gray-400">{value}</span>
        <span className="text-xl text-gray-500 ml-2">{unit}</span>
      </div>
    </div>
  )
}

// Stats card component
function StatsCard({ icon, title, subtitle, value }) {
  return (
    <div className="bg-[#2A2A2A] rounded-xl p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {icon}
          <div className="ml-3">
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-sm text-gray-400">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-gray-400 mr-2">{value}</span>
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
        </div>
      </div>
    </div>
  )
}

export default function BodyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="h-[60px] bg-[#1A1A1A] border-b border-[#333333] flex items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-white">
          FITPLAN
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#2A2A2A] px-3 py-1.5 rounded-md cursor-pointer">
            <span>Your Gym</span>
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
          <div className="flex items-center gap-4">
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
              className="lucide lucide-bell cursor-pointer hover:text-[#FF3366] transition-colors"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1A1A1A] font-bold cursor-pointer">
              U
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-[60px]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Tabs */}
          <Tabs defaultValue="results" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-2 bg-[#2A2A2A] p-1">
              <TabsTrigger value="results" className="data-[state=active]:bg-[#FF3366]">
                Results
              </TabsTrigger>
              <TabsTrigger value="recovery" className="data-[state=active]:bg-[#FF3366]">
                Recovery
              </TabsTrigger>
            </TabsList>

            <TabsContent value="results" className="mt-4">
              {/* Body Composition Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">Body Composition</h2>

                {/* Apple Health Card */}
                <div className="bg-[#2A2A2A] rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Use Apple Health?</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF3366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x cursor-pointer"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Use body composition stats and movement data from other apps to create better Fitplan workouts.
                  </p>
                  <Button className="w-full bg-white text-[#FF3366] hover:bg-gray-200 mb-4">
                    Sync with Apple Health
                  </Button>
                  <div className="text-center">
                    <a href="#" className="text-[#FF3366] hover:underline">
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Body Fat Percentage */}
                <div className="bg-[#2A2A2A] rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Body Fat Percentage</h3>
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
                  </div>
                  <div className="flex items-baseline mt-2">
                    <span className="text-5xl font-bold text-gray-400">00</span>
                    <span className="text-2xl text-gray-500 ml-1">%</span>
                  </div>
                </div>

                {/* Weight */}
                <div className="bg-[#2A2A2A] rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Weight</h3>
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
                  </div>
                  <div className="flex items-baseline mt-2">
                    <span className="text-5xl font-bold text-gray-400">00</span>
                    <span className="text-2xl text-gray-500 ml-1">kg</span>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Composition Stats */}
                  <StatsCard
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FF3366"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-activity"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    }
                    title="All"
                    subtitle="Composition Stats"
                    value="0/0"
                  />

                  {/* Measurement Stats */}
                  <StatsCard
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FF3366"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-ruler"
                      >
                        <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
                        <path d="m14.5 12.5 2-2" />
                        <path d="m11.5 9.5 2-2" />
                        <path d="m8.5 6.5 2-2" />
                        <path d="m17.5 15.5 2-2" />
                      </svg>
                    }
                    title="All"
                    subtitle="Measurement Stats"
                    value="0/0"
                  />
                </div>
              </div>

              {/* Overall Strength Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold">Overall Strength</h2>
                  <div className="flex items-center">
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
                      className="lucide lucide-info mr-2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF3366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>

                <div className="relative bg-[#2A2A2A] rounded-xl p-8 mb-6 flex flex-col items-center justify-center">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="w-3/4 h-6 bg-[#333333] rounded-full overflow-hidden"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#444444"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-lock mb-4"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <p className="text-xl text-gray-400 text-center">Hit every muscle to unlock this score</p>
                  </div>
                </div>

                {/* Muscle Groups */}
                <div className="space-y-4">
                  <StrengthCard title="Push Muscles" value="00" />
                  <StrengthCard title="Pull Muscles" value="00" />
                  <StrengthCard title="Leg Muscles" value="00" />
                </div>
              </div>

              {/* Benchmark Lifts */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold">Benchmark Lifts</h2>
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
                    className="lucide lucide-info"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>

                <p className="text-gray-400 mb-6">Your best lifts across exercises will appear here</p>

                <BenchmarkLiftCard title="Bench Press" value="00" unit="reps in 1 set" />
              </div>
            </TabsContent>

            <TabsContent value="recovery" className="mt-4">
              <div className="flex flex-col items-center justify-center h-64">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#444444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart-pulse mb-4"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M3.22 12H9.5l.5-1 2 4 .5-1h6.78" />
                </svg>
                <p className="text-xl text-gray-400 text-center">Recovery data will be shown here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  )
}
