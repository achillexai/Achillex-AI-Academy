// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

type Activity = {
  id: number;
  action: string;
  route: string;
  time: string;
};

const routes = {
  "/admin": "Dashboard",
  "/admin/users": "Users",
  "/admin/tutors": "Coursework/tutors",
  "/admin/model-training": "Model Training",
  "/admin#": "Logged out",
};

export function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const pathname = usePathname();
  const currentRoute =
    routes[pathname as keyof typeof routes] || "Unknown Page";

  useEffect(() => {
    // Load activities from localStorage
    const storedActivities = localStorage.getItem("adminActivities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  useEffect(() => {
    const newActivity = {
      id: Date.now(),
      action: `Admin visited ${currentRoute}`,
      route: pathname,
      time: new Date().toLocaleTimeString(),
    };

    const updatedActivities = [newActivity, ...activities.slice(0, 2)];
    setActivities(updatedActivities);

    // Save to localStorage
    localStorage.setItem("adminActivities", JSON.stringify(updatedActivities));
  }, [pathname, currentRoute]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mt-[-10px] text-sm text-muted-foreground mb-4">
          Admin is currently on: {currentRoute} (
          {new Date().toLocaleTimeString()})
        </p>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-center space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/admin-avatar.png" alt="Admin" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.action}
                </p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
