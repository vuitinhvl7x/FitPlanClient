"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FooterNavigation } from "@/components/footer-navigation";

// Sample exercise data (Expanded list)
const allExercisesData = [
  {
    id: 1,
    name: "Barbell Bench Press",
    target_muscles: ["Chest", "Triceps", "Shoulders"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    // Thêm các trường chi tiết cho tính nhất quán, mặc dù không dùng ở trang này
    description: "A fundamental exercise for building chest strength.",
    instructions: ["Lie on bench...", "Lower bar...", "Push up..."],
    secondary_muscles: ["Core"],
    video_url: "#",
  },
  {
    id: 2,
    name: "Incline Dumbbell Press",
    target_muscles: ["Upper Chest", "Shoulders", "Triceps"],
    equipment: "Dumbbells",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    description: "Targets the upper chest.",
    instructions: ["Set incline...", "Lift dumbbells...", "Press up..."],
    secondary_muscles: ["Core"],
    video_url: "#",
  },
  {
    id: 3,
    name: "Cable Chest Fly",
    target_muscles: ["Chest"],
    equipment: "Cable Machine",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
    description: "Isolates the chest muscles.",
    instructions: [
      "Stand at machine...",
      "Bring handles together...",
      "Return slowly...",
    ],
    secondary_muscles: ["Shoulders"],
    video_url: "#",
  },
  {
    id: 4,
    name: "Tricep Pushdown",
    target_muscles: ["Triceps"],
    equipment: "Cable Machine",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
    description: "Targets the triceps.",
    instructions: [
      "Stand at machine...",
      "Push bar down...",
      "Return slowly...",
    ],
    secondary_muscles: ["Shoulders"],
    video_url: "#",
  },
  {
    id: 5,
    name: "Overhead Tricep Extension",
    target_muscles: ["Triceps"],
    equipment: "Dumbbell",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
    description: "Targets the long head of the triceps.",
    instructions: [
      "Hold dumbbell overhead...",
      "Lower behind head...",
      "Extend arms...",
    ],
    secondary_muscles: ["Shoulders"],
    video_url: "#",
  },
  {
    id: 6,
    name: "Dips",
    target_muscles: ["Chest", "Triceps", "Shoulders"],
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    description: "A compound bodyweight exercise.",
    instructions: ["Position on bars...", "Lower body...", "Push back up..."],
    secondary_muscles: ["Core"],
    video_url: "#",
  },
  {
    id: 7,
    name: "Close-Grip Bench Press",
    target_muscles: ["Triceps", "Chest", "Shoulders"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    description: "Emphasizes triceps during bench press.",
    instructions: [
      "Lie on bench...",
      "Use close grip...",
      "Lower bar...",
      "Push up...",
    ],
    secondary_muscles: ["Core"],
    video_url: "#",
  },
  // --- Thêm các bài tập mới ---
  {
    id: 8,
    name: "Barbell Squat",
    target_muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    description: "A foundational lower body exercise.",
    instructions: [
      "Place bar on back...",
      "Descend into squat...",
      "Stand back up...",
    ],
    secondary_muscles: ["Core", "Lower Back"],
    video_url: "#",
  },
  {
    id: 9,
    name: "Deadlift",
    target_muscles: ["Back", "Hamstrings", "Glutes", "Forearms"],
    equipment: "Barbell",
    difficulty: "Advanced",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    description: "A full-body strength exercise.",
    instructions: [
      "Stand over bar...",
      "Grip bar...",
      "Lift bar...",
      "Lower with control...",
    ],
    secondary_muscles: ["Quadriceps", "Traps", "Core"],
    video_url: "#",
  },
  {
    id: 10,
    name: "Pull-up",
    target_muscles: ["Back", "Biceps", "Forearms"],
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    description: "Excellent for upper back and biceps.",
    instructions: [
      "Hang from bar...",
      "Pull body up...",
      "Lower with control...",
    ],
    secondary_muscles: ["Shoulders", "Core"],
    video_url: "#",
  },
  {
    id: 11,
    name: "Barbell Row",
    target_muscles: ["Back", "Biceps", "Forearms"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    description: "Builds thickness in the back.",
    instructions: [
      "Hinge at hips...",
      "Grip bar...",
      "Pull bar to abdomen...",
      "Lower with control...",
    ],
    secondary_muscles: ["Core", "Hamstrings"],
    video_url: "#",
  },
  {
    id: 12,
    name: "Overhead Press (Barbell)",
    target_muscles: ["Shoulders", "Triceps"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    description: "Primary exercise for shoulder strength.",
    instructions: [
      "Stand with bar at shoulders...",
      "Press bar overhead...",
      "Lower with control...",
    ],
    secondary_muscles: ["Core", "Upper Back"],
    video_url: "#",
  },
  {
    id: 13,
    name: "Lateral Raise",
    target_muscles: ["Shoulders"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
    description: "Targets the side deltoids for shoulder width.",
    instructions: [
      "Hold dumbbells at sides...",
      "Raise arms to sides...",
      "Lower with control...",
    ],
    secondary_muscles: ["Traps"],
    video_url: "#",
  },
  {
    id: 14,
    name: "Dumbbell Bicep Curl",
    target_muscles: ["Biceps"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
    description: "Classic exercise for biceps.",
    instructions: [
      "Hold dumbbells...",
      "Curl dumbbells up...",
      "Lower with control...",
    ],
    secondary_muscles: ["Forearms"],
    video_url: "#",
  },
  {
    id: 15,
    name: "Hammer Curl",
    target_muscles: ["Biceps", "Forearms"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
    description: "Targets biceps and forearms with a neutral grip.",
    instructions: [
      "Hold dumbbells with palms facing body...",
      "Curl dumbbells up...",
      "Lower with control...",
    ],
    secondary_muscles: [],
    video_url: "#",
  },
  {
    id: 16,
    name: "Leg Press",
    target_muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    equipment: "Machine",
    difficulty: "Beginner",
    category: "Compound",
    image: "/placeholder.svg?height=120&width=120",
    description: "Machine-based lower body exercise.",
    instructions: [
      "Sit on machine...",
      "Place feet on platform...",
      "Extend legs...",
      "Lower with control...",
    ],
    secondary_muscles: [],
    video_url: "#",
  },
  {
    id: 17,
    name: "Leg Extension",
    target_muscles: ["Quadriceps"],
    equipment: "Machine",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
    description: "Isolates the quadriceps.",
    instructions: [
      "Sit on machine...",
      "Extend legs...",
      "Lower with control...",
    ],
    secondary_muscles: [],
    video_url: "#",
  },
  {
    id: 18,
    name: "Leg Curl",
    target_muscles: ["Hamstrings"],
    equipment: "Machine",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=120&width=120",
    description: "Isolates the hamstrings.",
    instructions: [
      "Lie/sit on machine...",
      "Curl legs...",
      "Extend with control...",
    ],
    secondary_muscles: [],
    video_url: "#",
  },
];

export default function ExerciseLibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [muscleFilter, setMuscleFilter] = useState("");
  const [equipmentFilter, setEquipmentFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all"); // Thêm state cho filter theo Category

  // Filter exercises based on search term and filters
  const filteredExercises = allExercisesData.filter((exercise) => {
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMuscle =
      muscleFilter === "" ||
      muscleFilter === "all" ||
      exercise.target_muscles.includes(muscleFilter);
    const matchesEquipment =
      equipmentFilter === "" ||
      equipmentFilter === "all" ||
      exercise.equipment === equipmentFilter;
    const matchesCategory =
      categoryFilter === "all" ||
      exercise.category === categoryFilter ||
      (categoryFilter === "bodyweight" && exercise.equipment === "Bodyweight"); // Xử lý category Bodyweight
    // Lưu ý: Category "Custom" sẽ cần logic riêng nếu có dữ liệu custom
    return (
      matchesSearch && matchesMuscle && matchesEquipment && matchesCategory
    );
  });

  // Get unique muscle groups and equipment for filters from the *full* data
  const muscleGroups = Array.from(
    new Set(allExercisesData.flatMap((e) => e.target_muscles))
  ).sort();
  const equipmentTypes = Array.from(
    new Set(allExercisesData.map((e) => e.equipment))
  ).sort();

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
                <Select
                  onValueChange={setEquipmentFilter}
                  value={equipmentFilter}
                >
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
          {/* Cập nhật Tabs để sử dụng categoryFilter state */}
          <Tabs
            defaultValue="all"
            className="mb-6"
            onValueChange={setCategoryFilter}
          >
            <TabsList className="bg-[#2A2A2A] p-1">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#FF3366]"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="compound"
                className="data-[state=active]:bg-[#FF3366]"
              >
                Compound
              </TabsTrigger>
              <TabsTrigger
                value="isolation"
                className="data-[state=active]:bg-[#FF3366]"
              >
                Isolation
              </TabsTrigger>
              <TabsTrigger
                value="bodyweight"
                className="data-[state=active]:bg-[#FF3366]"
              >
                Bodyweight
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                className="data-[state=active]:bg-[#FF3366]"
              >
                Custom
              </TabsTrigger>
            </TabsList>

            {/* Render filtered exercises based on the active tab (categoryFilter) */}
            {/* Thay thế các TabsContent riêng lẻ bằng một TabsContent duy nhất render filteredExercises */}
            <TabsContent value={categoryFilter} className="mt-4">
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
                          <h3 className="font-semibold text-lg">
                            {exercise.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {exercise.target_muscles.join(", ")}
                          </p>
                          <div className="flex items-center mt-1">
                            <span className="text-xs bg-[#333333] px-2 py-1 rounded mr-2">
                              {exercise.equipment}
                            </span>
                            <span className="text-xs bg-[#333333] px-2 py-1 rounded">
                              {exercise.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {/* Hiển thị thông báo nếu không tìm thấy bài tập */}
              {filteredExercises.length === 0 && (
                <div className="text-center text-gray-400 mt-8">
                  No exercises found matching your criteria.
                </div>
              )}
            </TabsContent>

            {/* Các TabsContent khác không cần thiết nữa vì filtering đã xử lý */}
            {/* <TabsContent value="compound" className="mt-4">...</TabsContent> */}
            {/* <TabsContent value="isolation" className="mt-4">...</TabsContent> */}
            {/* <TabsContent value="bodyweight" className="mt-4">...</TabsContent> */}
            {/* <TabsContent value="custom" className="mt-4">...</TabsContent> */}
          </Tabs>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
}
