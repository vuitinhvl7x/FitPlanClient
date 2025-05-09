"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ProfileSetupPage() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    activity_level: "",
    goals: [],
    experience: "",
    training_location: "",
    preferred_training_days: [],
    wants_pre_workout_info: false,
    weight: "",
    height: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit profile data to API
    console.log("Profile data:", profile);
    // Redirect to dashboard
    window.location.href = "/";
  };

  return (
    // Keep the original structure for this page
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A1A1A] p-4">
      {/* The global header from layout will appear above this */}
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">FITPLAN</h1>
          <p className="text-gray-400">
            Let's set up your profile to personalize your experience
          </p>
        </div>

        <Card className="w-full bg-[#2A2A2A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-xl text-white">Profile Setup</CardTitle>
            <CardDescription className="text-gray-400">
              Step {step} of 3
            </CardDescription>
            <div className="w-full bg-[#333333] h-2 mt-2 rounded-full overflow-hidden">
              <div
                className="bg-[#FF3366] h-full transition-all duration-300 ease-in-out"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">
                      What is your activity level?
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setProfile({ ...profile, activity_level: value })
                      }
                      value={profile.activity_level}
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
                          Moderately active (moderate exercise 3-5 days/week)
                        </SelectItem>
                        <SelectItem value="active">
                          Active (hard exercise 6-7 days/week)
                        </SelectItem>
                        <SelectItem value="very_active">
                          Very active (very hard exercise & physical job)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">
                      What are your fitness goals? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        "Lose weight",
                        "Build muscle",
                        "Improve strength",
                        "Improve endurance",
                        "Improve flexibility",
                      ].map((goal) => (
                        <div key={goal} className="flex items-center space-x-2">
                          <Checkbox
                            id={goal.toLowerCase().replace(" ", "_")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setProfile({
                                  ...profile,
                                  goals: [...profile.goals, goal],
                                });
                              } else {
                                setProfile({
                                  ...profile,
                                  goals: profile.goals.filter(
                                    (g) => g !== goal
                                  ),
                                });
                              }
                            }}
                            className="border-[#FF3366] data-[state=checked]:bg-[#FF3366]"
                          />
                          <Label
                            htmlFor={goal.toLowerCase().replace(" ", "_")}
                            className="text-gray-200"
                          >
                            {goal}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">
                      What is your fitness experience level?
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setProfile({ ...profile, experience: value })
                      }
                      value={profile.experience}
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
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">
                      Where do you plan to train?
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setProfile({ ...profile, training_location: value })
                      }
                      value={profile.training_location}
                    >
                      <SelectTrigger className="bg-[#333333] border-[#444444] text-white">
                        <SelectValue placeholder="Select your training location" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#333333] border-[#444444] text-white">
                        <SelectItem value="gym">Gym</SelectItem>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="both">Both gym and home</SelectItem>
                        <SelectItem value="outdoors">Outdoors</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">
                      Which days do you prefer to train? (Select all that apply)
                    </label>
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
                        <div key={day} className="flex items-center space-x-2">
                          <Checkbox
                            id={day.toLowerCase()}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setProfile({
                                  ...profile,
                                  preferred_training_days: [
                                    ...profile.preferred_training_days,
                                    day,
                                  ],
                                });
                              } else {
                                setProfile({
                                  ...profile,
                                  preferred_training_days:
                                    profile.preferred_training_days.filter(
                                      (d) => d !== day
                                    ),
                                });
                              }
                            }}
                            className="border-[#FF3366] data-[state=checked]:bg-[#FF3366]"
                          />
                          <Label
                            htmlFor={day.toLowerCase()}
                            className="text-gray-200"
                          >
                            {day}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="pre_workout_info"
                      onCheckedChange={(checked) =>
                        setProfile({
                          ...profile,
                          wants_pre_workout_info: !!checked,
                        })
                      }
                      checked={profile.wants_pre_workout_info}
                      className="border-[#FF3366] data-[state=checked]:bg-[#FF3366]"
                    />
                    <Label htmlFor="pre_workout_info" className="text-gray-200">
                      I want to receive pre-workout information and tips
                    </Label>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-200"
                      htmlFor="weight"
                    >
                      What is your current weight? (kg)
                    </label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="70"
                      value={profile.weight}
                      onChange={(e) =>
                        setProfile({ ...profile, weight: e.target.value })
                      }
                      className="bg-[#333333] border-[#444444] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-200"
                      htmlFor="height"
                    >
                      What is your height? (cm)
                    </label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="175"
                      value={profile.height}
                      onChange={(e) =>
                        setProfile({ ...profile, height: e.target.value })
                      }
                      className="bg-[#333333] border-[#444444] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">
                      How many days per week do you want to train?
                    </label>
                    <div className="pt-6 pb-2">
                      <Slider
                        defaultValue={[3]}
                        max={7}
                        min={1}
                        step={1}
                        className="[&_[role=slider]]:bg-[#FF3366]"
                      />
                      <div className="flex justify-between mt-2 text-xs text-gray-400">
                        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                          <span key={day}>{day}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4">
                {step > 1 ? (
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="bg-transparent border-[#444444] text-white hover:bg-[#333333]"
                  >
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#FF3366] hover:bg-opacity-90"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-[#FF3366] hover:bg-opacity-90"
                  >
                    Complete Setup
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      {/* The global footer from layout will appear below this */}
    </div>
  );
}
