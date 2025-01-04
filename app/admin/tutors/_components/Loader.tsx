import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="w-full px-2 sm:container sm:mx-auto sm:px-4">
      <Card className="bg-white rounded-lg border shadow-md">
        <CardContent className="min-h-[50vh]">
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-4 lg:gap-6 pb-10">
            {[...Array(6)].map((_, index) => (
              <Card
                key={index}
                className="bg-white rounded-xl shadow-md border relative h-full"
              >
                <CardHeader className="flex items-center justify-center text-center text-muted-foreground space-y-2 p-2 sm:p-4 lg:p-6">
                  <Skeleton className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-xl" />
                  <div className="space-y-1 sm:space-y-2 w-full">
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                  </div>
                </CardHeader>
                <CardFooter className="flex items-center justify-between text-[10px] sm:text-xs p-2 sm:p-4 text-muted-foreground mt-auto">
                  <Skeleton className="h-3 w-1/3" />
                  <Skeleton className="h-3 w-1/4" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkeletonLoader;
