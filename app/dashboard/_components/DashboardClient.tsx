"use client";
import React, { useState, useEffect } from "react";
import SearchSection from "./SearchSection";
import TemplateListSection from "./TemplateListSection";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";

export default function DashboardClient() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      setShowDialog(true);
      const timer = setTimeout(() => {
        sessionStorage.setItem("hasReloaded", "true");
        window.location.reload();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="h-full">
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="text-center">
          <AlertDialogTitle className="text-xl font-semibold mb-4">
            Please wait
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 animate-spin mb-4 text-cyan-800" />
            <p className="text-muted-foreground">
              Fetching latest information...
            </p>
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}
