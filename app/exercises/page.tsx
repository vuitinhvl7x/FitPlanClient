"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FooterNavigation } from "@/components/footer-navigation"

// Sample exercise data
const exercisesData = [
  {
    id: 1,
    name: "Back Squat",
    target_muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    name: "Bench Press",
    target_muscles: ["Chest", "Triceps", "Shoulders"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    name: "Deadlift",
    target_muscles: ["Back", "Glutes", "Hamstrings"],
    equipment: "Barbell",
    difficulty: "Advanced",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 4,
    name: "Pull-up",
    target_muscles: ["Back", "Biceps"],
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 5,
    name: "Shoulder Press",
    target_muscles: ["Shoulders", "Triceps"],
    equipment: "Dumbbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 6,
    name: "Bicep Curl",
    target_muscles: ["Biceps"],
    equipment: "Dumbbell",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 7,
    name: "Tricep Extension",
    target_muscles: ["Triceps"],
    equipment: "Cable",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 8,
    name: "Leg Press",
    target_muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    equipment: "Machine",
    difficulty: "Beginner",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function ExerciseLibraryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [muscleFilter, setMuscleFilter] = useState("")
  const [equipmentFilter, setEquipmentFilter] = useState("")

  // Filter exercises based on search term and filters
  const filteredExercises = exercisesData.filter((exercise) => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMuscle = muscleFilter === "" || exercise.target_muscles.includes(muscleFilter)
    const matchesEquipment = equipmentFilter === "" || exercise.equipment === equipmentFilter
    return matchesSearch && matchesMuscle && matchesEquipment
  })

  // Get unique muscle groups and equipment for filters
  const muscleGroups = Array.from(new Set(exercisesData.flatMap((e) => e.target_muscles)))
  const equipmentTypes = Array.from(new Set(exercisesData.map((e) => e.equipment)))

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
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Exercise Library</h1>
            <Button className="bg-[#FF3366] hover:bg-opacity-90">
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
                className="lucide lucide-plus mr-2"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Add Custom Exercise
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="bg-[#2A2A2A] rounded-xl p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
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
                  className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <Input
                  placeholder="Search exercises..."
                  className="pl-10 bg-[#333333] border-[#444444] text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-48">
                <Select onValueChange={setMuscleFilter} value={muscleFilter}>
                  <SelectTrigger className="bg-[#333333] border-[#444444] text-white">
                    <SelectValue placeholder="Muscle Group" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#333333] border-[#444444] text-white">
                    <SelectItem value="all">All Muscles</SelectItem>
                    {muscleGroups.map((muscle) => (
                      <SelectItem key={muscle} value={muscle}>
                        {muscle}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48">
                <Select onValueChange={setEquipmentFilter} value={equipmentFilter}>
                  <SelectTrigger className="bg-[#333333] border-[#444444] text-white">
                    <SelectValue placeholder="Equipment" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#333333] border-[#444444] text-white">
                    <SelectItem value="all">All Equipment</SelectItem>
                    {equipmentTypes.map((equipment) => (
                      <SelectItem key={equipment} value={equipment}>
                        {equipment}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Exercise Categories */}
          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="bg-[#2A2A2A] p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#FF3366]">
                All
              </TabsTrigger>
              <TabsTrigger value="compound" className="data-[state=active]:bg-[#FF3366]">
                Compound
              </TabsTrigger>
              <TabsTrigger value="isolation" className="data-[state=active]:bg-[#FF3366]">
                Isolation
              </TabsTrigger>
              <TabsTrigger value="bodyweight" className="data-[state=active]:bg-[#FF3366]">
                Bodyweight
              </TabsTrigger>
              <TabsTrigger value="custom" className="data-[state=active]:bg-[#FF3366]">
                Custom
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredExercises.map((exercise) => (
                  <Link href={`/exercises/${exercise.id}`} key={exercise.id}>
                    <div className="bg-[#2A2A2A] rounded-xl p-4 hover:bg-[#333333] transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="relative h-[80px] w-[80px] rounded-lg overflow-hidden mr-4">
                          <Image
                            src={exercise.image || "/placeholder.svg"}
                            alt={exercise.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{exercise.name}</h3>
                          <p className="text-gray-400 text-sm">{exercise.target_muscles.join(", ")}</p>
                          <div className="flex items-center mt-1">
                            <span className="text-xs bg-[#333333] px-2 py-1 rounded mr-2">{exercise.equipment}</span>
                            <span className="text-xs bg-[#333333] px-2 py-1 rounded">{exercise.difficulty}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="compound" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredExercises
                  .filter((exercise) => exercise.category === "Compound")
                  .map((exercise) => (
                    <Link href={`/exercises/${exercise.id}`} key={exercise.id}>
                      <div className="bg-[#2A2A2A] rounded-xl p-4 hover:bg-[#333333] transition-colors cursor-pointer">
                        <div className="flex items-center">
                          <div className="relative h-[80px] w-[80px] rounded-lg overflow-hidden mr-4">
                            <Image
                              src={exercise.image || "/placeholder.svg"}
                              alt={exercise.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{exercise.name}</h3>
                            <p className="text-gray-400 text-sm">{exercise.target_muscles.join(", ")}</p>
                            <div className="flex items-center mt-1">
                              <span className="text-xs bg-[#333333] px-2 py-1 rounded mr-2">{exercise.equipment}</span>
                              <span className="text-xs bg-[#333333] px-2 py-1 rounded">{exercise.difficulty}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </TabsContent>

            {/* Similar content for other tabs */}
          </Tabs>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  )
}
