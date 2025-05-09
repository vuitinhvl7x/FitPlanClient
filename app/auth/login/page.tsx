import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A1A1A] p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">FITPLAN</h1>
          <p className="text-gray-400">Your personal fitness journey starts here</p>
        </div>

        <Card className="w-full bg-[#2A2A2A] border-[#333333]">
          <CardHeader>
            <CardTitle className="text-xl text-white">Sign In</CardTitle>
            <CardDescription className="text-gray-400">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-200" htmlFor="password">
                    Password
                  </label>
                  <Link href="/auth/reset-password" className="text-sm text-[#FF3366] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  className="bg-[#333333] border-[#444444] text-white"
                  required
                />
              </div>
              <Button className="w-full bg-[#FF3366] hover:bg-opacity-90">Sign In</Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-[#333333] p-4">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-[#FF3366] hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
