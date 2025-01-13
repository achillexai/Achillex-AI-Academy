import React from "react";
import Image from "next/image";

interface UserJoinedDisplayProps {
  userCount: number;
  imageUrls: string[];
}

const UserJoinedDisplay = ({
  userCount,
  imageUrls,
}: UserJoinedDisplayProps) => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex flex-col sm:flex-row items-center gap-4 p-5">
        <div className="relative h-[50px] w-[230px] sm:w-[410px]">
          {imageUrls.slice(0, 9).map((url, index) => (
            <div
              key={index}
              className={`absolute w-[50px] h-[50px] transition-all duration-300 border-2 border-[#0e7490] shadow-md rounded-full ease-in-out
                ${index < 5 ? "sm:block" : "hidden sm:block"}
                ${index === 4 ? "sm:opacity-100 opacity-50" : "opacity-100"}`}
              style={{
                left: `${index * 45}px`,
                zIndex: index + 1,
              }}
            >
              <Image
                src={url}
                alt={`User ${index + 1}`}
                width={50}
                height={50}
                className="rounded-full shadow-md"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[5px] text-base leading-normal text-[#333] text-center sm:text-left">
          <b>{userCount}+ Users</b>
          <span>have joined last week</span>
        </div>
      </div>
    </div>
  );
};

export default UserJoinedDisplay;
