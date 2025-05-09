"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FooterNavigation } from "@/components/footer-navigation";

// Sample exercise data (Expanded list - same as in exercises/page.tsx for consistency)
const allExercisesData = [
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
    target_muscles: ["Chest", "Triceps", "Shoulders"], // Added Shoulders as target
    secondary_muscles: ["Core"],
    equipment: "Bodyweight", // Corrected equipment
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
    target_muscles: ["Triceps", "Chest", "Shoulders"], // Added Shoulders as target
    secondary_muscles: ["Core"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "https://example.com/videos/close-grip-bench-press.mp4",
  },
  // --- Thêm các bài tập mới (chi tiết) ---
  {
    id: 8,
    name: "Barbell Squat",
    description:
      "The barbell squat is a fundamental compound exercise for building lower body strength and muscle mass, primarily targeting the quadriceps, glutes, and hamstrings.",
    instructions: [
      "Load a barbell onto a squat rack and position it across your upper back.",
      "Grip the bar wider than shoulder-width and unrack it, taking a couple of steps back.",
      "Stand with feet shoulder-width apart, toes slightly pointed out.",
      "Keep your chest up, back straight, and core engaged.",
      "Lower your body by bending your knees and pushing your hips back, as if sitting into a chair.",
      "Descend until your thighs are parallel to the floor or lower, if comfortable.",
      "Push through your heels to stand back up to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    secondary_muscles: ["Core", "Lower Back", "Calves"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 9,
    name: "Deadlift",
    description:
      "The deadlift is a full-body compound exercise that works numerous muscle groups, including the back, hamstrings, glutes, and forearms. It's a key exercise for overall strength development.",
    instructions: [
      "Stand with your mid-foot under a barbell.",
      "Bend at your hips and knees to grasp the bar with an overhand or mixed grip, hands just outside your shins.",
      "Keep your back straight, chest up, and shoulders back.",
      "Lift the bar by extending your hips and knees, keeping the bar close to your body.",
      "Stand up tall, locking out your hips and knees at the top.",
      "Lower the bar back to the floor with control, reversing the motion.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Back", "Hamstrings", "Glutes", "Forearms"],
    secondary_muscles: ["Quadriceps", "Traps", "Core"],
    equipment: "Barbell",
    difficulty: "Advanced",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 10,
    name: "Pull-up",
    description:
      "The pull-up is a challenging bodyweight exercise that primarily targets the upper back muscles (lats) and biceps. It's a great indicator of relative upper body strength.",
    instructions: [
      "Hang from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width.",
      "Start from a dead hang with arms fully extended.",
      "Engage your back muscles and pull your body upwards until your chin is over the bar.",
      "Keep your core engaged and avoid swinging.",
      "Lower your body back down with control to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Back", "Biceps", "Forearms"],
    secondary_muscles: ["Shoulders", "Core"],
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 11,
    name: "Barbell Row",
    description:
      "The barbell row is a compound exercise that builds thickness and strength in the upper and middle back, as well as engaging the biceps and forearms.",
    instructions: [
      "Stand with feet shoulder-width apart, bending at the hips and knees while keeping your back straight.",
      "Grasp a barbell with an overhand grip, hands slightly wider than shoulder-width.",
      "Let the bar hang with arms fully extended.",
      "Pull the barbell towards your upper abdomen, squeezing your shoulder blades together.",
      "Lower the bar back down with control to the starting position.",
      "Keep your body stable and avoid using momentum.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Back", "Biceps", "Forearms"],
    secondary_muscles: ["Core", "Hamstrings"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 12,
    name: "Overhead Press (Barbell)",
    description:
      "The barbell overhead press is a key compound exercise for developing strength and size in the shoulders and triceps, also engaging the upper chest and core for stability.",
    instructions: [
      "Stand with a barbell racked at shoulder height.",
      "Grasp the bar with an overhand grip, hands slightly wider than shoulder-width.",
      "Unrack the bar and step back, positioning it at your upper chest/collarbone level.",
      "Keep your core tight and press the barbell straight overhead until your arms are fully extended.",
      "Lower the bar back down with control to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Shoulders", "Triceps"],
    secondary_muscles: ["Upper Chest", "Core", "Upper Back"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 13,
    name: "Lateral Raise",
    description:
      "The lateral raise is an isolation exercise that specifically targets the medial (side) head of the deltoid muscle, helping to build shoulder width.",
    instructions: [
      "Stand holding a dumbbell in each hand at your sides, palms facing your body.",
      "Keep a slight bend in your elbows and your back straight.",
      "Raise the dumbbells out to your sides until your arms are parallel to the floor.",
      "Keep the movement controlled and focus on using your side deltoids.",
      "Lower the dumbbells back down with control to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Shoulders"],
    secondary_muscles: ["Traps"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 14,
    name: "Dumbbell Bicep Curl",
    description:
      "The dumbbell bicep curl is a classic isolation exercise for building size and strength in the biceps brachii muscle.",
    instructions: [
      "Stand or sit holding a dumbbell in each hand with your arms fully extended and palms facing forward.",
      "Keeping your elbows close to your sides, curl the dumbbells upwards towards your shoulders.",
      "Squeeze your biceps at the top of the movement.",
      "Lower the dumbbells back down with control to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Biceps"],
    secondary_muscles: ["Forearms"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 15,
    name: "Hammer Curl",
    description:
      "The hammer curl is a variation of the bicep curl that uses a neutral grip (palms facing each other), targeting both the biceps and the brachialis and brachioradialis muscles in the forearm.",
    instructions: [
      "Stand or sit holding a dumbbell in each hand with your arms fully extended and palms facing your body.",
      "Keeping your elbows close to your sides, curl the dumbbells upwards towards your shoulders, maintaining the neutral grip.",
      "Squeeze your biceps and forearms at the top.",
      "Lower the dumbbells back down with control to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Biceps", "Forearms"],
    secondary_muscles: [],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 16,
    name: "Leg Press",
    description:
      "The leg press is a machine-based compound exercise that works the quadriceps, glutes, and hamstrings. It's often used as an alternative or supplement to squats.",
    instructions: [
      "Sit on the leg press machine with your back flat against the pad.",
      "Place your feet shoulder-width apart on the platform.",
      "Release the safety bars and lower the platform towards you by bending your knees.",
      "Lower until your knees are close to your chest, without letting your lower back lift off the pad.",
      "Push the platform back up to the starting position by extending your legs.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    secondary_muscles: ["Calves"],
    equipment: "Machine",
    difficulty: "Beginner",
    category: "Compound",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 17,
    name: "Leg Extension",
    description:
      "The leg extension is an isolation exercise that specifically targets the quadriceps muscles on the front of the thigh.",
    instructions: [
      "Sit on the leg extension machine with your back against the pad.",
      "Hook your feet under the padded lever.",
      "Adjust the machine so your knees are aligned with the machine's pivot point.",
      "Extend your legs upwards until they are fully straight, squeezing your quadriceps at the top.",
      "Lower the weight back down with control to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Quadriceps"],
    secondary_muscles: [],
    equipment: "Machine",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
  {
    id: 18,
    name: "Leg Curl",
    description:
      "The leg curl is an isolation exercise that targets the hamstring muscles on the back of the thigh. It can be performed lying, sitting, or standing depending on the machine.",
    instructions: [
      "Lie face down on the leg curl machine, hooking your heels under the padded lever.",
      "Keep your hips flat on the bench.",
      "Curl your legs upwards towards your glutes, squeezing your hamstrings.",
      "Lower the weight back down with control to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    target_muscles: ["Hamstrings"],
    secondary_muscles: [],
    equipment: "Machine",
    difficulty: "Beginner",
    category: "Isolation",
    image: "/placeholder.svg?height=300&width=300",
    video_url: "#", // Placeholder URL
  },
];

// Sample performance data (can be shared or specific per exercise)
// For simplicity, keeping it generic here, but in a real app, this would be per-exercise history
const performanceData = [
  { date: "2023-10-01", weight: 60 },
  { date: "2023-10-08", weight: 65 },
  { date: "2023-10-15", weight: 70 },
  { date: "2023-10-22", weight: 75 },
  { date: "2023-10-29", weight: 75 },
  { date: "2023-11-05", weight: 80 },
  { date: "2023-11-12", weight: 85 },
  { date: "2023-11-19", weight: 90 },
];

export default function ExerciseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const [exerciseData, setExerciseData] = useState(null);

  useEffect(() => {
    // Find the exercise by ID from the comprehensive list
    const exercise = allExercisesData.find(
      (ex) => ex.id === Number.parseInt(params.id)
    );
    // Set the found exercise data, or null if not found
    setExerciseData(exercise || null);
  }, [params.id]); // Dependency array includes params.id

  // Handle case where exercise is not found
  if (exerciseData === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#1A1A1A] text-white">
        <p>Exercise not found.</p>
      </div>
    );
  }

  // Render the detail page if exerciseData is found
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="h-[60px] bg-[#1A1A1A] border-b border-[#333333] flex items-center justify-between px-6">
        {/* Link back to the exercise library */}
        <Link
          href="/exercises"
          className="text-xl font-bold text-white flex items-center"
        >
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
          Back to Library
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
                <span className="text-sm bg-[#333333] px-3 py-1 rounded-full">
                  {exerciseData.category}
                </span>
                <span className="text-sm bg-[#333333] px-3 py-1 rounded-full">
                  {exerciseData.equipment}
                </span>
                <span className="text-sm bg-[#333333] px-3 py-1 rounded-full">
                  {exerciseData.difficulty}
                </span>
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
              {exerciseData.secondary_muscles &&
                exerciseData.secondary_muscles.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Secondary Muscles
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exerciseData.secondary_muscles.map((muscle) => (
                        <span
                          key={muscle}
                          className="text-sm bg-[#333333] px-3 py-1 rounded-full"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>

          <Tabs
            defaultValue="overview"
            className="mb-6"
            onValueChange={setActiveTab}
          >
            <TabsList className="bg-[#2A2A2A] p-1">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-[#FF3366]"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="instructions"
                className="data-[state=active]:bg-[#FF3366]"
              >
                Instructions
              </TabsTrigger>
              <TabsTrigger
                value="performance"
                className="data-[state=active]:bg-[#FF3366]"
              >
                Your Performance
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="data-[state=active]:bg-[#FF3366]"
              >
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
                    {/* Placeholder benefits based on target muscles */}
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>
                        Builds {exerciseData.target_muscles.join(", ")} strength
                      </li>
                      <li>
                        Improves overall{" "}
                        {exerciseData.target_muscles.includes("Legs") ||
                        exerciseData.target_muscles.includes("Quadriceps") ||
                        exerciseData.target_muscles.includes("Hamstrings") ||
                        exerciseData.target_muscles.includes("Glutes")
                          ? "lower"
                          : "upper"}{" "}
                        body development
                      </li>
                      {/* Add more dynamic or specific benefits if needed */}
                      <li>
                        Enhances{" "}
                        {exerciseData.category === "Compound"
                          ? "compound"
                          : "isolation"}{" "}
                        strength
                      </li>
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
                {exerciseData.video_url && exerciseData.video_url !== "#" && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Video Demonstration
                    </h3>
                    {/* In a real app, embed a video player here */}
                    <p className="text-gray-400">
                      Video URL:{" "}
                      <a
                        href={exerciseData.video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF3366] hover:underline"
                      >
                        {exerciseData.video_url}
                      </a>{" "}
                      (Placeholder)
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="instructions" className="mt-4">
              <div className="bg-[#2A2A2A] rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">
                  Step-by-Step Instructions
                </h2>
                <ol className="list-decimal list-inside text-gray-300 space-y-3">
                  {exerciseData.instructions.map((instruction, index) => (
                    <li key={index} className="pl-2">
                      {instruction}
                    </li>
                  ))}
                </ol>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Common Mistakes to Avoid
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Using momentum instead of controlled movements</li>
                    <li>
                      Arching your back excessively (for lifts like
                      squat/deadlift)
                    </li>
                    <li>Flaring elbows too wide (for presses)</li>
                    <li>Not maintaining proper breathing technique</li>
                    <li>Lifting too heavy weight with poor form</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="mt-4">
              <div className="bg-[#2A2A2A] rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Your Performance</h2>
                {/* Using generic performanceData for all exercises for mock */}
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={performanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#333333"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#666666" }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#666666" }}
                      />
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
                  <h3 className="text-lg font-semibold mb-2">
                    Personal Records
                  </h3>
                  {/* Placeholder PRs */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#333333] rounded-lg p-4 text-center">
                      <p className="text-gray-400 text-sm">Max Weight</p>
                      <p className="text-2xl font-bold">-- kg</p>{" "}
                      {/* Use placeholder if no data */}
                    </div>
                    <div className="bg-[#333333] rounded-lg p-4 text-center">
                      <p className="text-gray-400 text-sm">Max Reps</p>
                      <p className="text-2xl font-bold">--</p>{" "}
                      {/* Use placeholder if no data */}
                    </div>
                    <div className="bg-[#333333] rounded-lg p-4 text-center">
                      <p className="text-gray-400 text-sm">Volume PR</p>
                      <p className="text-2xl font-bold">-- kg</p>{" "}
                      {/* Use placeholder if no data */}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-4">
              <div className="bg-[#2A2A2A] rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Exercise History</h2>
                {/* Placeholder History */}
                <div className="space-y-4">
                  <div className="text-center text-gray-400">
                    No history available for this exercise.
                  </div>
                  {/* Example history item structure (commented out) */}
                  {/* [...Array(0)].map((_, index) => (
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
                         ... other sets
                      </div>
                    </div>
                  )) */}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button className="bg-[#FF3366] hover:bg-opacity-90">
              {activeTab === "overview" || activeTab === "instructions"
                ? "Add to Workout"
                : "Log New Set"}
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
}
