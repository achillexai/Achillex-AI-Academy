// @ts-nocheck
"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "./_components/Search";
import { Categories } from "./_components/Categories";
import TutorsWrapper from "./_components/TutorsWrapper";
import { db } from "@/utils/db";
import { Category } from "@/utils/schema";

interface RootPageProps {
  searchParams: URLSearchParams;
}

const RootPage = ({ searchParams }: RootPageProps) => {
  const [categories, setCategories] = useState<
    (typeof Category.$inferSelect)[]
  >([]);
  const searchParamsHook = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await db.select().from(Category);
      const validCategories = fetchedCategories.map((category) => ({
        ...category,
        name: category.name || "Unknown",
      }));
      setCategories(validCategories);
    };
    fetchCategories();
  }, []);

  return (
    <div className="max-w-full overflow-x-hidden">
      <SearchBar />
      <Categories data={categories} />
      <TutorsWrapper searchParams={searchParams} />
    </div>
  );
};

export default RootPage;
