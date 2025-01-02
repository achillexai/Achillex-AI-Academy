import { PanelLeft, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface HeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Header({ isOpen, toggleSidebar }: HeaderProps) {
  const router = useRouter();
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        router.push("/admin/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-white h-28 shadow-sm flex items-center border-b justify-between px-4">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="lg:hidden"
        >
          <PanelLeft />
        </Button>
        <div className="ml-4">
          <h1 className="text-xl lg:text-2xl font-bold">Hello, Admin</h1>
          <p className="text-sm lg:text-base text-gray-500">{currentDate}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={handleLogout}>
        <LogOut />
      </Button>
    </header>
  );
}
