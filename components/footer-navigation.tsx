"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function FooterNavigation() {
  const pathname = usePathname()

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[60px] bg-[#2A2A2A] flex items-center justify-around">
      <Link
        href="/"
        className={`flex flex-col items-center ${
          pathname === "/" ? "text-[#FF3366]" : "text-gray-400 hover:text-gray-200"
        } cursor-pointer transition-colors`}
      >
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
          className="lucide lucide-dumbbell"
        >
          <path d="m6.5 6.5 11 11" />
          <path d="m21 21-1-1" />
          <path d="m3 3 1 1" />
          <path d="m18 22 4-4" />
          <path d="m2 6 4-4" />
          <path d="m3 10 7-7" />
          <path d="m14 21 7-7" />
        </svg>
        <span className="text-xs mt-1">Workout</span>
      </Link>
      <Link
        href="/body"
        className={`flex flex-col items-center ${
          pathname === "/body" ? "text-[#FF3366]" : "text-gray-400 hover:text-gray-200"
        } cursor-pointer transition-colors`}
      >
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
          className="lucide lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span className="text-xs mt-1">Body</span>
      </Link>
      <Link
        href="/targets"
        className={`flex flex-col items-center ${
          pathname === "/targets" ? "text-[#FF3366]" : "text-gray-400 hover:text-gray-200"
        } cursor-pointer transition-colors`}
      >
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
          className="lucide lucide-target"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
        <span className="text-xs mt-1">Targets</span>
      </Link>
      <Link
        href="/log"
        className={`flex flex-col items-center ${
          pathname === "/log" ? "text-[#FF3366]" : "text-gray-400 hover:text-gray-200"
        } cursor-pointer transition-colors`}
      >
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
          className="lucide lucide-calendar"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
        <span className="text-xs mt-1">Log</span>
      </Link>
    </footer>
  )
}
