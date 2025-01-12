"use client";

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

export const ImageUpload = ({
  value,
  onChange,
  disabled,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
      <CldUploadButton
        onSuccess={(result: any) => onChange(result.info.secure_url)}
        options={{
          maxFiles: 1,
          styles: {
            palette: {
              window: "#ffffff",
              windowBorder: "#90a0b3",
              tabIcon: "#0078ff",
              menuIcons: "#5a616a",
              textDark: "#000000",
              textLight: "#ffffff",
              link: "#0078ff",
              action: "#ff620c",
              inactiveTabIcon: "#0e2f5a",
              error: "#f44235",
              inProgress: "#0078ff",
              complete: "#20b832",
              sourceBg: "#f4f5f5",
            },
            frame: {
              background: "rgba(0,0,0,0.8)",
            },
          },
        }}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      >
        <div
          className="
            p-4
            border-4
            border-dashed
            border-primary
            rounded-lg
            hover:opacity-75
            transition
            flex
            flex-col
            space-y-2
            items-center
            justify-center
            "
        >
          <div className="relative h-40 w-40">
            <Image
              fill
              alt="Upload"
              src={value || "/placeholder.png"}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
};
