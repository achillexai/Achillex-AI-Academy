// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";

interface CategoriesProps {
  data: { id: string; name: string }[];
}

export const Categories = ({ data }: CategoriesProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [categoryId, setCategoryId] = useState<string | null>(null);

  useEffect(() => {
    setCategoryId(searchParams.get("categoryId"));
  }, [searchParams]);

  const onClick = (id: string | undefined) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (id) {
      current.set("categoryId", id);
    } else {
      current.delete("categoryId");
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div className="w-full overflow-x-auto my-4 flex p-1 md:px-6 px-2">
      <div className="flex space-x-2 min-w-max md:pr-6 pr-2">
        <button
          onClick={() => onClick(undefined)}
          className={cn(
            `flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md hover:scale-105 transition-all shadow-sm border whitespace-nowrap`,
            !categoryId
              ? "bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 text-white"
              : "bg-white text-black"
          )}
        >
          Newest
        </button>
        {data.map((item) => (
          <button
            onClick={() => onClick(item.id)}
            key={item.id}
            className={cn(
              `flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md hover:scale-105 transition-all shadow-sm border whitespace-nowrap`,
              item.id === categoryId
                ? "bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 text-white"
                : "bg-white text-black"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
