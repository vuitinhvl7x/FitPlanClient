import Link from "next/link"; // Đảm bảo Link đã được import
import { Sidebar } from "@/components/sidebar";
import { TrainingContent } from "@/components/training-content";

export default function TrainingPage() {
  return (
    <div className="flex flex-col h-screen bg-[#1A1A1A] text-white">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <TrainingContent />
        <Sidebar />
      </div>
    </div>
  );
}
