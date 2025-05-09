"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Custom hexagon component
function Hexagon({
  percentage = 0,
  size = "large",
  date = null,
  color = "#4ECDC4",
}) {
  const hexSize = size === "large" ? "w-48 h-48" : "w-20 h-20";
  const fontSize = size === "large" ? "text-5xl" : "text-lg";
  const strokeWidth = size === "large" ? 8 : 4;

  return (
    <div className={`relative ${hexSize} flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0">
        <polygon
          points="50,3 95,25 95,75 50,97 5,75 5,25"
          fill="transparent"
          stroke="#333333"
          strokeWidth={strokeWidth}
        />
        <polygon
          points="50,3 95,25 95,75 50,97 5,75 5,25"
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray="400"
          strokeDashoffset={400 - (400 * percentage) / 100}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="flex flex-col items-center justify-center z-10">
        <span className={`font-bold ${fontSize}`}>{percentage}%</span>
        {date && <span className="text-sm text-gray-400 mt-1">{date}</span>}
      </div>
    </div>
  );
}

// Muscle group card component
function MuscleGroupCard({ title, current, total, color }) {
  return (
    <div className="bg-[#2A2A2A] rounded-xl p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <svg viewBox="0 0 100 100" className="w-12 h-12">
              <polygon
                points="50,3 95,25 95,75 50,97 5,75 5,25"
                fill="transparent"
                stroke={color}
                strokeWidth="8"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-400">
              {current} / {total} Sets
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">{total}</span>
          <span className="text-gray-400 mr-1">to go</span>
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
  );
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
  );
}

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
  );
}

export default function TargetsPage() {
  // Current date range
  const currentDateRange = "5 May - 11 May";

  // Previous weeks
  const previousWeeks = [
    { date: "13 Apr", percentage: 0 },
    { date: "20 Apr", percentage: 0 },
    { date: "27 Apr", percentage: 0 },
    { date: "4 May", percentage: 0 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-[60px]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Tabs */}
          <Tabs defaultValue="results" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-2 bg-[#2A2A2A] p-1">
              <TabsTrigger
                value="results"
                className="data-[state=active]:bg-[#FF3366]"
              >
                Results
              </TabsTrigger>
              <TabsTrigger
                value="recovery"
                className="data-[state=active]:bg-[#FF3366]"
              >
                Recovery
              </TabsTrigger>
            </TabsList>

            <TabsContent value="results" className="mt-4">
              {/* Weekly Set Targets */}
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <h2 className="text-3xl font-bold mr-2">
                    Weekly Set Targets
                  </h2>
                  <span className="bg-[#333333] text-xs px-2 py-1 rounded">
                    BETA
                  </span>
                </div>
                <p className="text-gray-400 mb-6">{currentDateRange}</p>

                <div className="flex justify-center mb-8">
                  <Hexagon percentage={0} color="#4ECDC4" />
                </div>

                <div className="space-y-4">
                  <MuscleGroupCard
                    title="Push Muscles"
                    current={0}
                    total={27}
                    color="#A3A284"
                  />
                  <MuscleGroupCard
                    title="Pull Muscles"
                    current={0}
                    total={14}
                    color="#D64550"
                  />
                  <MuscleGroupCard
                    title="Leg Muscles"
                    current={0}
                    total={24}
                    color="#4ECDC4"
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
                    <p className="text-xl text-gray-400 text-center">
                      Hit every muscle to unlock this score
                    </p>
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

                <p className="text-gray-400 mb-6">
                  Your best lifts across exercises will appear here
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <BenchmarkLiftCard
                    title="Bench Press"
                    value="00"
                    unit="reps in 1 set"
                  />
                  <BenchmarkLiftCard
                    title="Squat"
                    value="00"
                    unit="kg for 5 reps"
                  />
                  <BenchmarkLiftCard
                    title="Deadlift"
                    value="00"
                    unit="kg for 3 reps"
                  />
                </div>
              </div>

              {/* History */}
              <div className="mt-8">
                <h2 className="text-3xl font-bold mb-6">History</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {previousWeeks.map((week, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Hexagon
                        percentage={week.percentage}
                        size="small"
                        color="#4ECDC4"
                      />
                      <span className="text-gray-400 mt-2">{week.date}</span>
                    </div>
                  ))}
                </div>
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
                <p className="text-xl text-gray-400 text-center">
                  Recovery data will be shown here
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
