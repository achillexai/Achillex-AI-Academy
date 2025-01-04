"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CourseworkComponent from "./_components/CourseworkComponent";
import TutorsComponent from "./_components/TutorsComponent";

const Page = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Coursework & Tutor Management
      </h1>

      {activeComponent === null ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            className="cursor-pointer hover:shadow-lg max-w-lg transition-shadow"
            onClick={() => setActiveComponent("coursework")}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Coursework</CardTitle>
              <CardDescription>
                Manage your AI coursework and assignments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Edit</Button>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg max-w-lg transition-shadow"
            onClick={() => setActiveComponent("tutors")}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Tutors</CardTitle>
              <CardDescription>
                Manage your AI tutors and sessions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Edit</Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div>
          <Button
            onClick={() => setActiveComponent(null)}
            className="ml-4 mb-6"
          >
            Back
          </Button>
          {activeComponent === "coursework" && <CourseworkComponent />}
          {activeComponent === "tutors" && <TutorsComponent />}
        </div>
      )}
    </div>
  );
};

export default Page;
