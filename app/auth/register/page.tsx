import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A1A1A] p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">FITPLAN</h1>
          <p className="text-gray-400">Create your account to start your fitness journey</p>
        </div>

        <Card className="w-full bg-[#2A2A2A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-xl text-white">Sign Up</CardTitle>
            <CardDescription className="text-gray-400">Enter your details to create an account</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200" htmlFor="fullName">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  className="bg-[#333333] border-[#444444] text-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200" htmlFor="username">
                  Username
                </label>
                <Input
                  id="username"
                  placeholder="johndoe"
                  className="bg-[#333333] border-[#444444] text-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  className="bg-[#333333] border-[#444444] text-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200" htmlFor="password">
                  Password
                </label>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  className="bg-[#333333] border-[#444444] text-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Gender</label>
                <RadioGroup defaultValue="male" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" className="border-[#FF3366]" />
                    <Label htmlFor="male" className="text-gray-200">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" className="border-[#FF3366]" />
                    <Label htmlFor="female" className="text-gray-200">
                      Female
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" className="border-[#FF3366]" />
                    <Label htmlFor="other" className="text-gray-200">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Button className="w-full bg-[#FF3366] hover:bg-opacity-90">Create Account</Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-[#333333] p-4">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[#FF3366] hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
