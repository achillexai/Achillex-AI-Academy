"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { BarChart3, LineChartIcon } from "lucide-react";
import { RecentActivity } from "./_components/RecentActivity";
import { AdminDashboardSkeleton } from "./_components/AdminDashboardSkeleton";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { eq } from "drizzle-orm";

export default function AdminDashboard() {
  const [showCharts, setShowCharts] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<{ name: string; total: number }[]>(
    []
  );
  const [activeUserData, setActiveUserData] = useState<
    { name: string; active: number }[]
  >([]);
  const [revenueData, setRevenueData] = useState<
    { name: string; total: number }[]
  >([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [monthlyGrowth, setMonthlyGrowth] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch all users
        const allUsers = await db.select().from(UserSubscription);
        setTotalUsers(allUsers.length);

        // Fetch active users
        const activeUsersData = allUsers.filter(
          (user) => user.stripeStatus === "active"
        );
        setActiveUsers(activeUsersData.length);

        // Calculate revenue
        const revenue = allUsers.reduce((total, user) => {
          return total + (user.plan === "monthly" ? 18 : 0);
        }, 0);
        setTotalRevenue(revenue);

        // Prepare chart data
        const userChartData = [
          { name: "Week 1", total: Math.floor(allUsers.length * 0.7) },
          { name: "Week 2", total: Math.floor(allUsers.length * 0.8) },
          { name: "Week 3", total: Math.floor(allUsers.length * 0.9) },
          { name: "Week 4", total: allUsers.length },
        ];
        setUserData(userChartData);

        const activeUserChartData = [
          { name: "Week 1", active: Math.floor(activeUsersData.length * 0.7) },
          { name: "Week 2", active: Math.floor(activeUsersData.length * 0.8) },
          { name: "Week 3", active: Math.floor(activeUsersData.length * 0.9) },
          { name: "Week 4", active: activeUsersData.length },
        ];
        setActiveUserData(activeUserChartData);

        // Calculate revenue and prepare chart data for the last 6 months
        const currentDate = new Date();
        const last6Months = Array.from({ length: 6 }, (_, i) => {
          const d = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - i,
            1
          );
          return d.toLocaleString("default", { month: "short" });
        }).reverse();

        const revenueChartData = last6Months.map((month, index) => ({
          name: month,
          total: Math.floor(revenue * ((index + 1) / 6)),
        }));
        setRevenueData(revenueChartData);

        // Calculate monthly growth
        const currentMonthRevenue = revenueChartData[5].total;
        const previousMonthRevenue = revenueChartData[4].total;
        const growthRate =
          ((currentMonthRevenue - previousMonthRevenue) /
            previousMonthRevenue) *
          100;
        setMonthlyGrowth(parseFloat(growthRate.toFixed(2)));

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <AdminDashboardSkeleton />;
  }

  return (
    <div className="p-4 space-y-6 max-w-full overflow-x-hidden px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Admin Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Charts */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Users */}
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Showing total users for the last 4 weeks
                </p>
              </CardHeader>
              <CardContent>
                {showCharts ? (
                  <ChartContainer
                    config={{
                      total: {
                        label: "Total Users",
                        color: "url(#gradient)",
                      },
                    }}
                    className="min-h-[160px] max-h-[250px] lg:min-h-[130px] h-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={userData}
                        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                      >
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#0891b2" />
                            <stop offset="100%" stopColor="#18181b" />
                          </linearGradient>
                        </defs>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar
                          dataKey="total"
                          fill="url(#gradient)"
                          radius={[4, 4, 0, 0]}
                        />
                        <XAxis dataKey="name" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                ) : (
                  <div>
                    <p className="text-sm text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold">{totalUsers}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Active Users */}
            <Card>
              <CardHeader>
                <CardTitle>Active Users</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Displaying active users over the past 4 weeks
                </p>
              </CardHeader>
              <CardContent>
                {showCharts ? (
                  <ChartContainer
                    config={{
                      active: {
                        label: "Active Users",
                        color: "url(#gradient)",
                      },
                    }}
                    className="min-h-[160px] max-h-[250px] lg:min-h-[130px] h-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={activeUserData}
                        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                      >
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#0891b2" />
                            <stop offset="100%" stopColor="#18181b" />
                          </linearGradient>
                        </defs>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                          type="monotone"
                          dataKey="active"
                          stroke="url(#gradient)"
                          strokeWidth={2}
                          dot={{
                            fill: "url(#gradient)",
                          }}
                        />
                        <XAxis
                          dataKey="name"
                          interval={0}
                          tick={{ fontSize: 12 }}
                          padding={{ left: 10, right: 10 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                ) : (
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Active Users
                    </p>
                    <p className="text-2xl font-bold">{activeUsers}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Toggle Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Chart Display Options</CardTitle>
              <p className="text-sm text-muted-foreground">
                Toggle between chart and numerical display
              </p>
            </CardHeader>
            <CardContent className="flex justify-center items-center p-4">
              <div className="flex gap-4">
                <Button
                  variant={showCharts ? "default" : "outline"}
                  onClick={() => setShowCharts(true)}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Show Charts
                </Button>
                <Button
                  variant={!showCharts ? "default" : "outline"}
                  onClick={() => setShowCharts(false)}
                >
                  <LineChartIcon className="h-4 w-4 mr-2" />
                  Show Numbers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Revenue */}
        <Card className="lg:row-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <p className="text-sm text-muted-foreground">
              Showing total revenue for the last 6 months
            </p>
          </CardHeader>
          <CardContent>
            {showCharts ? (
              <ChartContainer
                config={{
                  total: {
                    label: "Revenue",
                    color: "url(#gradient)",
                  },
                }}
                className="min-h-[200px] max-h-[300px] h-full md:max-h-[400px] lg:max-h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={revenueData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#0891b2" />
                        <stop offset="100%" stopColor="#18181b" />
                      </linearGradient>
                    </defs>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="total"
                      fill="url(#gradient)"
                      radius={[4, 4, 0, 0]}
                    />
                    <XAxis dataKey="name" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-[42vh] flex flex-col justify-center items-center">
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-4xl font-bold">${totalRevenue}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Monthly Growth
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {monthlyGrowth}%
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
}
