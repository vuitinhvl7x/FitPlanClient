"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { FooterNavigation } from "@/components/footer-navigation"

// Sample chest+tricep exercise data
const chestTricepExercises = [
  {
    id: 1,
    name: "Barbell Bench Press",
    description:
      "The barbell bench press is a compound exercise that primarily targets the chest muscles (pectoralis major), with secondary emphasis on the shoulders (anterior deltoids) and triceps.",
    instructions: [
      "Lie flat on a bench with your feet firmly on the ground.",
      "Grip the barbell slightly wider than shoulder-width apart.",
      "Unrack the barbell and hold it directly above your chest with arms fully extended.",
      "Lower the barbell slowly to your mid-chest, keeping your elbows at about a 45-degree angle to your body.",
      "Pause briefly at the bottom, then push the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Chest", "Shoulders", "Triceps"],
    secondary_muscles: ["Core", "Upper Back"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "https://example.com/videos/bench-press.mp4",
  },
  {
    id: 2,
    name: "Incline Dumbbell Press",
    description:
      "The incline dumbbell press targets the upper portion of the chest muscles (upper pectoralis major) along with the shoulders and triceps.",
    instructions: [
      "Set an adjustable bench to an incline of about 30-45 degrees.",
      "Sit on the bench with a dumbbell in each hand resting on your thighs.",
      "Kick the dumbbells up one at a time and hold them at shoulder width.",
      "Press the dumbbells upward until your arms are fully extended.",
      "Lower the dumbbells back to chest level with control.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Upper Chest", "Shoulders", "Triceps"],
    secondary_muscles: ["Core", "Upper Back"],
    equipment: "Dumbbells",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "https://example.com/videos/incline-dumbbell-press.mp4",
  },
  {
    id: 3,
    name: "Cable Chest Fly",
    description:
      "The cable chest fly isolates the chest muscles (pectoralis major) and helps develop definition and strength across the chest.",
    instructions: [
      "Stand in the center of a cable machine with cables set at chest height.",
      "Grab the handles with palms facing forward.",
      "Step forward to create tension in the cables, with a slight bend in your elbows.",
      "With a controlled motion, bring your hands together in front of your chest.",
      "Slowly return to the starting position, feeling the stretch in your chest.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Chest"],
    secondary_muscles: ["Shoulders", "Biceps"],
    equipment: "Cable Machine",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "https://example.com/videos/cable-chest-fly.mp4",
  },
  {
    id: 4,
    name: "Tricep Pushdown",
    description:
      "The tricep pushdown is an isolation exercise that targets all three heads of the triceps muscle, with emphasis on the lateral and medial heads.",
    instructions: [
      "Stand facing a cable machine with a straight bar or rope attachment set at upper chest height.",
      "Grab the attachment with an overhand grip (palms facing down).",
      "Keep your upper arms close to your body and perpendicular to the floor.",
      "Using your triceps, push the bar down until your arms are fully extended.",
      "Pause briefly at the bottom, then slowly return to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Triceps"],
    secondary_muscles: ["Shoulders"],
    equipment: "Cable Machine",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "https://example.com/videos/tricep-pushdown.mp4",
  },
  {
    id: 5,
    name: "Overhead Tricep Extension",
    description:
      "The overhead tricep extension primarily targets the long head of the triceps muscle, which is the largest of the three triceps heads.",
    instructions: [
      "Stand or sit with a dumbbell held in both hands.",
      "Raise the dumbbell overhead until your arms are fully extended.",
      "Lower the dumbbell behind your head by bending at the elbows, keeping your upper arms stationary.",
      "Pause when your forearms are parallel to the floor or slightly lower.",
      "Extend your arms back to the starting position by contracting your triceps.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Triceps"],
    secondary_muscles: ["Shoulders"],
    equipment: "Dumbbell",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "https://example.com/videos/overhead-tricep-extension.mp4",
  },
  {
    id: 6,
    name: "Dips",
    description:
      "Dips are a compound bodyweight exercise that target the chest, triceps, and shoulders. The emphasis can be shifted between chest and triceps by adjusting your body position.",
    instructions: [
      "Position yourself on parallel bars with your arms fully extended and supporting your body weight.",
      "Lean forward slightly to emphasize chest engagement (or stay upright for more tricep focus).",
      "Lower your body by bending your elbows until they reach about 90 degrees.",
      "Push yourself back up to the starting position by extending your arms.",
      "Keep your shoulders down and away from your ears throughout the movement.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Chest", "Triceps"],
    secondary_muscles: ["Shoulders", "Core"],
    equipment: "Parallel Bars",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "https://example.com/videos/dips.mp4",
  },
  {
    id: 7,
    name: "Close-Grip Bench Press",
    description:
      "The close-grip bench press is a compound exercise that places greater emphasis on the triceps while still engaging the chest and shoulders.",
    instructions: [
      "Lie flat on a bench with your feet firmly on the ground.",
      "Grip the barbell with hands shoulder-width apart or slightly closer.",
      "Unrack the barbell and hold it directly above your chest with arms fully extended.",
      "Lower the barbell slowly to your lower chest/upper abdomen.",
      "Keep your elbows close to your body throughout the movement.",
      "Push the barbell back up to the starting position, focusing on using your triceps.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Triceps", "Chest"],
    secondary_muscles: ["Shoulders", "Core"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "https://example.com/videos/close-grip-bench-press.mp4",
  },
]

// Sample performance data
const performanceData = [
  { date: "2023-10-01", weight: 60 },
  { date: "2023-10-08", weight: 65 },
  { date: "2023-10-15", weight: 70 },
  { date: "2023-10-22", weight: 75 },
  { date: "2023-10-29", weight: 75 },
  { date: "2023-11-05", weight: 80 },
  { date: "2023-11-12", weight: 85 },
  { date: "2023-11-19", weight: 90 },
]

export default function ExerciseDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [exerciseData, setExerciseData] = useState(null)

  useEffect(() => {
    // Find the exercise by ID
    const exercise = chestTricepExercises.find((ex) => ex.id === Number.parseInt(params.id))
    setExerciseData(exercise || chestTricepExercises[0])
  }, [params.id])

  if (!exerciseData) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#1A1A1A] text-white">
        <p>Loading exercise details...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="h-[60px] bg-[#1A1A1A] border-b border-[#333333] flex items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-white flex items-center">
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
            className="lucide lucide-chevron-left mr-2"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Workout
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1A1A1A] font-bold cursor-pointer">
            U
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-[60px]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/3">
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
                <Image
                  src={exerciseData.image || "/placeholder.svg"}
                  alt={exerciseData.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">{exerciseData.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-[#333333] px-3 py-1 rounded-full">{exerciseData.category}</span>
                <span className="text-sm bg-[#333333] px-3 py-1 rounded-full">{exerciseData.equipment}</span>
                <span className="text-sm bg-[#333333] px-3 py-1 rounded-full">{exerciseData.difficulty}</span>
              </div>
              <p className="text-gray-300 mb-4">{exerciseData.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Target Muscles</h3>
                <div className="flex flex-wrap gap-2">
                  {exerciseData.target_muscles.map((muscle) => (
                    <span
                      key={muscle}
                      className="text-sm bg-[#FF3366] bg-opacity-20 text-[#FF3366] px-3 py-1 rounded-full"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Secondary Muscles</h3>
                <div className="flex flex-wrap gap-2">
                  {exerciseData.secondary_muscles.map((muscle) => (
                    <span key={muscle} className="text-sm bg-[#333333] px-3 py-1 rounded-full">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
            <TabsList className="bg-[#2A2A2A] p-1">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#FF3366]">
                Overview
              </TabsTrigger>
              <TabsTrigger value="instructions" className="data-[state=active]:bg-[#FF3366]">
                Instructions
              </TabsTrigger>
              <TabsTrigger value="performance" className="data-[state=active]:bg-[#FF3366]">
                Your Performance
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-[#FF3366]">
                History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4">
              <div className="bg-[#2A2A2A] rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Exercise Overview</h2>
                <p className="text-gray-300 mb-4">{exerciseData.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Builds {exerciseData.target_muscles.join(", ")} strength</li>
                      <li>Improves overall upper body development</li>
                      <li>Enhances pushing strength for daily activities</li>
                      <li>Increases muscle mass and definition</li>
                      <li>Improves joint stability</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tips</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Focus on proper form over heavy weight</li>
                      <li>Maintain controlled movements throughout</li>
                      <li>Keep your core engaged for stability</li>
                      <li>Breathe out during the exertion phase</li>
                      <li>Allow adequate rest between sets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructions" className="mt-4">
              <div className="bg-[#2A2A2A] rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Step-by-Step Instructions</h2>
                <ol className="list-decimal list-inside text-gray-300 space-y-3">
                  {exerciseData.instructions.map((instruction, index) => (
                    <li key={index} className="pl-2">
                      {instruction}
                    </li>
                  ))}
                </ol>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Common Mistakes to Avoid</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Using momentum instead of controlled movements</li>
                    <li>Arching your back excessively</li>
                    <li>Flaring elbows too wide</li>
                    <li>Not maintaining proper breathing technique</li>
                    <li>Lifting too heavy weight with poor form</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="mt-4">
              <div className="bg-[#2A2A2A] rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Your Performance</h2>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
                      <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#666666" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: "#666666" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#333333",
                          border: "none",
                          borderRadius: "8px",
                          color: "white",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#FF3366"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "#FF3366" }}
                        activeDot={{ r: 8, fill: "#FF3366", stroke: "#FFFFFF" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Personal Records</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#333333] rounded-lg p-4 text-center">
                      <p className="text-gray-400 text-sm">Max Weight</p>
                      <p className="text-2xl font-bold">90 kg</p>
                    </div>
                    <div className="bg-[#333333] rounded-lg p-4 text-center">
                      <p className="text-gray-400 text-sm">Max Reps</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <div className="bg-[#333333] rounded-lg p-4 text-center">
                      <p className="text-gray-400 text-sm">Volume PR</p>
                      <p className="text-2xl font-bold">1080 kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-4">
              <div className="bg-[#2A2A2A] rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Exercise History</h2>
                <div className="space-y-4">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="bg-[#333333] rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-semibold">November {20 - index}, 2023</p>
                        <span className="text-sm bg-[#1A1A1A] px-2 py-1 rounded">Chest Day</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <p>Set 1</p>
                          <p>85 kg × 8 reps</p>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <p>Set 2</p>
                          <p>85 kg × 8 reps</p>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <p>Set 3</p>
                          <p>90 kg × 6 reps</p>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <p>Set 4</p>
                          <p>90 kg × 5 reps</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button className="bg-[#FF3366] hover:bg-opacity-90">
              {activeTab === "overview" || activeTab === "instructions" ? "Add to Workout" : "Log New Set"}
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  )
}
