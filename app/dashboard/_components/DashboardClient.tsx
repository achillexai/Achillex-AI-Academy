"use client";
import React, { useState } from "react";
import SearchSection from "./SearchSection";
import TemplateListSection from "./TemplateListSection";

export default function DashboardClient() {
  const [userSearchInput, setUserSearchInput] = useState<string>();

  return (
    <div className="h-full">
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}
