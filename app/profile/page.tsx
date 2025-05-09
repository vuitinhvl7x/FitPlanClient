"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Sample user data
const userData = {
  id: 1,
  fullName: "John Doe",
  username: "johndoe",
  email: "john.doe@example.com",
  profilePicture: "/placeholder.svg?height=100&width=100",
  joinDate: "October 2023",
  profile: {
    weight: 75,
    height: 180,
    activity_level: "moderate",
    goals: ["Build muscle", "Improve strength"],
    experience: "intermediate",
    training_location: "gym",
    preferred_training_days: ["Monday", "Wednesday", "Friday", "Saturday"],
    wants_pre_workout_info: true,
  },
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(userData);

  const handleSave = () => {
    // Save profile data to API
    console.log("Saving profile data:", formData);
    setEditMode(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-[60px]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden mb-4">
                <Image
                  src={userData.profilePicture || "/placeholder.svg"}
                  alt={userData.fullName}
                  fill
                  className="object-cover"
                />
                {editMode && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
                      className="lucide lucide-camera text-white"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>
                )}
              </div>
              <h1 className="text-2xl font-bold mb-1">{userData.fullName}</h1>
              <p className="text-gray-400 mb-4">@{userData.username}</p>
              <p className="text-sm text-gray-400 mb-6">
                Member since {userData.joinDate}
              </p>

              {!editMode ? (
                <Button
                  onClick={() => setEditMode(true)}
                  className="bg-[#FF3366] hover:bg-opacity-90 w-full"
                >
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2 w-full">
                  <Button
                    onClick={() => setEditMode(false)}
                    variant="outline"
                    className="bg-transparent border-[#444444] text-white hover:bg-[#333333] flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-[#FF3366] hover:bg-opacity-90 flex-1"
                  >
                    Save
                  </Button>
                </div>
              )}
            </div>

            <div className="w-full md:w-2/3">
              <Tabs
                defaultValue="personal"
                className="w-full"
                onValueChange={setActiveTab}
              >
                <TabsList className="bg-[#2A2A2A] p-1 w-full">
                  <TabsTrigger
                    value="personal"
                    className="flex-1 data-[state=active]:bg-[#FF3366]"
                  >
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger
                    value="fitness"
                    className="flex-1 data-[state=active]:bg-[#FF3366]"
                  >
                    Fitness Profile
                  </TabsTrigger>
                  <TabsTrigger
                    value="preferences"
                    className="flex-1 data-[state=active]:bg-[#FF3366]"
                  >
                    Preferences
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="mt-4">
                  <div className="bg-[#2A2A2A] rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">
                      Personal Information
                    </h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium text-gray-200"
                          htmlFor="fullName"
                        >
                          Full Name
                        </label>
                        {editMode ? (
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                fullName: e.target.value,
                              })
                            }
                            className="bg-[#333333] border-[#444444] text-white"
                          />
                        ) : (
                          <p className="text-gray-300">{userData.fullName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium text-gray-200"
                          htmlFor="username"
                        >
                          Username
                        </label>
                        {editMode ? (
                          <Input
                            id="username"
                            value={formData.username}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                username: e.target.value,
                              })
                            }
                            className="bg-[#333333] border-[#444444] text-white"
                          />
                        ) : (
                          <p className="text-gray-300">@{userData.username}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium text-gray-200"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        {editMode ? (
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="bg-[#333333] border-[#444444] text-white"
                          />
                        ) : (
                          <p className="text-gray-300">{userData.email}</p>
                        )}
                      </div>

                      {editMode && (
                        <div className="pt-4">
                          <Button
                            variant="outline"
                            className="bg-transparent border-[#444444] text-white hover:bg-[#333333]"
                          >
                            Change Password
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="fitness" className="mt-4">
                  <div className="bg-[#2A2A2A] rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">Fitness Profile</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            className="text-sm font-medium text-gray-200"
                            htmlFor="weight"
                          >
                            Weight (kg)
                          </label>
                          {editMode ? (
                            <Input
                              id="weight"
                              type="number"
                              value={formData.profile.weight}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  profile: {
                                    ...formData.profile,
                                    weight: Number(e.target.value),
                                  },
                                })
                              }
                              className="bg-[#333333] border-[#444444] text-white"
                            />
                          ) : (
                            <p className="text-gray-300">
                              {userData.profile.weight} kg
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label
                            className="text-sm font-medium text-gray-200"
                            htmlFor="height"
                          >
                            Height (cm)
                          </label>
                          {editMode ? (
                            <Input
                              id="height"
                              type="number"
                              value={formData.profile.height}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  profile: {
                                    ...formData.profile,
                                    height: Number(e.target.value),
                                  },
                                })
                              }
                              className="bg-[#333333] border-[#444444] text-white"
                            />
                          ) : (
                            <p className="text-gray-300">
                              {userData.profile.height} cm
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">
                          Activity Level
                        </label>
                        {editMode ? (
                          <Select
                            value={formData.profile.activity_level}
                            onValueChange={(value) =>
                              setFormData({
                                ...formData,
                                profile: {
                                  ...formData.profile,
                                  activity_level: value,
                                },
                              })
                            }
                          >
                            <SelectTrigger className="bg-[#333333] border-[#444444] text-white">
                              <SelectValue placeholder="Select your activity level" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#333333] border-[#444444] text-white">
                              <SelectItem value="sedentary">
                                Sedentary (little or no exercise)
                              </SelectItem>
                              <SelectItem value="light">
                                Lightly active (light exercise 1-3 days/week)
                              </SelectItem>
                              <SelectItem value="moderate">
                                Moderately active (moderate exercise 3-5
                                days/week)
                              </SelectItem>
                              <SelectItem value="active">
                                Active (hard exercise 6-7 days/week)
                              </SelectItem>
                              <SelectItem value="very_active">
                                Very active (very hard exercise & physical job)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        ) : (
                          <p className="text-gray-300 capitalize">
                            {userData.profile.activity_level.replace("_", " ")}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">
                          Experience Level
                        </label>
                        {editMode ? (
                          <Select
                            value={formData.profile.experience}
                            onValueChange={(value) =>
                              setFormData({
                                ...formData,
                                profile: {
                                  ...formData.profile,
                                  experience: value,
                                },
                              })
                            }
                          >
                            <SelectTrigger className="bg-[#333333] border-[#444444] text-white">
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#333333] border-[#444444] text-white">
                              <SelectItem value="beginner">
                                Beginner (0-6 months)
                              </SelectItem>
                              <SelectItem value="intermediate">
                                Intermediate (6 months - 2 years)
                              </SelectItem>
                              <SelectItem value="advanced">
                                Advanced (2+ years)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        ) : (
                          <p className="text-gray-300 capitalize">
                            {userData.profile.experience}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">
                          Fitness Goals
                        </label>
                        {editMode ? (
                          <div className="bg-[#333333] border border-[#444444] rounded-md p-3">
                            <div className="space-y-2">
                              {[
                                "Lose weight",
                                "Build muscle",
                                "Improve strength",
                                "Improve endurance",
                                "Improve flexibility",
                              ].map((goal) => (
                                <div
                                  key={goal}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="checkbox"
                                    id={goal.toLowerCase().replace(" ", "_")}
                                    checked={formData.profile.goals.includes(
                                      goal
                                    )}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setFormData({
                                          ...formData,
                                          profile: {
                                            ...formData.profile,
                                            goals: [
                                              ...formData.profile.goals,
                                              goal,
                                            ],
                                          },
                                        });
                                      } else {
                                        setFormData({
                                          ...formData,
                                          profile: {
                                            ...formData.profile,
                                            goals:
                                              formData.profile.goals.filter(
                                                (g) => g !== goal
                                              ),
                                          },
                                        });
                                      }
                                    }}
                                    className="rounded border-[#FF3366] text-[#FF3366] focus:ring-[#FF3366]"
                                  />
                                  <label
                                    htmlFor={goal
                                      .toLowerCase()
                                      .replace(" ", "_")}
                                    className="text-gray-200"
                                  >
                                    {goal}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {userData.profile.goals.map((goal) => (
                              <span
                                key={goal}
                                className="text-sm bg-[#333333] px-3 py-1 rounded-full"
                              >
                                {goal}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="preferences" className="mt-4">
                  <div className="bg-[#2A2A2A] rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">Preferences</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">
                          Training Location
                        </label>
                        {editMode ? (
                          <Select
                            value={formData.profile.training_location}
                            onValueChange={(value) =>
                              setFormData({
                                ...formData,
                                profile: {
                                  ...formData.profile,
                                  training_location: value,
                                },
                              })
                            }
                          >
                            <SelectTrigger className="bg-[#333333] border-[#444444] text-white">
                              <SelectValue placeholder="Select your training location" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#333333] border-[#444444] text-white">
                              <SelectItem value="gym">Gym</SelectItem>
                              <SelectItem value="home">Home</SelectItem>
                              <SelectItem value="both">
                                Both gym and home
                              </SelectItem>
                              <SelectItem value="outdoors">Outdoors</SelectItem>
                            </SelectContent>
                          </Select>
                        ) : (
                          <p className="text-gray-300 capitalize">
                            {userData.profile.training_location}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">
                          Preferred Training Days
                        </label>
                        {editMode ? (
                          <div className="bg-[#333333] border border-[#444444] rounded-md p-3">
                            <div className="space-y-2">
                              {[
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday",
                              ].map((day) => (
                                <div
                                  key={day}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="checkbox"
                                    id={day.toLowerCase()}
                                    checked={formData.profile.preferred_training_days.includes(
                                      day
                                    )}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setFormData({
                                          ...formData,
                                          profile: {
                                            ...formData.profile,
                                            preferred_training_days: [
                                              ...formData.profile
                                                .preferred_training_days,
                                              day,
                                            ],
                                          },
                                        });
                                      } else {
                                        setFormData({
                                          ...formData,
                                          profile: {
                                            ...formData.profile,
                                            preferred_training_days:
                                              formData.profile.preferred_training_days.filter(
                                                (d) => d !== day
                                              ),
                                          },
                                        });
                                      }
                                    }}
                                    className="rounded border-[#FF3366] text-[#FF3366] focus:ring-[#FF3366]"
                                  />
                                  <label
                                    htmlFor={day.toLowerCase()}
                                    className="text-gray-200"
                                  >
                                    {day}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {userData.profile.preferred_training_days.map(
                              (day) => (
                                <span
                                  key={day}
                                  className="text-sm bg-[#333333] px-3 py-1 rounded-full"
                                >
                                  {day}
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label
                            htmlFor="pre_workout_info"
                            className="text-gray-200"
                          >
                            Receive pre-workout information
                          </Label>
                          <p className="text-xs text-gray-400">
                            Get tips and information before your workouts
                          </p>
                        </div>
                        {editMode ? (
                          <Switch
                            id="pre_workout_info"
                            checked={formData.profile.wants_pre_workout_info}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                profile: {
                                  ...formData.profile,
                                  wants_pre_workout_info: checked,
                                },
                              })
                            }
                            className="data-[state=checked]:bg-[#FF3366]"
                          />
                        ) : (
                          <span className="text-sm bg-[#333333] px-3 py-1 rounded-full">
                            {userData.profile.wants_pre_workout_info
                              ? "Enabled"
                              : "Disabled"}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="dark_mode" className="text-gray-200">
                            Dark Mode
                          </Label>
                          <p className="text-xs text-gray-400">
                            Use dark theme for the app
                          </p>
                        </div>
                        <Switch
                          id="dark_mode"
                          checked={true}
                          disabled={!editMode}
                          className="data-[state=checked]:bg-[#FF3366]"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
