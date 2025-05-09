import Link from "next/link"; // Đảm bảo Link đã được import
import { Sidebar } from "@/components/sidebar";
import { TrainingContent } from "@/components/training-content";
import { FooterNavigation } from "@/components/footer-navigation";

// Import các component Dropdown Menu từ Shadcn UI
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TrainingPage() {
  return (
    <div className="flex flex-col h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="h-[60px] bg-[#1A1A1A] border-b border-[#333333] flex items-center justify-between px-6">
        <div className="text-xl font-bold text-white">FITPLAN</div>
        <div className="flex items-center gap-4">
          {/* Your Gym Dropdown (giữ nguyên) */}
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
          {/* Bell icon (giữ nguyên) */}
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

            {/* Dropdown Menu cho Avatar */}
            <DropdownMenu>
              {/* Avatar div làm trigger */}
              <DropdownMenuTrigger asChild>
                <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1A1A1A] font-bold cursor-pointer">
                  U
                </div>
              </DropdownMenuTrigger>
              {/* Nội dung Dropdown Menu */}
              <DropdownMenuContent className="w-56 bg-[#2A2A2A] border-[#333333] text-white">
                <DropdownMenuLabel className="text-gray-400">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#333333]" />{" "}
                {/* Dùng màu border của theme */}
                {/* Tùy chọn Profile */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile"
                    className="flex items-center cursor-pointer hover:bg-[#333333]"
                  >
                    {/* Icon User */}
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
                      className="mr-2 lucide lucide-user"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Profile
                  </Link>
                </DropdownMenuItem>
                {/* Tùy chọn Exercise Library */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/exercises"
                    className="flex items-center cursor-pointer hover:bg-[#333333]"
                  >
                    {/* Icon Dumbbell */}
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
                      className="mr-2 lucide lucide-dumbbell"
                    >
                      <path d="m6.5 6.5 11 11" />
                      <path d="m21 21-1-1" />
                      <path d="m3 3 1 1" />
                      <path d="m18 22 4-4" />
                      <path d="m2 6 4-4" />
                      <path d="m3 10 7-7" />
                      <path d="m14 21 7-7" />
                    </svg>
                    Exercise Library
                  </Link>
                </DropdownMenuItem>
                {/* Tùy chọn Log */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/log"
                    className="flex items-center cursor-pointer hover:bg-[#333333]"
                  >
                    {/* Icon Calendar */}
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
                      className="mr-2 lucide lucide-calendar"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    Log
                  </Link>
                </DropdownMenuItem>
                {/* Thêm các tùy chọn khác nếu cần */}
                {/* <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-[#333333]">Settings</DropdownMenuItem> */}
                <DropdownMenuSeparator className="bg-[#333333]" />{" "}
                {/* Dùng màu border của theme */}
                {/* Tùy chọn Sign Out */}
                {/* Lưu ý: Đây chỉ là giao diện, cần thêm logic xử lý đăng xuất thực tế */}
                <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-[#333333] text-[#FF3366]">
                  {/* Icon Log Out */}
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
                    className="mr-2 lucide lucide-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <TrainingContent />
        <Sidebar />
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
}
